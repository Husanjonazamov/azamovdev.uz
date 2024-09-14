"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faCss3Alt, faHtml5, faReact, faGitAlt, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const achievementsList = [
  {
    metric: "Python",
    icon: faPython,
  },
  {
    metric: "Django",
    icon: faReact, // Django uchun maxsus icon mavjud emas, React iconidan foydalanamiz
  },
  {
    metric: "CSS",
    icon: faCss3Alt,
  },
  {
    metric: "HTML",
    icon: faHtml5,
  },
  {
    metric: "React",
    icon: faReact,
  },
  {
    metric: "Git",
    icon: faGitAlt,
  },
  {
    metric: "Linux",
    icon: faLinux,
  },
  {
    metric: "PostgreSQL",
    icon: faDatabase,
  },
  {
    metric: "SQLite3",
    icon: faServer,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 transition-transform duration-300 hover:scale-110 hover:bg-[#0ef] hover:text-white p-4 rounded-md"
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              <div className="text-4xl mb-2 transition-transform duration-300 hover:scale-125" style={{ transition: 'all 0.3s ease-in-out' }}>
                <FontAwesomeIcon icon={achievement.icon} />
              </div>
              <p className="text-white text-xl font-bold">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
