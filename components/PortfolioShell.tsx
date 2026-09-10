import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Contact from "@/components/Contact";

const projects = [
  { number: "01", name: "Vitalenex", description: "An AI-assisted healthcare product designed to make medical access clearer and more direct.", role: "Lead Frontend Developer", link: "https://vitalenex.com", stack: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { number: "02", name: "Onyiisi", description: "A polished commerce experience for discovering and buying intricate jewellery online.", role: "Full-stack Developer", link: "https://onyiisi.com", stack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"] },
  { number: "03", name: "Theseus", description: "A fast URL shortener built around a straightforward experience and a modern edge stack.", role: "Full-stack Developer", link: "https://theseus-iota.vercel.app/", stack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"] },
];

const capabilities = [
  { title: "Frontend engineering", detail: "Accessible, responsive interfaces with React, Next.js, TypeScript, and thoughtful component systems." },
  { title: "Backend & data", detail: "Product APIs and dependable data flows using Node.js and PostgreSQL." },
  { title: "Production delivery", detail: "Three featured products across healthcare, commerce, and developer tooling, with attention to performance and security." },
];

export default function PortfolioShell() {
  return (
    <>
      <section className="hero-shell" aria-labelledby="hero-title">
        <p className="eyebrow">Software engineer · Lagos, Nigeria</p>
        <h1 id="hero-title">Akeleojo Achor<span>I build web products that stay fast, clear, and dependable.</span></h1>
        <p className="hero-copy">I help product teams turn complex requirements into accessible, production-ready experiences with React, Next.js, Node.js, and PostgreSQL.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">See selected work <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="projects-title">Products I&apos;ve helped ship</h2><p>Three examples of the range I bring to product teams.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-row" href={project.link} target="_blank" rel="noreferrer" key={project.name} aria-label={`${project.name}, ${project.role}. Opens in a new tab`}>
              <span className="project-number">{project.number}</span>
              <div className="project-copy">
                <div className="project-title-line"><h3>{project.name}</h3><ArrowUpRight size={20} aria-hidden="true" /></div>
                <p>{project.description}</p><strong>{project.role}</strong>
                <ul aria-label={`${project.name} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <div className="section-heading"><p className="eyebrow">Capabilities</p><h2 id="skills-title">What I bring to the build</h2></div>
        <div className="capability-grid">
          {capabilities.map((capability) => <article key={capability.title}><Check size={18} aria-hidden="true" /><h3>{capability.title}</h3><p>{capability.detail}</p></article>)}
        </div>
      </section>

      <section id="about" className="section about" aria-labelledby="about-title">
        <div className="section-heading"><p className="eyebrow">About</p><h2 id="about-title">I care about software people can trust.</h2></div>
        <div className="about-copy">
          <p>I&apos;m a software engineer working across frontend and backend systems. I&apos;ve built for healthcare, commerce, payments, real-time products, and developer tooling—places where correctness matters as much as the interface.</p>
          <p>I like untangling difficult product problems, making sensible technical trade-offs, and leaving code easier to reason about than I found it. If your team values accessibility, security, and long-term maintainability, we&apos;ll work well together.</p>
          <a href="/Akeleojo_Achor_Resume.pdf" target="_blank" rel="noreferrer" className="text-link">Read my résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="section-heading"><p className="eyebrow">Contact</p><h2 id="contact-title">Have a product problem worth solving?</h2><p>Tell me what you&apos;re building and where you need help. I&apos;ll get back to you directly.</p><div className="contact-links" aria-label="Social profiles"><a href="https://github.com/AkeleA" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/akeleojo-achor-1a8557172/" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
        <Contact />
      </section>
    </>
  );
}
