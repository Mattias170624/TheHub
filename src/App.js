import { HashRouter, Routes, Route } from 'react-router-dom';
import TitleBar from './Components/ProjectScreen/TitleBar';
import Navbar from './Components/Navigation/Navbar/Navbar';
import Home from './Components/Startscreen/Home';
import './App.css';
import ProjectCard from './Components/ProjectScreen/ProjectCard';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <TitleBar />
            <ProjectCard />
          </>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
