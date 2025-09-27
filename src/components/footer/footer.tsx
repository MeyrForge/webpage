import { useLanguage } from "../../contexts/language-context";
import "./footer.css";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <p><FaCopyright style={{ marginRight: '6px', verticalAlign: 'middle' }} /> {new Date().getFullYear()} MEYR FORGE. {t('footerRights')}</p>
    </footer>
  );
}