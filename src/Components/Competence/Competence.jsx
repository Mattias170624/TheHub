import icon1 from "./../../Images/icon1.png";
import icon2 from "./../../Images/icon2.png";
import icon3 from "./../../Images/icon3.png";

import codeIcon1 from "./../../Images/React.png";
import codeIcon2 from "./../../Images/JavaScript.png";
import codeIcon3 from "./../../Images/html.png";
import codeIcon4 from "./../../Images/css.png";
import codeIcon5 from "./../../Images/Dart.png";
import codeIcon6 from "./../../Images/Kotlin.png";
import codeIcon7 from "./../../Images/Swift.png";
import codeIcon8 from "./../../Images/Firebase.png";
import codeIcon9 from "./../../Images/Mongodb.png";

import "./Competence.css";

const Competence = () => {
  return (
    <>
      <section id="Comp-Container">
        <div className="Comp-Card">
          <img alt="Web development icon" src={icon1} />
          <section className="Comp-Card-Text">
            <h3>Web Development</h3>
            <p>
              Easy to intermediate skills working with JS frameworks like React.
              Have created a handful of static and dynamic websites together
              with firebase or mongodb as the backend.
            </p>
          </section>
          <div className="Comp-Code-Icons">
            <img alt="Code language icon" src={codeIcon1} />
            <img alt="Code language icon" src={codeIcon2} />
            <img alt="Code language icon" src={codeIcon3} />
            <img alt="Code language icon" src={codeIcon4} />
          </div>
        </div>
        <div className="Comp-Card">
          <img alt="Mobile development icon" src={icon2} />
          <section className="Comp-Card-Text">
            <h3>App Development </h3>
            <p>
              Primary knowdlege with crossplatform development with dart with
              multiple projects and 2 internships in flutter framework. Have
              decent knowledge in native programming from working on a handful
              of school projects.
            </p>
          </section>
          <div className="Comp-Code-Icons">
            <img alt="Code language icon" src={codeIcon5} />
            <img alt="Code language icon" src={codeIcon6} />
            <img alt="Code language icon" src={codeIcon7} />
          </div>
        </div>
        <div className="Comp-Card">
          <img alt="Backend icon" src={icon3} />
          <section className="Comp-Card-Text">
            <h3>Backend</h3>
            <p>
              Fundemental understaning with sql and nosql type databases.
              Firebase used primarly with previous web stack. Have used both in
              app development.
            </p>
          </section>
          <div className="Comp-Code-Icons">
            <img alt="Code language icon" src={codeIcon8} />
            <img alt="Code language icon" src={codeIcon9} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Competence;
