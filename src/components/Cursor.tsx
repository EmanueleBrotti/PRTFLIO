import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor(props: { variant: string }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function mouseMove(e: MouseEvent) {
            setMousePos({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        start: {
            opacity: 0,
        },
        hidden: {
            x: mousePos.x,
            y: mousePos.y,
            opacity: 0,
        },
        default: {
            x: mousePos.x - 10,
            y: mousePos.y - 10,
            opacity: 1,
        },
        title: {
            height: "8rem",
            width: "8rem",
            x: mousePos.x - 55,
            y: mousePos.y - 55,
            opacity: 1,
        },

        text: {
            height: "5rem",
            width: "5rem",
            x: mousePos.x - 30,
            y: mousePos.y - 30,
            opacity: 1,
        },
    };

    return (
        <>
            {/*slower one*/}
            <motion.div
                variants={variants}
                initial="start"
                animate={props.variant}
                className="pointer-events-none fixed left-0 top-0 z-20 h-6 w-6  origin-center rounded-full bg-light opacity-0 mix-blend-difference"
            />
        </>
    );
}
