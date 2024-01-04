'use client'

import { BsMoon, BsSun } from "react-icons/bs"
import { useTheme } from "../context/theme-context";

const ThemeSwitch = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button className="fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border border-white
      border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
      hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {
        theme === 'light' ? (
          <BsSun />
        ) : (
          <BsMoon />
        )
      }
    </button>
  )
}

export default ThemeSwitch