"use client";
import { colors } from "@/utils/colors";
import React from "react";

interface PriceButtonProps {
  isFeatured?: boolean;
  text: string;
}

const PriceButton = ({ isFeatured, text }: PriceButtonProps) => {
  return (
    <a
      href="#contact"
      style={{
        borderColor: isFeatured ? colors.background : colors.primary,
      }}
      className={`w-full hover:scale-105 block text-center font-bold py-3 rounded-full transition-all duration-300 border 
        ${
          isFeatured
            ? `bg-[${colors.primary}] text-[${colors.background}] hover:opacity-90`
            : `bg-[${colors.background}] text-[${colors.primary}] hover:bg-[${colors.primary}] hover:text-[${colors.background}]`
        }`}
    >
      {text}
    </a>
  );
};

export default PriceButton;
