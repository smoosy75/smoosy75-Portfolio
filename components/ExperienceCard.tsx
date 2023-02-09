import React from "react";
import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article className="md:flex-row drop-shadow-2xl flex flex-col rounded-3xl items-center space-y-0 h-[500px] mt-10 md:mt-0 md:space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#1e1b1b] p-10 cursor-pointer hover:opacity-100 opacity-90  transition-opacity   overflow-hidden scale-90 hover:scale-100 ease-in duration-1000">
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
        className=" h-28 w-28 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover p-3"
        src="../im/wcs.png"
        alt=""
      />
      <p className="font-bold text-xl md:text-4xl p-3 mt-1 text-[#F66E6E]">
        Wild Code School
      </p>
      <div className=" md:px-10 md:items-center ">
        <h4 className="text-4xl font-light text-white">ETUDIANT</h4>
        <p className="uppercase py-5 text-white"> Sept 2022 - 15 Feb 2023 </p>
        <div className="flex space-x-2 my-2">
          <ul className="list-disc space-y-2 ml-5 text-white ">
            <li>Méthode Agile, Culture Dev</li>
            <li> Méthode d'apprentissage frameworks & languages</li>
            <li>Js, React, Git, databases, Seo, Node, Express</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
