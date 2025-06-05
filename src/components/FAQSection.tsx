"use client";

import React from "react";
import { Accordion, Container } from "react-bootstrap";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

const FAQSection: React.FC<Props> = ({ faqs }) => (
  <section style={{ backgroundColor: "#f9f3f0", padding: "60px 0" }}>
    <Container>
      <h2
        className="text-center mb-4"
        style={{ color: "#462c1f", fontWeight: "bold" }}
      >
        Perguntas Frequentes
      </h2>
      <Accordion>
        {faqs.map((faq, idx) => (
          <Accordion.Item
            eventKey={idx.toString()}
            key={idx}
            style={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <Accordion.Header
              style={{
                fontWeight: 600,
                color: "#8a5a44",
              }}
            >
              {faq.question}
            </Accordion.Header>
            <Accordion.Body style={{ color: "#5a4334" }}>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  </section>
);

export default FAQSection;
