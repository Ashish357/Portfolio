import { useContext, useRef } from "react";
import {ThemeContext} from "../store/ThemeContext"
import SkillCard from "./SkillCard";
import { skills } from "../utils/data";

const Skill = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={`${
        isDarkTheme ? "bg-[#1a202c] text-white" : "bg-white text-black"
      } pt-10 px-4 sm:px-10 lg:px-28`}
    >
      <div className="text-center text-2xl sm:text-3xl font-bold p-3 mb-4">
        <h1>
          My <span className="text-red-600">Technical</span> Skills
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center p-2 pb-0">
        {skills.map((skill) => {
          return <SkillCard {...skill} key={skill.id} />;
        })}
      </div>
    </section>
  );
};

export default Skill;