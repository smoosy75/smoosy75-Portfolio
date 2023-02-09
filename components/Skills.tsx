import React from "react";

function Skills() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-10 mx-auto items-center justify-evenly">
      <h3 className="absolute uppercase top-20 md:top-24 tracking-[16px] md:text-2xl text-xl text-[#424242] font-human">
        Compétences
      </h3>
      <h3 className="absolute uppercase top-32 md:top-36 tracking-[3px] md:text-lg text-sm text-[#805231] font-flav font-semibold">
        Voici les languages, outils, framework que j'utilise{" "}
      </h3>
      <div className="grid grid-cols-4 gap-5 ">
        <img
          className="w-16 h-16 md:w-20 md:h-20  "
          src="../im/html.png"
          alt="html"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/css-3.png"
          alt="css3"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/js.png"
          alt="javascript"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/node.png"
          alt="node.js"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/react.png"
          alt="react.js"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/ex.png"
          alt="express"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/next.png"
          alt="next"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/git.png"
          alt="git"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/sql.png"
          alt="sql"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/vsc.png"
          alt="vscode"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/postman_icon.png"
          alt="postman"
        />
        <img
          className="w-16 h-16 md:w-20 md:h-20 "
          src="../im/mui.png"
          alt="material ui"
        />
      </div>
    </div>
  );
}

export default Skills;
