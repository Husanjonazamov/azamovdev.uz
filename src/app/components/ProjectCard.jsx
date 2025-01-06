import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, skils }) => {
  console.log(skils);  // Skils propini tekshirish

  return (
    <div className="max-w-screen-xl bg-[#161620] transition-all h-[450px] hover:scale-105 hover:shadow-2xl duration-300 p-4 rounded-[25px] mb-4 mx-auto">
      <div
        className="h-52 md:h-55 rounded-xl relative group overflow-hidden shadow-md hover:shadow-2xl transition-all rounded-[20px] duration-500 bg-[#242526]"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#242526] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4">
            <Link
              href={gitUrl}
              className="h-14 w-14 rounded-full border-2 border-[#3E4042] hover:border-[#ffffff] flex items-center justify-center transition-all duration-300 group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white transition-all duration-300" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 rounded-full border-2 border-[#3E4042] hover:border-[#ffffff] flex items-center justify-center transition-all duration-300 group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Skill List */}
      <ul className="flex space-x-4 py-6 text-sm">
        {skils && Array.isArray(skils) && skils.length > 0 ? (
          skils.map((skill, index) => (
            <li key={index} className="py-1 px-2 rounded-[10px] bg-[#161630] text-[#61dafb]">
              {skill}
            </li>
          ))
        ) : (
          <li>No skills available</li>
        )}
      </ul>

      {/* Project Title and Description */}
      <h5 className="text-[20px] py-4 font-semibold mb-1">{title}</h5>
      <p className="text-[#ADB7BE] text-sm">{description}</p>
    </div>
  );
};

export default ProjectCard;
