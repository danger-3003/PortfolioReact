import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Skills from "./Skills.jsx";
import Tools from "./Tools.jsx";

function About()
{
    const sectionAbout = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#about' && sectionAbout.current) {
        sectionAbout.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    return(
        <>
            <div ref={sectionAbout} className="h-max pt-14">
                <div className="flex flex-col items-center justify-center ">
                    <div id="about-me" className="text-center w-max ">
                        <p className="uppercase font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">About me</p>
                    </div>
                    <div className="w-full px-7 sm:px-10 md:px-32">
                        <div className="text-2xl md:text-3xl font-light mt-10">
                            <p>I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Sumanth&nbsp;Narem,</span><span className="font-thin text-center"> Aspiring Data Scientist & Web Developer.</span></p>
                        </div>
                        <div className="my-5 text-base sm:text-lg">
                            <p>
                                Highly motivated and skilled web developer with proficiency in Python seeking a challenging position to utilize my expertise and contribute to the success of an innovative organization. Committed to delivering high-quality code and ensuring seamless website functionality.<span className="hidden sm:block">I thrive in collaborative environments and continuously seek opportunities to expand my knowledge and skills in web development.</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-center flex-col pt-10 mb-10">
                            <div id="can_do" className="flex justify-center flex-col items-center relative w-full left-0">
                                <div className="bg-[#111111d2] left-0 -top-10 absolute w-[50%] h-[70vh] z-[1]"></div>
                                <div className="flex items-center justify-center flex-col sm:flex-row flex-wrap relative z-[2] left-0">
                                    <div className="bg-[#1e1e1e] flex justify-center flex-col rounded-md m-3 p-4 lg:p-7 h-max w-60 sm:w-64 lg:w-72 hover:scale-110 transition-all duration-150">
                                        <i className="fa-solid fa-palette text-5xl pb-3 bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 to-green-500"></i>
                                        <p className="flex items-center"><span className="font-extrabold text-lg py-3 md:text-xl">Drawing & Painting</span></p>
                                        <p className="text-sm">Express creativity through drawing and painting; limitless forms of visual art.</p>
                                        <Link to="/projects" className="uppercase text-xs font-sans font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-blue-500">know more <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                    <div className="bg-gradient-to-tl from-cyan-500 to-green-500 flex justify-center flex-col rounded-md m-3 p-4 lg:p-7 h-max w-60 sm:w-64 lg:w-72 hover:scale-110 transition-all duration-150">
                                        <img src="https://img.icons8.com/ios-filled/100/FFFFFF/google-code.png" alt="" width="50" height="50" className="pb-3" />
                                        <p className="flex items-center"><span className="font-extrabold py-3 text-indigo-900 text-lg md:text-xl">Web Development</span></p>
                                        <p className="text-sm text-[#020608] font-bold">Design and code interactively, visually appealing online experiences for users.</p>
                                        <Link to="/projects" className="uppercase text-white text-xs font-bold mt-3">know more <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                    <div className="bg-[#1e1e1e] flex justify-center flex-col rounded-md m-3 p-4 lg:p-7 h-max w-60 sm:w-64 lg:w-72 hover:scale-110 transition-all duration-150">
                                        <i className="fa-brands fa-python text-5xl pb-3 bg-clip-text text-transparent bg-gradient-to-bl from-blue-500 to-green-500"></i>
                                        <p className="flex items-center"><span className="font-extrabold py-3 text-lg md:text-xl">Coding with Python</span></p>
                                        <p className="text-sm">I have a strong passion for coding in Python and crafting intricate logic using it.</p>
                                        <Link to="/projects" className="uppercase text-xs font-sans font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-blue-500">know more <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <Skills />
                            <Tools />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;