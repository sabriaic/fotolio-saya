import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import kasurImg from "@/public/kasurspeq5.jpg";
import kasurKesehatanImg from "@/public/kasur kesehatan.jpg";
import speqS100Img from "@/public/SPEQ S100 2.jpg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Lulus SMA",
    location: "Pekanbaru, Riau, Indonesia",
    description:
      "Saya menyelesaikan ujian nasional selama 3 hari dan melanjutkan kuliah di Tangerang dengan jurusan Teknologi Informasi.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Front-End Developer",
    location: "Tangerang, Indonesia",
    description:
      "Saya bekerja sebagai front-end developer selama 3 tahun di dua perusahaan berbeda, fokus pada pengembangan antarmuka berbasis React dan Tailwind.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Riau, Indonesia",
    description:
      "Saat ini saya bekerja sebagai full-stack developer freelance. Stack yang digunakan: React, Next.js, TypeScript, Tailwind, Prisma, dan MongoDB.",
    icon: React.createElement(FaReact),
    date: "2025 - Sekarang",
  },
] as const;

export const projectsData = [
  {
    title: "Kasur Speq Premium",
    description:
      "Website utama Kasur Speq untuk memperkenalkan produk kasur premium dengan fitur katalog, galeri, dan sistem pemesanan online.",
    tags: ["Next.js", "React", "Tailwind", "MongoDB", "SEO"],
    imageUrl: kasurImg,
  },
  {
    title: "Kasur Speq Kesehatan",
    description:
      "Aplikasi review dan ulasan pengguna yang membantu calon pembeli melihat kualitas dan pengalaman pelanggan Kasur Speq secara real-time.",
    tags: ["Next.js", "React", "Tailwind", "Prisma"],
    imageUrl: kasurKesehatanImg,
  },
  {
    title: "SPEQ S100 Landing Page",
    description:
      "Landing page promosi untuk produk kasur SPEQ S100 dengan desain modern dan responsif untuk meningkatkan penjualan online.",
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    imageUrl: speqS100Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Video Editing",
  "Desain Grafis",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Web SEO",
  "Linux Dasar",
  "PostgreSQL",
] as const;
