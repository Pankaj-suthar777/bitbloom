"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { colors } from "@/utils/colors";
import ServiceCard from "../ui/ServiceCard";
import { Code, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ServicesSection = () => {
  return (
    <AnimatedSection id="services">
      <motion.h2
        variants={fadeIn()}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        What We <span style={{ color: colors.primary }}>Offer</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          index={0}
          icon={
            <Code className="w-10 h-10" style={{ color: colors.primary }} />
          }
          title="SaaS MVPs for Startups"
          description="Rapidly developed, robust, and scalable MVPs using Next.js, Node, and MongoDB. Deployed on AWS for reliability."
        />
        <ServiceCard
          index={1}
          icon={<Cpu className="w-10 h-10" style={{ color: colors.primary }} />}
          title="AI App Development"
          description="Seamlessly integrate powerful AI APIs into your custom SaaS products to create intelligent, next-generation applications."
        />
        <ServiceCard
          index={2}
          icon={
            <Server className="w-10 h-10" style={{ color: colors.primary }} />
          }
          title="Managed Web Hosting"
          description="Reliable and scalable hosting solutions on AWS, VPS, and more, configured for optimal performance and security."
        />
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
