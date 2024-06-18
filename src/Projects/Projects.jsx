import Card from "./CardNrml.jsx";
import CardReverse from "./CardReverse.jsx";
import genaitools from "../assets/genaitools.svg";
import Portfolio from "../assets/sumanthnarem.png";
import Netflix from "../assets/netflix.webp";
import Restaurant from "../assets/emeralld-grill.webp";
import oldPort from "../assets/portfolio.webp";
import AdmDash from "../assets/home.jpg";
import Temp from "../assets/temp.jpeg";
import Calc from "../assets/calculator.jpg";
import LogSig from "../assets/login-signup.jpg"

function Projects() {
    return (
        <>
            <div className="py-20 flex justify-center items-center flex-row sm:flex-col flex-wrap relative z-[2]">
                <div className="hidden sm:block rounded-full bg-blue-500 h-5 w-5"></div>
                <Card 
                    content="I've crafted a versatile website featuring
                            freemium AI tools for a wide range of tasks."
                    image={genaitools}
                    link="https://genaitools.vercel.app/"
                    skills="HTML, JS, SMTPJS, TailwindCSS"
                />
                <CardReverse 
                    content="Designed and crafted a sleek personal portfolio
                            site with outstanding UI and smooth UX using
                            Tailwind CSS and JavaScript."
                    image={Portfolio}
                    link="https://sumanthnarem.vercel.app/"
                    skills="HTML, JS, Vercel, TailwindCSS"
                />
                <Card 
                    content="Designed a website interface that resembles
                            Netflix using HTML5, the Tailwind CSS framework,
                            and JavaScript."
                    image={Netflix}
                    link="https://bi-net-clone.vercel.app/"
                    skills="HTML, CSS, JS, TailwindCSS"
                />
                <CardReverse 
                    content="Created an SEO-friendly restaurant website using
                            HTML5, CSS3, JavaScript, and the Tailwind CSS
                            framework."
                    image={Restaurant}
                    link="https://emeralld-grill.vercel.app/"
                    skills="HTML, CSS, JS, TailwindCSS"
                />
                <Card 
                    content="Developed a polished, non-responsive portfolio
                            website, creatively showcasing my work and
                            skills professionally."
                    image={oldPort}
                    link="https://nonres-portfolio.vercel.app/"
                    skills="HTML, CSS, JavaScript"
                />
                <CardReverse 
                    content="Designed and Developed an admin dashboard
                            website with non-functional features and a
                            user-friendly interface."
                    image={AdmDash}
                    link="https://admin-dashboard-ns.vercel.app/"
                    skills="HTML, CSS, JavaScript"
                />
                <Card 
                    content="Built a responsive, fully functional temperature
                            converter website with Tailwind CSS and
                            JavaScript integration."
                    image={Temp}
                    link="https://temp-convo.vercel.app/"
                    skills="HTML, CSS, JavaScript"
                />
                <CardReverse 
                    content="I've developed a responsive
                            calculator website with outstanding user
                            interface and user experience using JavaScript."
                    image={Calc}
                    link="https://calculator-ns.vercel.app/"
                    skills="HTML, CSS, JavaScript"
                />
                <Card 
                    content="Crafted a user-friendly login and signup
                            interface with a polished UI and excellent user
                            experiences."
                    image={LogSig}
                    link="https://admin-login-white.vercel.app/"
                    skills="HTML, CSS, JavaScript"
                />
            </div>
        </>
    );
}
export default Projects;
