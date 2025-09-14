"use client";

import React from "react";
import WorkCard from "../ui/WorkCard";
import AnimatedSection from "./AnimatedSection";
import { colors } from "@/utils/colors";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const WorkSection = () => {
  return (
    <AnimatedSection id="work">
      <motion.h2
        variants={fadeIn()}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Our <span style={{ color: colors.primary }}>Work</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <WorkCard
          index={0}
          title="AI-Powered Analytics SaaS"
          description="A platform for marketing teams to analyze campaign data using natural language queries."
          tags={["Next.js", "AI Integration", "MongoDB", "AWS"]}
          link="#"
        />
        <WorkCard
          index={1}
          title="Real-time Collaboration Tool"
          description="A web application for teams to brainstorm and manage projects on a shared digital whiteboard."
          tags={["Node.js", "WebSockets", "React", "VPS"]}
          link="#"
        />
      </div>
    </AnimatedSection>
  );
};

export default WorkSection;
