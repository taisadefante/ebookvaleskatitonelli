"use client";

import React from "react";
import { Container, Button } from "react-bootstrap";

interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
  textColor: string;
  buttonColor: string;
  linkHotmart: string;
}

const HeroSection: React.FC<Props> = ({
  title,
  subtitle,
  ctaText,
  backgroundImage,
  textColor,
  buttonColor,
  linkHotmart,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: textColor,
        padding: "150px 20px",
        textAlign: "center",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.85; }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulse-button {
            animation: pulse 1.5s infinite;
          }
        `}
      </style>

      <Container>
        <h1 style={{ fontWeight: "bold" }}>{title}</h1>
        <p style={{ fontSize: "1.25rem" }}>{subtitle}</p>
        <Button
          href={linkHotmart}
          target="_blank"
          className="pulse-button"
          style={{
            backgroundColor: buttonColor,
            border: "none",
            padding: "10px 30px",
            fontSize: "1.2rem",
            marginTop: "20px",
          }}
        >
          {ctaText}
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
