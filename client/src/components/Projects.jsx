import { useState, useEffect } from "react"
import Card from "@components/Card"
import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import JavaScript from "../assets/javascript.svg"
import React from "../assets/react.svg"
import Node from "../assets/node.svg"
import Express from "../assets/express.svg"
import MongoDb from "../assets/mongoDb.svg"

function Projects() {
    const [projects, setProjects] = useState([])
    const images = {
        html: Html,
        css: Css,
        javascript: JavaScript,
        react: React,
        node: Node,
        express: Express,
        mongodb: MongoDb
    }

    useEffect(() => {
        fetch("/api/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error))
    }, [])
  return (
    <section id="projects" className="projects">
        {projects.map(project => (
            <div className="project_card" key={project.title}>
                <img className="project_image" src={project.imageUrl} alt="project image" />
                <h3>{project.title}</h3>
                <div className="project_technologies">
                {project.technologies.map(technology => (
                    <img key={technology} src={images[technology.toLowerCase()]} alt="technology logo" />
                ))}
                </div>
                <div className="project_buttons">
                    <button className="btn"><a href={project.demoUrl} target="_blank">Visit demo</a></button>
                    <button className="btn"><a href={project.githubUrl} target="_blank">Visit repo</a></button>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Projects