"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SobreValeskaSection: React.FC = () => (
  <section
    style={{
      backgroundColor: "#f9f3f0",
      padding: "80px 20px",
      backgroundImage: "url('/fundo3.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <Container>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <img
            src="/valeska.png"
            alt="Valeska Titonelli"
            style={{
              width: "220px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
        <Col md={8}>
          <h2
            style={{
              color: "#8a5a44",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Conheça um pouco sobre mim
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#5a4334", lineHeight: "1.7" }}
          >
            Mãe de três filhos, cabeleireira há mais de 13 anos, especialista em
            colorimetria e terapeuta capilar, encontrei na beleza uma missão:
            transformar vidas por meio do cuidado, autoestima e amor pelo que
            faço.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SobreValeskaSection;
