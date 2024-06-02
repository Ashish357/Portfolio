import React, { useContext, useState } from 'react'
import NavBar from './NavBar'
import { ThemeContext } from '../store/ThemeContext';
import { BsFillMoonFill,BsList,BsFillSunFill,BsX } from "react-icons/bs";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleScrolling = () => {
    if (!showDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <header className={`fixed w-full px-4 sm:px-10 lg:px-28 flex justify-between items-center py-2 top-0 shadow-md z-[10] ${isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
      }`}>
      <h1 className="flex-1 sm:flex-none text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">Ash<span className="text-red-600">ish</span></h1>

      {/* Hamburger Icon */}
      <div className='sm:hidden cursor-pointer' onClick={() => {setShowDropdown(!showDropdown); toggleScrolling()}}>
      {showDropdown ? <BsX size={30} className="transition-transform duration-300" /> : <BsList size={30} className="transition-transform duration-300" />}
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row gap-4">
        <NavBar />
      </div>
      <div className='max-sm:px-2'>
        {isDarkTheme ? (
          <div className='cursor-pointer'>
            <BsFillSunFill onClick={toggleTheme} size={25} />
          </div>
        ) : (
          <div className='cursor-pointer'>
            <BsFillMoonFill onClick={toggleTheme} size={25} />
          </div>
        )}
      </div>
      {showDropdown && 
      <div className={`transition-all ease-in-out duration-300 transform ${showDropdown ? "opacity-100" : "opacity-0"} ${isDarkTheme ? "bg-[#edf2f8] text-black" : "bg-slate-900 text-white"
    } absolute top-full left-0 h-screen z-20 w-full shadow-lg rounded-b-lg  py-2 sm:hidden transition-all duration-200`}
      >
        <NavBar />
      </div>
      }
    </header>
  )
}

export default Header