import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import foto2 from '../assets/foto1.jpeg';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img src={foto2} alt="Мерей Байзахов" className="hero-avatar mb-3" style={{ width: 270, height: 290, borderRadius: '49%', objectFit: 'cover', boxShadow: '0 4px 24px rgba(79,140,255,0.13)', border: '6px solid #fff' }} />
          </Col>
          <Col md={7} className="text-md-start text-center">
            <h1 className="display-4 fw-bold mb-2">Мерей Байзахов</h1>
            <h2 className="h4 mb-3 text-secondary">Бармен, Бариста, Web-разработчик</h2>
            <p className="lead mb-4">6 лет опыта в индустрии гостеприимства и IT. Люблю создавать атмосферу и современные сайты.</p>
            <div className="mb-4">
              <Button href="#contacts" className="btn-custom me-2">Связаться</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
