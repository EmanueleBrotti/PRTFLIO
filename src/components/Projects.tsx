import { Suspense } from "react";
import Blob from "./Blob";
import Reveal from "./Reveal";

export default function Projects(props: { mouseV: Function }) {
    return (
        <>
            <div className="flex h-fit w-full flex-col bg-light p-4 pb-0 text-dark">
                <Reveal>
                    <h2
                        className="m-0 mt-5 w-fit cursor-none text-wrap text-3xl font-bold transition-all duration-500 xsm:text-nowrap xsm:text-4xl sm:text-5xl md:text-6xl"
                        onMouseEnter={() => props.mouseV("title")}
                        onMouseLeave={() => props.mouseV("default")}>
                        DON'T WASTE YOUR TIME, <br></br>
                        HERE'S MY PORTFOLIO.
                    </h2>
                </Reveal>
            </div>
            <Blob upsideDown />

            <div className="grid h-fit min-h-96 w-full grid-flow-row grid-cols-1 gap-4 bg-dark p-4 text-light sm:grid-cols-2">
                <Suspense>{/*portfolio elements, lazy loaded*/}</Suspense>
            </div>
        </>
    );
}
