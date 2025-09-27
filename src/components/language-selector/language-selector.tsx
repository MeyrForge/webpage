import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../contexts/language-context";
import type { Language } from "../../utils/translations";
import "./language-selector.css";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage: Language) => {
    if (selectedLanguage !== language) {
      setLanguage(selectedLanguage);
    }
  };

  return (
    <div className="language-selector">
      <div className="flag-container" onClick={() => handleLanguageChange('es')}>
        <ReactCountryFlag 
          countryCode="ES" 
          svg 
          className={`flag ${language === 'es' ? 'active' : ''}`}
          style={{ width: '1.5rem', height: '1rem' }}
          title="Español"
        />
        <div className={`flag-underline ${language === 'es' ? 'active' : ''}`}></div>
      </div>
      <span className="separator">|</span>
      <div className="flag-container" onClick={() => handleLanguageChange('en')}>
        <ReactCountryFlag 
          countryCode="GB" 
          svg 
          className={`flag ${language === 'en' ? 'active' : ''}`}
          style={{ width: '1.5rem', height: '1rem' }}
          title="English"
        />
        <div className={`flag-underline ${language === 'en' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}