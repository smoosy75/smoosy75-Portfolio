import React from "react";
import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-200 p-10 cursor-pointer hover:opacity-100 opacity-70 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="./wcs.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">ETUDIANT</h4>
        <p className="font-bold text-2xl mt-1 text-[#F66E6E]">
          Wild Code School
        </p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-500">
          {" "}
          Sept 2022 - 15 Feb 2023{" "}
        </p>
        <ul className="list-disc space-y-2 ml-5 ">
          <li>Travail d'equipe scrum</li>
          <li> methode d'apprentissage framework language</li>
          <li>front end back end </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
