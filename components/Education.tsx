"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { education } from "@/lib/data";

export const Education = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <section
      id="education"
      className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.education.title}
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              } border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors shrink-0">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                  <p
                    className={`mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {edu.degree[language]}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
