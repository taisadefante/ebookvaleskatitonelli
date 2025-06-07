"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => (
  <div
    style={{
      backgroundImage: "url('/fundo3.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "80px 20px",
      textAlign: "center",
      color: "#3e2d26",
    }}
  >
    <Container>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Entre em contato comigo
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
        Me chame no Instagram para tirar dúvidas ou acompanhar meu trabalho de
        perto!
      </p>

      <a
        href="https://www.instagram.com/studiovaleskatitonelli?igsh=MTJ0dTdqMnY3bGc0NA"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#8a5a44",
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
        <FaInstagram size={22} />
        Instagram da Valeska
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
