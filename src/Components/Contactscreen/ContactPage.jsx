
import { BsGithub } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import db from "../../Firebase/firebase.js";
import './contactpage.css';

const ContactPage = () => {
    return (
        <div id='contact-Container'>
            <a id="contact" className='anchor'></a>
            <section id='contact-Wrapper'>
                <form id='contact-Form-Inputs' onSubmit={handleSubmit}>
                    <h1>CONTACT</h1>
                    <input type='text' className='contactInput' placeholder='Your Name..'
                        onKeyDown={handleInputFocus} onInput={(event) => checkValidity(event)} required />
                    <input type='email' className='contactInput' placeholder='The E-Mail I respond to..'
                        onKeyDown={handleInputFocus} onInput={(event) => checkValidity(event)} required />
                    <textarea id='contact-textArea' className='contactInput' rows="4" cols="2" maxLength='100' placeholder='Your message..'
                        onInput={(event) => checkValidity(event)} required />
                    <button id='contact-Button'>SEND</button>
                </form>

                <section id='contact-Socials-Container'>
                    <a href='https://www.linkedin.com/in/mattias-andersson-71bb481a0/' target='_blank'><RiLinkedinFill /></a>
                    <a href='https://github.com/Mattias170624' target='_blank'><BsGithub /></a>
                </section>
            </section>
        </div>
    );

    async function handleSubmit(event) {
        const userInputs = document.getElementsByClassName('contactInput')
        event.preventDefault();
        let inputArray = []

        for (const input of userInputs) inputArray.push(input.value);

        await addDoc(collection(db, "responses"), {
            name: inputArray[0],
            email: inputArray[1],
            message: inputArray[2]
        });


        // reset fields and then shows a success element
        for (const input of userInputs) {
            input.value = ''
        }

        const contactContainer = document.getElementById('contact-Form-Inputs');
        contactContainer.classList.add('contact-Success-Light');
    }

    function checkValidity(event) {
        if (/^\s/.test(event.target.value)) {
            event.target.value = '';
        }
    }

    function handleInputFocus(event) {
        if (event.which !== 13) return

        const form = event.target.form;
        const index = [...form].indexOf(event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
    }
}

export default ContactPage;