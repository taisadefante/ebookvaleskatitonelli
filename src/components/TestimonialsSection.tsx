"use client";

import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";

interface Testimonial {
  text: string;
  author: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<Props> = ({ testimonials }) => {
  const groupSize = 3;
  const groupedTestimonials = [];

  for (let i = 0; i < testimonials.length; i += groupSize) {
    groupedTestimonials.push(testimonials.slice(i, i + groupSize));
  }

  return (
    <section
      style={{
        backgroundImage: "url('/fundo-hero.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "80px 0",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{ color: "#462c1f", fontWeight: "bold" }}
        >
          Depoimentos
        </h2>
        <Carousel indicators={false}>
          {groupedTestimonials.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((item, index) => (
                  <Col
                    md={4}
                    sm={12}
                    key={index}
                    className="d-flex justify-content-center mb-4"
                  >
                    <Card
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        backgroundColor: "#fff",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                        borderRadius: "12px",
                      }}
                    >
                      <Card.Body className="text-center">
                        <img
                          src={item.image}
                          alt={item.author}
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "1rem",
                          }}
                        />
                        <Card.Text
                          style={{ fontStyle: "italic", color: "#5a4334" }}
                        >
                          “{item.text}”
                        </Card.Text>
                        <Card.Subtitle
                          style={{ color: "#8a5a44", marginTop: "10px" }}
                        >
                          {item.author}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
