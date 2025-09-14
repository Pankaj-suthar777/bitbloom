"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { colors } from "@/utils/colors";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ApproachSection = () => {
  return (
    <AnimatedSection>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn()}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span style={{ color: colors.primary }}>Small Dev Team</span>{" "}
            Advantage
          </h2>
          <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
            As a lean team, we offer a direct line of communication and a deeply
            invested partnership. No overhead—just fast, focused development and
            a product built with passion and precision.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Users
                className="w-6 h-6 mt-1 shrink-0"
                style={{ color: colors.secondary }}
              />
              <p>
                <strong style={{ color: colors.text }}>
                  Direct Collaboration:
                </strong>{" "}
                You work directly with the developers building your product.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowUpRight
                className="w-6 h-6 mt-1 shrink-0"
                style={{ color: colors.secondary }}
              />
              <p>
                <strong style={{ color: colors.text }}>
                  Agile & Efficient:
                </strong>{" "}
                We adapt quickly to changes and deliver features at startup
                speed.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn(0.2)}
          className="h-64 md:h-80 bg-zinc-900/50 rounded-xl flex items-center justify-center p-8 border border-zinc-800"
        >
          <div className="text-center">
            <Users
              className="w-16 h-16 mx-auto"
              style={{ color: colors.primary }}
            />
            <p className="mt-4 text-xl font-semibold">
              Your Dedicated Tech Partners
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ApproachSection;
