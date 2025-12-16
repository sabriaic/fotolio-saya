"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Foto Profil */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/sabri-seo.jpg"
              alt="Foto Sabri"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Perkenalan */}
      <motion.h1
        className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.6] sm:text-4xl text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello, saya Sabri.
        </motion.span>{" "}
        Saya seorang{" "}
        <span className="font-bold">mahasiswa Areta Informatics College</span>{" "}
        yang memiliki ketertarikan besar dalam{" "}
        <span className="font-bold">web programming dan optimasi SEO.</span>  
        Saya fokus membangun{" "}
        <span className="italic">website modern dan responsif</span> menggunakan{" "}
        <span className="underline">React & Next.js</span>.  
        <br />
        Saya juga memiliki pengalaman dalam{" "}
        <span className="font-bold">meningkatkan visibilitas website di mesin pencari</span>  
        serta membantu UMKM agar lebih dikenal di dunia digital.
      </motion.h1>

      {/* Tombol Aksi */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Hubungi Saya{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white dark:bg-white/10 borderBlack px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white dark:bg-white/10 borderBlack text-gray-700 dark:text-white/60 p-4 
          hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 transition cursor-pointer"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white dark:bg-white/10 borderBlack text-gray-700 dark:text-white/60 p-4 
          text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          hover:text-gray-950 active:scale-105 transition cursor-pointer"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
