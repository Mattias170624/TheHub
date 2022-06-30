import './home.css';

const Home = () => {
    return (
        <section id='header-Background'>
            <div id='welcome-Container' className='fade-in-down'>
                <section id='header-Text'>
                    <h1>Hello You!</h1>
                    <p>This website acts as a central hub for all my projects that are
                        finished but also for those that are still in progress.
                        <br /><br />
                        You will find additional details when clicking on each project.
                    </p>
                </section>
            </div>
        </section>
    );
}

export default Home;