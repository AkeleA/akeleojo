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
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-4 py-4 space-y-4 bg-background text-foreground"
    >
      <h2 className="text-3xl font-semibold text-left">Projects</h2>
      <div className="flex flex-col gap-4 w-full mx-auto">
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            title={p.name}
            description={p.desc}
            link={p.link}
            badges={p.badges}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
