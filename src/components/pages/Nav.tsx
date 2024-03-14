import { useRef, useEffect } from "react";

export default function Nav() {
    const navRef = useRef<HTMLDivElement | null>(null); //references the nav to get it's height

    useEffect(() => {
        if (navRef.current) {
            document.documentElement.style.setProperty(
                "--navHeight",
                `${navRef.current.offsetHeight}px`,
            );
        }
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed z-10 flex w-screen cursor-auto flex-row items-center justify-between overflow-hidden border-b border-light bg-dark p-2 text-light">
            <a href="#intro" className="text-nowrap p-2 text-xs xsm:text-sm">
                EMANUELE BROTTI, 2024 ©
            </a>
            <div className="mr-4 flex flex-row gap-4">
                <button
                    aria-label="portfolio"
                    className="select-none rounded-sm p-2 text-2xl transition duration-300 hover:text-green xsm:text-base xsm:hover:bg-green xsm:hover:text-dark"
                    onClick={() =>
                        document.getElementById("projects")?.scrollIntoView()
                    }>
                    <span className="hidden xsm:block">PORTFOLIO</span>
                    <i className="fa-solid fa-layer-group xsm:hidden"></i>
                </button>
                <button
                    aria-label="about"
                    className="select-none rounded-sm p-2 text-2xl transition duration-300 hover:text-green xsm:text-base xsm:hover:bg-green xsm:hover:text-dark"
                    onClick={() =>
                        document.getElementById("about")?.scrollIntoView()
                    }>
                    <span className="hidden xsm:block">ABOUT</span>
                    <i className="fa-solid fa-user xsm:hidden"></i>
                </button>
                <button
                    aria-label="contacts"
                    className="select-none text-nowrap rounded-sm p-2 text-2xl transition duration-300 hover:text-green xsm:text-base xsm:hover:bg-green xsm:hover:text-dark"
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView()
                    }>
                    <span className="hidden xsm:block">CONTACT ME</span>
                    <i className="fa-solid fa-comment xsm:hidden"></i>
                </button>
            </div>
        </nav>
    );
}
