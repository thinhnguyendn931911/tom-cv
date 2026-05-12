import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

const About = dynamic(() =>
  import("@/components/about").then((mod) => mod.About),
);
const Experience = dynamic(() =>
  import("@/components/experience").then((mod) => mod.Experience),
);
const Projects = dynamic(() =>
  import("@/components/projects").then((mod) => mod.Projects),
);
const Skills = dynamic(() =>
  import("@/components/skills").then((mod) => mod.Skills),
);
const Achievements = dynamic(() =>
  import("@/components/achievements").then((mod) => mod.Achievements),
);
const Contact = dynamic(() =>
  import("@/components/contact").then((mod) => mod.Contact),
);
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
