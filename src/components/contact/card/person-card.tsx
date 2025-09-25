import "./person-card.css";
import { MdEmail } from "react-icons/md";

interface PersonCardProps {
  name: string;
  imageUrl: string;
  email: string;
  linkedinUrl?: string;
  imageAlt?: string;
}

export default function PersonCard({ 
  name, 
  imageUrl, 
  email, 
  linkedinUrl,
  imageAlt = name
}: PersonCardProps) {
  const imageContent = (
    <img src={imageUrl} alt={imageAlt} className="contact-photo" />
  );

  return (
    <div className="contact-person-card">
      {linkedinUrl ? (
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="photo-link"
        >
          {imageContent}
        </a>
      ) : (
        imageContent
      )}
      <div className="contact-person-name">{name}</div>
      <div className="contact-email">
        <MdEmail style={{marginRight: '8px', fontSize: '20px', color: '#bdaaff'}} />
        {email}
      </div>
    </div>
  );
}