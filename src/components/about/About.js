import React from "react";
import './About.css'
import { FaAward } from "react-icons/fa";
import Me from "../../assets/me1.jpg";



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
          </div>
          <p>
            As a junior front-end developer with no professional experience
            yet, I am eager to learn and grow in my career.I am comfortable working
            with a variety of programming languages, including HTML, CSS, and
            JavaScript, and have experience using development tools such as Git
            and command-line interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
