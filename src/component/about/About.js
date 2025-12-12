import React from 'react';
import MyPhoto from "../../Assets/image.png";
import "./about.css";
import { BiFolder, BiMedal, BiUser } from 'react-icons/bi';

function About() {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MyPhoto} alt="My headshot" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiMedal className='about__icon' />
                            <h5>Experience</h5>
                            <small>2.5+ years hands-on Full Stack Web Development experience (MERN Stack)</small>
                        </article>

                        <article className='about__card'>
                            <BiUser className='about__icon' />
                            <h5>Education</h5>
                            <small> MCA [Online] Uttaranchal University 2024-2026, <br/> Bachelor of Arts (Delhi University)2019-2023</small>
                        </article>

                        <article className='about__card'>
                            <BiFolder className='about__icon' />
                            <h5>Skills & Hobbies</h5>
                            <small>MERN Stack, NestJS, ReactJS, Node.js, MongoDB, AWS, AI Integration, Traveling, Music</small>
                        </article>
                    </div>

                    <p>
                        I am a passionate Full Stack Developer with 2.5 years of hands-on experience in building scalable web applications
                        using the MERN stack. I have strong problem-solving skills, love learning new technologies, and enjoy experimenting
                        with innovative solutions. I am detail-oriented, quick learner, and have a strong ability to communicate effectively.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;
