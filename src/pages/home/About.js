import React from "react";
import s from "./styles.module.css";
import profilePic from "../../assets/profile.jpg";

function About() {
  const skills = [
    {
      id: 1,
      skill: "JavaScript",
      rating: 0.75,
    },
    {
      id: 2,
      skill: "Html",
      rating: 0.7,
    },
    {
      id: 3,
      skill: "css",
      rating: 0.6,
    },{
      id: 4,
      skill: "React js",
      rating: 0.65,
    },
    {
      id: 5,
      skill: "php",
      rating: 0.5,
    },
    {
      id: 6,
      skill: "firebase",
      rating: 0.4,
    },
  ];

  return (
    <section id={s.about}>
      <div className={s.wrapper}>
        <h1>About</h1>
        <div className={s.profile}>
          <img src={profilePic} alt="profile-pic" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            incidunt distinctio, sunt dolor nobis maiores minus illum temporibus
            non iusto assumenda sed eaque fuga voluptatem, blanditiis explicabo
            deserunt officiis dolores asperiores quidem? Nobis iste repellendus
            quisquam maiores illo dolores commodi unde dignissimos, neque
          </p>
        </div>
        <h2>Skills</h2>
        <div className={s.skillSet}>
          {skills &&
            skills.map((item, index) => {
              return (
                <div className={s.skill} key={item.id}>
                  <ul>
                    <li>{item.skill}</li>
                    <li>{item.rating * 100}%</li>
                  </ul>
                  <div className={s.fillPath}>
                    <div className={s.percentageFill} style={{width:`${item.rating * 100}%`}}></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default About;
