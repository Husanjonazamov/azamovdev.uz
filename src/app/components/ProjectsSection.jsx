"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"; 

const ProjectsSection = () => {
  const ref = useRef(null); 
  const [projectsData, setProjectsData] = useState([]);
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState("Hammasi");

  useEffect(() => {
    axios
      .get("https://portfolio.azamovdev.uz/api/v1/portfolio/")
      .then((res) => {
        setProjectsData(res.data.data.results); 
        setCategory(res.data.data.categories || []); 
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
    <section id="projects" className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
      <h2 className="mt-4 mb-8 md:mb-12 font-bold text-[#0ef] text-2xl text-center sm:text-3xl md:text-4xl">
        Loyihalarim
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={() => handleTagChange("Hammasi")}
          name="Hammasi"
          isSelected={tag === "Hammasi"}
        />
        {category && category.length > 0 ? category.map((val) => (
          <div key={val.id}>
            <ProjectTag
              onClick={() => handleTagChange(val.name)}
              name={val.name}
              isSelected={tag === val.name}
            />
          </div>
        )) : null}
      </div>
      <ul
        ref={ref}
        className="gap-8 md:gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
        {filteredProjects.map((project) => (
          <li key={project.id} className="flex flex-col items-center">
            <a
              href={project.project_url || "#"}
              className="w-full max-w-[350px] transition-transform duration-200 hover:scale-105">
              <ProjectCard
                title={project.name}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.git_url}
                previewUrl={project.project_url}
                skils={project.skils && project.skils.length > 0 ? project.skils.map(skill => skill.name) : []}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;