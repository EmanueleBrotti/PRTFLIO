import { motion } from "framer-motion";

export default function Blob(props: { upsideDown?: boolean }) {
    const variants = {
        start: {
            d: "M 160.088 81.232 C 166.788 102.032 159.594 143.161 135.384 144.92 C 108.058 146.905 79.206 153.852 58.699 144.596 C 36.225 134.452 32.788 101.932 39.888 80.532 C 46.988 59.132 74.588 44.932 101.188 45.232 C 127.688 45.532 153.388 60.332 160.088 81.232",
        },

        end: {
            d: "M 157.584 82.476 C 164.149 103.994 151.342 149.866 127.574 148.828 C 68.309 146.24 70.419 141.274 56.135 146.869 C 27.3 158.163 32.831 103.891 39.789 81.752 C 46.747 59.612 73.794 44.922 99.862 45.232 C 125.832 45.543 151.018 60.854 157.584 82.476",
        },
    };

    return (
        <div className={"-z-10 m-0 overflow-hidden border-0 bg-light p-0"}>
            <svg
                viewBox="74 144 50 7"
                xmlns="http://www.w3.org/2000/svg"
                transform={
                    props.upsideDown
                        ? "matrix(1, 0, 0, -1, 0, 0)"
                        : "matrix(1, 0, 0, 1, 0, 0)"
                }>
                <motion.path
                    fill="#0e0e0e"
                    variants={variants}
                    initial="start"
                    animate="end"
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 13,
                        ease: "easeInOut",
                    }}></motion.path>
            </svg>
        </div>
    );
}
