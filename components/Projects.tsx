// components/Projects.tsx
"use client";

import React, { useState } from "react";
import { Code2, ExternalLink, Github, Folder } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/data";

type Category = "all" | "web" | "mobile" | "fullstack" | "backend" | "frontend";

export const Projects = () => {
  const { darkMode, language } = useTheme();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categories: Category[] = [
    "all",
    "fullstack",
    "frontend",
    "backend",
    "mobile",
    "web",
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {language === "fr"
              ? "Découvrez mes projets récents et réalisations"
              : "Discover my recent projects and achievements"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.projects.categories[category]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden ${
                darkMode ? "bg-gray-900" : "bg-gray-50"
              } shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-linear-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Folder className="w-20 h-20 text-blue-500/50" />
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    ⭐ {t.projects.featured}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description[language]}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p
                    className={`text-xs font-semibold mb-2 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {t.projects.technologies}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-md ${
                          darkMode
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span
                        className={`px-2 py-1 text-xs ${
                          darkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                        darkMode
                          ? "border-gray-700 hover:bg-gray-800"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>

                {/* Date */}
                <p
                  className={`text-xs mt-3 ${
                    darkMode ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {new Date(project.date).toLocaleDateString(
                    language === "fr" ? "fr-FR" : "en-US",
                    {
                      year: "numeric",
                      month: "long",
                    }
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Code2
              className={`w-20 h-20 mx-auto mb-4 ${
                darkMode ? "text-gray-700" : "text-gray-300"
              }`}
            />
            <p
              className={`text-lg ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {language === "fr"
                ? "Aucun projet dans cette catégorie"
                : "No projects in this category"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
