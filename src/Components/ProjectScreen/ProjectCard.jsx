import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase.js";
import { useEffect, useState } from "react";
import { BiLinkExternal } from 'react-icons/bi';
import './projectCard.css'

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);

    useEffect(() => {
        fetchDocuments()
    }, []);

    return (
        <div id='project-Page-Wrapper'>
            <section id='project-Page-Container'>
                <div id='project-Card-Container'>
                    {projects.map((data, index) => (
                        <div className='project-Card' key={index} onClick={() => handleCardClick(index)}>
                            <section className="project-Card-Title">
                                <p>{data.title}</p>
                            </section>

                            <section className="project-Card-Info">
                                <p>{data.title}</p>
                                <p>{data.about}</p>
                                <a href={data.githubUrl}>Github Repo <BiLinkExternal /></a>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    async function fetchDocuments() {
        const documentsSnapshot = await getDocs(collection(db, "projects"));
        let cardObjectArray = [];

        documentsSnapshot.forEach((doc) => {
            const title = doc.data().title;
            const githubUrl = doc.data().githubUrl;
            const about = doc.data().about;

            // Create a card object
            const cardObject = {
                title: title,
                about: about,
                githubUrl: githubUrl
            }

            cardObjectArray.push(cardObject)
        });

        setProjects(cardObjectArray)
    }

    function handleCardClick(index) {
        const allCardsInfo = document.getElementsByClassName('project-Card-Info');
        const allCardsTitle = document.getElementsByClassName('project-Card-Title');

        // Handles open and closing cards
        if (index == currentCard) {
            allCardsInfo[currentCard].style.display = 'none'
            allCardsTitle[currentCard].style.display = 'flex'
            setCurrentCard(null);
        } else {
            for (const card of allCardsInfo) {
                card.style.display = 'none'
            }

            for (const card of allCardsTitle) {
                card.style.display = 'flex'
            }

            allCardsTitle[index].style.display = 'none'
            allCardsInfo[index].style.display = 'flex'
            setCurrentCard(index);
        }
    }
}

export default ProjectCard;