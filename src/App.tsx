import { lazy, Suspense } from "react";
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

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setCursorVariant } from "./store/slices/cursorSlice";

function App() {
    const mouseVariant = useAppSelector((state) => state.cursor.variant);
    const dispatch = useAppDispatch();

    return (
        <>
            <Nav />

            <Suspense>
                <Cursor />
            </Suspense>

            <main
                className="cursor-none"
                onMouseEnter={() => {
                    (mouseVariant == "hidden" || mouseVariant == "start") &&
                        dispatch(setCursorVariant("default"));
                }}
                onMouseLeave={() => dispatch(setCursorVariant("hidden"))}>
                <section id="intro" className="overflow-hidden">
                    <Intro />
                </section>

                <Blob />

                <section id="projects">
                    <Projects />
                </section>

                <Blob />

                <section id="about">
                    <Suspense>
                        <About />
                    </Suspense>
                </section>

                <section id="contact">
                    <Suspense>
                        <ContactMe />
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
