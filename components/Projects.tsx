import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "vitalenex",
    desc: "Medical Access with AI",
    link: "https://vitalenex.com",
    Role: "Lead Frontend Developer",
    badges: [
      { label: "Next.js", logo: { name: "nextdotjs", color: "000000" } },
      { label: "TypeScript", logo: { name: "typescript", color: "3178C6" } },
      { label: "Tailwind CSS", logo: { name: "tailwindcss", color: "38B2AC" } },
    ],
  },
  {
    name: "Onyiisi",
    desc: "Shop for intricate jewels",
    link: "https://onyiisi.com",
    Role: "Fullstack Developer",
    badges: [
      { label: "Next.js", logo: { name: "nextdotjs", color: "000000" } },
      { label: "Node.js", logo: { name: "nodedotjs", color: "339933" } },
      { label: "TypeScript", logo: { name: "typescript", color: "3178C6" } },
      { label: "Tailwind CSS", logo: { name: "tailwindcss", color: "38B2AC" } },
    ],
  },
  {
    name: "Theseus",
    desc: "Speedy URL Shortener",
    link: "https://theseus-iota.vercel.app/",
    Role: "Fullstack Developer",
    badges: [
      { label: "Next.js", logo: { name: "nextdotjs", color: "000000" } },
      { label: "Node.js", logo: { name: "nodedotjs", color: "339933" } },
      { label: "TypeScript", logo: { name: "typescript", color: "3178C6" } },
      { label: "Tailwind CSS", logo: { name: "tailwindcss", color: "38B2AC" } },
    ],
  },
  // {
  //   name: "Echocheck",
  //   desc: "Shop for intricate jewels",
  //   link: "https://onyiisi.com",
  //   Role: "Fullstack Developer",
  //   badges: [
  //     { label: "Next.js", logo: { name: "nextdotjs", color: "000000" } },
  //     { label: "Node.js", logo: { name: "nodedotjs", color: "339933" } },
  //     { label: "TypeScript", logo: { name: "typescript", color: "3178C6" } },
  //     { label: "Tailwind CSS", logo: { name: "tailwindcss", color: "38B2AC" } },
  //   ],
  // },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-4 space-y-4 text-foreground"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-xl font-semibold text-left">
        Projects
      </h2>
      <div className="w-full mx-auto">
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            title={p.name}
            description={p.desc}
            link={p.link}
            role={p.Role}
            badges={p.badges}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
