"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Ta&apos;lim",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>IT centerda 6 oy backend kursini o&apos;qidim va ko&apos;plab texnologiyalarni o&apos;rgandim</li>
        <li>Online tarzda ko&apos;plar (PostgreSQL, Sqlite3, Telegram botlar) va shunga o&apos;xshagan texnologiyalarni o&apos;rgandim</li>
      </ul>
    ),
  },
  {
    title: "Sertifikatlar",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>IT center o&apos;quv markazi sertifikati</li>
        {/* <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 xl:gap-16 md:grid md:grid-cols-2 px-4 xl:px-16 py-8 sm:py-16">
        <Image src="/images/project.png" width={500} height={500} alt="Project Image" />
        <div className="flex flex-col mt-4 md:mt-0 h-full text-left">
          <h2 className="mb-8 font-bold text-4xl text-white">Ma&apos;lumot</h2>
          <p className="text-base lg:text-lg">
            Men orzularini amalga oshirishga intiluvchi dasturchiman. Dasturlash sohasida, ayniqsa backend yo&apos;nalishida chuqur bilimga ega bo&apos;lib, samaradorlikka intilaman. FastAPI, Django va Telegram botlar bilan ishlashni yaxshi ko&apos;raman. Yangi narsalarni o&apos;rganish va tajriba orttirish — mening asosiy motivatsiyam.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Ta&apos;lim
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Sertifikatlar
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
