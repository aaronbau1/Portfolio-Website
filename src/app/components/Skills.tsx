"use client"

import { skillsData } from "@/lib/data";
import SectionHeading from "./Section-Heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  }),
}

const Skills = () => {

const { ref } = useSectionInView('Skills', 0.5);

  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
        <h3>Languages and Frameworks</h3> 
        <ul className="flex">
          {skillsData.langFrame.map((skill, index) => {
            return (
              <motion.li 
                variants={fadeInAnimationVariants}
                key={index}
                className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                initial='initial'
                whileInView='animate'
                viewport={{
                  once:true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>)
          })}
        </ul>  
        {/* <h3>Technology</h3> 
        <ul className="flex">
          {skillsData.tech.map((skill, index) => {
            return(<motion.li key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">{skill}</motion.li>)
          })}
        </ul>  
        <h3>Concepts</h3> 
        <ul className="flex">
          {skillsData.concepts.map((skill, index) => {
            return(<motion.li key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">{skill}</motion.li>)
          })}
        </ul>   */}
    </section>
  )
}

export default Skills;