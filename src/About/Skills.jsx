import SkillsCard from "./SkillsCard.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Skills()
{
    useEffect(()=>{
        AOS.init();
    })
    return(
        <div className="flex justify-center items-center flex-col md:flex-row flex-wrap my-5 py-5 px-2 sm:px-5 relative z-[2] w-full bg-[#131313] sm:bg-[#0000]">
            <div data-aos="fade-right" data-aos-duration="1000" className="sm:md-4 md:mr-16 ">
                <div className="mb-4 flex flex-col items-center justify-center bg-gradient-to-tl from-cyan-500 to-green-500 text-transparent bg-clip-text ">
                    <p className="font-black text-9xl">2</p>
                    <p className="font-medium text-2xl">Years</p>
                    <p className="font-medium text-2xl">Relevant</p>
                    <p className="font-medium text-2xl">Experience</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="grid grid-cols-3">
                    <SkillsCard heading="Python" image={'https://danger-3003.github.io/PortfolioReact/src/assets/Python.png'} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="SQL" image={'https://danger-3003.github.io/PortfolioReact/src/assets/SQL.png'} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="MongoDB" image={'https://danger-3003.github.io/PortfolioReact/src/assets/mongodb.png'} className="h-10 m-2"></SkillsCard>
                </div>
                <div className="grid grid-cols-2">
                    <SkillsCard heading="Node JS" image={'https://danger-3003.github.io/PortfolioReact/src/assets/nodejs.svg'} className="h-10 m-2"></SkillsCard>
                    <SkillsCard heading="Tailwindcss" image={'https://danger-3003.github.io/PortfolioReact/src/assets/TailwindCSS.svg'} className="h-10 m-2"></SkillsCard>
                </div>
                <div>
                    <SkillsCard heading="React JS" image={'https://danger-3003.github.io/PortfolioReact/src/assets/React.svg'} className="h-10 m-2"></SkillsCard>
                </div>
            </div>
        </div>
    );
}
export default Skills;