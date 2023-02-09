import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const Projects = [
    {
      id: 1,
      title: "Chocolat'inn",
      desc: "Chocolat'Inn est un projet de petit site vitrine pour un Chocolatier. Nous avions une semaine pour le réaliser. Ce projet a été realisé au tout début de notre formation à la Wild Code School en Vanilla Javascript.",
      img: "../im/choc.png",
      github:
        "https://github.com/WildCodeSchool/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie",
      site: "https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Chocolaterie/ ",
    },
    {
      id: 2,
      title: "Toasty Mood",
      desc: "Toasty Mood est un projet d'application lifestyle de journal combiné avec une API de météo. L'idée est que l'utilisateur puisse comparer les humeurs qu'il enregistre tout les jours en fonction de la météo afin de voir son influence. Cette web app a été realisé en equipe de 4 avec React. L'objectif futur serais de la transformer en réel application et y ajouter des fonctionnalités   ",
      img: "../im/toasty.png",
      github: " ",
      site: " ",
    },
    {
      id: 3,
      title: "Enedis Com'lab",
      desc: "Ce logiciel Fullstack en equipe de 4 est un projet d'étude pour la société Enedis qui avait donné la consigne de créer un logiciel interne pour publier des articles de communication avec plusieurs groupes, pouvoir les gérer (supprimer, edit) avec un système d'administrateur et de rôles. Ce projet a été realisé en React et NodeJS et mysql.",
      img: "../im/enedis.png",
      github: " ",
      site: " ",
    },
  ];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute uppercase top-20 md:top-24  tracking-[20px] text-xl md:text-2xl text-[#424242] font-human">
        Projets
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-white scrollbar-thumb-black ">
        {Projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen ">
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className=" h-28 md:h-72 xl:h-80 object-contain mx-auto mt-20 md:mt-0  "
              src={project.img}
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
              <h4 className=" text-lg md:text-2xl font-semibold text-center font-flav uppercase">
                <span className="underline decoration-4 decoration-[#805231]">
                  Projet {project.id} :
                </span>{" "}
                {project.title}
                <div className="flex justify-center space-x-6 cursor-pointer mt-6">
                  <a target="_blank" href={project.github}>
                    <img
                      className="h-7 w-7"
                      src="../im/github-logo.png"
                      alt=""
                    />
                  </a>
                  <a target="_blank" href={project.site}>
                    <img className="h-7 w-7" src="../im/link.png" alt="" />
                  </a>
                </div>
              </h4>
              <p className="text-sm  lg:text-md text-justify ">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-gray-500/20 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
