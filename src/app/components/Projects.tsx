import React from "react"
import { projectsData } from "../../../lib/data"
import SectionHeading from "./Section-Heading"

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Projects;

type ProjectProps = (typeof projectsData)[number];

function Project({ 
  title,
  description,
  tags,
  imageUrl }: ProjectProps) {
  return (
    <div>{title}</div>
  )
}