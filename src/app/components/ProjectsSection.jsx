"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import axios from "axios";

const ProjectsSection = () => {
  const [tag, setTag] = useState("Hammasi");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projectsData, setProjectsData] = useState([]);
  const [category, setCategory] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://portfolio.azamovdev.uz/api/v1/category/")
      .then((res) => {
        const uniqueCategories = res.data.data.results.filter(
          (category) => category.name !== "Hammasi"
        );
        setCategory(uniqueCategories);
      })
      .catch((err) => {
        console.error("Error fetching category data:", err);
      });
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "Hammasi"
      ? projectsData
      : projectsData.filter((project) => project.category.name === tag);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mx-auto max-w-[1300px]">
      <h2 className="mt-4 mb-8 md:mb-12 font-bold text-[#0ef] text-4xl text-center">
        Loyihalarim
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={() => handleTagChange("Hammasi")}
          name="Hammasi"
          isSelected={tag === "Hammasi"}
        />
        {category.map((val) => (
          <div key={val.id}>
            <ProjectTag
              onClick={() => handleTagChange(val.name)}
              name={val.name}
              isSelected={tag === val.name}
            />
          </div>
        ))}
      </div>
      <ul ref={ref} className="gap-8 md:gap-12 grid md:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <a href={project.project_url || "#"}>
              <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.git_url}
                previewUrl={project.project_url}
                skils={project.skils.map((skill) => skill.name).join(", ")}
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;