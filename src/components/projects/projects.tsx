import "./projects.css";
import ProjectCard from "./card";
import tomaBien from "../../assets/tomabien.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Toma Bien",
      description: "Seguimiento de Toma de Medicacion",
      imageUrl: tomaBien,
      link: "https://github.com/MeyrForge/tomabien"
    },
    {
      id: 2,
      title: "Próximamente", 
      description: "",
      comingSoon: true
    },
    {
      id: 3,
      title: "Próximamente",
      description: "",
      comingSoon: true
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Nuestros Proyectos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            comingSoon={project.comingSoon}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
