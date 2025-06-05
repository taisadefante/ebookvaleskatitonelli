"use client";

import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";

interface Props {
  title: string;
  videoSrc: string;
}

const VideoSection: React.FC<Props> = ({ title, videoSrc }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="py-5 text-center">
      <h2 className="mb-4">{title}</h2>

      <div
        onClick={() => setShowModal(true)}
        style={{
          cursor: "pointer",
          position: "relative",
          display: "inline-block",
          maxWidth: "800px",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/capa-video.jpg"
          alt="Capa do vídeo"
          style={{ width: "100%", height: "auto" }}
        />
        <FaPlayCircle
          size={80}
          color="white"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
            textShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Body style={{ padding: 0 }}>
          <video
            controls
            autoPlay
            style={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              backgroundColor: "black",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VideoSection;
