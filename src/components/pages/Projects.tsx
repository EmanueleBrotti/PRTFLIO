import { Suspense } from "react";
import Blob from "../misc/Blob";
import Reveal from "../animators/Reveal";
import { useAppDispatch } from "../../store/hooks";
import { setCursorVariant } from "../../store/slices/cursorSlice";

export default function Projects() {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="flex h-fit w-full flex-col bg-light p-4 pb-0 text-dark">
                <Reveal>
                    <h2
                        className="m-0 mt-5 w-fit cursor-none text-wrap text-3xl font-bold transition-all duration-500 xsm:text-nowrap xsm:text-4xl sm:text-5xl md:text-6xl"
                        onMouseEnter={() => dispatch(setCursorVariant("title"))}
                        onMouseLeave={() =>
                            dispatch(setCursorVariant("default"))
                        }>
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
