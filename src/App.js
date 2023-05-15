import Navbar from "./Components/Navigation/Navbar/Navbar";
import Home from "./Components/Startscreen/Home";
import "./App.css";
import CompetenceTitle from "./Components/Competence/CompetenceTitle";
import Competence from "./Components/Competence/Competence";
import Experience from "./Components/Experience/Experience";
import ExperienceTitle from "./Components/Experience/ExperienceTitle";
import ProjectsTitle from "./Components/Projects/ProjectsTitle";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CompetenceTitle />
      <Competence />
      <ExperienceTitle />
      <Experience />
      <ProjectsTitle />
      <Projects />
    </>
  );
}

export default App;
