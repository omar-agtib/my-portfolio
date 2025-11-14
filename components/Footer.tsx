"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <footer
      className={`py-8 ${darkMode ? "bg-gray-900" : "bg-gray-100"} border-t ${
        darkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          © {new Date().getFullYear()} Omar Agtib. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
