import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  Landmark,
  Sparkles,
} from 'lucide-react';
import { profile, roles } from '../data.js';
import DownloadPDF from './DownloadPDF.jsx';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function useTyping(words) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 55 : 95;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setDeleting(true);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (!next) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function VisualCard() {
  const bars = [42, 65, 50, 78, 58, 92];

  return (
    <motion.div
      className="hero-card"
      initial={{ opacity: 0, y: 40, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, y: -8 }}
    >
      <div className="hero-card-head">
        <span className="hero-card-label">FINANCIAL SNAPSHOT</span>
        <span className="status-pill">
          <span className="status-dot" /> Up to date
        </span>
      </div>
      <h3>Books, balanced.</h3>
      <p className="hero-card-sub">
        Precision in every entry, clarity in every report.
      </p>
      <div className="mini-chart">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            style={{ '--bar-height': `${height}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.9, delay: 0.9 + index * 0.1, ease: 'easeOut' }}
          />
        ))}
      </div>
      <div className="hero-card-foot">
        <span>JAN</span>
        <span>FEB</span>
        <span>MAR</span>
        <span>APR</span>
        <span>MAY</span>
        <span>JUN</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />

      <div className="container hero-container">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="availability">
              <span className="availability-dot" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.p className="hero-greeting" variants={item}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-title" variants={item}>
            <span className="hero-name gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={item}>
            <Sparkles size={19} className="role-icon" />
            <span className="typed-role">{typed}</span>
            <span className="pdf-role">{profile.role}</span>
            <span className="typing-caret" />
          </motion.div>

          <motion.p className="hero-description" variants={item}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#experience" className="btn btn-primary">
              Explore My Journey <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
            <DownloadPDF className="btn btn-ghost" />
          </motion.div>

          <motion.div className="hero-social-proof" variants={item}>
            <div className="proof-avatars">
              <span><Landmark size={15} /></span>
              <span><Building2 size={15} /></span>
              <span><CircleDollarSign size={15} /></span>
            </div>
            <p>
              <BadgeCheck size={15} /> B.Com Graduate · JPMorgan Chase · PNB
            </p>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-dashed" />
          <div className="orbit orbit-inner" />
          <div className="hero-visual-glow" />

          <motion.div
            className="float-chip chip-top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <Building2 size={16} /> JPMorgan Chase
          </motion.div>
          <motion.div
            className="float-chip chip-left"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
          >
            <Landmark size={16} /> Punjab National Bank
          </motion.div>
          <motion.div
            className="float-chip chip-bottom"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <BadgeCheck size={16} /> B.Com Graduate
          </motion.div>

          <VisualCard />
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <span className="scroll-line">
          <ArrowDown size={14} />
        </span>
      </a>
    </section>
  );
}
