import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import profile from '../assets/profile.jpg';
import Resume from '../assets/Sumanth Narem.pdf';
import About from '../About/About';
import '../components/loader.css';

function Home()
{
    const [text] = useTypewriter(
    {
        words:['MERN Stack Developer','Frontend React Developer'],
        loop:{},
        typeSpeed:120,
        cursor:"True"
    })
    const [loader,setLoader] = useState(true);
    const sectionHome = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#home' && sectionHome.current) {
            console.log(sectionHome.current)
        sectionHome.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1500);
    })

    return(
        <>
            {loader &&
                <div className='fixed h-screen w-full z-20 bg-black top-0 flex items-center justify-center'>
                    <div className='loader'></div>
                </div>
            }
            <div ref={sectionHome} className='flex items-center justify-center flex-col sm:flex-row py-20 sm:py-28 pl-5 lg:pl-10 pr-5'>
                <div className='sm:basis-[40%] flex justify-center'>
                    <img src={profile} alt="profile-picture" className='mb-5 sm:mb-auto w-[50%] sm:w-full md:w-[80%]' />
                </div>
                <div className="flex items-center sm:items-start flex-col mx-5 sm:ml-5 lg:ml-10 sm:basis-[60%]">
                    <p className="uppercase text-[5vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-bold -mb-1 xl:mb-1">hi there !</p>
                    <p className="uppercase text-[6.5vw] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 font-bold">I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">sumanth narem</span></p>
                    <p className="bg-gradient-to-r from-green-500 to-blue-400 text-[#070622] w-max text-[4vw] sm:text-sm lg:text-base py-1 px-2 mb-5 rounded font-bold">{text}<Cursor>|</Cursor></p>
                    <p className="mb-5 text-justify sm:text-left text-base">Highly motivated and skilled React developer with proficiency in MongoDB, Node JS and Express, seeking a challenging position to utilize my expertise and contribute to the success of an innovative organization.</p>
                    <div className="w-max">
                        <a href={Resume} target="_blank" className="mx-1 sm:mx-2 px-5 py-0.5 lg:py-1 relative rounded-full border-[2px] border-blue-400 group overflow-hidden bg-transparent text-white font-semibold inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-in-out transform translate-y-0 bg-gradient-to-r from-green-500 to-blue-400 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-black text-sm sm:text-base">Resume</span>
                        </a>
                        <Link to="/projects" className="mx-1 sm:mx-2 px-5 py-0.5 lg:py-1 relative rounded-full border-[2px] border-blue-400 group overflow-hidden bg-transparent text-white font-semibold inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-in-out transform translate-y-0 bg-gradient-to-l from-green-500 to-blue-400 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-black text-sm sm:text-base">Projects</span>
                        </Link>
                    </div>
                </div>
            </div>
            <About />
        </>
    )
}

export default Home;