import React from 'react';
import { PROJECTS } from '../../constants';
import { BsEye } from 'react-icons/bs';
import "./project.css";

function Project() {
  return (
    <section id='portfolio' className='projecthed'>
      <div className="project-header">
        <h5>My Work</h5>
        <h2>Projects</h2>
      </div>

      <div className='cartdiv'>
        {PROJECTS.map((project, index) => (
          <div className='carts' key={index}>
            <div className="carts-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className='cartbody'>
              <h5>{project.title}</h5>
              <p className='role'>{project.role || "Full Stack Developer"}</p>

              <div className='tech-stack'>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className='tech-badge'>{tech}</span>
                ))}
              </div>

              <p className='description'>{project.description}</p>

              <a href={project.url} target="_blank" rel="noopener noreferrer" className='bigeye'>
                <BsEye />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
