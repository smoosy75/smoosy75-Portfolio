import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import "../i18n.js";

export default function Home() {
  return (
    <div className="bg-[rgb(#C4C4CC)] text-black h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-white scrollbar-thumb-black scroll-smooth">
      <Head>
        <title>Mustapha SAID - Développeur</title>
        <link rel="shortcut icon" type="image/x-icon" href="/Logo.png" />
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center ">
            <HomeIcon className="h-10 w-10 rounded-full text-black animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
