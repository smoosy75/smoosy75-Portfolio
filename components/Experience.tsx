import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly"
    >
      <h3 className="absolute uppercase top-24  tracking-[20px] text-2xl text-gray-500">
        Experiences
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
