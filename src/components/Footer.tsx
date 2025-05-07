// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Me */}
        <div className="footer-section">
          <h3>Cheekati Vanshitha</h3>
          <p>
            Passionate Full-Stack Developer specializing in modern web technologies.
            Building fast, accessible, and user-friendly applications.
          </p>
          <p><strong>“Code. Create. Inspire.”</strong></p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><strong>Email:</strong> vanshitha2327@gmail.com</p>
          <p><strong>Location:</strong> Warangal, Telangana</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/vanshitha-cheekati-aa2719252/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Vanshitha23" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:vanshitha2327@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
