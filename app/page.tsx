// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen">
      <div className="relative z-0">
        <Hero
          name="Akeleojo Achor"
          title="Software Engineer"
          subtitle="Frontend Developer"
          description="Currently building vitalenex.com to bridge the gap between users and healthcare using AI."
          techStack={[
            "Node.js",
            "PostgreSQL",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
          ]}
          ctaLink="https://calendly.com/achorisaac/30min"
        />
        <div className="w-full">
          <div className="w-full max-w-6xl mx-auto py-3.5 flex flex-col md:flex-row gap-4 items-start justify-between">
            <Projects />
            <Blog />
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
