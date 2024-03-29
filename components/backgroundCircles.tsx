import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.4, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-400 opacity-30 rounded-full h-[200px] w-[200px] mt-64 md:mt-52 animate-ping" />
      <div className="rounded-full border border-gray-400 opacity-30  h-[300px] w-[300px] mt-64 md:mt-52 absolute animate-ping" />
      <div className="absolute border border-gray-400 opacity-30 rounded-full h-[500px] w-[500px] mt-64 md:mt-52 animate-ping" />
      <div className="absolute border border-[#805231] rounded-full h-[650px] w-[650px] opacity-20 mt-64 md:mt-52 animate-pulse" />
      <div className="absolute border border-gray-400 opacity-30 rounded-full h-[800px] w-[800px]  mt-64 md:mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
