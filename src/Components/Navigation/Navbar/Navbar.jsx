import { NavLink } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import Hamburger from 'hamburger-react';
import logo2 from '../../../Images/logo2.png';
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
                <NavLink to='/' onClick={() => closeDropdown()}>HOME</NavLink>
                <img src={logo2} alt='Logo of webpage' id='navbar-Logo' />
                <NavLink to='/contact' onClick={() => closeDropdown()}>CONTACT</NavLink>
                <Hamburger size={25} color='#4276d6' rounded
                    toggled={iconState} onToggle={() => handleIconState()} />
            </section>

            <div id='navbar-Dropdown'>
                <NavLink to='/' onClick={() => closeDropdown()}><ImHome />HOME</NavLink>
                <NavLink to='/contact' onClick={() => closeDropdown()} ><GrMail />CONTACT</NavLink>
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