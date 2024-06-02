import React, { useContext } from 'react'
import { projects } from '../utils/data'
import ProjectCard from './ProjectCard'
import { ThemeContext } from '../store/ThemeContext'

const Projects = () => {
   const {isDarkTheme} = useContext(ThemeContext)
  return (
    <section id='projects' className='pt-10 px-4 sm:px-10 lg:px-28'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-1 ml-2'>Projects</h1>
        <hr className={`border-y-1 ${isDarkTheme? "border-white":"border-black"}`}/>
        <div className='flex justify-center flex-wrap gap-4 sm:gap-6 mt-6'>
            {
                projects.map((project)=>(
                    <ProjectCard project={project} key={project.id} />
                ))
            }
        </div>
    </section>
  )
}

export default Projects