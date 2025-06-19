import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const links = [
  {
    href: 'https://www.instagram.com/mereikln?igsh=c2Ria2JwZG9hYnpq',
    icon: faInstagram,
    label: 'Instagram',
    color: '#E1306C',
  },
  {
    href: 'https://t.me/Mereikin',
    icon: faTelegram,
    label: 'Telegram',
    color: '#229ED9',
  },
  {
    href: 'https://wa.me/77056586713',
    icon: faWhatsapp,
    label: 'WhatsApp',
    color: '#25D366',
  },
];

const SocialLinks: React.FC = () => (
  <div className="social-links d-flex gap-3 justify-content-center my-3">
    {links.map(link => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        style={{ color: link.color, fontSize: 28, transition: 'transform 0.2s' }}
        className="social-link"
      >
        <FontAwesomeIcon icon={link.icon} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
