import "./Projects.css";
import icon from "./../../Images/link-Icon.png";
import Css from "./../../Images/css.png";
import Html from "./../../Images/html.png";
import Js from "./../../Images/JavaScript.png";
import React from "./../../Images/React.png";
import Kotlin from "./../../Images/Kotlin.png";
import Swift from "./../../Images/Swift.png";
import Dart from "./../../Images/Dart.png";
import Firebase from "./../../Images/Firebase.png";
import Mongodb from "./../../Images/Mongodb.png";
import { useEffect, useState } from "react";
import { getMobileProjects, getWebProjects } from "../../Api/projectsDataApi";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Projects = () => {
  const [mobileProjects, setMobileProjects] = useState([]);
  const [webProjects, setWebProjects] = useState([]);

  useEffect(() => {
    callProjectApi();
  }, []);

  async function callProjectApi() {
    setMobileProjects(await getMobileProjects());
    setWebProjects(await getWebProjects());
  }

  return (
    <>
      <section id="Projects-Container">
        <div id="Projects-Wrapper">
          <h3 className="Project-Title-Text">Mobile Platform</h3>
          <section className="Project-Grid-Container">
            <ProjectCard projectData={mobileProjects} />
          </section>
          <h3 className="Project-Title-Text">Web Platform</h3>
          <section className="Project-Grid-Container">
            <ProjectCard projectData={webProjects} />
          </section>
        </div>
      </section>
    </>
  );
};

function ProjectCard({ projectData }) {
  if (projectData.length !== 0) {
    return (
      <>
        {projectData.map((data, index) => (
          <ScrollAnimation animateIn="animate__fadeInUp" duration={0.75} animateOnce={true}>
            <section className="Project-Card-Container" key={index}>
              <div className="Project-Card-Top">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <img
                    className="Project-Card-Link-Icon"
                    src={icon}
                    alt="icon"
                  />
                </a>
              </div>
              <div className="Project-Card-Bottom">
                <ProjectImages imageArray={data.icons} />
              </div>
            </section>
          </ScrollAnimation>
        ))}
      </>
    );
  }
}

function ProjectImages({ imageArray }) {
  var imageSrcArray = [];

  // Link to images based on what the imageArray contains
  if (imageArray.includes("react")) imageSrcArray.push(React);
  if (imageArray.includes("js")) imageSrcArray.push(Js);
  if (imageArray.includes("html")) imageSrcArray.push(Html);
  if (imageArray.includes("css")) imageSrcArray.push(Css);
  if (imageArray.includes("dart")) imageSrcArray.push(Dart);
  if (imageArray.includes("kotlin")) imageSrcArray.push(Kotlin);
  if (imageArray.includes("swift")) imageSrcArray.push(Swift);
  if (imageArray.includes("firebase")) imageSrcArray.push(Firebase);
  if (imageArray.includes("mongodb")) imageSrcArray.push(Mongodb);

  return imageSrcArray.map((src, index) => (
    <img src={src} className="Project-Card-Images" alt="icon" key={index} />
  ));
}

export default Projects;
