import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Tools from "@/components/tools";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <SectionDivider/>
      <About />
      <Tools />
      <Projects />
      <Footer />
    </main>
  )
}
