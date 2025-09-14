import React from "react";
import { colors } from "@/utils/colors";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import BackgroundBlobs from "@/components/layout/BackgroundBlobs";
import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";
import PricingSection from "@/components/sections/PricingSection";
import ProcessSection from "@/components/sections/ProcessSection";

export default function BitbloomWebsite() {
  return (
    <div
      style={{ backgroundColor: colors.background, color: colors.text }}
      className="min-h-screen font-sans antialiased selection:bg-primary selection:text-background"
    >
      {/* Header */}
      <Header />

      {/* Background Blobs */}
      <BackgroundBlobs />

      <main className="container mx-auto pt-24 z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Our Approach Section */}
        <ApproachSection />

        {/* Work Section */}
        <WorkSection />

        <PricingSection />

        <ProcessSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
