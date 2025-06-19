import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.body.classList.toggle('dark-theme', next);
      return next;
    });
  };

  // Закрытие меню по клику вне навигации
  React.useEffect(() => {
    if (!expanded) return;
    const handleClick = (e: MouseEvent) => {
      const nav = document.getElementById('basic-navbar-nav');
      if (nav && !nav.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [expanded]);

  return (
    <Navbar
      style={{ background: darkMode ? 'rgba(34,34,34,0.98)' : 'rgba(255,255,255,0.95)', boxShadow: '0 2px 16px 0 rgba(79,140,255,0.07)' }}
      expand="lg"
      className="py-3"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#hero" className="fs-4 fw-bold text-primary">
          <FontAwesomeIcon icon={faCode} className="me-2 text-secondary" />
          Портфолио
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={darkMode ? 'navbar-dark' : 'navbar-light'}
          style={{ borderColor: darkMode ? '#fff' : undefined, color: darkMode ? '#fff' : undefined }}
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="text-secondary fw-semibold">Обо мне</Nav.Link>
            <Nav.Link href="#hobbies" className="text-secondary fw-semibold">Увлечения</Nav.Link>
            <Nav.Link href="#experience" className="text-secondary fw-semibold">Опыт</Nav.Link>
            <Nav.Link href="#contacts" className="text-secondary fw-semibold">Контакты</Nav.Link>
            <button onClick={handleThemeToggle} className="btn btn-outline-secondary ms-3" style={{borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center'}} aria-label="Сменить тему">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
