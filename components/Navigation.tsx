"use client";

import React, { useState } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { translations } from "@/lib/translations";

export const Navigation = () => {
  const { darkMode, toggleDarkMode, language, setLanguage } = useTheme();
  const { activeSection, scrollToSection } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/95 backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Omar Agtib
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`transition-colors duration-300 font-medium ${
                  activeSection === key
                    ? "text-blue-500"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-800" : "bg-white"
          } border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors font-medium ${
                  activeSection === key
                    ? "bg-blue-500 text-white"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
