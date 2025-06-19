import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_zxbjw8l';
const TEMPLATE_ID = 'template_lur4jte';
const PUBLIC_KEY = '4800Jt0UYniy30z-8';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }
    setLoading(true);
    setError('');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setError('Ошибка при отправке. Попробуйте позже.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="custom-card mt-4">
      <h4 className="mb-3">Связаться со мной</h4>
      {sent && <Alert variant="success">Спасибо! Ваше сообщение отправлено.</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Сообщение"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
          />
        </Form.Group>
        <Button type="submit" className="btn-custom w-100" disabled={loading}>{loading ? 'Отправка...' : 'Отправить'}</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
