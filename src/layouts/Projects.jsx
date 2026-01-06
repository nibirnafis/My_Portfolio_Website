import { useState } from "react";
import TextSection from "../components/TextSection";
import { useEffect } from "react";
import Project from "../components/Project";


const Projects = () => {

    const [ projects, setProjects ] = useState([])

    useEffect(()=>{
        
        const loadProjects = async () => {
            const res = await fetch("/projects.json")
            const data = await res.json()

            setProjects(data)
        }

        loadProjects()

    }, [])
    


    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className = "main-section grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                projects.map((project, index) => <Project project={project} key={index}></Project>)
            }
            </div>
        </div>
        </>
    );
};

export default Projects;