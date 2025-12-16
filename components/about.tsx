"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-gray-800 dark:text-gray-300"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Tentang Saya</SectionHeading>

      <p className="mb-3">
        Halo! Nama saya <span className="font-medium">Sabri</span>, seorang{" "}
        <span className="font-medium">mahasiswa di Areta Informatics College</span> 
        yang memiliki semangat besar di bidang{" "}
        <span className="font-medium">web programming</span> dan{" "}
        <span className="font-medium">optimasi SEO</span>.  
        Saya mulai mendalami dunia pemrograman sejak memahami betapa menariknya 
        membangun website yang tidak hanya terlihat menarik, tetapi juga 
        <span className="italic"> cepat, responsif, dan mudah ditemukan di mesin pencari.</span>
      </p>

      <p className="mb-3">
        Saya berfokus pada teknologi modern seperti{" "}
        <span className="font-medium">React</span> dan{" "}
        <span className="font-medium">Next.js</span> untuk membuat website yang 
        efisien dan memiliki pengalaman pengguna yang baik.  
        Selain itu, saya juga tertarik pada{" "}
        <span className="font-medium">strategi SEO</span> untuk membantu bisnis 
        dan UMKM meningkatkan jangkauan digital mereka.
      </p>

      <p>
        Di luar dunia coding, saya senang mempelajari hal-hal baru, 
        terutama yang berhubungan dengan{" "}
        <span className="font-medium">teknologi, desain, dan digital marketing</span>.  
        Saya percaya bahwa kombinasi antara{" "}
        <span className="italic">kemampuan teknis</span> dan{" "}
        <span className="italic">pemahaman strategi digital</span> adalah kunci 
        untuk berkembang di dunia teknologi saat ini.
      </p>
    </motion.section>
  );
}
