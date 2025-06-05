"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa";

interface Props {
  benefits: string[];
}

const BenefitsSection: React.FC<Props> = ({ benefits }) => (
  <section
    style={{
      backgroundImage: "url('/fundo.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "100px 20px",
      color: "#462c1f",
    }}
  >
    <Container>
      <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
        Benefícios da Argiloterapia
      </h2>
      <Row>
        {benefits.map((benefit, idx) => (
          <Col
            md={6}
            className="d-flex align-items-start mb-4"
            key={idx}
            style={{ fontSize: "1.1rem" }}
          >
            <FaLeaf
              style={{
                color: "#8a5a44",
                marginRight: "10px",
                marginTop: "5px",
                flexShrink: 0,
              }}
              size={20}
            />
            <span>{benefit}</span>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default BenefitsSection;
