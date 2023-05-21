import "./Experience.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Experience = () => {
  return (
    <>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={0.75}>
        <section id="Exp-Container">
          <div id="Exp-Wrapper">
            <section className="Exp-Card-Container">
              <h3>High school</h3>
              <p>Huddinge gymnasium</p>
              <p>Media & information technology</p>
              <p>2017 - 2020</p>
              <span />
              <div className="Exp-Card-Desc">
                <p>
                  IT specialisation in high school gave me basic understanding
                  of programming in general. This is where my passion for
                  programming really started to accelerate. <br />
                  <br />
                  Learned some fundementals about programming, ux-design and the
                  general gist of computers that has carried on and helped me to
                  this day.
                </p>
              </div>
            </section>

            <section className="Exp-Card-Container">
              <h3>University</h3>
              <p>IT-Högskolan</p>
              <p>Appdeveloper for iOS / Android</p>
              <p>2021 - 2023</p>
              <span />
              <div className="Exp-Card-Desc">
                <p>
                  Greatly expanded my knowledge in mobile development on many
                  levels and also broadening my understanding of programming as
                  a whole. Learned some in depth code guidelines that i always
                  follow when creating new project in order to create
                  sustainable, well documenteted, and correctly structured code.
                </p>
              </div>
            </section>

            <section className="Exp-Card-Container">
              <h3>Cetasol</h3>
              <p>Internship 1</p>
              <p>Working with flutter</p>
              <p>2022 jan - feb</p>
              <span />
              <div className="Exp-Card-Desc">
                <p>
                  On my first internship for Cetasol i was asked to create an
                  app that helped the customer onboarding process of their
                  technical solution called iHelm. The apps purpose was to
                  showcase how the app can look and function as an onboarding
                  proccess. <br />
                  <br />
                  At the end of the internship period i showed off the app to
                  the whole team and i went through the flutter code structure.
                </p>
              </div>
            </section>

            <section className="Exp-Card-Container">
              <h3>Labelcaster</h3>
              <p>Internship 2</p>
              <p>Working with flutter</p>
              <p>2023 feb - june</p>
              <span />
              <div className="Exp-Card-Desc">
                <p>
                  In my second internship at Labelcaster i was faced with a very
                  big codebase to get familiar with right of the bat. Their app
                  contains several solutions for music labels that helps them to
                  grow their buisness.
                  <br />
                  <br />
                  And straight from the start i was working besides the tech
                  team, contributing in all aspects of the work flow fixing
                  bugs, adding new features, retrospective planning, etc.
                </p>
              </div>
            </section>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Experience;
