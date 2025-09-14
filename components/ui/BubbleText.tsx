import React from "react";
import styles from "./bubble.module.css";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";

const BubbleText = ({ text }: { text: string }) => {
  return (
    <motion.h2 className="text-center text-5xl font-thin text-indigo-300">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
};

export default BubbleText;

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const BubbleTextH2 = ({ text }: { text: string }) => {
  return (
    <motion.h2
      variants={fadeIn()}
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
      style={{ textShadow: "0 0 15px rgba(0, 0, 0, 0.8)" }}
    >
      {"We Build".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
      {"AI-Powered".split("").map((child, idx) => (
        <span
          style={{ color: colors.primary, textShadow: "none" }}
          className={styles.hoverText}
          key={idx}
        >
          {child}
        </span>
      ))}
      <br />
      Solutions for Startups.
    </motion.h2>
  );
};

const BubbleTextP = ({ text }: { text: string }) => {
  return (
    <motion.p
      variants={fadeIn(0.2)}
      className="mt-6 max-w-2xl mx-auto text-lg md:text-xl heading-hover-cursor"
      style={{
        color: colors.textSecondary,
        textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
      }}
    >
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.p>
  );
};

export { BubbleTextH2, BubbleTextP };
