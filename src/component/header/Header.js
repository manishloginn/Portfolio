import React from 'react';
import { CONTACT } from '../../constants';
import Typewriter from 'typewriter-effect';
import Action from './Action';
import Social from './Social';
import { Player } from '@lottiefiles/react-lottie-player';
import computerAnimation from "../../lattie/animate.json";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
  <div className="header__content">
  <h5>Hello, I'm</h5>
  <h1>{CONTACT.name}</h1>
  <h5 className="text-light">
    <Typewriter
      options={{
        strings: [ 'Full Stack Web Developer (MERN Stack)', 'Software Engineer | 2.5 Years Experience', "Quick Learner"],
        autoStart: true,
        loop: true,
        delay: 80,
      }}
    />
  </h5>

  <div className="actions-social">
    <Action />
    <Social />
  </div>

  <a className="scroll__down" href="#contact">Scroll Down</a>
</div>


        <div className='header__animation'>
          <Player
            autoplay
            loop
            src={computerAnimation}
            className="animation__item"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
