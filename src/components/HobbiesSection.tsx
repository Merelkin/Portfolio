import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers, faLaptopCode, faGamepad, faGlassWhiskey, faUsers, faCoffee } from '@fortawesome/free-solid-svg-icons';

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="section animate-fade-in">
      <Container>
        <h2 className="section-title text-center mb-5">Мои увлечения</h2>
        <Row className="g-4 justify-content-center">
          <Col md={4} sm={6} xs={12}>
            <div className="custom-card hobby-card h-100 text-center">
              <FontAwesomeIcon icon={faGlassWhiskey} className="icon-wrapper mb-2" style={{ color: '#ffbe76', fontSize: 32 }} />
              <h4 style={{marginTop: 0, marginBottom: '1rem'}}>Бармен</h4>
              <p className="text-start">6 лет за барной стойкой (3 года в алко-баре, 3 года в безалкогольном). Люблю культуру напитков и постоянно изучаю новые вкусы и рецепты.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="custom-card hobby-card h-100 text-center">
              <FontAwesomeIcon icon={faCoffee} className="icon-wrapper mb-2" style={{ color: '#795548', fontSize: 32 }} />
              <h4 style={{marginTop: 0, marginBottom: '1rem'}}>Кофе и бариста</h4>
              <p className="text-start">Около 3 лет работал бариста. Люблю кофе, разбираюсь в сортах, способах приготовления и считаю себя не плохим кофейным гурманом.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="custom-card hobby-card h-100 text-center">
              <FontAwesomeIcon icon={faLaptopCode} className="icon-wrapper mb-2" style={{ color: '#4f8cff', fontSize: 32 }} />
              <h4 style={{marginTop: 0, marginBottom: '1rem'}}>Программирование</h4>
              <p className="text-start">Веб-разработка, современные технологии, создание сайтов и приложений.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="custom-card hobby-card h-100 text-center">
              <FontAwesomeIcon icon={faGamepad} className="icon-wrapper mb-2" style={{ color: '#00b894', fontSize: 32 }} />
              <h4 style={{marginTop: 0, marginBottom: '1rem'}}>Компьютерные игры</h4>
              <p className="text-start">Люблю гейминг и слежу за индустрией.</p>
            </div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div className="custom-card hobby-card h-100 text-center">
              <FontAwesomeIcon icon={faGlassCheers} className="icon-wrapper mb-2" style={{ color: '#fd79a8', fontSize: 32 }} />
              <h4 style={{marginTop: 0, marginBottom: '1rem'}}>Вечеринки и отдых</h4>
              <p className="text-start">Активный отдых, весёлые компании, организация мероприятий.</p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default HobbiesSection;
{/* Здесь можно заменить хобби на t('hobbies.list.0'), t('hobbies.list.1') и т.д. */}
