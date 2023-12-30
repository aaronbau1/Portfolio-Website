"use client"

import React, { useEffect, useRef } from "react"
import { projectsData } from "@/lib/data"
import SectionHeading from "./Section-Heading"
import Project from "./Project"
import { useSectionInView } from "@/lib/hooks"

const Projects = () => {

  const { ref } = useSectionInView('Projects', 0.25);
  
  return (
    <section ref={ref} id='projects' className="scroll-mt-28">
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