"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "West Burger bot",
    description: "Bu degani, sichqoncha komponent ustiga kelganda.",
    image: "/images/projects/image1.png",
    tag: ["Hammasi", "Botlar"],
    gitUrl: "https://github.com/Husanjonazamov/westfoodbot",
    previewUrl: "https://t.me/westuzbot",
    skils: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Uzfilm bot",
    description: "Bu degani, sichqoncha komponent ustiga kelganda",
    image: "/images/projects/image2.png",
    tag: ["Hammasi", "Botlar"],
    gitUrl: "https://github.com/Husanjonazamov/Uzfilm-bot",
    previewUrl: "https://t.me/UzFilm_robot",
    skils: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Bu degani, sichqoncha komponent ustiga kelganda",
    image: "/images/projects/3.png",
    tag: ["Hammasi", "Web"],
    gitUrl: "https://github.com/Husanjonazamov/E-market-",
    previewUrl: "/",
    skils: ["React", "Node.js", "MongoDB"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Hammasi");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#0ef] mt-4 mb-8 md:mb-12">
        Loyihalarim
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Hammasi"
          isSelected={tag === "Hammasi"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Botlar"
          isSelected={tag === "Botlar"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              skils={project.skils} // Skils propsini qo'shildi
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
