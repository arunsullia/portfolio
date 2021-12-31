import React, { useRef } from "react";
import s from "./styles.module.css";

function Navbar({top,projectsRef,servicesRef,contactRef}) {
  const mobMenu = useRef();

  const toggleMenu = () => {
    mobMenu.current.classList.toggle(s.toggleMenu);
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView();
  }

  return (
    <header ref={top}>
      <nav>
        <h2>LOGO</h2>
        <div className={s.menuIcon} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div ref={mobMenu} className={s.mobMenu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li onClick={()=>{scrollTo(projectsRef)}}>Projects</li>
            <li onClick={()=>{scrollTo(servicesRef)}}>Services</li>
            <li onClick={()=>{scrollTo(contactRef)}}>Contact</li>
          </ul>
          <form>
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
