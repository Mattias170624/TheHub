import "./Projects.css";
import icon from "./../../Images/link-Icon.png";
import css from "./../../Images/css.png";
import html from "./../../Images/html.png";
import js from "./../../Images/JavaScript.png";
import react from "./../../Images/React.png";
import kotlin from "./../../Images/Kotlin.png";
import swift from "./../../Images/Swift.png";
import dart from "./../../Images/Dart.png";
import firebase from "./../../Images/Firebase.png";
import mongodb from "./../../Images/Mongodb.png";

const Projects = () => {
  return (
    <>
      <section id="Projects-Container">
        <div id="Projects-Wrapper">
          <h2 className="Project-Title-Text">Mobile platform</h2>
          <ProjectCard type="Mobile" />
        </div>
      </section>
    </>
  );
};

function ProjectCard({ type }) {
  return (
    <div className="Project-Cards-Row">
      {/* forEach project in ProjectMobile...*/}
      <section className="Project-Card-Container">
        <div className="Project-Card-Top">
          <h3>Rent Flix</h3>
          <p>
            orem Ipsum has been the induummy text ever s efefefe fef ef e ince
            the 150 ummy text ever s
          </p>
          <a href="https://www.google.com" target="_blank">
            <img className="Project-Card-Link-Icon" src={icon} />
          </a>
        </div>

        <div className="Project-Card-Bottom">
          {/* forEach project in ProjectMobile... images index instead of css...*/}
          <img src={css} />
          <img src={css} />
          <img src={css} />
          <img src={css} />
        </div>
      </section>
    </div>
  );
}

export default Projects;
