import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import './home.css';
const Home = () => {

    return (
        <section id='header-Background'>
            <a id="home"></a>
            <div id='welcome-Container'>
                <section id='header-Text'>
                    <h1>Hello You!</h1>
                    <p>This website acts as a central hub for all my projects that are
                        finished but also for those that are still in progress.
                        <br /><br />
                        You will find additional details when clicking on each project.
                    </p>

                    <button id='socials-Button'>My socials <AiOutlineDoubleRight /></button>
                </section>
            </div>
        </section>
    );
}

export default Home;