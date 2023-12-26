"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/intro-headshot.png'
              alt='Aaron Baumgarten headshot'
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem]
              border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
      >
        
        {/* <span className="font-bold">Hello! I&apos;m Aaron.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> looking for a{" "}
        <span className="font-bold">full-time position</span>. I have{" "}
        <span className="font-bold">10 years of coding experience</span>, 6 spent
        as a professional Mechanical Engineer. I just completed a <span className="font-bold">year-long web development bootcamp</span>{" "}
        in which I built multiple full-stack applications. I am an{" "}
        <span className="italic">optimistic</span> and <span className="italic">diligent</span>{" "}
        team-member that would be a positive addition to your work environment.{" "}
        <span className="font-bold">Let&apos;s Connect!</span> */}
        <span className="font-bold">Hello! I&apos;m Aaron.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> looking for a{" "}
        <span className="font-bold">full-time position</span>. I have{" "}
        <span className="font-bold">10 years</span> of professional coding experience. {" "}
        <span className="font-bold">Let&apos;s Connect!</span>

      </motion.p>
    </section>
  )
}

export default Intro