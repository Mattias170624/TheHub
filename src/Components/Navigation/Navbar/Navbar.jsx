import Hamburger from 'hamburger-react';
import logo from '../../../Images/logo.png';
import { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [iconState, setIconState] = useState(false);

    useEffect(() => {
        // Close dropdown on events outside the container
        document.addEventListener("mouseup", function (event) {
            var navbar = document.getElementById("navbar-Dropdown");
            var navbarDropdown = document.getElementById("navbar-Container");

            if (!navbar.contains(event.target) &&
                !navbarDropdown.contains(event.target)) {
                closeDropdown()
            }
        });
    }, [])

    window.onscroll = () => {
        onScrollCloseMenu()
    }

    return (
        <div id='navbar-Container'>
            <section id='navbar-Link-List'>
                <a href='#home' onClick={() => closeDropdown()}>HOME</a>
                <img src={logo} alt='Logo of webpage' id='navbar-Logo' />
                <a href='#contact' onClick={() => closeDropdown()}>CONTACT</a>

                <Hamburger size={25} color='#4276d6' rounded
                    toggled={iconState} onToggle={() => handleIconState()} />
            </section>

            <div id='navbar-Dropdown'>
                <a href='#home' onClick={() => closeDropdown()}>HOME</a>
                <a href='#contact' onClick={() => closeDropdown()}>CONTACT</a>
            </div>
        </div>
    );

    function handleIconState() {
        const dropDownLinks = document.getElementById('navbar-Dropdown')

        iconState ? setIconState(false) : setIconState(true)
        dropDownLinks.style.display = iconState ? 'none' : 'flex'
    }

    function closeDropdown() {
        const dropDownLinks = document.getElementById('navbar-Dropdown')
        dropDownLinks.style.display = 'none'
        setIconState(false)
    }

    function onScrollCloseMenu() {
        const dropDownLinks = document.getElementById('navbar-Dropdown')
        if (dropDownLinks.style.display == 'flex') {
            closeDropdown()
        }
    }
}

export default Navbar;