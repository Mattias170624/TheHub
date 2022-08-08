import { BsFillSuitHeartFill } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
    return (
        <footer id='footer-Wrapper'>
            <a id="contact" className='anchor'></a>
            <section id='footer-Container'>
                <p>Made with love<BsFillSuitHeartFill fill='red' /></p>
                <p>&copy; 2022 The Hub</p>
            </section>
        </footer>
    );
}

export default Footer;