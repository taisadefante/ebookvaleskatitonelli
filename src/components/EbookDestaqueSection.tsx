"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const EbookDestaqueSection: React.FC = () => (
  <section
    style={{
      backgroundColor: "#f8f2ee",
      padding: "100px 20px",
      backgroundImage: "url('/fundo-ondulado.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "#462c1f",
    }}
  >
    <Container>
      <Row className="align-items-center">
        {/* Imagem agora está à esquerda */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <img
            src="/ebook.png"
            alt="Capa do ebook"
            style={{
              width: "75%", // menor que antes
              maxWidth: "240px",
              transform: "rotate(5deg)", // invertido
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              borderRadius: "10px",
            }}
          />
        </Col>

        <Col md={7}>
          <h2 style={{ fontWeight: "bold", color: "#8a5a44" }}>
            A transformação que você buscava!
          </h2>
          <p
            style={{ margin: "20px 0", fontSize: "1.1rem", lineHeight: "1.7" }}
          >
            Você deseja cuidar do seu couro cabeludo e fios com mais saúde, mas
            não sabe por onde começar?
            <br />
            <br />
            Com o eBook de Argiloterapia Capilar você vai aprender técnicas
            naturais, passo a passo, com orientações práticas e resultados
            visíveis!
            <br />
            <br />
            <strong>Não perca tempo!</strong> Comece agora mesmo sua jornada de
            transformação capilar.
          </p>
          <Button
            href="https://hotmart.com/ebookargiloterapia"
            target="_blank"
            style={{
              backgroundColor: "#8a5a44",
              border: "none",
              padding: "12px 36px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              color: "#fff",
              animation: "pulse 1.8s infinite",
            }}
          >
            Quero meu eBook agora
          </Button>
        </Col>
      </Row>
    </Container>

    <style jsx>{`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
    `}</style>
  </section>
);

export default EbookDestaqueSection;
