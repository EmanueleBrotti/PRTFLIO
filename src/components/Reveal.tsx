//used to animate the text opacity when scrolling and to move to the left the elements when they enter
import {
    motion,
    useInView,
    useAnimation,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";

export default function Reveal({
    children,
    delay = 0,
}: {
    children: JSX.Element;
    delay?: number;
}) {
    //delay is optional

    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref); //used to see if div is visible
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches; //to avoid motion sickness

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    }); //used to track the scroll progress, the first name is the obj position, the second the viewport

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.82, 1],
        [0, 1, 1, 1, 0],
    ); //maps the scroll to 0 if it's at the edge, 1 if it's in the middle

    const animation = useAnimation();
    const variants = {
        //sort of keyframe but we can call the anims however we like
        start: {
            x: -20,
        },

        visible: {
            x: 0,
        },
    };

    useEffect(() => {
        if (inView && !prefersReducedMotion) {
            animation.start("visible");
        }
    }, [inView]);

    return (
        <motion.div
            className={`relative`}
            ref={ref}
            style={{ opacity: opacity }}
            variants={variants}
            initial="start"
            animate={animation}
            transition={{
                duration: 0.3,
                delay: delay,
                type: "spring",
                stiffness: 240,
                damping: 15,
            }}>
            {children}
        </motion.div>
    );
}
