import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experiences } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-glow" />
      <div className="container">
        <SectionHeading
          eyebrow="Where I've Been"
          title="Experience that"
          accent="adds up."
          description="Every role has sharpened a different part of my accounting toolkit."
        />

        <div className="timeline">
          {experiences.map((job, index) => {
            const Icon = job.icon;
            return (
              <Reveal key={job.company} delay={index * 0.12} direction="left">
                <motion.article
                  className={`timeline-item ${job.current ? 'timeline-item--current' : ''}`}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                >
                  <div className="timeline-node">
                    <Icon size={18} />
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <div>
                        <span className="timeline-company">
                          {job.company}
                          {job.current && <span className="current-badge">Current</span>}
                        </span>
                        <h3>{job.role}</h3>
                      </div>
                      <div className="timeline-meta">
                        <span className="duration-pill">{job.duration}</span>
                        <ArrowUpRight size={18} className="timeline-arrow" />
                      </div>
                    </div>
                    <p>{job.description}</p>
                    <div className="tag-row">
                      {job.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="timeline-footer">
            <BriefcaseBusiness size={18} />
            <span>And the journey is still going…</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
