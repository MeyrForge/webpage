import { useLanguage } from "../../contexts/language-context";
import "./projects.css";
import ProjectCard from "./card";
import tomaBien from "../../assets/tomaBien.png";
import polarSync from "../../assets/polarSync.png";
import polarSyncEng from "../../assets/polarSyncEng.png";
import bagOfHolding from "../../assets/bagOfHolding.png";
import bagOfHoldingEng from "../../assets/bagOfHoldingEng.png";

export default function Projects() {
  const { t, language } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "Toma Bien",
      description: t('project1Description'),
      imageUrl: tomaBien,
      link: "https://github.com/MeyrForge/tomabien"
    },
    {
      id: 2,
      title: "Polar Sync",
      description: t('project2Description'),
      imageUrl: language === 'en' ? polarSyncEng : polarSync,
      link: ""
    },
    {
      id: 3,
      title: "Bag of Holding - DM's Vault",
      description: t('project3Description'),
      imageUrl: language === 'en' ? bagOfHoldingEng : bagOfHolding,
      link: ""
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>{t('projectsTitle')}</h2>
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
