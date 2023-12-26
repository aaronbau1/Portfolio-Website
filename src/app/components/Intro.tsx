import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src='/intro-headshot.png'
            alt='Aaron Baumgarten headshot'
            width={64}
            height={64}
          />
        </div>
      </div>
    </section>
  )
}

export default Intro