import "../css/App.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setLabel } from "../store/slices/aboutSlice";

export default function SkillBlock(props: {
    name: string;
    icon: string;
    link: string;
    job: string;
    delay: number;
}) {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null); //animation stuff
    const inView = useInView(ref);
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    const animation = useAnimation();
    const variants = {
        start: {
            opacity: 0.2,
            y: 10,
        },

        visible: {
            opacity: 1,
            y: 0,
        },
    };

    useEffect(() => {
        if (inView && !prefersReducedMotion) {
            animation.start("visible");
        }
    }, [inView]);

    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() =>
                dispatch(setLabel(`${props.name} ${props.job}.`))
            }
            onMouseLeave={() => dispatch(setLabel("SWISS ARMY KNIFE:"))}>
            <motion.div
                ref={ref}
                className="group relative"
                variants={variants}
                initial="start"
                animate={animation}
                transition={{ duration: 0.6, delay: props.delay }}>
                <div className=" flex items-center justify-center rounded-lg bg-dark p-3 text-5xl text-light transition  duration-300 group-hover:bottom-1 group-hover:bg-green group-hover:text-dark">
                    <i className={`devicon-${props.icon}`}></i>
                </div>
            </motion.div>
        </a>
    );
}
