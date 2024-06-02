import React, { useContext } from 'react'
import { ThemeContext } from '../store/ThemeContext';

const Experience = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <section id='experience' className={`${
            isDarkTheme ? "bg-[#1a202c] text-white" : "bg-white text-black"
          } pt-10 px-4 sm:px-10 lg:px-28 pb-6`}  data-aos="zoom-in" data-aos-duration="5000">
            <h1 className='text-2xl sm:text-3xl font-bold ml-2'>Experience</h1>
            <hr className={`border-y-1 ${isDarkTheme? "border-white":"border-black"}`} />
            <div className='mx-3 mt-4'>
                <div className="space-y-4">
                    <div className="mb-2">
                        <p className="text-base sm:text-lg text-end text-red-600 mb-1 font-semibold sm:text-center">
                            FullStack Developer at Cognizant
                        </p>
                        <p className="text-base sm:text-lg text-end font-semibold sm:text-center mb-5">
                            September 2022 - Present
                        </p>
                        <p className="text-sm sm:text-[18px] text-start mb-1 font-semibold">
                            Roles and responsibilites:-
                        </p>
                        <ul className="list-disc text-sm sm:text-lg mb-6">
                            <li>
                            Developed and maintained robust web applications using .NET Core Web API for the back-end and React.js for the front-end, implementing JWT authentication for secure user access. Collaborated with cross-functional teams to deliver high-quality software solutions, participated in code reviews, and contributed to the continuous improvement of development processes.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg text-end text-red-600 mb-1 font-semibold sm:text-center">
                            FullStack Developer Intern at Cognizant
                        </p>
                        <p className="text-base sm:text-lg text-end font-semibold sm:text-center mb-5">
                            February 2022 - July 2022
                        </p>
                        <p className="text-sm sm:text-[18px] text-start font-semibold">
                            Roles and responsibilites:-
                        </p>
                        <ul className="list-disc text-sm sm:text-lg">
                            <li>
                                Assisted in developing responsive web applications, collaborated with senior developers to implement new features, and gained hands-on experience in front-end and back-end technologies.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience