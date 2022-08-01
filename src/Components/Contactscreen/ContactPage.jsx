
import { BsGithub } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import './contactpage.css';

const ContactPage = () => {
    return (
        <div id='contact-Container'>
            <section id='contact-Wrapper'>
                <form id='contact-Form-Inputs'>
                    <input type='text' placeholder='Your Name..' />
                    <input type='text' placeholder='Your E-Mail..' />
                    <textarea id='contact-textArea' rows="4" cols="2" maxLength='100' placeholder='Message..' />
                    <button id='contact-Button'>SEND</button>
                </form>

                <section id='contact-Socials-Container'>
                    <a href='https://www.linkedin.com/in/mattias-andersson-71bb481a0/' target='_blank'><RiLinkedinFill /></a>
                    <a href='https://github.com/Mattias170624' target='_blank'><BsGithub /></a>
                </section>
            </section>
        </div>
    );
}

export default ContactPage;