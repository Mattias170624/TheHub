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
import { getMobileProjects, getOtherProjects, getWebProjects } from "../../Api/projectsDataApi";

const Projects = () => {
  const [mobileProjects, setMobileProjects] = useState([]);
  const [webProjects, setWebProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    callProjectApi();
  }, []);

  async function callProjectApi() {
    setMobileProjects(await getMobileProjects());
    setWebProjects(await getWebProjects());
    setOtherProjects(await getOtherProjects());
  }

  return (
    <>
      <section id="Projects-Container">
        <div id="Projects-Wrapper">
          <h2 className="Project-Title-Text">Mobile platform</h2>
          <ProjectCard projectData={mobileProjects} />
          <h2 className="Project-Title-Text">Web platform</h2>
          <ProjectCard projectData={webProjects} />
          <h2 className="Project-Title-Text">Other platform</h2>
          <ProjectCard projectData={otherProjects} />
        </div>
      </section>
    </>
  );
};

function ProjectCard({ projectData }) {
  if (projectData.length == 0) {
    console.log("show loading image...");
  } else {
    return (
      <div className="Project-Cards-Row">
        {projectData.map((data) => (
          <section className="Project-Card-Container">
            <div className="Project-Card-Top">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
              <a href={data.link} target="_blank">
                <img className="Project-Card-Link-Icon" src={icon} />
              </a>
            </div>
            <div className="Project-Card-Bottom">
              <ProjectImages imageArray={data.icons} />
            </div>
          </section>
        ))}
      </div>
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

  return imageSrcArray.map((src) => (
    <img src={src} className="Project-Card-Images" />
  ));
}

export default Projects;