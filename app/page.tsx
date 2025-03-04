import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import hero from "@/public/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="relative z-0">
        <Image
          src={hero}
          alt="programmer"
          priority
          fill
          className="object-cover opacity-10"
        />
        <Header />
        <Hero />
      </div>
      <Projects />
      <Footer />
    </main>
  );
}
