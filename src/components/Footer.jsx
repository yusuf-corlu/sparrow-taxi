import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com/sparrowtaxi" target="_blank" rel="noopener noreferrer" className="social-link facebook">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://instagram.com/sparrowtaxi" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://twitter.com/sparrowtaxi" target="_blank" rel="noopener noreferrer" className="social-link twitter">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://youtube.com/sparrowtaxi" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          <FaYoutube className="social-icon" />
        </a>
      </div>
      <p>&copy; 2023 Sparrow Taksi. Tüm hakları saklıdır.</p>
    </footer>
  );
};

export default Footer; 