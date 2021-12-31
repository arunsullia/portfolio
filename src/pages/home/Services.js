import React from "react";
import s from "./styles.module.css";
import service1 from "../../assets/service-1.png";
import service2 from "../../assets/service-2.png";
import service3 from "../../assets/service-3.png";

function Services({servicesRef}) {
  return (
    <section id={s.services} ref={servicesRef}>
      <div className={s.wrapper}>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          incidunt distinctio, sunt dolor nobis maiores minus illum temporibus
          non iusto assumenda sed eaque fuga voluptatem, blanditiis explicabo
          deserunt officiis dolores asperiores quidem? Nobis iste repellendus
          quisquam maiores illo dolores commodi unde dignissimos, neque
        </p>
        <div className={s.serviceType}>
          <div className={`${s.type} ${s.webDesign}`}>
            <div>
              <img src={service1} alt="service-1" />
            </div>
            <h2>Web design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              quisquam.
            </p>
          </div>
          <div className={`${s.type} ${s.respDesign}`}>
            <div>
              <img src={service2} alt="service-2" />
            </div>
            <h2>Responsive design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              quisquam.
            </p>
          </div>
          <div className={`${s.type} ${s.webDev}`}>
            <div>
              <img src={service3} alt="service-3" />
            </div>
            <h2>Web Development</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              quisquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
