import React from "react";

export default function Language() {
  const technos = [
    {
      id: 1,
      techno: "React",
      img: "/img/react-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Express",
      img: "/img/express-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Java",
      img: "/img/java-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Docker",
      img: "/img/docker-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Spring",
      img: "/img/spring-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Java Script",
      img: "/img/java_script-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Python",
      img: "/img/python-Photoroom.png",
      description: "kinenvc",
    },
    {
      id: 2,
      techno: "Type Script",
      img: "/img/ts-Photoroom.png",
      description: "kinenvc",
    },
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "60px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {technos.map((t) => {
          return (
            <div
              key={t.id}
              style={{
                margin: "10px 20px ",
                width: "45%",
                height: "45%",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#afb9b7",
                  width: "100%",
                  borderRadius: "10px",

                  height: "65%",
                  borderBottom: "1px solid white",
                }}
              >
                <img
                  width={260}
                  style={{ marginTop: "10px", margin: "auto" }}
                  src={t.img}
                  alt={t.techno}
                />
              </div>
              <div
                style={{
                  background: "#3e4544",
                  height: "35%",
                  borderRadius: "10px",
                }}
              >
                <h1 className="text-xl ">{t.techno}</h1>
                <p>{t.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
