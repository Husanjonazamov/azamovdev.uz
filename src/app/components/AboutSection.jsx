"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Ko&apos;nikmalar",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Django</li>
        <li>PostgreSQL</li>
        <li>Django-rest-framework</li>
        <li>git</li>
        <li>linux</li>
        <li>Sqlite3</li>
      </ul>
    ),
  },
  {
    title: "Ta&apos;lim",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IT centerda 6 oy backend kursini o&apos;qidim va ko&apos;plab texnologiyalarni o&apos;rgandim</li>
        <li>Online tarzda ko&apos;plar (PostgreSQL, Sqlite3, Telegram botlar) va shunga o&apos;xshagan texnologiyalarni o&apos;rgandim</li>
      </ul>
    ),
  },
  {
    title: "Sertifikatlar",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IT center o&apos;quv markazi sertifikati</li>
        {/* <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/project.png" width={500} height={500} alt="Project Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-[#0ef] font-bold text-white mb-8">Ma&apos;lumot</h2>
          <p className="text-base lg:text-lg">
            Men orzularini amalga oshirishga intiluvchi dasturchiman. Dasturlash sohasida, ayniqsa backend yo&apos;nalishida chuqur bilimga ega bo&apos;lib, samaradorlikka intilaman. FastAPI, Django va Telegram botlar bilan ishlashni yaxshi ko&apos;raman. Yangi narsalarni o&apos;rganish va tajriba orttirish — mening asosiy motivatsiyam.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
