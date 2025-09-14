"use client";

import React from "react";
import { CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import PriceButton from "./PriceButton";

interface PricingCardProps {
  plan: Plan;
  isFeatured?: boolean;
}

type Plan = {
  features: string[];
  name: string;
  description: string;
  price: string | number;
  priceDetail: string;
  cta: string;
  index: number;
};

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const PricingCard = (props: PricingCardProps) => {
  const { plan, isFeatured = false } = props;

  return (
    <motion.div
      variants={fadeIn(plan.index * 0.1)}
      className={`p-8 rounded-lg h-full flex flex-col ${
        isFeatured ? `shadow-xl scale-105` : "border bg-surface border-border"
      }`}
      style={{
        backgroundColor: isFeatured ? colors.primary : undefined,
      }}
    >
      {isFeatured && (
        <div className="absolute top-[-18px] -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase flex items-center gap-1">
            <Star className="w-4 h-4" /> Most Popular
          </span>
        </div>
      )}
      <h3
        className="text-xl font-bold text-center"
        style={{ color: colors.text }}
      >
        {plan.name}
      </h3>
      <p
        className="text-center mt-2"
        style={{ color: isFeatured ? colors.background : colors.primary }}
      >
        {plan.description}
      </p>
      <div className="text-center my-6">
        <span
          className="text-4xl font-extrabold"
          style={{ color: colors.text }}
        >
          {plan.price}
        </span>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span
              className="text-sm"
              style={{
                fontWeight: isFeatured ? "bold" : "normal",
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <PriceButton isFeatured={isFeatured} text={plan.cta} />
    </motion.div>
  );
};

export default PricingCard;
