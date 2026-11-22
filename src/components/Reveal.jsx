import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const hidden = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -44 },
    right: { opacity: 0, x: 44 },
  }[direction];

  return (
    <motion.div
      className={className}
      data-reveal
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
