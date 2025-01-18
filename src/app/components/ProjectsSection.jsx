"use client"; // Bu qatorni qo'shish

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const ProjectsSection = () => {
  const [tag, setTag] = useState("Hammasi");
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio.azamovdev.uz/api/v1/portfolio/")
      .then((res) => {
        setProjectsData(res.data.data.results);
      })
      .catch((err) => {
        console.error("Error fetching projects data:", err);
      });
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "Hammasi"
      ? projectsData
      : projectsData.filter((project) => project.category.name === tag);

  return (
    <section id="projects" className="mx-auto max-w-[1100px] px-4">
      <h2 className="mt-4 mb-8 md:mb-12 font-bold text-[#0ef] text-4xl text-center">
        Loyihalarim
      </h2>
      <p className="text-center text-[#adb7be] mb-6">
        Bu yerda mening barcha loyihalarimni topishingiz mumkin.
      </p>
      <ul className="gap-8 md:gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <a href={project.project_url || "#"}>
              <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.git_url}
                previewUrl={project.project_url}
                skils={project.skils.map((skill) => skill.name)}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
