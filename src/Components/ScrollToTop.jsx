import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollTop = () => {
    const handleClick = () =>{
        window.scrollTo({
            top:0,
        })
    }
  return (
    <div onClick={handleClick} className='rounded-full border-red-600  border-2 z-10 right-5 fixed bottom-4'>
      <BsFillArrowUpCircleFill className='smoothHover text-red-600 hover:text-white rounded-full hover:bg-red-600 cursor-pointer text-4xl'/>
    </div>
  )
}

export default ScrollTop;