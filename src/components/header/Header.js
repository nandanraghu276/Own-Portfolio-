import "./Header.css";
import Me from "../../assets/me4.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs"; 
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Raghunandan Saraswat</h1>
        <h5 className="text-light">Front-end  Developer</h5>
        <div className="cta">
          <button className="btn">Download CV</button>
          <button className="btn btn-primary">Hire Me</button>
        </div>
       
        <div className="header__socials">
        <a
              href="https://www.linkedin.com/in/raghu-nandan-4b1334269"
              target="_blank"
              rel="noreferrer"
            >
            <BsLinkedin />
            </a>
          <a  href="https://github.com/nandanraghu276/"
              target="_blank"
              rel="noreferrer" ><BsGithub /></a>
        </div>
        <div className="me">
          <img src={Me} alt="me" className="me__img" />
        </div>
        
        <a href='#about'className="scroll__down icon">
        <BsFillArrowDownCircleFill /></a>
        <a href='#about'className="scroll__down_text">scroll down</a>
      </div>
    </header>
  );
}

export default Header;
