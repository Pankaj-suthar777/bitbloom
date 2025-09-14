"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { colors } from "@/utils/colors";
import { motion } from "framer-motion";
import PricingCard from "../ui/PricingCard";

const springTransition = { type: "spring", stiffness: 300, damping: 25 };

const pricingPlans = [
  {
    name: "MVP Launchpad",
    description: "For early-stage startups.",
    price: "$8k",
    priceDetail: "Starting From",
    features: [
      "4-6 Week Delivery",
      "Next.js & Node.js Stack",
      "MongoDB Database",
      "Core Feature Set",
      "Standard AWS Deployment",
      "1 Month Post-Launch Support",
    ],
    cta: "Choose Plan",
    index: 0,
  },
  {
    name: "Growth Engine",
    description: "For businesses ready to scale.",
    price: "$15k",
    priceDetail: "Starting From",
    features: [
      "Everything in Launchpad, plus:",
      "AI API Integration",
      "Advanced Feature Development",
      "Custom UI/UX Design System",
      "Scalable Architecture",
      "3 Months Post-Launch Support",
    ],
    cta: "Choose Plan",
    index: 1,
  },
  {
    name: "Enterprise Custom",
    description: "For unique, large-scale needs.",
    price: "Custom",
    priceDetail: "",
    features: [
      "Dedicated Development Team",
      "Custom Project Scope",
      "Ongoing Retainer Options",
      "Managed Hosting & Infrastructure",
      "Priority Support & SLA",
      "In-depth Consultations",
    ],
    cta: "Contact Us",
    index: 2,
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const PricingSection = () => {
  return (
    <AnimatedSection id="pricing">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          variants={fadeIn()}
          className="text-3xl md:text-4xl font-bold"
        >
          Clear, Upfront Pricing
        </motion.h2>
        <motion.p
          variants={fadeIn(0.1)}
          className="mt-4 text-lg"
          style={{ color: colors.textSecondary }}
        >
          Choose the plan that fits your needs. No hidden fees, just transparent
          partnership.
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 items-center">
        <PricingCard plan={pricingPlans[0]} />
        <PricingCard plan={pricingPlans[1]} isFeatured={true} />
        <PricingCard plan={pricingPlans[2]} />
      </div>
    </AnimatedSection>
  );
};

export default PricingSection;
