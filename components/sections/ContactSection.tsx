"use client";

import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { colors } from "@/utils/colors";
import { CheckCircle } from "lucide-react";

type SumitStatus = "success" | "error" | null;

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SumitStatus>(null);

  type InputChangeEventType = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >;

  const handleInputChange = (e: InputChangeEventType) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", formData);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <AnimatedSection id="contact">
      <motion.h2
        variants={fadeIn()}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Let's Build <span style={{ color: colors.primary }}>Together</span>
      </motion.h2>
      <motion.p
        variants={fadeIn(0.1)}
        className="text-center max-w-xl mx-auto mb-12"
        style={{ color: colors.textSecondary }}
      >
        Have an idea? We'd love to hear about it. Fill out the form below and
        we'll get back to you shortly.
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn(0.2)}
        className="max-w-xl mx-auto"
      >
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:ring-2 focus:outline-none"
            style={{ "--tw-ring-color": colors.primary } as React.CSSProperties}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:ring-2 focus:outline-none"
            style={{ "--tw-ring-color": colors.primary } as React.CSSProperties}
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:ring-2 focus:outline-none"
            style={{ "--tw-ring-color": colors.primary } as React.CSSProperties}
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 font-bold rounded-lg transition-all disabled:opacity-50 w-48"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {submitStatus === "success" && (
          <p
            className="text-center mt-4 flex items-center justify-center gap-2"
            style={{ color: colors.secondary }}
          >
            <CheckCircle className="w-5 h-5" />
            Thank you! Your message has been sent.
          </p>
        )}
      </motion.form>
    </AnimatedSection>
  );
};

export default ContactSection;
