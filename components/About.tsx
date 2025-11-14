"use client";

import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { contactInfo } from "@/lib/data";

export const About = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                } hover:scale-105 transition-transform duration-300`}
              >
                <p className="text-3xl font-bold text-blue-500">2+</p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {t.about.yearsExp}
                </p>
              </div>
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                } hover:scale-105 transition-transform duration-300`}
              >
                <p className="text-3xl font-bold text-purple-500">10+</p>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {t.about.projects}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div
            className={`p-8 rounded-2xl ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            } shadow-xl hover:shadow-2xl transition-shadow duration-300`}
          >
            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm break-all">{contactInfo.email}</span>
              </a>

              <a
                href={`https://www.linkedin.com/in/${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-500 transition-colors"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm">{contactInfo.linkedin}</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm">{t.about.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
