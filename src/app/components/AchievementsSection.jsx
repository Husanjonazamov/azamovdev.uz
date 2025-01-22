"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3Alt, faHtml5, faGitAlt, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faCogs, faShareAlt, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons"; // Docker iconi qo'shildi

const achievementsList = [
  {
    metric: "Python",
    icon: faPython,
    color: "#306998", // Python uchun rang
  },
  {
    metric: "Django",
    icon: faCogs, // Django uchun mexanizm ikonkasi ishlatilmoqda
    color: "#092E20", // Django uchun rang
  },
  {
    metric: "CSS",
    icon: faCss3Alt,
    color: "#264de4", // CSS uchun rang
  },
  {
    metric: "HTML",
    icon: faHtml5,
    color: "#e44d26", // HTML uchun rang
  },
  {
    metric: "Git",
    icon: faGitAlt,
    color: "#F34F29", // Git uchun rang
  },
  {
    metric: "Linux",
    icon: faLinux,
    color: "#FCC624", // Linux uchun rang
  },
  {
    metric: "PostgreSQL",
    icon: faDatabase,
    color: "#336791", // PostgreSQL uchun rang
  },
  {
    metric: "SQLite3",
    icon: faServer,
    color: "#003B57", // SQLite3 uchun rang
  },
  {
    metric: "Docker",
    icon: faDocker, // Docker iconi
    color: "#2496ED", // Docker uchun rang
  },
  {
    metric: "Django REST Framework",
    icon: faShareAlt, // DRF uchun tarmoq bilan bog'liq ikonka ishlatilmoqda
    color: "#0074B7", // DRF uchun rang
  },
];

const AchievementsSection = () => {
  return (
    <div className="px-4 xl:px-12 py-6 sm:py-12">
      <h2 className="mb-8 font-bold text-[#0ef] text-3xl text-center sm:text-4xl">Texnologiyalar</h2>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-[#161620] shadow-md hover:shadow-xl p-3 rounded-lg transform transition-all duration-500 hover:scale-105"
            style={{
              height: "110px", // Cardning balandligini 120px ga kichraytirdim
            }}
          >
            <div
              className="mb-2 text-3xl sm:text-4xl" // Icon textini yanada kichikroq qildim
              style={{
                color: achievement.color,
              }}
            >
              <FontAwesomeIcon icon={achievement.icon} />
            </div>
            <p className="font-semibold text-white text-xs sm:text-sm">{achievement.metric}</p> {/* Matnni kichikroq qildim */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
