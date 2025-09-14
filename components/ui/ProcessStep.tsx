"use client";
import { colors } from "@/utils/colors";
import { motion } from "framer-motion";

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ProcessStep = (props: ProcessStepProps) => {
  const { index, title, description } = props;
  return (
    <motion.div
      variants={fadeIn(index * 0.1)}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 text-primary w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 font-bold text-lg">
        {index}
      </div>
      <div>
        <h3 className="text-lg font-semibold" style={{ color: colors.text }}>
          {title}
        </h3>
        <p className="mt-1" style={{ color: colors.textSecondary }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
