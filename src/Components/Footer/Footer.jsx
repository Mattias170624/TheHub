import { BsFillSuitHeartFill } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer-Wrapper">
      <section id="footer-Container">
        <p>
          Made with love
          <BsFillSuitHeartFill fill="red" />
        </p>
        <p>&copy; 2022 The Hub</p>
      </section>
    </footer>
  );
};

export default Footer;
