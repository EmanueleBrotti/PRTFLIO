import { useState, lazy, Suspense } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Blob from "./components/Blob";

const About = lazy(() => import("./components/About"));
const ContactMe = lazy(() => import("./components/ContactMe"));
const Footer = lazy(() => import("./components/Footer"));
const Cursor = lazy(() => import("./components/Cursor"));

function App() {
    const [mouseVariant, setMouseVariant] = useState("start"); //used to change the mouse when hovering an element

    return (
        <>
            <Nav />

            <Suspense>
                <Cursor variant={mouseVariant} />
            </Suspense>

            <main
                onMouseEnter={() => {
                    (mouseVariant == "hidden" || mouseVariant == "start") &&
                        setMouseVariant("default");
                }}
                onMouseLeave={() => setMouseVariant("hidden")}>
                <section id="intro" className="overflow-hidden">
                    <Intro mouseV={setMouseVariant} />
                </section>

                <Blob />

                <section id="projects">
                    <Projects mouseV={setMouseVariant} />
                </section>

                <Blob />

                <section id="about">
                    <Suspense>
                        <About mouseV={setMouseVariant} />
                    </Suspense>
                </section>

                <section id="contact">
                    <Suspense>
                        <ContactMe mouseV={setMouseVariant} />
                    </Suspense>
                </section>
            </main>
            <Suspense>
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
