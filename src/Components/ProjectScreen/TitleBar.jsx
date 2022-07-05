import { BiSearch } from 'react-icons/bi';
import './titleBar.css';

const TitleBar = () => {
    return (
        <section id='titleBar-Background'>
            <div id='titleBar-Wrapper'>
                <h1>PROJECTS</h1>

                <form id='search-Container'>
                    <input type='text' placeholder="Search.." autoComplete='off' id='search-Field' />
                    <BiSearch id='search-Icon' />
                </form>
            </div>
        </section>
    );
}

export default TitleBar;