import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Wrench } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data.js';

const strengths = [
  'Attention to Detail',
  'Time Management',
  'Problem Solving',
  'Confidentiality',
  'Team Collaboration',
  'Continuous Learning',
];

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = skill.icon;

  return (
    <div className="skill-bar" ref={ref} style={{ '--skill-level': `${skill.level}%` }}>
      <div className="skill-bar-head">
        <span className="skill-name">
          <Icon size={17} /> {skill.name}
        </span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          eyebrow="My Toolkit"
          title="Skills I bring to"
          accent="the table."
          description="A blend of accounting fundamentals, practical tools and the right mindset."
        />

        <div className="skills-grid">
          <Reveal className="skills-panel">
            <div className="panel-heading">
              <div className="panel-icon"><Wrench size={20} /></div>
              <div>
                <h3>Professional Toolkit</h3>
                <p>Technical abilities I use every day</p>
              </div>
            </div>
            <div className="skill-bars">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14} className="skills-panel strengths-panel">
            <div className="panel-heading">
              <div className="panel-icon"><Sparkles size={20} /></div>
              <div>
                <h3>Core Strengths</h3>
                <p>The habits behind the numbers</p>
              </div>
            </div>
            <div className="strength-list">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  className="strength-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="strength-check">✦</span>
                  {strength}
                </motion.div>
              ))}
            </div>
            <div className="skills-note">
              <p>
                "The details are not the details. They make the design." — the same
                holds true for a great set of books.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
