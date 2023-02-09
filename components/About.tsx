import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

function About() {
  const { t } = useTranslation(["about"]);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 md:justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-[#424242] text-xl md:text-2xl font-human ">
        {t("about")}
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
        src="./im/muss.jpg"
        className=" flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-32 mb-3 md:mt-0 md:mb-0"
      />
      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold font-flav ">
          Un{" "}
          <span className="underline decoration-4 decoration-[#805231] ">
            petit
          </span>{" "}
          peu de Moi
        </h4>
        <p className="text-sm md:text-lg text-justify ">
          Je suis Mustapha, un développeur de 22 ans. Avant de me lancer, j'ai
          d'abord effectué une licence de gestion mais la création de solutions
          concrètes et la résolution de problèmes m'ont poussé à changer de
          voie. J'aime créer des applications Web qui me permettent d'exprimer
          ma créativité en fournissant des interfaces
          modernes/agréables/original ainsi que d'apprendre de nouvelles
          notions.
          <br />
          J'aspire à apprendre de nouvelles techonologies et à améliorer mes
          compétences techniques et sectorielle .
        </p>
      </div>
    </motion.div>
  );
}

export default About;
