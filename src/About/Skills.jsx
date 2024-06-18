import SkillsCard from "./SkillsCard.jsx";
import SQL from "../assets/SQL.png";
import Tailwind from "../assets/TailwindCSS.svg";
import Python from "../assets/Python.png";
import ReactSVG  from "../assets/React.svg";
import WebDev from "../assets/WebDev.svg";

function Skills()
{
    return(
        <div className="flex justify-center items-center flex-col md:flex-row flex-wrap my-5 py-5 px-2 sm:px-5 relative z-[2] w-full bg-[#111111d2] sm:bg-[#0000]">
            <div className="sm:md-4 md:mr-16 ">
                <div className="mb-4 flex flex-col items-center justify-center bg-gradient-to-tl from-cyan-500 to-green-500 text-transparent bg-clip-text ">
                    <p className="font-black text-9xl">2</p>
                    <p className="font-medium text-2xl">Years</p>
                    <p className="font-medium text-2xl">Experience</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="grid grid-cols-3">
                    <SkillsCard heading="Python" image={Python} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="SQL" image={SQL} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="SQLMagic"></SkillsCard>
                </div>
                <div className="grid grid-cols-2">
                    <SkillsCard heading="HTML|CSS" image={WebDev} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="Tailwindcss" image={Tailwind} className="h-10 m-2"></SkillsCard>
                </div>
                <div>
                    <SkillsCard heading="React JS" image={ReactSVG} className="h-10 m-2"></SkillsCard>
                </div>
            </div>
        </div>
    );
}
export default Skills;