import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer__logo' href="#contact">Manish Verma</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/manish-verma-b8a036219/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      <div className="footer__contact">
        <small>&copy; 2025 Manish Verma. All rights reserved.</small>
        <br />
        <small><BsFillTelephoneFill /> +91 7053468609</small>
      </div>
    </footer>
  );
}

export default Footer;
