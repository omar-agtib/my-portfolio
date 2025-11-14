"use client";

import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { contactInfo } from "@/lib/data";

export const Contact = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <p
          className={`text-lg mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-900 hover:bg-gray-850"
                : "bg-gray-50 hover:bg-gray-100"
            } transition-all duration-300 hover:scale-105 group`}
          >
            <div className="p-4 bg-blue-500/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Mail className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="font-bold mb-2 text-lg">{t.contact.email}</h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } break-all`}
            >
              {contactInfo.email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactInfo.phone}`}
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-900 hover:bg-gray-850"
                : "bg-gray-50 hover:bg-gray-100"
            } transition-all duration-300 hover:scale-105 group`}
          >
            <div className="p-4 bg-purple-500/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
              <Phone className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="font-bold mb-2 text-lg">{t.contact.phone}</h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {contactInfo.phone}
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/in/${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-900 hover:bg-gray-850"
                : "bg-gray-50 hover:bg-gray-100"
            } transition-all duration-300 hover:scale-105 group`}
          >
            <div className="p-4 bg-blue-600/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-600/20 transition-colors">
              <Linkedin className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2 text-lg">{t.contact.linkedin}</h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } break-all`}
            >
              {contactInfo.linkedin}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
