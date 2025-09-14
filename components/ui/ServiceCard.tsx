import React from "react";
import { motion } from "framer-motion";

import { colors } from "@/utils/colors";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = (props: ServiceCardProps) => {
  const { icon, title, description, index } = props;

  return (
    <motion.div
      variants={fadeIn(index * 0.1)}
      className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-full flex flex-col group hover:border-primary transition-colors duration-300"
      style={{ boxShadow: `0 0 0 0 ${colors.primary}00` }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px 0 ${colors.primary}40`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
        {icon}
      </div>
      <h3
        className="text-xl font-bold mt-4 mb-2"
        style={{ color: colors.text }}
      >
        {title}
      </h3>
      <p style={{ color: colors.textSecondary }} className="flex-grow">
        {description}
      </p>
    </motion.div>
  );
};
export default ServiceCard;
