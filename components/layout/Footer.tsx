import { colors } from "@/utils/colors";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div
        className="container mx-auto px-4 md:px-8 py-6 text-center"
        style={{ color: colors.textSecondary }}
      >
        <p>
          &copy; {new Date().getFullYear()} bitbloom.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
