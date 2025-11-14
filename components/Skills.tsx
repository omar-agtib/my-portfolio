"use client";

import React from "react";
import { Code, Award, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { skills } from "@/lib/data";

export const Skills = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">{t.skills.topSkills}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold">{t.skills.certifications}</h3>
            </div>
            <ul className="space-y-3">
              {skills.certifications.map((cert, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } flex items-start gap-2 hover:text-purple-500 transition-colors`}
                >
                  <span className="text-purple-500 mt-1 font-bold">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Globe className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">{t.skills.languages}</h3>
            </div>
            <div className="space-y-4">
              {skills.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{lang.lang[language]}</span>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {lang.level[language]}
                    </span>
                  </div>
                  <div
                    className={`h-2 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className="h-full rounded-full bg-linear-to-r from-green-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
