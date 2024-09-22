"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import Link from "next/link";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <motion.li
          key={id}
          className={` relative ${
            id === activeIndex ? "text-black " : "text-neutral-400"
          } cursor-pointer transition-colors duration-300 px-3 py-2 `}
          onClick={() => setActiveIndex(id)}
        >
          <Link href={href}>{name}</Link>
          {id === activeIndex && (
            <motion.span
              className="bg-gray-200 rounded-full  absolute inset-0 -z-10 dark:bg-gray-700"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            ></motion.span>
          )}
        </motion.li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space text-white">
          <Link
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Clark
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                alt="Menu Icon"
                width={30}
                height={30}
                className="w-6 h-6"
              />
            </motion.div>
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>

        <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
          <nav className="p-5">
            <NavItems />
          </nav>
          /{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
