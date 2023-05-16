import logo from "../../../Images/logo2.png";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close dropdown on events outside the container
    document.addEventListener("mouseup", function (event) {
      const dropdownContainer = document.getElementById("Navbar-Dropdown");
      const navbarContainer = document.getElementById("Navbar-Container");

      if (
        !dropdownContainer.contains(event.target) &&
        !navbarContainer.contains(event.target)
      ) {
        closeDropdown();
      }
    });
  }, []);

  window.onscroll = () => {
    onScrollCloseMenu();
  };

  return (
    <div id="Navbar-Container">
      <div id="Navbar-Wrapper">
        <img alt="Webpage logo" id="Navbar-Logo" src={logo} />

        <section id="Navbar-Link-List">
          <a href="#">HOME</a>
          <a href="#competence">COMPETENCE</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <Hamburger
            size={25}
            color="#BC3848"
            rounded
            toggled={isOpen}
            onToggle={() => handleHamburgerClick()}
          />
        </section>
      </div>
      <div id="Navbar-Dropdown" onClick={() => closeDropdown()}>
        <a href="#">HOME</a>
        <a href="#competence">COMPETENCE</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
      </div>
    </div>
  );

  function handleHamburgerClick() {
    const dropdownContainer = document.getElementById("Navbar-Dropdown");

    setIsOpen(!isOpen);
    dropdownContainer.style.opacity = isOpen ? 0 : 1;
    dropdownContainer.style.visibility = isOpen ? "hidden" : "visible";
  }

  function closeDropdown() {
    const dropdownContainer = document.getElementById("Navbar-Dropdown");

    setIsOpen(false);
    dropdownContainer.style.opacity = 0;
    dropdownContainer.style.visibility = "hidden";
  }

  function onScrollCloseMenu() {
    if (isOpen == true) {
      closeDropdown();
    }
  }
};

export default Navbar;
