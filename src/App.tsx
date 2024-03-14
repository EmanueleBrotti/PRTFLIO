import { lazy, Suspense } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/pages/Intro";
import Nav from "./components/pages/Nav";
import Blob from "./components/misc/Blob";
import Cursor from "./components/misc/Cursor";

const About = lazy(() => import("./components/pages/about/About"));
const ContactMe = lazy(() => import("./components/pages/contact/ContactMe"));
const Footer = lazy(() => import("./components/pages/Footer"));
const Projects = lazy(() => import("./components/pages/Projects"));

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setCursorVariant } from "./store/slices/cursorSlice";

export default function App() {
    const mouseVariant = useAppSelector((state) => state.cursor.variant);
    const dispatch = useAppDispatch();

    return (
        <>
            <Nav />

            <Cursor />

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
                    <Suspense>
                        <Projects />
                    </Suspense>
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
