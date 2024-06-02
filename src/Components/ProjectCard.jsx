import React, { useContext } from 'react'
import { FaEye, FaGithub } from 'react-icons/fa'
import { ThemeContext } from '../store/ThemeContext';

const ProjectCard = ({project}) => {
    const { img, name, des, span, stack, url, github } = project;

    const {isDarkTheme} = useContext(ThemeContext)

    const handleIconClick = () => {
        window.open(url, "_blank");
    };

    const handleOpenGit = () => {
        window.open(github, "_blank");
    };
    return (
        <div className={`${
            isDarkTheme ? "bg-[#0b111b] text-white" : "bg-white text-black"
          }w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 sm:p-6 lg:p-7 rounded-xl mb-8 sm:mb-10 lg:mb-14 shadow-md`} data-aos="zoom-in">
            <img src={img} alt="zwigato" className="w-full rounded-lg" />
            <p className="text-lg sm:text-xl font-bold text-center mt-3">{name}</p>
            <p className="text-xs sm:text-sm mt-2">{des}</p>
            <p className="mt-3 text-xs sm:text-sm">
                <span className="text-xs sm:text-sm text-red-600">{span} </span> {stack}
            </p>
            <div className="flex justify-evenly items-center mt-3">
                <div className="hover:bg-red-600 p-2 sm:p-3 rounded-full cursor-pointer">
                    <FaEye size={25} onClick={handleIconClick} />
                </div>
                <div className="hover:bg-red-600 p-2 sm:p-3 rounded-full cursor-pointer">
                    <FaGithub size={25} onClick={handleOpenGit} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard