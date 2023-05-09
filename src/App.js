import Navbar from "./Components/Navigation/Navbar/Navbar";
import Home from "./Components/Startscreen/Home";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./Components/Contactscreen/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
