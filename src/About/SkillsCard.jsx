import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function SkillsCard(props)
{
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>
            <div data-aos="flip-right" className=" bg-[#272727] p-2 sm:px-5 sm:py-3 w-[28vw] sm:w-auto flex items-center justify-start flex-col rounded-md m-2 transition-all duration-200 hover:scale-110">
                <p className="text-center text-[3.5vw] sm:text-sm">{props.heading}</p>
                <div>
                    <img src={props.image} className={props.className} alt="" />
                    <p className="font-mono font-bold uppercase text-2xl mt-2">{props.heading=="SQLMagic"?"%%SQL":""}</p>
                </div>
            </div>
        </>
    )
}
export default SkillsCard;