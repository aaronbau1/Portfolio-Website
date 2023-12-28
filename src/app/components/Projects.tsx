import React, { useRef } from "react"
import { projectsData } from "../../../lib/data"
import SectionHeading from "./Section-Heading"
import Project from "./Project"

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