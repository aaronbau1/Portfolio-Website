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
    <section ref={ref} id='experience' className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
            return(
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: 'white',
                  fontSize: '1.5rem'
                }}
                visible={true}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                
              </VerticalTimelineElement>
            </React.Fragment>
          )}
          )}
      </VerticalTimeline>
    </section>
  )
}

export default Experience