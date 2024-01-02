import { FaPaperPlane } from "react-icons/fa"
import SectionHeading from "./Section-Heading"

const Contact = () => {
  return (
    <section id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{' '} 
        <a className='underline' href='mailto:aaronbau@umich.edu'>aaronbau@umich.edu</a> or through this form
      </p>

      <form>
        <input type='email' />
        <textarea />
        <button type='submit'>
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  )
}

export default Contact