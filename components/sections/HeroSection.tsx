"use client";
import React from "react";

import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import BubbleText, { BubbleTextP } from "../ui/BubbleText";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-6rem)] flex items-center justify-center text-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <video
          className="h-[860px] top-[-12px] right-0 left-0 absolute w-full object-cover z-10"
          src="/Cyberpunk_2077_1080.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20">
          <motion.h2
            variants={fadeIn()}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            style={{ textShadow: "0 0 15px rgba(0, 0, 0, 0.8)" }}
          >
            We Build{" "}
            <span style={{ color: colors.primary, textShadow: "none" }}>
              AI-Powered
            </span>{" "}
            SaaS
            <br />
            Solutions for Startups.
          </motion.h2>
          {/* <motion.p
            variants={fadeIn(0.2)}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl"
            style={{
              color: colors.textSecondary,
              textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            From MVP to scalable deployment, we are the agile small dev team
            that brings your vision to life with cutting-edge tech.
          </motion.p> */}
          <BubbleTextP text="  From MVP to scalable deployment, we are the agile small dev team that brings your vision to life with cutting-edge tech." />
          <motion.div variants={fadeIn(0.4)}>
            <motion.a
              href="#services"
              className="mt-8 inline-block px-8 py-3 font-bold rounded-lg"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 30px ${colors.primary}70`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
