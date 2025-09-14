"use client";
import React, { useEffect, useState } from "react";
import { colors } from "@/utils/colors";

interface HeaderProps {
  // scrolled: boolean;
}

const Header = (props: HeaderProps) => {
  // const { scrolled } = props;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src="/logo.png" className="h-12 w-12" />
          <a href="#" className="text-2xl font-bold">
            bitbloom<span style={{ color: colors.primary }}>.</span>dev
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#services"
            className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-8"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-8"
          >
            Pricing
          </a>
          <a
            href="#work"
            className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-8"
          >
            Work
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg transition-all"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
              boxShadow: `0 0 20px ${colors.primary}30`,
            }}
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
