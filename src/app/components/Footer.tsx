const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2024 Baumgarten. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>{' '} 
        built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. 
        Hosted on Vercel.
      </p>
    </footer>
  )
}

export default Footer