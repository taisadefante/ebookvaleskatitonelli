"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  whatsapp: string;
}

const Contact: React.FC<Props> = ({ whatsapp }) => (
  <div
    style={{
      backgroundImage: "url('/fundo3.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "80px 20px",
      textAlign: "center",
      color: "#3e2d26", // tom escuro elegante
    }}
  >
    <Container>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Está com alguma dúvida?
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
        Fale conosco agora pelo WhatsApp e teremos o maior prazer em te ajudar!
      </p>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#8a5a44", // tom terroso elegante
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "30px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          animation: "pulse 2.5s infinite",
        }}
      >
        <FaWhatsapp size={22} />
        Tirar minha dúvida
      </a>
    </Container>

    <style jsx>{`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.03);
        }
        100% {
          transform: scale(1);
        }
      }
    `}</style>
  </div>
);

export default Contact;
