import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <SectionHeading
          eyebrow="What I Do"
          title="Value I"
          accent="deliver."
          description="Practical accounting support built on accuracy, consistency and trust."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.number} delay={index * 0.1}>
                <motion.article
                  className="service-card"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="service-card-top">
                    <div className="service-icon"><Icon size={23} /></div>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="service-link">
                    Let's talk <ArrowUpRight size={15} />
                  </a>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
