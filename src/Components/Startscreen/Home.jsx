import logo from "./../../Images/avatarLogo.png";
import "./home.css";

const Home = () => {
  return (
    <section id="Header-Background">
      <div id="Header-Container">
        <div id="Header-Wrapper">
          <section id="Mobile-Header-Logo-Container">
            <img alt="My avatar" id="Mobile-Header-Logo" src={logo} />
          </section>

          <section id="Header-Text">
            <h3>MATTIAS</h3>
            <h3>ANDERSSON</h3>
            <div id="Header-Line-1"></div>
            <div id="Header-Line-2"></div>
            <p>mobile developer</p>
            <section id="Header-Social-Container">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/mattias-andersson-71bb481a0/" target="_blank" rel="noreferrer">
                    <img id="Social-Img-1" alt="linkedin link"/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Mattias170624" target="_blank" rel="noreferrer">
                    <img id="Social-Img-2" alt="github link"/>
                  </a>
                </li>
                <li>
                  <a href="https://discordapp.com/users/385882136533794819" target="_blank" rel="noreferrer">
                    <img id="Social-Img-3" alt="discord link"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/@mattias170624" target="_blank" rel="noreferrer">
                    <img id="Social-Img-4" alt="figma link"/>
                  </a>
                </li>
              </ul>
            </section>
          </section>

          <section>
            <img alt="My avatar" id="Header-Logo" src={logo} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
