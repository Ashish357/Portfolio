import React, { useState } from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { BsList } from 'react-icons/bs';

const Social = () => {
    const [showLinks,setShowLinks] = useState(false)
  return (
    <div className='fixed z-10 bottom-4 left-4'>
        {/* Hamburger Icon */}
        <ul className={`${showLinks ? 'sm:block' : 'sm:hidden'} flex flex-col gap-2`}>
            <li className='border-2 cursor-pointer border-red-600 rounded-full hover:bg-red-600'>
                <a href="https://github.com/Ashish357" target='_blank' rel="noopener noreferrer" aria-label="Ashish Saha's GitHub">
                    <BsGithub className='text-red-600 text-2xl sm:text-3xl rounded-full hover:text-white'/>
                </a>
            </li>
            <li className='border-2 cursor-pointer border-red-600 rounded-full hover:bg-red-600'>
                <a href="https://www.linkedin.com/in/ashish-saha-b09608184" target='_blank' rel="noopener noreferrer" aria-label="Ashish Saha's LinkedIn">
                    <BsLinkedin className='text-red-600 text-2xl sm:text-3xl rounded-full hover:text-white'/>
                </a>
            </li>
            <li className='border-2 cursor-pointer border-red-600 rounded-full hover:bg-red-600'>
                <a href="mailto:ashishsaha2708@gmail.com" target='_blank' rel="noopener noreferrer" aria-label="Email Ashish Saha">
                    <ImMail4 className='text-red-600 text-2xl sm:text-3xl rounded-full hover:text-white'/>
                </a>
            </li>
        </ul>
        <div className='sm:hidden cursor-pointer' onClick={()=>setShowLinks(!showLinks)}>
        <BsList size={30} />
      </div>
    </div>
  )
}

export default Social
