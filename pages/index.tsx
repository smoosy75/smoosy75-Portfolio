import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(#F8F8F8)] text-black h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mustapha's Portfolio</title>
      </Head>
      <Header />
      <section id="pres" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
