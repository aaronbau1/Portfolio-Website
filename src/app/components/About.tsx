"use client"

import SectionHeading from "./Section-Heading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  
  const { ref } = useSectionInView('About');

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I graduated from the <span className="font-medium">University of Michigan</span>{" "}
        with a <span className="font-medium">Master's degree in Mechanical Engineering</span>.{" "}
        After working as a Mechanical Engineer for 6 years, I decided to make a career change
        towards Software Development. When building and creating applications, I have
        an <span className="italic">insatiable</span> urge to learn and improve.
        No other endeavor gives me the same sense of fulfillment and pride that coding does.
      </p>
      <p className="mb-3">
        For the last 15 months, I was enrolled in Launch School's full-stack web development curriculum and learned{" "} 
        <span className="font-medium">Ruby, JavaScript, and PostgreSQL</span>. From there, I have built several full-stack
        projects using <span className="font-medium">Next.js, React.js, Node.js, and MongoDB</span>. I am always striving to
        learn new technologies. Currently, I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="mb-3">
        Outside of my work, I am very active and run or lift every day. I'm also a
        volunteer track and field coach at a local high school.
      </p>
    </motion.section>
  )
}

export default About;