import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Nuestros Proyectos</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Proyecto 2</h3>
          <p>Descripción breve del proyecto 2.</p>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Proyecto 3</h3>
          <p>Descripción breve del proyecto 3.</p>
        </div>
      </div>
    </section>
  );
}
