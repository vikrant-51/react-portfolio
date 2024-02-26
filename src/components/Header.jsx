import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import resumePDF from "../assets/Resume.pdf";

const Header = ({ menuOpen, setMenuOpen }) => {

  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen?<AiOutlineClose/>:<AiOutlineMenu />}
      </button>
    </>
  );
};

const NavContent = ({setMenuOpen}) => (
  <>
    <h2>Vikrant</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
      <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:vikrantpathania59@gmail.com">
      <button>Email</button>
    </a>
    <a href={resumePDF} download>
      <button>Resume</button>
    </a>
  </>
);

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}  />
    </div>
  );
};

export default Header;
