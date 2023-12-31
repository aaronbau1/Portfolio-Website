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
              <div className="w-full sm:w-1/3 p-4">
                <h3 className="mb-4 text-lg font-semibold">{skillDataToHeading(key)}</h3> 
                <ul className="flex justify-center flex-wrap">
                  {skillsData[key].map((skill, index) => {
                    return (
                      <motion.li 
                        variants={fadeInAnimationVariants}
                        key={index}
                        className="bg-white border border-black/[0.1] rounded-xl px-4 py-3"
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
  // return (
  //   <section
  //     id='skills'
  //     ref={ref}
  //     className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  //   >
  //     <SectionHeading>My Skills</SectionHeading>
  //     <div className="flex justify-center">
  //       {/* Column for 'Languages and Frameworks' */}
  //       <div className="w-full sm:w-1/3 p-4">
  //         <h3>{skillDataToHeading('langFrame')}</h3>
  //         <ul className="flex justify-center flex-wrap">
  //           {skillsData.langFrame.map((skill, index) => (
  //             <motion.li
  //               variants={fadeInAnimationVariants}
  //               key={`langFrame-${index}`}
  //               className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
  //               initial='initial'
  //               whileInView='animate'
  //               viewport={{
  //                 once: true,
  //               }}
  //               custom={index}
  //             >
  //               {skill}
  //             </motion.li>
  //           ))}
  //         </ul>
  //       </div>
  
  //       {/* Column for 'Technologies' */}
  //       <div className="w-full sm:w-1/3 p-4">
  //         <h3>{skillDataToHeading('tech')}</h3>
  //         <ul className="flex justify-center flex-wrap">
  //           {skillsData.tech.map((skill, index) => (
  //             <motion.li
  //               variants={fadeInAnimationVariants}
  //               key={`tech-${index}`}
  //               className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 m-2"
  //               initial='initial'
  //               whileInView='animate'
  //               viewport={{
  //                 once: true,
  //               }}
  //               custom={index}
  //             >
  //               {skill}
  //             </motion.li>
  //           ))}
  //         </ul>
  //       </div>
  
  //       {/* Column for 'Concepts' */}
  //       <div className="w-full sm:w-1/3 p-4">
  //         <h3>{skillDataToHeading('concepts')}</h3>
  //         <ul className="flex justify-center flex-wrap">
  //           {skillsData.concepts.map((skill, index) => (
  //             <motion.li
  //               variants={fadeInAnimationVariants}
  //               key={`concepts-${index}`}
  //               className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 m-2"
  //               initial='initial'
  //               whileInView='animate'
  //               viewport={{
  //                 once: true,
  //               }}
  //               custom={index}
  //             >
  //               {skill}
  //             </motion.li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </section>
  // );
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