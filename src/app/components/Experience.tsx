"use client"

import { experiencesData } from "@/lib/data";
import SectionHeading from "./Section-Heading"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {

  const { ref } = useSectionInView('Experience');

  return (
    <section ref={ref} id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement>
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience