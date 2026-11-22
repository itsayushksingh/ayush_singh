import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, MapPin, Quote, Target } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import Counter from './Counter.jsx';
import { education, stats } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          eyebrow="A Little About Me"
          title="Building a career on"
          accent="precision."
          description="A quick look at the person behind the numbers."
        />

        <div className="about-grid">
          <Reveal className="about-story">
            <div className="about-quote-icon"><Quote size={28} /></div>
            <p className="about-lead">
              I believe good accounting is quiet reliability — the kind that lets
              people make confident decisions.
            </p>
            <p className="about-text">
              I'm <strong>Ayush Singh</strong>, a Bachelor of Commerce graduate from
              Purvanchal University, Jaunpur. My journey began with a seven-month
              internship at <strong>Punjab National Bank</strong>, where I learned the
              discipline of banking operations and accounting records.
            </p>
            <p className="about-text">
              That foundation took me to <strong>JPMorgan Chase</strong> for a one-year
              internship in a global finance environment. Today, I work full-time in
              accounting — bringing the same curiosity, care and consistency to every
              ledger I touch.
            </p>
            <a href="#contact" className="text-link">
              Let's work together <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <div className="about-side">
            <Reveal delay={0.1}>
              <div className="info-card">
                <div className="info-card-icon"><GraduationCap size={21} /></div>
                <div>
                  <span className="info-label">Education</span>
                  <h4>{education.degree}</h4>
                  <p>{education.school} · {education.place}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="info-card">
                <div className="info-card-icon"><MapPin size={21} /></div>
                <div>
                  <span className="info-label">Based In</span>
                  <h4>Jaunpur, Uttar Pradesh</h4>
                  <p>Open to opportunities across India</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="info-card">
                <div className="info-card-icon"><Target size={21} /></div>
                <div>
                  <span className="info-label">Focus</span>
                  <h4>Accuracy &amp; Clarity</h4>
                  <p>Clean books, clear reports, steady growth</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.12} className="stat-item">
              <motion.div
                className="stat-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <h3 className="stat-value">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </h3>
                <p>{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
