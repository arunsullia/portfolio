import React from "react";
import s from "./styles.module.css";
import traffic from "../../assets/traffic.png";
import todo from "../../assets/todo.png";
import pic3 from "../../assets/pic-3.jpg";
import pic4 from "../../assets/pic-4.jpg";
import pic5 from "../../assets/pic-5.jpg";
import pic6 from "../../assets/pic-6.jpg";
import pic7 from "../../assets/pic-7.jpg";
import pic8 from "../../assets/pic-8.jpg";
import { projectLinks } from "../../constants/links";
import { navigateTo } from "../../utilities/helper";

function Projects({ projectsRef }) {
  return (
    <section id={s.projects} ref={projectsRef}>
      <div className={s.wrapper}>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          incidunt distinctio, sunt dolor nobis maiores minus illum temporibus
          non iusto assumenda sed eaque fuga voluptatem, blanditiis explicabo
          deserunt officiis dolores asperiores quidem? Nobis iste repellendus
          quisquam maiores illo dolores commodi unde dignissimos, neque
        </p>
        <div className={s.projectsImg}>
          <div
            className={s.projectContainer}
            onClick={() => navigateTo(projectLinks.traffic)}
          >
            <img src={traffic} alt="traffic-img" />
            <div className={s.projectTitle}>Automatic Traffic Signal</div>
          </div>

          <div
            className={s.projectContainer}
            onClick={() => navigateTo(projectLinks.todo)}
          >
            <img src={todo} alt="todo-img" />
            <div className={s.projectTitle}>Todo List</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic3} alt="project-img" />
            <div className={s.projectTitle}>project 3</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic4} alt="pic-4.jpg" />
            <div className={s.projectTitle}>project 3</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic5} alt="pic-5.jpg" />
            <div className={s.projectTitle}>project 3</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic6} alt="pic-6.jpg" />
            <div className={s.projectTitle}>project 3</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic7} alt="pic-7.jpg" />
            <div className={s.projectTitle}>project 3</div>
          </div>

          <div className={s.projectContainer}>
            <img src={pic8} alt="pic-8.jpg" />
            <div className={s.projectTitle}>project 3</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
