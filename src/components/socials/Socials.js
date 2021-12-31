import React, { useEffect, useRef } from "react";
import s from "./styles.module.css";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { navigateTo } from "../../utilities/helper";
import { socialLinks } from "../../constants/links";

function Socials({ top }) {
  const chevron = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    if (scrollPosition > 500) {
      chevron.current.style.right = "25px";
    } else {
      chevron.current.style.right = "-65px";
    }
  };

  const goToTop = () => {
    top.current.scrollIntoView();
  };

  return (
    <>
      <div className={s.social}>
        <img
          src={facebook}
          alt="facebook"
          onClick={() => navigateTo(socialLinks.facebook)}
        />
        <img
          src={linkedin}
          alt="linkedin"
          onClick={() => navigateTo(socialLinks.linkedin)}
        />
        <img
          src={twitter}
          alt="twitter"
          onClick={() => navigateTo(socialLinks.twitter)}
        />
        <img
          src={instagram}
          alt="instagram"
          onClick={() => navigateTo(socialLinks.instagram)}
        />
      </div>
      <div className={s.chevron} onClick={goToTop} ref={chevron}>
        <div></div>
      </div>
    </>
  );
}

export default Socials;
