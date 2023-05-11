import Navbar from "./Components/Navigation/Navbar/Navbar";
import Home from "./Components/Startscreen/Home";
import "./App.css";
import CompetenceTitle from "./Components/Competence/CompetenceTitle";
import Competence from "./Components/Competence/Competence";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CompetenceTitle />
      <Competence />
      <Experience />
    </>
  );
}

export default App;
