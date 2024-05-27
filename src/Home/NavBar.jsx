import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer.jsx";
function NavBar()
{
    const [click,setClick]=useState("up");
    const toggleMenu=()=>{
        if(click=="up")
        {
            setClick("down");
            document.getElementById("menu").classList.replace("-top-full","top-12");
            document.getElementById("icon").classList.replace("fa-bars","fa-times");
        }
        else
        {
            setClick("up");
            document.getElementById("menu").classList.replace("top-12","-top-full");
            document.getElementById("icon").classList.replace("fa-times","fa-bars");
        }
    }
    const closeMenu=()=>{
        if(window.innerWidth<640)
        {
            setClick("up");
            document.getElementById("menu").classList.replace("top-12","-top-full");
            document.getElementById("icon").classList.replace("fa-times","fa-bars");
        }
    }
    return(
        <>
            <header>
                <div className="fixed top-2 left-5 sm:left-8 z-20"><p className="text-xl text-[#fff] font-bold">Sumanth Narem</p></div>
                <div className="fixed sm:hidden z-20 right-5 top-3 hover:cursor-pointer" onClick={toggleMenu}>
                    <i id="icon" className="fa-solid fa-bars text-[#0fffa3] text-lg transition-all duration-500"></i>
                </div>
                <div className="text-[#fff] z-10 w-screen h-12 p-auto fixed transition-all duration-100 bg-gradient-to-r from-[#1e1e1e] to-[#121212]">
                    <div id="menu" className="fixed -top-full px-5 sm:pr-10 h-max sm:h-12 w-screen flex flex-col sm:flex-row items-center justify-center sm:justify-end bg-gradient-to-r from-[#1e1e1e] to-[#121212] text-[#fff] sm:top-0 transition-all duration-500 shadow-[#0000005b] shadow font-semibold">
                        <Link to="/" className="mx-5 my-2" onClick={closeMenu}>Home</Link>
                        <Link to="/projects" className="mx-5 my-2" onClick={closeMenu}>Projects</Link>
                        <Link to="/contact" className="mx-5 my-2" onClick={closeMenu}>Contact</Link>
                        <div className=" sm:hidden mb-2">
                            <a href="https://www.instagram.com/danger_3003/" target="_blank" id="instagram"><i className="fa-brands fa-instagram text-[#fff] font-bold mx-2 text-xl"></i></a>
                            <a href="https://github.com/danger-3003" target="_blank" id="github"><i className="fa-brands fa-github text-[#fff] font-bold mx-2 text-xl"></i></a>
                            <a href="https://www.linkedin.com/in/sumanth-narem-431a4524b" target="_blank" id="linkedin"><i className="fa-brands fa-linkedin text-[#fff] font-bold mx-2 text-xl"></i></a>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default NavBar;