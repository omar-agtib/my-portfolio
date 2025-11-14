"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { experiences } from "@/lib/data";

export const Experience = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.experience.title}
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 group`}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-500">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-xl font-semibold mt-1">
                    {exp.role[language]}
                  </p>
                  <p
                    className={`mt-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.location}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {exp.period}
                  </p>
                  <p className="text-sm text-blue-500 mt-1 font-medium">
                    {exp.duration[language]}
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
