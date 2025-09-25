import "./header.css";
import logo from "../../assets/logo.png";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <div className="language-section-top">
        <ReactCountryFlag countryCode="ES" svg style={{ width: '20px', height: '15px', marginRight: '8px' }} />
        <span style={{ margin: '0 4px' }}>|</span>
        <ReactCountryFlag countryCode="GB" svg style={{ width: '20px', height: '15px', marginLeft: '8px' }} />
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
            Sobre nosotros
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={800} 
            offset={10}
            className="nav-link"
          >
            Portfolio
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={800} 
            offset={0}
            className="nav-link"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
