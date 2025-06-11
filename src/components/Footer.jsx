import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Light transparent version of your brand logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>AIDE</h4>
          <ul>
            <li>Nous contacter</li>
            <li>Retours et changement</li>
            <li>Expédition & livraison</li>
            <li>Suivi des expéditions</li>
            <li>Questions fréquemment posées</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>À PROPOS DE NOUS</h4>
          <ul>
            <li>À propos de nous</li>
            <li>Entreprise</li>
            <li>Opportunités de carrière</li>
            <li>Soutien aux entreprises</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>STRATÉGIES</h4>
          <ul>
            <li>Politique de confidentialité et de sécurité des données</li>
            <li>Conditions d'utilisation</li>
          </ul>
        </div>

        <div className="footer-logo">
          <img src={logo} alt="Brand Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
