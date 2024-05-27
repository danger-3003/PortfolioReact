import Home from "./Home/Home.jsx";
import Projects from "./Projects/Projects.jsx";
import NavBar from "./Home/NavBar.jsx";
import Contact from "./Contact/Contact.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />}>
                        <Route index element={<Home />}></Route>
                        <Route path="projects" element={<Projects />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;