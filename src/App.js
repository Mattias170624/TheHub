import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar/Navbar';
import './App.css';
import Home from './Components/Startscreen/Home';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
