import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase.js";
import { useEffect, useState } from "react";
import { BiLinkExternal } from 'react-icons/bi';
import { BiSearch } from "react-icons/bi";
import './projectCard.css'

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    let indexSum = 0;

    useEffect(() => {
        fetchDocuments()
    }, []);


    useEffect(() => {
        // Animate opacity on cards loading in
        var cards = document.getElementsByClassName("project-Card");
        for (let i = 0; i < cards.length; ++i) {
            fadeIn(cards[i], i * 200)
        }

        function fadeIn(card, delay) {
            setTimeout(() => {
                card.classList.add('fadein')
            }, delay)
        }
    }, [projects])

    return (
        <div id='project-Page-Wrapper'>
            <section id='project-Page-Container'>
                <section id="project-Title-Container">
                    <h1>PROJECTS</h1>

                    <form id='project-Search-Container' onSubmit={handleSubmit}>
                        <BiSearch id='search-Icon' />
                        <input type='text' placeholder="Search.." autoComplete='off' onChange={() => handleSearch()} id='search-Field' />
                    </form>
                </section>

                <div id='project-Card-Container'>
                    {projects.map((data, index) => (
                        <div className='project-Card' key={index} onClick={() => handleCardClick(index)}>
                            <section className="project-Card-Title">
                                <p>{data.title}</p>
                            </section>

                            <section className="project-Card-Info">
                                <p>{data.title}</p>
                                <p><span>About:</span><br />{data.about}</p>
                                <a href={data.githubUrl}>Github Repo <BiLinkExternal /></a>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    function handleSubmit(event) {
        event.preventDefault();
        document.getElementById('search-Field').blur();
    }

    function handleSearch() {
        const textField = document.getElementById('search-Field');
        const text = document.getElementById('search-Field').value.toLowerCase().replace(/ /g, '');
        const validLetters = /^[A-Za-z]/;

        if (/^\s/.test(textField.value) || (!validLetters.test(textField.value))) {
            textField.value = '';
        }

        // Changes css styles for all the cards
        for (const project of projects) {
            const title = project.title.toLowerCase().replace(/ /g, '')

            if (title.indexOf(text) > -1) {
                const allCards = document.getElementsByClassName('project-Card');
                const searchedCard = allCards[project.index];

                if (text.length > 0) {
                    for (const card of allCards) {
                        card.style.opacity = '0'
                        card.style.display = 'none'
                    }

                    searchedCard.style.opacity = '1'
                    searchedCard.style.display = 'flex'
                } else {
                    // Case when textfield is empty
                    const allCardTitles = document.getElementsByClassName('project-Card-Title');
                    const allCardInfos = document.getElementsByClassName('project-Card-Info');

                    for (const card of allCards) {
                        card.style.opacity = '1'
                        card.style.display = 'flex'
                    }

                    for (const card of allCardInfos) {
                        card.style.display = 'none'
                    }

                    for (const card of allCardTitles) {
                        card.style.display = 'flex'
                        card.style.opacity = '1'
                    }

                    setCurrentCard(null)
                }
            }
        }
    }

    async function fetchDocuments() {
        const documentsSnapshot = await getDocs(collection(db, "projects"));
        let cardObjectArray = [];

        documentsSnapshot.forEach((doc) => {
            const title = doc.data().title;
            const githubUrl = doc.data().githubUrl;
            const about = doc.data().about;
            const index = indexSum

            indexSum = indexSum + 1

            // Create a card object
            const cardObject = {
                title: title,
                about: about,
                githubUrl: githubUrl,
                index: index
            }

            cardObjectArray.push(cardObject)
        });

        return setProjects(cardObjectArray)
    }

    function handleCardClick(index) {
        const allCardsInfo = document.getElementsByClassName('project-Card-Info');
        const allCardsTitle = document.getElementsByClassName('project-Card-Title');

        // Handles open and closing cards
        if (index == currentCard) {
            allCardsInfo[currentCard].style.display = 'none'
            allCardsTitle[currentCard].style.display = 'flex'
            setCurrentCard(null);

            for (const card of allCardsTitle) {
                card.style.opacity = '1'
            }

        } else {
            for (const card of allCardsInfo) {
                card.style.display = 'none'
                card.style.opacity = '1'
            }

            for (const card of allCardsTitle) {
                card.style.display = 'flex'
                card.style.opacity = '0.8'
            }

            allCardsTitle[index].style.display = 'none'
            allCardsInfo[index].style.display = 'flex'
            allCardsInfo[index].style.opacity = '1'
            setCurrentCard(index);
        }
    }
}

export default ProjectCard;