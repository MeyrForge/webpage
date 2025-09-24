import "./project-card.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  link?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt = title,
  link
}: ProjectCardProps) {
  const imageContent = imageUrl ? (
    <img 
      src={imageUrl} 
      alt={imageAlt} 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        display: 'block'
      }}
    />
  ) : null;

  return (
    <div className="project-card">
      <div className="image-placeholder">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'block', 
              width: '100%', 
              height: '100%',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            {imageContent}
          </a>
        ) : (
          imageContent
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}