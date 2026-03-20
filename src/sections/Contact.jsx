import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'James Hanzell',
          from_email: form.email,
          to_email: 'jamwilhan@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        showAlert({ show: true, text: 'Message sent successfully 🎉', type: 'success' });
        setTimeout(() => {
          hideAlert(false);
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        showAlert({ show: true, text: "Couldn't send message 😢", type: 'danger' });
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen w-full object-cover"
          style={{ opacity: 0.35 }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91,106,245,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="contact-container relative z-10">
          {/* Header */}
          <div className="section-tag">Contact</div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, var(--paper) 0%, rgba(232,228,219,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 12,
            }}
          >
            Let's work together
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: '0.95rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Looking to edit videos for your brand, or want to collaborate on creative content?
            I'm here to help bring your vision to life.
          </p>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-5"
          >
            <label className="space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="john@example.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Tell me about your project..."
                style={{ resize: 'none', paddingTop: 14 }}
              />
            </label>

            <button
              className="field-btn"
              type="submit"
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;