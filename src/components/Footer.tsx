"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => (
  <footer
    style={{
      backgroundColor: "#f2f0ec",
      padding: "40px 20px 20px",
      borderTop: "1px solid #e5d8cc",
    }}
  >
    <Container>
      <Row className="align-items-center text-center text-md-start">
        <Col xs={12} md={4} className="mb-3 mb-md-0 text-md-start text-center">
          <img
            src="/ebook.png"
            alt="Ebook Argiloterapia"
            style={{
              height: "80px",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        </Col>

        <Col xs={12} md={4} className="text-center my-2 my-md-0">
          <small style={{ color: "#5a4334" }}>
            © 2025 Valeska Titonelli — Todos os direitos reservados
          </small>
        </Col>

        <Col xs={12} md={4} className="text-md-end text-center mt-2 mt-md-0">
          <small style={{ color: "#8a5a44", fontWeight: "bold" }}>
            Desenvolvido por{" "}
            <a
              href="https://defan.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#8a5a44", textDecoration: "underline" }}
            >
              Defan Soluções Digitais
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
