import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, skils }) => {
  return (
    <div className="bg-[#161620] hover:shadow-2xl mx-auto mb-6 p-4 rounded-[25px] max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl h-auto transition-all duration-300 hover:scale-105">
      <div
        className="relative bg-[#242526] shadow-md hover:shadow-2xl rounded-[20px] h-48 sm:h-52 md:h-60 lg:h-72 transition-all duration-500 overflow-hidden group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="group-hover:flex top-0 left-0 absolute flex justify-center items-center bg-[#242526] bg-opacity-0 group-hover:bg-opacity-80 w-full h-full transition-all duration-300">
          <div className="flex justify-center items-center space-x-4">
            <Link
              href={gitUrl}
              className="flex justify-center items-center border-[#3E4042] border-2 hover:border-[#ffffff] rounded-full w-12 sm:w-14 h-12 sm:h-14 transition-all duration-300 group/link"
            >
              <CodeBracketIcon className="group-hover/link:text-white w-8 sm:w-10 h-8 sm:h-10 text-[#ADB7BE] transition-all duration-300" />
            </Link>
            <Link
              href={previewUrl}
              className="flex justify-center items-center border-[#3E4042] border-2 hover:border-[#ffffff] rounded-full w-12 sm:w-14 h-12 sm:h-14 transition-all duration-300 group/link"
            >
              <EyeIcon className="group-hover/link:text-white w-8 sm:w-10 h-8 sm:h-10 text-[#ADB7BE] transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {skils && Array.isArray(skils) && skils.length > 0 ? (
          skils.map((skill, index) => (
            <li key={index} className="bg-[#161630] px-2 py-1 rounded-[10px] text-[#61dafb] text-sm sm:text-base">
              {skill}
            </li>
          ))
        ) : (
          <li></li>
        )}
      </div>

      <h5 className="mb-1 py-4 font-semibold text-lg sm:text-xl lg:text-2xl">{title}</h5>
      <p className="text-[#ADB7BE] text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default ProjectCard;