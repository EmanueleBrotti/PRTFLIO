import "../css/App.css";
import {motion, useAnimation, useInView} from "framer-motion";
import { useRef, useEffect } from "react"



export default function SkillBlock(props: {name: string,icon: string, link: string, onHover: Function, job:string, delay: number}) {
    const ref = useRef<HTMLDivElement>(null); //animation stuff
    const inView = useInView(ref); 
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; 

    const animation = useAnimation();
    const variants = {
        start: {
            opacity: 0.2,
            y: 10
        },
    
        visible: {
            opacity: 1,
            y: 0
        }
    }

    useEffect(() => {
        if (inView && !prefersReducedMotion) {
            animation.start("visible");
        }   
    }, [inView])

    return (
        <a href={props.link} target="_blank" rel="noreferrer" onMouseEnter={() => props.onHover(`${props.name} ${props.job}.`)} onMouseLeave={() => props.onHover("SWISS ARMY KNIFE:")}>
            <motion.div ref={ref} className="group relative"
            variants={variants} initial="start" animate={animation} transition={{duration: 0.6, delay: props.delay}}>
                <div className=" flex items-center justify-center p-3 text-light bg-dark rounded-lg text-5xl group-hover:bottom-1  group-hover:bg-green group-hover:text-dark transition duration-300">

                <i className={`devicon-${props.icon}`}></i>

                </div>
            </motion.div>
            
        </a>
    )
}