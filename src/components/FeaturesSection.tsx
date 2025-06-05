import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  features: string[];
}

const FeaturesSection: React.FC<Props> = ({ features }) => (
  <Container className="py-5 bg-light">
    <h2 className="text-center mb-4">O que você vai aprender</h2>
    <Row>
      {features.map((feature, idx) => (
        <Col md={6} key={idx} className="mb-3">
          🌿 {feature}
        </Col>
      ))}
    </Row>
  </Container>
);

export default FeaturesSection;
