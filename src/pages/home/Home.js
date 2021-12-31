import React, { useRef } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Socials from "../../components/socials/Socials";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

function Home() {
  const top = useRef();
  const projectsRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <Navbar
        top={top}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <About />
      <Projects projectsRef={projectsRef} />
      <Services servicesRef={servicesRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      <Socials top={top}/>
    </>
  );
}

export default Home;
