import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-2xl text-gray-500">
        Compétences
      </h3>
      <h3 className="absolute uppercase top-36 tracking-[3px] text-sm text-gray-500">
        Voici les languages, outils, framework que j'utilise{" "}
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}

export default Skills;
