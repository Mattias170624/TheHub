import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase.js";
import { useEffect, useState } from "react";
import './projectCard.css'

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [projectWindow, setProjectWindow] = useState(false);

    useEffect(() => {
        fetchDocuments()
    }, []);

    return (
        <div id='project-Page-Wrapper'>
            <section id='project-Page-Container'>
                <div id='project-Card-Container'>
                    {projects.map((data, index) => (
                        <div className='project-Card' key={index}>
                            <li>
                                <p>{data.title}</p>
                            </li>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    async function fetchDocuments() {
        const querySnapshot = await getDocs(collection(db, "projects"));
        let urlList = [];

        querySnapshot.forEach((docs) => {
            urlList.push(docs.data().url)
        });
        return prepareProjectCards(urlList)
    };

    async function prepareProjectCards(urlList) {
        let objectArray = [];

        for (const url of urlList) {
            try {
                const fetchUrl = await fetch(url);
                const response = await fetchUrl.text()
                const projectTitle = response.replace(/\s+/, '\x01').split('\x01')[0]

                const cardObject = {
                    title: projectTitle,
                    bodyText: response
                }

                objectArray.push(cardObject)
            } catch (err) {
                console.log(err);
            }
        }
        setProjects(objectArray)
    }
}

export default ProjectCard;