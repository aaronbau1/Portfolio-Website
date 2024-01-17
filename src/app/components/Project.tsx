"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image"
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, projectUrl, dataTest }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
   });

   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={projectUrl} target="_blank">
      <motion.div 
        ref={ref} 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg
          overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0
          hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
          data-test={dataTest}
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
          max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag,index) => (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem]
                  uppercase tracking-wider text-white rounded-full dark:text-white/70" 
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
          <Image src={imageUrl} alt={title} quality={95} 
            className="absolute sm:block top-8 -right-[11rem] sm:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
<<<<<<< HEAD
            sm:group-even:right-[initial] 
            sm:group-even:-left-40
=======
            group-even:sm:right-[initial] 
            group-even:sm:-left-40
>>>>>>> 4ecfce55e0b06be8491ae270ed838f9736068e4a
            group-even:left-[12rem]
            
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:-translate-y-3
            group-hover:-rotate-2

            sm:group-even:group-hover:scale-[1.04]
            sm:group-even:group-hover:translate-x-3
            sm:group-even:group-hover:translate-y-3
            sm:group-even:group-hover:rotate-2

            group-even:group-hover:-translate-x-3
            group-even:group-hover:-translate-y-3
            group-even:group-hover:-rotate-2"
          />

      </section>
    </motion.div>
  </Link>
  )
}

export default Project