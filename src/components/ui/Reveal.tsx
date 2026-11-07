import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before starting. Use small values to stagger siblings. */
  delay?: number;
  className?: string;
};

// Fades and lifts its children into place the first time they scroll into view.
// Users who enable "reduce motion" in their OS skip the movement
// (see <MotionConfig reducedMotion="user"> in App.tsx).
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
