import About from "@/components/about";
import Hero from "@/components/hero";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <SectionDivider/>
      <About />
    </main>
  )
}
