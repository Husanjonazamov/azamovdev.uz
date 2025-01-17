"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TelegramIcon from "../../../public/telegram-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function validate() {
    if (!name) {
      alert('Ismingizni kiriting')
      return false
    }
    if (!subject) {
      alert('Subjectni kiriting')
      return false
    }
    if (!message) {
      alert('Messageni kiriting')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = validate()
    if (!isValid) {
      return
    }

    let UserContact = {
      id: Date.now(),
      name,
      subject,
      message,
    }

    axios.post('http://portfolio.azamovdev.uz/api/v1/contact/', UserContact, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        console.log(res)
        setEmailSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
        alert("Xatolik yuz berdi: Iltimos qayta urinib ko'ring!");
      })
  };

  return (
    <section
      id="contact"
      className="relative gap-4 grid md:grid-cols-2 mx-auto my-12 md:my-12 py-24 max-w-[1200px]"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] top-3/4 -left-4 z-0 absolute from-primary-900 to-transparent blur-lg rounded-full w-80 h-80 transform -translate-1/2 -translate-x-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 font-bold text-[#0ef] text-xl">Bogʻlanish</h5>
        <p className="mb-4 max-w-md text-[#ADB7BE]">
          Agar siz yangi imkoniyatlarni izlayotgan boʻlsangiz yoki savollaringiz boʻlsa, mening pochta qutim doimo ochiq! Har qanday soʻrovlar, hamkorlik takliflari yoki shunchaki salom aytishni xohlasangiz, bemalol menga yozing. Men imkon qadar tezroq javob berishga harakat qilaman. Keling, muloqot qilaylik!
        </p>
        <div className="flex flex-row gap-2 socials">
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
          <p className="mt-2 text-green-500 text-sm">
            Email muvaffaqiyatli yuborildi!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-sm text-white"
              >
                Ism va Familyangizni kiriting
              </label>
              <input
                onChange={(e) => { setName(e.target.value) }}
                type="text"
                id="text"
                required
                className="block border-[#33353F] bg-[#18191E] p-2.5 border rounded-lg w-full text-gray-100 text-sm placeholder-[#9CA2A9]"
                placeholder="Husanjon Azamov"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-sm text-white"
              >
                Mavzu
              </label>
              <input
                onChange={(e) => { setSubject(e.target.value) }}
                type="text"
                id="subject"
                required
                className="block border-[#33353F] bg-[#18191E] p-2.5 border rounded-lg w-full text-gray-100 text-sm placeholder-[#9CA2A9]"
                placeholder="Faqat salom aytish"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-sm text-white"
              >
                Xabar
              </label>
              <textarea
                onChange={(e) => { setMessage(e.target.value) }}
                id="message"
                className="block border-[#33353F] bg-[#18191E] p-2.5 border rounded-lg w-full text-gray-100 text-sm placeholder-[#9CA2A9]"
                placeholder="Xabar yuborish uchun"
              />
            </div>
            <button
              type="submit"
              className="bg-[#0ef] hover:bg-[#0ccde9] px-5 py-2.5 rounded-lg w-full font-medium text-[#121212]"
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