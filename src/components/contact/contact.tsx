import { useLanguage } from "../../contexts/language-context";
import "./contact.css";
import PersonCard from "./card";
import aylenImg from "../../assets/aylen.jpg";
import lucianoImg from "../../assets/luciano.jpg";

export default function Contact() {
  const { t } = useLanguage();
  
  const persons = [
    {
      id: 1,
      name: "Aylen Aguino",
      imageUrl: aylenImg,
      email: "ailenaguino@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/aylen-maria-aguino-350a98202/"
    },
    {
      id: 2,
      name: "Luciano de la Iglesia",
      imageUrl: lucianoImg,
      email: "l.delaiglesia@hotmail.com",
      linkedinUrl: "https://www.linkedin.com/in/lucianodelaiglesia/"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-header-row">
        <h2 className="contact-title">{t('contactTitle')}</h2>
        <p className="contact-description">
          {t('contactDescription')}
        </p>
      </div>
      <div className="contact-persons-row">
        {persons.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            imageUrl={person.imageUrl}
            email={person.email}
            linkedinUrl={person.linkedinUrl}
          />
        ))}
      </div>
    </section>
  );
}