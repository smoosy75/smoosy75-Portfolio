import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./backgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Bonjour, c'est Mustapha",
      "Développeur Fullstack",
      "J'aime le sport, lire et le Cinéma",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover grayscale"
        src="../im/IMG_1016.jpg"
        alt="mustapha face"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#424242] pb-2 tracking-[10px] font-human ">
          SOFTWARE ENGINEER
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10 font-flav text-[#805231]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#805231" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="herobutton">A propos</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Compétences</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
