import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer"

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
