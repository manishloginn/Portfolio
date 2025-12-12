import React from 'react';
import "./contactstyle.css";
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
  return (
    <section id='contact' className='contactstyle'>
      <div className="contact-header">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className='contact-cards'>
        <div className='contact-card'>
          <HiOutlineMail className='icon' />
          <h4>Email</h4>
          <h5>manishv7714@gmail.com</h5>
          <a href="mailto:manishv7714@gmail.com" className='btn-contact'>Email me!</a>
        </div>

        <div className='contact-card'>
          <BsLinkedin className='icon' />
          <h4>LinkedIn</h4>
          <h5>Manish Verma</h5>
          <a href="https://www.linkedin.com/in/manish-verma-b8a036219/" target="_blank" rel="noopener noreferrer" className='btn-contact'>Connect!</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
