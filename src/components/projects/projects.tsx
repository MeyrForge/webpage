import "./projects.css";
import ProjectCard from "./card";
import tomaBien from "../../assets/tomabien.png";
import polarSync from "../../assets/polarsync.png";
import bagOfHolding from "../../assets/bagofholding.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Toma Bien",
      description: "Tu medicación, siempre a tiempo",
      imageUrl: tomaBien,
      link: "https://github.com/MeyrForge/tomabien"
    },
    {
      id: 2,
      title: "Polar Sync",
      description: "Monitorea, comprende, avanza",
      imageUrl: polarSync,
      link: ""
    },
    {
      id: 3,
      title: "Bag of Holding - DM's Vault",
      description: "Porque hasta el DM necesita su inventario",
      imageUrl: bagOfHolding,
      link: ""
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
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
