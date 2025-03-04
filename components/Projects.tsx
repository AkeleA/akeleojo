const projects = [
  { name: "cyclic.sh", desc: "Serverless web app PaaS", link: "#" },
  {
    name: "Rabbit Crowd Library",
    desc: "Public library for policies",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="mt-16 px-5">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="mt-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="block p-4 border rounded-md my-2"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-gray-500">{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
