import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/PortfolioContext";
import { useMediaQuery } from "react-responsive";

export default function Contact() {
  const [them, setThem] = useState("");
  const { theme, mode } = useTheme();

  // États pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThem(savedTheme);
    }
  }, [theme]);

  const isMobile = useMediaQuery({ query: "(max-width: 423px)" });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://qasid-karim.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: result.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({ success: false, message: result.error });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Erreur lors de l'envoi du formulaire.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      style={{
        minHeight: "100vh",
        backgroundColor: mode === "dark" ? "#2e3030" : "white",
        color: mode === "dark" ? "white" : "black",
        padding: "20px",
      }}
    >
      <div className="m-auto text-center" style={{ width: "100%" }}>
        <h1 className="text-4xl" style={{ fontWeight: "bold" }}>
          Contact{" "}
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        {/* <h3 style={{ color: them, fontWeight: 900 }}>SEND ME AN EMAIL</h3>
        <p>I'M VERY RESPONSIVE TO MESSAGES</p> */}
      </div>
      <div className="containerContact">
        <form onSubmit={handleSubmit}>
          <div className="contact">
            {/* Colonne de gauche pour les inputs */}
            <div className="contact-form">
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "4px",
                  outline: "none",
                  border: "1px solid #28535e",
                }}
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "4px",
                  outline: "none",
                  border: "1px solid #28535e",
                }}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "4px",
                  outline: "none",
                  border: "1px solid #28535e",
                }}
                type="tel"
                name="phone"
                placeholder="Telephone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "4px",
                  outline: "none",
                  border: "1px solid #28535e",
                }}
                type="text"
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Colonne de droite pour le textarea */}
            <div className="conatct-textarea">
              <textarea
                style={{
                  width: "100%",
                  height: "100%", // Prend toute la hauteur disponible
                  minHeight: "258px", // Hauteur minimale
                  padding: "15px",
                  borderRadius: "4px",
                  outline: "none",
                  border: "1px solid #28535e",
                }}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Bouton "Send Message" */}
          <button
            type="submit"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: them,
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "20px",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "..." : "Envoyer le message"}
          </button>
        </form>

        {/* Affichage du statut de soumission */}
        {submitStatus.message && (
          <p
            style={{
              color: submitStatus.success ? "green" : "red",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {submitStatus.message}
          </p>
        )}
      </div>
    </div>
  );
}
