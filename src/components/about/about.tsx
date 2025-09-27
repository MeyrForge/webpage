import { useLanguage } from "../../contexts/language-context";
import "./about.css";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section className="about" id="about">
      <h2>{t('aboutTitle')}</h2>
      <div className="about-content">
        <p>{t('aboutText1')}</p>
        <p>{t('aboutText2')}</p>
        <p>{t('aboutText3')}</p>
        <p>{t('aboutText4')}</p>
      </div>
    </section>
  );
}
