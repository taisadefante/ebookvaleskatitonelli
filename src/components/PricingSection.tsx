"use client";

import React from "react";
import { Container, Button } from "react-bootstrap";

interface Props {
  originalPrice: string;
  currentPrice: string;
  parcelPrice: string;
  ctaText: string;
  buttonColor: string;
  linkHotmart: string;
}

const PricingSection: React.FC<Props> = ({
  originalPrice,
  currentPrice,
  parcelPrice,
  ctaText,
  buttonColor,
  linkHotmart,
}) => (
  <section
    style={{
      background: "linear-gradient(135deg, #f9f3f0, #f2e9e1)",
      padding: "120px 20px",
    }}
  >
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }

        .pulse {
          animation: pulse 1.8s infinite;
        }
      `}
    </style>

    <Container className="d-flex justify-content-center">
      <div
        style={{
          backgroundColor: "#fff",
          padding: "50px 40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#8a5a44", fontWeight: "bold" }}>
          De <del>{originalPrice}</del> por apenas:
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            color: "#8a5a44",
            fontWeight: "bold",
            margin: "20px 0",
          }}
        >
          {currentPrice}
        </h1>
        <p
          style={{
            color: "#5a4334",
            fontSize: "1.1rem",
            marginBottom: "40px",
          }}
        >
          {parcelPrice}
        </p>
        <Button
          href={linkHotmart}
          target="_blank"
          className="pulse"
          style={{
            backgroundColor: buttonColor,
            border: "none",
            padding: "14px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "8px",
            color: "#fff",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          {ctaText}
        </Button>
      </div>
    </Container>
  </section>
);

export default PricingSection;
