import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">
          {title} <span className="gradient-text">{accent}</span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="section-description">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
