import video from "../assets/video.mp4";
import Form from "./From";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';

function Contact()
{
    const fontstyle={
        fontFamily:"Roboto Condensed"
    }
    const width= (window.innerWidth <= 375)?"w-[90vw]":"w-[80vw]";
    return(
        <div className="h-max">
            <div className="flex items-center justify-center flex-col">
                <div className="h-[17rem] sm:h-96">
                    <video className="h-max sm:h-full mt-24 sm:-mt-2" src={video} autoPlay loop muted />
                    <div className="h-[16rem] sm:h-72 mt-10 bg-black absolute w-full left-0 top-0 flex items-center justify-center flex-col px-5 sm:px-20 md:px-40 mix-blend-multiply">
                        <p className={`${(window.innerWidth <= 375)?"text-[7.5vw]":"text-3xl"} sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-[900]`} style={fontstyle}>Want to work with me?<br/></p>
                        <hr className="my-[0.3rem] w-full"/>
                        <p className={`${(window.innerWidth <= 375)?"text-[7.5vw]":"text-3xl"} sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-[900]`} style={fontstyle}>Want to know more about my work?</p>
                    </div>
                </div>
                <div className="sm:-mt-14 mb-24 relative w-full">
                    <div className="bg-gradient-to-r from-[#0c0c0c] to-[#0e0e0e] h-[25rem] w-full absolute left-0 z-[1]"></div>
                    <div className="relative z-[2] mt-10 flex justify-center flex-col p-5">
                        <p id="heading" className="text-3xl md:text-4xl font-bold text-center m-3">Get In Touch</p>
                        <p className="text-center text-lg sm:text-xl text-[#cccccc] mx-auto w-full sm:w-[80%] md:w-[70%]">I am capable of executing a project centered around static webpages, ensuring they meet SEO&nbsp;standards.</p>
                    </div>
                </div>
                <div className="h-max w-full flex items-center justify-center relative z-[3] m-20 -mt-16 sm:-mt-12">
                    <div className={`bg-black rounded-2xl h-max ${width} sm:w-max flex items-center justify-center flex-col sm:flex-row p-3 shadow shadow-slate-700`}>
                        <div className={`${(window.innerWidth <= 375)?"w-[85vw]":"w-[75vw]"} sm:w-[19rem] h-max sm:h-96 bg-gradient-to-tr from-green-400 to-indigo-400 rounded-xl px-2 py-5 sm:p-5 sm:mr-5 text-[#0d0724]`}>
                            <p className="text-2xl font-bold my-2">Contact Information</p>
                            <p className="font-semibold my-2">Let's work together for your next project</p>
                            <div>
                                <div className="my-5 flex items-center flex-row">
                                    <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl"/>
                                    <a href="tel:8519839971" className="text-sm sm:text-md">&nbsp;+91 8519839971</a>
                                </div>
                                <div className="my-5 flex items-center flex-row">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl"/>
                                    <a href="mailto:naremsumanth@gmail.com" className="text-sm sm:text-md">&nbsp;naremsumanth@gmail.com</a>
                                </div>
                                <div className="my-5 flex items-center flex-row">
                                    <FontAwesomeIcon icon={faLocation} className="text-lg sm:text-xl"/>
                                    <a href="https://maps.app.goo.gl/KjoFAazxzDThciUf9" target="_blank" className="text-sm sm:text-md">&nbsp;Andhra Pradesh, India</a>
                                </div>
                                <div className="my-2 sm:mt-20 text-center">
                                    <a href="https://www.instagram.com/danger_3003/" target="_blank" id="instagram"><i className="fa-brands fa-instagram font-bold mx-2 text-xl"></i></a>
                                    <a href="https://github.com/danger-3003" target="_blank" id="github"><i className="fa-brands fa-github font-bold mx-2 text-xl"></i></a>
                                    <a href="https://www.linkedin.com/in/sumanth-narem-431a4524b" target="_blank" id="linkedin"><i className="fa-brands fa-linkedin font-bold mx-2 text-xl"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">   
                            <Form />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Contact;