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
      <h3 className="absolute uppercase top-20 md:top-24  tracking-[16px] text-xl md:text-2xl text-[#424242]">
        Experiences
      </h3>
      <ExperienceCard />
    </motion.div>
  );
}

export default Experience;
