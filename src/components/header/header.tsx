import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useLanguage } from "../../contexts/language-context";
import LanguageSelector from "../language-selector/language-selector";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="language-section-top">
        <LanguageSelector />
      </div>
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="Logo MEYR FORGE" className="logo" />
        </div>
        <nav className="nav-section">
          <Link 
            to="about" 
            smooth={true} 
            duration={800} 
            offset={-80}
            className="nav-link"
          >
            {t('about')}
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={800} 
            offset={10}
            className="nav-link"
          >
            {t('portfolio')}
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={800} 
            offset={0}
            className="nav-link"
          >
            {t('contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
