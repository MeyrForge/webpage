import { useState } from "react";
import { useLanguage } from "../../contexts/language-context";
import "./hero.css";

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="subtitle">{t('heroSubtitle')}</span>
        <h1 className="highlight">{t('heroTitle')}</h1>
        <p>
          {t('heroDescription')}
        </p>
        <div className="tech-stack">
          <h3>{t('techStackTitle')}</h3>
          <div className={`tech-grid ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <span className="tech-item">Android Studio</span>
            <span className="tech-item">Android SDK</span>
            <span className="tech-item">Kotlin</span>
            <span className="tech-item">Git</span>
            <span className="tech-item">SQL</span>
            <span className="tech-item">JetpackCompose</span>
            <span className="tech-item">{t('techDependencyInjection')}</span>
            <span className="tech-item">Testing (JUnit 5)</span>
            <span className="tech-item">CI/CD (GitHub Actions)</span>
            <span className="tech-item">{t('techOnDeviceDb')}</span>
            <span className="tech-item">{t('techApiConsumption')}</span>
            <span className="tech-item">{t('techImageHandling')}</span>
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
