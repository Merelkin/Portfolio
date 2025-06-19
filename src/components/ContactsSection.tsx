import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const ContactsSection: React.FC = () => (

    <Container id="contacts" className="section animate-fade-in" style={{ background: '#e3e8ee', borderRadius: '32px', marginTop: '2rem' }}>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h2 className="section-title mb-4">Контакты</h2>
          <div className="mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <a href="mailto:baizakhovnew@gmail.com" className="text-dark">baizakhovnew@gmail.com</a>
          </div>
          <div className="mb-3">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <a href="tel:+77475511908" className="text-dark">+7 (747) 551-19-08</a>
          </div>
          <div className="mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            Астана, Казахстан
          </div>
          <SocialLinks />
          <div className="mb-4">
            <a href="/baizakhov.vcf" download className="btn btn-custom mt-2">Скачать визитку</a>
          </div>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <ContactForm />
        </Col>
      </Row>
    </Container>

);

export default ContactsSection;
