import { useState } from "react";
import "./hero.css";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="subtitle">SOMOS</span>
        <h1 className="highlight">MEYR FORGE</h1>
        <p>
          Transformamos ideas en aplicaciones móviles innovadoras. Cada proyecto es una oportunidad 
          para aplicar lo que hemos aprendido en la vida y seguir creciendo como desarrolladores. 
          Creamos soluciones útiles que conectan con las personas y mejoran su día a día.
        </p>
        <div className="tech-stack">
          <h3>Tecnologías que manejamos</h3>
          <div className={`tech-grid ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <span className="tech-item">Android Studio</span>
            <span className="tech-item">Android SDK</span>
            <span className="tech-item">Kotlin</span>
            <span className="tech-item">Git</span>
            <span className="tech-item">SQL</span>
            <span className="tech-item">JetpackCompose</span>
            <span className="tech-item">Inyección de dependencias (Dagger Hilt)</span>
            <span className="tech-item">Testing (JUnit 5)</span>
            <span className="tech-item">CI/CD (GitHub Actions)</span>
            <span className="tech-item">Base de datos en dispositivo (Room)</span>
            <span className="tech-item">Consumo de API REST (Retrofit2)</span>
            <span className="tech-item">Manejo de imágenes (Coil)</span>
            <span className="tech-item">MVC</span>
            <span className="tech-item">MVVM</span>
            <span className="tech-item">Clean Architecture</span>
            <span className="tech-item">Firebase</span>
          </div>
          <button className="expand-button" onClick={toggleExpanded}>
            <span className={`arrow ${isExpanded ? 'up' : 'down'}`}>▼</span>
          </button>
        </div>
      </div>
    </section>
  );
}
