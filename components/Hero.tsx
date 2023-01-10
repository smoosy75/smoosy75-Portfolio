import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./backgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Bonjour, c'est Mustapha",
      "J'aime le sport,  et le Cinéma ",
      "Mais je préfère coder :P",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="./IMG_1016.jpg"
        alt="mustapha face"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          SOFTWARE ENGINEER
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="black" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton">A propos</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experiences </button>
          </Link>
          <Link href="skills">
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
