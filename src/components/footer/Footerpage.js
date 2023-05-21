import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import './Footerpage.css';

const Footerpage = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Enlaces útiles</h3>
        <ul>
          <li><a>Términos y condiciones</a></li>
          <li><a>Política de privacidad</a></li>
          <li><a>Preguntas frecuentes</a></li>
          <li><a>Contacto</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Información de la tienda</h3>
        <ul>
          <li>Dirección: Calle 65 5a-56</li>
          <li>Teléfono: (+57) 310-456-7890</li>
          <li>Correo: info@libreria-imperial.com</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Síguenos</h3>
        <div className="social-icons">
          <a><FontAwesomeIcon icon={faFacebookF} /></a>
          <a><FontAwesomeIcon icon={faTwitter} /></a>
          <a><FontAwesomeIcon icon={faInstagram} /></a>
          <a><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <div className="newsletter">
          <form>
            <input type="email" placeholder="Ingresa tu email" />
            <button type="submit"><FontAwesomeIcon icon={faEnvelope} /></button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footerpage;
