import { useContext } from "react";
import {ThemeContext} from "../store/ThemeContext"

const SkillCard = ({ name, img }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-[75%] p-5 rounded-lg  cursor-pointer shadow-lg mb-12 ${
        isDarkTheme
          ? "bg-slate-900 text-white hover:bg-[#0b111b]"
          : "bg-[#edf2f8] text-black hover:bg-white"
      } skillCard `}
    data-aos="zoom-in"
    >
      <img src={img} width="100%" />
      <p className="text-center mt-1 font-semibold">{name}</p>
    </div>
  );
};

export default SkillCard;
// `w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-lg cursor-pointer shadow-lg mb-8