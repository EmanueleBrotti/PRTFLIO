//used to animate the text while scrolling
import {motion, useInView, useAnimation, useScroll, useSpring} from "framer-motion"
import { useRef, useEffect } from "react"


export default function Reveal ({children, delay=0}: {children: JSX.Element, delay?: number}) { //delay is optional

    const ref = useRef<HTMLDivElement>(null); 
    const inView = useInView(ref, {once: true}); //used to see if div is visible, triggers once
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "0.7 end"]}); //used to track the scroll progress, the first name is the obj position, the second the viewport

    const opacity = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView && !prefersReducedMotion) {
            animation.start("visible");
        }   
    }, [inView])

    return(
        <motion.div className={`relative`} ref={ref} style={{opacity: opacity}}
            variants={{ //sort of keyframe but we can call the anims however we like
                start: {    
                    y: 40
                },

                visible: {
                    y: 0
                }
            }}

            initial="start" 

            animate={animation}

            transition={{duration: 0.3, delay: delay}}>

            {children}

        
        </motion.div>
    )
}