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
        <Col md={5} className="text-center mb-4 mb-md-0">
          <img
            src="/ebook.png"
            alt="Capa do ebook"
            style={{
              width: "75%",
              maxWidth: "240px",
              transform: "rotate(5deg)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              borderRadius: "10px",
            }}
          />
        </Col>

        <Col md={7}>
          <h2 style={{ fontWeight: "bold", color: "#8a5a44" }}>
            Destaque-se no mercado com a Argiloterapia Capilar Profissional
          </h2>
          <p
            style={{ margin: "20px 0", fontSize: "1.1rem", lineHeight: "1.7" }}
          >
            Aprenda como aplicar a argiloterapia de forma terapêutica, segura e
            eficaz em seus atendimentos no salão.
            <br />
            <br />
            Domine as técnicas naturais que promovem a saúde do couro cabeludo,
            estimulem o crescimento dos fios e ofereçam uma experiência única
            para suas clientes.
            <br />
            <br />
            <strong>Profissionalize seu serviço agora!</strong> Eleve o nível do
            seu atendimento e conquiste mais reconhecimento e resultados.
          </p>
          <Button
            href="https://pay.hotmart.com/F100157059H"
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
            Quero me destacar agora
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
