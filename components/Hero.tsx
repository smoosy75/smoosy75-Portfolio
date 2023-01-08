import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./backgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Bonjour, c'est Mustapha",
      "J'aime le sport, Voyager ",
      "Mais je préfère coder :P",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h1>
    </div>
  );
}

export default Hero;
