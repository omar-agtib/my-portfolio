"use client";

import React from "react";
import { Download, Code } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { translations } from "@/lib/translations";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export const Hero = () => {
  const { darkMode, language } = useTheme();
  const { scrollToSection } = useActiveSection();
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
            <Code className="w-24 h-24 text-white" />
          </div>
        </div>

        <div className="space-y-4 animate-slide-up">
          <p className="text-xl text-blue-500 font-medium">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            Omar Agtib
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">{t.hero.title}</h2>
          <p className="text-xl text-gray-400">{t.hero.subtitle}</p>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.hero.description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center animate-fade-in-delayed">
          <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? "border-white hover:bg-white hover:text-gray-900"
                : "border-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
          >
            {t.hero.contact}
          </button>
        </div>
      </div>
    </section>
  );
};
