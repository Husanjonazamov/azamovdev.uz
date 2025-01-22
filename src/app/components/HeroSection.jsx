"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto px-4 lg:py-16 w-full max-w-[1200px]">
      <div className="flex sm:flex-row flex-col items-center gap-8">
        {/* Matn bo'limi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col flex-1 justify-center items-center sm:items-start text-center sm:text-left"
        >
          <h1 className="mb-4 font-extrabold text-2xl text-white sm:text-4xl lg:text-5xl">
            <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Salom men{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Azamov Husanjon", 1000, "Web Developer", 1000]}
              className="text-[#0ef]"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 max-w-[600px] sm:max-w-[400px] text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Men orzularini amalga oshirishga intiluvchi dasturchiman.
          </p>
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-4 w-full sm:w-auto">
            <Link
              href="/#contact"
              className="bg-[#0ef] hover:bg-slate-200 px-6 py-3 rounded-full w-full sm:w-auto text-[#121212] text-center transition-all duration-300"
            >
              Xabar yuborish
            </Link>
            <Link
              href="/images/resume.pdf"
              target="_blank"
              className="border-[#0ef] border-2 bg-transparent hover:bg-[#0ef] px-6 py-3 rounded-full w-full sm:w-auto text-[#0ef] text-center hover:text-[#121212] transition-all duration-300"
            >
              Resume
            </Link>
          </div>
        </motion.div>

        {/* Rasm bo'limi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 justify-center items-center"
        >
          <div className="relative bg-[#181818] rounded-full w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px]">
            <Image
              src="/images/avatar.png"
              alt="hero image"
              className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
