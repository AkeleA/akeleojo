const projects = [
  {
    name: "vitalenex",
    desc: "Medical Access with AI",
    link: "https://vitalenex.com",
  },
  {
    name: "Onyiisi",
    desc: "Shop intricately for jewels",
    link: "https://onyiisi.com",
  },
];

const Projects = () => {
  return (
    <div className="relative max-w-lg w-full z-30 flex flex-col gap-4 items-start p-4.5 rounded-md shadow-2xl">
      <div>
        <h2 className="text-xl font-semibold">Projects</h2>
        <p className="text-blue-900 italic text-sm">
          A few things I&apos;ve tried my hand on
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
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-gray-500">{project.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
