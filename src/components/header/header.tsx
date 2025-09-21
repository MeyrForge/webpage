import "./header.css";
import logo from "../../assets/logo.png";
import ReactCountryFlag from "react-country-flag";

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
          <a href="#about">Sobre nosotros</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
