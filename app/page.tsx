import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import hero from "@/public/hero.png";
import Image from "next/image";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="relative z-0">
        <Image
          src={hero}
          alt="programmer"
          priority
          fill
          className="object-cover opacity-[7.5%]"
        />
        <Header />
        <Hero />
        <div className="bg-black opacity-[65%] w-full">
          <div className="w-full max-w-5xl mx-auto py-3.5 flex flex-col md:flex-row gap-4 items-start justify-between">
            <Projects />
            <Blog />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
