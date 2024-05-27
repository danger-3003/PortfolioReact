import Marquee from "react-fast-marquee";
import Child from "./MarqueeChild";
import Git from "../assets/git.png";
import GitHub from "../assets/github.png";
import Firebase from "../assets/firebase.png";
import Jupyter from "../assets/jupyter.png";
import VsCode from "../assets/vscode.svg";
import MySQL from "../assets/mysql.png";

function Tools()
{
    return(
        <>
            <div className="p-5 pb-0">
                <p className="text-center text-xl sm:text-2xl font-medium sm:font-semibold">Expert in using the follwing tools to optimize workflows and productivity</p>
            </div>
            <div className="w-[80vw] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
                <Marquee autoFill gradient gradientColor="black" gradientWidth={100} className="h-28">
                    <Child image={Git} className="h-10 sm:h-12 py-1.5" color="#f1502f"/>
                    <Child name="GitHub" image={GitHub} className="h-10 sm:h-12 py-2" color="#1e1e1e"/>
                    <Child image={Firebase} className="h-10 sm:h-12 py-2" color="#1a73e8"/>
                    <Child name="notebook" image={Jupyter} className="h-10 sm:h-12 py-1" color="#e5eaf0"/>
                    <Child name="VS Code" image={VsCode} className="h-10 sm:h-12 py-2" color="#1e1e1e"/>
                    <Child image={MySQL} className="h-10 sm:h-[3rem] py-1" color="#e5eaf0"/>
                </Marquee>
            </div>
        </>
    );
}
export default Tools;