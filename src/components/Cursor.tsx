import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setCursorPosition } from "../store/slices/cursorSlice";

export default function Cursor() {
    const dispatch = useAppDispatch();
    const mousePos = useAppSelector((state) => state.cursor.position);
    const cursorVariant = useAppSelector((state) => state.cursor.variant);

    useEffect(() => {
        function mouseMove(e: MouseEvent) {
            dispatch(setCursorPosition({ x: e.clientX, y: e.clientY }));
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
            opacity: 0,
        },
        default: {
            opacity: 1,
        },
        title: {
            height: "8rem",
            width: "8rem",
            x: "-4rem",
            y: "-4rem",
            opacity: 1,
        },

        text: {
            height: "5rem",
            width: "5rem",
            x: "-2.5rem",
            y: "-2.5rem",
            opacity: 1,
        },
    };

    return (
        <>
            <motion.div
                style={{ left: mousePos.x - 5, top: mousePos.y - 5 }}
                variants={variants}
                initial="start"
                animate={cursorVariant}
                id="cursor"
                className="pointer-events-none fixed left-0 top-0 z-30 h-6 w-6 origin-center rounded-full bg-light opacity-0 mix-blend-difference"
            />
        </>
    );
}
