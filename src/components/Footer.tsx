"use client";

import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer
        style={{
          backgroundColor: "#f2f0ec",
          padding: "40px 20px 20px",
          borderTop: "1px solid #e5d8cc",
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col
              xs={12}
              md={4}
              className="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start"
            >
              <img
                src="/ebook.png"
                alt="Ebook Argiloterapia"
                className="img-fluid"
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
                © 2025 Valeska Titonelli — Todos os direitos reservados <br />
                <span
                  onClick={() => setShowModal(true)}
                  style={{
                    cursor: "pointer",
                    color: "#8a5a44",
                    textDecoration: "underline",
                  }}
                >
                  Política de Privacidade
                </span>
              </small>
            </Col>

            <Col
              xs={12}
              md={4}
              className="text-md-end text-center mt-2 mt-md-0"
            >
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

      {/* Modal da Política */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Política de Privacidade</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <p>
            Este site respeita a sua privacidade. As informações coletadas são
            utilizadas exclusivamente para o processamento de sua compra e
            comunicação com você. Não compartilhamos seus dados com terceiros,
            exceto quando exigido por lei.
          </p>
          <p>
            Ao efetuar uma compra, você concorda com o uso dos seus dados para
            fins de envio de acesso ao produto e suporte relacionado. Você pode
            solicitar a exclusão dos seus dados a qualquer momento.
          </p>
          <p>
            Em caso de dúvidas, entre em contato conosco via WhatsApp ou e-mail.
            Estamos comprometidos com a segurança e transparência.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
