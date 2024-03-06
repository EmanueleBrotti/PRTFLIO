
import { useRef, useEffect } from "react";

export default function Nav() {
    const navRef = useRef<HTMLDivElement | null>(null); //references the nav to get it's height

    useEffect(() => {
        if (navRef.current) {
            document.documentElement.style.setProperty('--navHeight', `${navRef.current.offsetHeight}px`);
        }
    }, [])


    return (<nav ref={navRef} className="text-light bg-dark flex w-screen flex-row justify-between items-center fixed border-b border-light p-2 z-10">
                <a href="#intro" className="text-nowrap text-sm p-2">EMANUELE BROTTI, 2024 ©</a>
                <div className="flex flex-row gap-4 mr-4">
                    <button className="rounded-lg p-2 hover:text-green xsm:hover:text-dark xsm:hover:bg-green text-2xl xsm:text-base select-none transition duration-300" onClick={() => document.getElementById("projects")?.scrollIntoView()}>
                        <span className="hidden xsm:block">PORTFOLIO</span>
                        <i className="xsm:hidden fa-solid fa-image"></i>
                    </button>
                    <button className="rounded-lg p-2 hover:text-green xsm:hover:text-dark xsm:hover:bg-green text-2xl xsm:text-base select-none transition duration-300" onClick={() => document.getElementById("about")?.scrollIntoView()}>
                        <span className="hidden xsm:block">ABOUT</span>
                        <i className="xsm:hidden fa-solid fa-circle-user"></i>
                    </button>
                    <button className="rounded-lg p-2 hover:text-green xsm:hover:text-dark xsm:hover:bg-green text-2xl xsm:text-base select-none transition duration-300 text-nowrap" onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                        <span className="hidden xsm:block">CONTACT ME</span>
                        <i className="xsm:hidden fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </nav>)
}