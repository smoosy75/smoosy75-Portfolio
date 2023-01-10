import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="./IMG_0255.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Un <span className="underline decoration-green-700/50">petit</span>{" "}
          peu de Moi
        </h4>
        <p className="text-base">
          Je suis Mustapha, un développeur de 22 ans. J'aime créer des web app
          qui me permettent d'exprimer ma créativité et d'apprendre de nouvelles
          notions. <br /> Lorsque je ne code pas je passe mon temps à faire du
          sport, apprendre une nouvelle langue, lire ou regarder des films.
          <br />
          J'aspire à apprendre de nouvelles techonologies et m'améliorer. Vous
          pouvez me contactez par mail à l'adresse suivante :{" "}
          <a
            className="hover:text-green-700"
            href="mailto:mustaphasaid.pr@gmail.com"
          >
            mustaphasaid.pr@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
