import React, { useContext, useEffect, useState } from 'react'
import { sectionIds } from '../utils/data'

const NavBar = () => {
  const [activeLink,setActiveLink] = useState("about");
  const [isScrolled,setIsScrolled] = useState(false);

  //Function to smoothly scroll
  const scrollToSection = (sectionId) => {
    // console.log(sectionId);
    const element = document.getElementById(sectionId);
    if(element){
      let headerHeight = document.querySelector('header').offsetHeight;
      const elementTop = element.offsetTop;
      const scrollToY = elementTop - headerHeight;
      console.log(scrollToY, elementTop);
      window.scrollTo({
        top: scrollToY,
        // left: 0,
        // behavior: "smooth"
      });
    }
  };
  
  //Function to determine active section
const determineActiveSection = () => {
  const headerHeight = document.querySelector('header').offsetHeight; // Get the header height
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      // Adjust the condition to account for the header height
      if (rect.top <= headerHeight + 120 && rect.bottom >= headerHeight) {
        setActiveLink(sectionIds[i]);
        break;
      }
    }
  }
};

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY>300){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
      determineActiveSection()
    }
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  }, [])
  

  return (
    <nav className='flex justify-between items-center px-4 lg:px-8'>
        <ul className='flex flex-col md:flex-row text-lg font-medium'>
          {sectionIds.map((sectionId,i)=>(
             <li key={i} onClick={()=>scrollToSection(sectionId)} className='smoothHover capitalize cursor-pointer hover:bg-red-600 p-3 hover:text-white hover:rounded-md'><a className={`${activeLink==sectionId ? "active": ""}`}>{sectionId}</a></li>
          ))}
        </ul>
    </nav>
  )
}

export default NavBar