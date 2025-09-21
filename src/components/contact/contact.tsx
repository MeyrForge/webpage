import "./contact.css";
import { MdEmail } from "react-icons/md";
import ailenImg from "../../assets/ailen.jpg";
import lucianoImg from "../../assets/luciano.jpg";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header-row">
        <h2 className="contact-title">¡Contáctanos!</h2>
        <p className="contact-description">
          Somos desarrolladores móviles con sólidos conocimientos técnicos y ganas de seguir creciendo. 
          Si tu empresa busca talentos comprometidos que aporten frescura y entusiasmo a sus proyectos, 
          nos encantaría formar parte de tu equipo y contribuir con nuestras habilidades.
        </p>
      </div>
      <div className="contact-persons-row">
        <div className="contact-person-card">
          <a href="https://www.linkedin.com/in/aylen-maria-aguino-350a98202/" target="_blank" rel="noopener noreferrer" className="photo-link">
            <img src={ailenImg} alt="Ailen Aguino" className="contact-photo" />
          </a>
          <div className="contact-person-name">Ailen Aguino</div>
          <div className="contact-email">
            <MdEmail style={{marginRight: '8px', fontSize: '20px', color: '#bdaaff'}} />
            ailenaguino@gmail.com
          </div>
        </div>
        <div className="contact-person-card">
          <a href="https://www.linkedin.com/in/lucianodelaiglesia/" target="_blank" rel="noopener noreferrer" className="photo-link">
            <img src={lucianoImg} alt="Luciano de la Iglesia" className="contact-photo" />
          </a>
          <div className="contact-person-name">Luciano de la Iglesia</div>
          <div className="contact-email">
            <MdEmail style={{marginRight: '8px', fontSize: '20px', color: '#bdaaff'}} />
            l.delaiglesia@hotmail.com
          </div>
        </div>
      </div>
    </section>
  );
}