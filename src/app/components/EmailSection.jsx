"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TelegramIcon from "../../../public/telegram-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-[#0ef] my-2">
          Bogʻlanish 
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Agar siz yangi imkoniyatlarni izlayotgan boʻlsangiz yoki savollaringiz boʻlsa, mening pochta qutim doimo ochiq! Har qanday soʻrovlar, hamkorlik takliflari yoki shunchaki salom aytishni xohlasangiz, bemalol menga yozing. Men imkon qadar tezroq javob berishga harakat qilaman. Keling, muloqot qilaylik!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Husanjonazamov/">
            <Image src={GithubIcon} alt="Github Ikon" />
          </Link>
          <Link href="https://t.me/Husanboy_Azamov">
            <Image src={TelegramIcon} alt="Telegram Ikon" />
          </Link>
          <Link href="https://www.instagram.com/__husanjon/">
            <Image src={InstagramIcon} alt="Instagram Ikon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email muvaffaqiyatli yuborildi!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
               Sizning elektron pochtangiz
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="azamovhusanboy08@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mavzu
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Faqat salom aytish"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Xabar 
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Xabar yuborish uchun"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0ef] hover:bg-[#0ccde9] text-[#121212] font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Yuborish
            </button> 
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
