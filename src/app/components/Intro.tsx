"use client"
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';
import { useEffect } from 'react';
import { useSectionInView } from '@/lib/hooks';

const Intro = () => {

  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
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
        <span className="font-bold">Hello! I&apos;m Aaron,</span> a{" "}
        <span className="font-bold">full-stack developer</span> looking for a{" "}
        <span className="font-bold">full-time position</span>. I have{" "}
        <span className="font-bold">6 years</span> of coding experience. {" "}
        <span className="font-bold">Let&apos;s Connect!</span>

      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 0.1 }}
      >
        <Link href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
          active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>{' '}
        </Link>

        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
        borderBlack dark:bg-white/10'
          href='/resume.pdf' 
          download
        >
          Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>

        <a className='group bg-white p-4 flex items-center gap-2 rounded-full text-gray-950
        outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
        borderBlack dark:bg-white/10 dark:text-white/90'
          href='https://www.linkedin.com/in/aaron-baumgarten-8492b215b' target='_blank'
        >
          <BsLinkedin className='opacity-70'/>
        </a>
        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
        outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
        borderBlack dark:bg-white/10 dark:text-white/70'
          href='https://github.com/aaronbau1' target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro