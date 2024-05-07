import { lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCursorVariant } from "../../../store/slices/cursorSlice";
import Reveal from "../../animators/Reveal";

const SkillBlock = lazy(() => import("./SkillBlock"));

const skills = [
    {
        name: "HTML5",
        icon: "html5-plain",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design",
        job: "WEB DEV",
    },
    {
        name: "CSS3",
        icon: "css3-plain",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design",
        job: "WEB DEV",
    },

    {
        name: "TAILWINDCSS",
        icon: "tailwindcss-original",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries",
        job: "DESIGNER",
    },
    {
        name: "JAVASCRIPT",
        icon: "javascript-plain",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/javascript-algorithms-and-data-structures-v8",
        job: "DEV",
    },
    {
        name: "TYPESCRIPT",
        icon: "typescript-plain",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries",
        job: "DEV",
    },
    {
        name: "REACT",
        icon: "react-original",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries",
        job: "DEV",
    },
    {
        name: "REDUX TOOLKIT",
        icon: "redux-original",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries",
        job: "DEV",
    },

    {
        name: "C#",
        icon: "csharp-plain",
        link: "https://www.freecodecamp.org/certification/EmanueleBrotti/foundational-c-sharp-with-microsoft",
        job: "DEV",
    },
    // {name: "python", link:""}, so usarlo ma non ho certificazione
];

export default function About() {
    const dispatch = useAppDispatch();
    const label = useAppSelector((state) => state.about.label);

    /////

    const skillBlocks = skills.map((skill, index) => {
        return (
            <SkillBlock
                name={skill.name}
                icon={skill.icon}
                link={skill.link}
                key={index}
                job={skill.job}
                delay={index * 0.1}
            />
        );
    });

    /////

    return (
        <div className="flex w-full flex-col bg-light p-4 text-dark">
            <Reveal>
                <h2
                    className="mt-4 w-fit cursor-none text-3xl font-bold transition-all duration-500 xsm:text-4xl sm:text-5xl md:text-6xl"
                    onMouseEnter={() => dispatch(setCursorVariant("text"))}
                    onMouseLeave={() => dispatch(setCursorVariant("default"))}>
                    ABOUT ME:
                </h2>
            </Reveal>

            <div className="flex h-fit w-full flex-col-reverse items-center justify-between gap-4 pb-8 pt-6 lg:flex-row  lg:items-start lg:p-4">
                <div
                    className="flex w-full cursor-auto flex-col"
                    onMouseEnter={() => dispatch(setCursorVariant("hidden"))}
                    onMouseLeave={() => dispatch(setCursorVariant("default"))}>
                    <Reveal delay={0.2}>
                        <p className="m-4 text-pretty p-4 text-lg transition-all duration-500 xsm:text-xl sm:text-2xl md:text-3xl lg:border-l">
                            I'm an Italian developer focusing on exceptional
                            digital experiences, with a background in computer
                            science and engineering. <br></br>
                            My goal is to provide a seamless journey from start
                            to finish, maintain a flexible mindset, and learn
                            new skills along the way.
                        </p>
                    </Reveal>

                    <p className="m-4 select-none text-nowrap pt-2 text-lg font-bold transition-all duration-500 xsm:text-xl sm:text-2xl md:text-3xl">
                        YOUR NEW {label}
                    </p>

                    <div className=" grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
                        <Suspense>{skillBlocks}</Suspense>
                    </div>
                </div>
                <Reveal delay={0.3}>
                    <img
                        className="cursor-auto"
                        loading="lazy"
                        alt="Emanuele Brotti"
                        onMouseEnter={() =>
                            dispatch(setCursorVariant("hidden"))
                        }
                        onMouseLeave={() =>
                            dispatch(setCursorVariant("default"))
                        }
                        src="https://placehold.co/400/orange/white"></img>
                </Reveal>
            </div>

            <hr className="mt-5 w-[90%]"></hr>
            <Reveal delay={0.2}>
                <>
                    <h3
                        className="mt-5 w-fit cursor-none text-wrap text-2xl font-bold transition-all duration-500 xsm:text-nowrap xsm:text-3xl sm:text-4xl md:text-5xl"
                        onMouseEnter={() => dispatch(setCursorVariant("text"))}
                        onMouseLeave={() =>
                            dispatch(setCursorVariant("default"))
                        }>
                        TRUSTED BY:
                    </h3>

                    <div className="flex min-h-96 flex-col">
                        <Suspense>
                            {/*portfolio projects, lazy loaded*/}
                        </Suspense>
                    </div>
                </>
            </Reveal>

            <hr className="mt-5 w-[90%]"></hr>
        </div>
    );
}
