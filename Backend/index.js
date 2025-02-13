// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Pour gérer les requêtes cross-origin

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Autoriser les requêtes cross-origin

// Configuration de Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "qasidkarim04@gmail.com", // Remplacez par votre adresse Gmail
    pass: "pxod ugnh dpfm kkqu", // Remplacez par votre mot de passe d'application
  },
});

// Route pour envoyer un e-mail
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Vérifier que tous les champs sont remplis
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Tous les champs sont obligatoires." });
  }

  // Options de l'e-mail
  const mailOptions = {
    from: email, // Expéditeur
    to: "qasidkarim04@gmail.com", // Destinataire (votre adresse e-mail)
    subject: `Nouveau message de ${name} (${email})`, // Sujet de l'e-mail
    text: message, // Corps du message
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'e-mail." });
    } else {
      console.log("E-mail envoyé :", info.response);
      return res.status(200).json({ message: "E-mail envoyé avec succès !" });
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
