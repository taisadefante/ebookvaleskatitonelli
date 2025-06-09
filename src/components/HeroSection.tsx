"use client";

import React from "react";
import { Container, Button } from "react-bootstrap";

interface Props {
  title: string;
  ctaText: string;
  backgroundImage: string;
  textColor: string;
  buttonColor: string;
  linkHotmart: string;
}

const HeroSection: React.FC<Props> = ({
  title,
  ctaText,
  backgroundImage,
  textColor,
  buttonColor,
  linkHotmart,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: textColor,
        padding: "150px 20px",
        textAlign: "center",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.85; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulse-button {
            animation: pulse 1.5s infinite;
          }
        `}
      </style>

      <Container>
        <h1 style={{ fontWeight: "bold", fontSize: "2.6rem" }}>{title}</h1>

        {/* Subtítulo separado e centralizado */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "20px",
            color: "#8a5a44",
          }}
        >
          Quer aumentar seu ticket médio?
        </h2>

        {/* Texto explicativo abaixo do subtítulo */}
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            maxWidth: "800px",
            margin: "20px auto 0",
          }}
        >
          Domine a Argiloterapia para Couro Cabeludo com nosso e-book completo!
        </p>

        <Button
          href={linkHotmart}
          target="_blank"
          className="pulse-button"
          style={{
            backgroundColor: buttonColor,
            border: "none",
            padding: "12px 36px",
            fontSize: "1.2rem",
            marginTop: "30px",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          {ctaText}
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
