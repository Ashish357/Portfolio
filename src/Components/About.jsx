import React from 'react'
import img from '../assets/MyImage.jpg'
import Typewriter from './Typewriter'
import Resume from './Resume'

const About = () => {
  return (
    <section id='about' className='flex flex-col sm:flex-row justify-center items-center px-4 sm:px-10 lg:px-28 h-screen pt-10'>
        <div className='w-full sm:w-1/2 flex items-center justify-center mb-8 sm:mb-0'>
            <img src={img} alt="Profile-picture" className='rounded-full w-48 h-48 sm:w-72 sm:h-72' />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col items-center sm:items-start'>
            <div><h1 className='text-2xl font-semibold text-center sm:text-left'>Hi, my name is</h1>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">Ashish Saha</h3>
            <p className="font-semibold text-xl sm:text-2xl lg:text-3xl text-center sm:text-left" id="animatedText">
        I'm a <span  className="text-red-600 font-bold">Full Stack Developer.</span>
      </p>
            <div>
            <p className='text-sm sm:text-base lg:text-lg font-semibold text-center sm:text-left mt-4'>
                I am a 2022 passout from Sikkim Manipal Institute Of Technology with a CGPA of 9.65. I’m a passionate Full Stack Developer with a knack for creating seamless user experiences and robust backend solutions. Currently, I’m honing my skills at Cognizant, where I collaborate with a talented team to deliver cutting-edge applications that drive business success.
            </p>
            </div>
            </div>
            <Resume />
        </div>
    </section>
  )
}

export default About