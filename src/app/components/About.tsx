"use client"

import SectionHeading from "./Section-Heading";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
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
        For the last 15 months, I was enrolled in Launch School's full-stack web development curriculum and learned 
        Ruby, JavaScript, and PostgreSQL. From there, I have built several full-stack
        projects using Next.js, React.js, Node.js, and MongoDB. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="mb-3">
        Outside of my work, I am very active and run or lift every day. I'm also a
        volunteer coach for track and field at a local high school
      </p>
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}

export default About;