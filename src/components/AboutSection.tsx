import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward, faLanguage } from '@fortawesome/free-solid-svg-icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section animate-fade-in">
      <Container>
        <Row className="g-4 align-items-stretch">
          <Col md={6}>
            <div className="custom-card h-100 text-center">
              <h2 className="section-title mb-3">Обо мне</h2>
              <p className="lead mb-2 fw-bold text-start" style={{marginBottom: '1rem'}}>Бармен, бариста и web-разработчик. Люблю создавать атмосферу и современные сайты.</p>
              <div className="mb-2 fw-bold text-start">Город: <b>Астана</b></div>
              <div className="mb-2 fw-bold text-start">Возраст: <b>22 года</b></div>
            </div>
          </Col>
          <Col md={6}>
            <div className="custom-card h-100 d-flex flex-column justify-content-center align-items-start" style={{minHeight: '100%'}}>
              <div className="about-info-block mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-3 fs-3 text-primary" />
                  <span className="fw-bold about-label">{"\u00A0"}Образование:</span>
                </div>
                <div className="about-info-text">{"\u00A0"}{"\u00A0"}{"\u00A0"}Колледж Управления, техник-программист</div>
              </div>
              <div className="about-info-block mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faAward} className="me-3 fs-3 text-warning" />
                  <span className="fw-bold about-label">{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}Достижения:</span>
                </div>
                <div className="about-info-text">{"\u00A0"}{"\u00A0"}Чемпион бариста <br></br>{"\u00A0"}{"\u00A0"}IELTS - 5.5 </div>
              </div>
              <div className="about-info-block">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faLanguage} className="me-3 fs-3 text-success" />
                  <span className="fw-bold about-label">Языки:</span>
                </div>
                <div className="about-info-text">{"\u00A0"}{"\u00A0"}Русский, Казахский, Английский</div>
              </div>
                 <div className="about-info-block mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faSmile} className="me-3 fs-3 text-danger" />
                  <span className="fw-bold about-label text-danger">Уникальный навык:</span>
                </div>
                <div className="about-info-text">Отличаю жб Fanta от пластиковой 😉</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
