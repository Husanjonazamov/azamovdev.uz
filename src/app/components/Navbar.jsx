"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Malumot",
    path: "#about",
  },
  {
    title: "Loyihalar",
    path: "#projects",
  },
  {
    title: "Bog'lanish",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="top-0 right-0 left-0 z-10 fixed border-[#33353F] bg-[#121212] bg-opacity-100 mx-auto border">
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 py-2 lg:py-4 max-w-[1350px]">
        <Link
          href={"/"}
          className="font-semibold text-[#0ef] text-2xl md:text-5xl"
        >
          azamovdev
        </Link>
        <div className="block md:hidden mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center border-slate-200 hover:border-white px-3 py-2 border rounded text-slate-200 hover:text-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center border-slate-200 hover:border-white px-3 py-2 border rounded text-slate-200 hover:text-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="md:block hidden md:w-auto menu" id="navbar">
          <ul className="flex md:flex-row md:space-x-8 mt-0 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
