"use client"

import { FaPaperPlane } from "react-icons/fa"
import SectionHeading from "./Section-Heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"

const Contact = () => {

  const { ref } = useSectionInView('Contact');

  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration:1
      }}
      viewport={{
        once:true
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '} 
        <a className='underline' href='mailto:aaronbau@umich.edu'>aaronbau@umich.edu</a> or through this form
      </p>

      <form 
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input 
          type='email'
          name='senderEmail'
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email address"
          required
          maxLength={500}
        />
        <textarea 
          className="h-52 my-3 rounded-lg borderBlack p-4" 
          placeholder="Your message"
          name='message'
          required
          maxLength={5000}
        />
        <button type='submit' className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
          rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105">
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1'
          />
        </button>
      </form>
    </motion.section>
  )
}

export default Contact