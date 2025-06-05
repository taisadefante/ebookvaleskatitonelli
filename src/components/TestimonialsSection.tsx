"use client";

import React, { useEffect, useState } from "react";
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
  const [groupedTestimonials, setGroupedTestimonials] = useState<
    Testimonial[][]
  >([]);

  const groupTestimonials = (size: number) => {
    const grouped: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += size) {
      grouped.push(testimonials.slice(i, i + size));
    }
    return grouped;
  };

  const updateGrouping = () => {
    const isMobile = window.innerWidth < 768;
    const groupSize = isMobile ? 1 : 3;
    setGroupedTestimonials(groupTestimonials(groupSize));
  };

  useEffect(() => {
    updateGrouping();
    window.addEventListener("resize", updateGrouping);
    return () => window.removeEventListener("resize", updateGrouping);
  }, [testimonials]);

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
        <Carousel indicators={false} interval={10000}>
          {groupedTestimonials.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((item, index) => (
                  <Col
                    key={index}
                    xs={12}
                    md={4}
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
                      <Card.Body className="text-center p-4">
                        <img
                          src={item.image}
                          alt={item.author}
                          style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "1rem",
                          }}
                        />
                        <Card.Text
                          style={{
                            fontStyle: "italic",
                            color: "#5a4334",
                            fontSize: "0.95rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          “{item.text}”
                        </Card.Text>
                        <div
                          style={{
                            color: "#f4c542",
                            fontSize: "1.1rem",
                            marginBottom: "0.4rem",
                          }}
                        >
                          ★★★★★
                        </div>
                        <Card.Subtitle
                          style={{
                            color: "#8a5a44",
                            fontWeight: "bold",
                            fontSize: "0.95rem",
                          }}
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
