const projects = [
  {
    name: "vitalenex",
    desc: "Medical Access with AI",
    link: "https://vitalenex.com",
    Role: "Lead Frontend Developer",
  },
  {
    name: "Onyiisi",
    desc: "Shop for intricate jewels",
    link: "https://onyiisi.com",
    Role: "Fullstack Developer",
  },
];

const Projects = () => {
  return (
    <div className="relative max-w-lg w-full z-30 flex flex-col gap-4 items-start p-4.5 rounded-md shadow-2xl">
      <div className="font-outfit">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-[#CCCCFF] italic text-sm">
          A few things I&apos;ve tried my hand at
        </p>
      </div>
      <div className="w-full">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col w-full p-4 border rounded-md my-2"
          >
            <h3 className="font-bold text-xl">{project.name}</h3>
            <p className="text-white font-normal">{project.desc}</p>
            <p className="text-[#40B5F0] font-semibold">{project.Role}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
