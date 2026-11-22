import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" />
      <div className="container">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Have something in mind?"
          accent="Let's talk."
          description="Whether it's a role, a project or just a hello — my inbox is open."
        />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>Let's build something <span className="gradient-text">meaningful.</span></h3>
            <p>
              I'm always interested in new opportunities and good conversations.
              Drop a message and I'll get back to you as soon as I can.
            </p>

            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-detail">
                <span className="contact-detail-icon"><Mail size={19} /></span>
                <span>
                  <small>Email me at</small>
                  <strong>{profile.email}</strong>
                </span>
                <ArrowUpRight size={17} />
              </a>
              <div className="contact-detail">
                <span className="contact-detail-icon"><MapPin size={19} /></span>
                <span>
                  <small>Based in</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <motion.form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    value={form.name}
                    onChange={update}
                    required
                  />
                  <label htmlFor="name">Your name</label>
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    value={form.email}
                    onChange={update}
                    required
                  />
                  <label htmlFor="email">Your email</label>
                </div>
              </div>
              <div className="form-field">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder=" "
                  value={form.message}
                  onChange={update}
                  required
                />
                <label htmlFor="message">Your message</label>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                {sent ? 'Opening your mail app…' : 'Send Message'}
                {sent ? <CheckCircle2 size={17} /> : <Send size={17} />}
              </button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
