import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ParticlesBackground from "./components/ParticlesBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}
