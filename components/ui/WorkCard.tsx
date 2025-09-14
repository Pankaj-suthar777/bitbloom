import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { colors } from "@/utils/colors";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const WorkCard = (props: WorkCardProps) => {
  const { title, description, tags, link, index } = props;
  return (
    <motion.div
      variants={fadeIn(index * 0.1)}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-secondary"
      style={{ boxShadow: `0 0 0 0 ${colors.secondary}00` }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px 0 ${colors.secondary}30`,
        transition: { duration: 0.3 },
      }}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
        {title}
      </h3>
      <p className="mb-4" style={{ color: colors.textSecondary }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2 py-1 rounded"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-semibold group-hover:underline"
        style={{ color: colors.secondary }}
      >
        View Project{" "}
        <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
};

export default WorkCard;
