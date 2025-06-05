"use client";

import React from "react";
import { Container, Button } from "react-bootstrap";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  linkHotmart: string;
  backgroundImage: string; // nova prop para imagem de fundo ondulado
  buttonColor: string;
  textColor?: string; // opcional para ajustar a cor do texto
}

const CallToAction: React.FC<Props> = ({
  title,
  subtitle,
  ctaText,
  linkHotmart,
  backgroundImage,
  buttonColor,
  textColor = "#fff",
}) => (
  <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "100px 20px",
      textAlign: "center",
      color: textColor,
    }}
  >
    <Container>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>{title}</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>{subtitle}</p>
      <Button
        href={linkHotmart}
        target="_blank"
        style={{
          backgroundColor: buttonColor,
          border: "none",
          padding: "12px 40px",
          fontSize: "1.2rem",
          animation: "pulse 1.5s infinite",
        }}
      >
        {ctaText}
      </Button>
    </Container>

    {/* Pulsar animação */}
    <style>{`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `}</style>
  </div>
);

export default CallToAction;
