import React from "react";
import Button from "@/components/buttons/Button.jsx";
import MailICon from "@/components/icons/MailIcon.jsx";
import HeadphonesIcon from "@/components/icons/HeadphonesIcon.jsx";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <ul>
            <li>
              <h2 className="footer-title">Ubicación</h2>
              <div className="footer-divider"></div>
            </li>
            <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
            <li>Alphavile SP</li>
            <li>brasil@corebiz.ag</li>
            <li>+55 11 3090 1039</li>
          </ul>
        </div>
        <div className="footer-buttons">
          <Button color="#FFFFFF" textColor="#000000">
            <MailICon />
            <span>CONTÁCTANOS</span>
          </Button>
          <Button color="#FFFFFF" textColor="#000000">
            <HeadphonesIcon />
            <span>HABLA CON UN CONSULTOR</span>
          </Button>
        </div>
        <div className="footer-marks">
          <div className="corebiz">
            <p>Desarrollado por</p>
            <h3>corebiz</h3>
          </div>
          <div className="vtex">
            <p>Powered by</p>
            <h3>VTEX</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
