import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Tools />
      <Projects />
    </main>
  );
}
