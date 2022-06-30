import { NavLink } from 'react-router-dom';
import logo2 from '../../../Images/logo2.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div id='navbar-Container'>
            <section id='navbar-Link-List'>
                <NavLink to='/'>HOME</NavLink>
                <img src={logo2} alt='Logo of webpage' id='navbar-Logo' className='slide-in-left' />
                <NavLink to='/contact'>CONTACT</NavLink>
            </section>
        </div>
    );
}

export default Navbar;