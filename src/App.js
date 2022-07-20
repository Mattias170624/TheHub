import { HashRouter, Routes, Route } from 'react-router-dom';
import TitleBar from './Components/ProjectScreen/TitleBar';
import Navbar from './Components/Navigation/Navbar/Navbar';
import Home from './Components/Startscreen/Home';
import ProjectCard from './Components/ProjectScreen/ProjectCard';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <ProjectCard />
          </>
        } />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
