"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import ProcessStep from "../ui/ProcessStep";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProcessSection = () => {
  return (
    <AnimatedSection id="process" className="bg-surface">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          variants={fadeIn()}
          className="text-3xl md:text-4xl font-bold"
        >
          A Simple, Transparent Process
        </motion.h2>
        <motion.p
          variants={fadeIn(0.1)}
          className="mt-4 text-lg"
          style={{ color: colors.textSecondary }}
        >
          We work closely with you at every stage to ensure your vision is
          realized efficiently.
        </motion.p>
      </div>
      <div className="max-w-3xl mx-auto mt-12 grid md:grid-cols-1 gap-10">
        <ProcessStep
          index={1}
          title="Discovery & Planning"
          description="We start by understanding your goals, users, and technical requirements to create a detailed project roadmap."
        />
        <ProcessStep
          index={2}
          title="Agile Development & Iteration"
          description="We build your product in sprints, with regular check-ins and feedback sessions to ensure we're on the right track."
        />
        <ProcessStep
          index={3}
          title="Deployment & Support"
          description="We handle the full deployment process and offer ongoing support to keep your application running smoothly."
        />
      </div>
    </AnimatedSection>
  );
};

export default ProcessSection;
