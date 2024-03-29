import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="hover:scale-110"
          target="_blank"
          url="https://www.linkedin.com/in/saidmustapha/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-110"
          target="_blank"
          url="https://github.com/smoosy75"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:scale-110"
          target="_blank"
          url="https://www.instagram.com/mustapha_sdd/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500 font-medium hover:text-black">
            {" "}
            Entrer en Contact
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
