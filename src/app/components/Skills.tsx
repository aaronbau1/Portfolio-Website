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

  const { ref } = useSectionInView('Skills');

  return (
    <section id='skills' ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
        <div className="flex justify-center">
          {Object.keys(skillsData).map((key, index) => {
            return (
              <div key={index} className="w-full sm:w-1/3 sm:p-4 p-1">
                <h3 className="mb-4 text-lg font-semibold">{skillDataToHeading(key)}</h3> 
                <ul className="flex justify-center flex-wrap">
                  {skillsData[key].map((skill, index) => {
                    return (
                      <motion.li 
                        variants={fadeInAnimationVariants}
                        key={index}
                        className="bg-white borderBlack rounded-xl px-4 py-3 dark:bg-white/10 dark-text-white/80"
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
              </div>
            )})}
          </div>
    </section>
  )
}

export default Skills;

function skillDataToHeading(key: string) {
  switch(key) {
    case 'langFrame':
      return 'Languages and Frameworks'
      break;
    case 'tech':
      return 'Technologies'
      break;
    case 'concepts':
      return 'Concepts'
      break;
  }
}