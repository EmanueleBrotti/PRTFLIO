
import { useRef, useEffect } from "react";

export default function Nav() {
    const navRef = useRef<HTMLDivElement | null>(null); //references the nav to get it's height

    useEffect(() => {
        if (navRef.current) {
            document.documentElement.style.setProperty('--navHeight', `${navRef.current.offsetHeight}px`);
        }
    }, [])


    return (<nav ref={navRef} className="text-light bg-dark flex w-screen flex-row justify-end xsm:justify-between items-center fixed border-b border-light p-2 z-10">
                <p className="hidden xsm:block text-nowrap text-sm">EMANUELE BROTTI, 2024 ©</p>
                <div className="flex flex-row gap-2 mr-4">
                    <button className="Dbuttons text-sm xsm:text-base noSelect" onClick={() => document.getElementById("projects")?.scrollIntoView()}>PORTFOLIO</button>
                    <button className="Dbuttons text-sm xsm:text-base noSelect" onClick={() => document.getElementById("about")?.scrollIntoView()}>ABOUT</button>
                    <button className="Dbuttons text-sm xsm:text-base noSelect">CONTACT ME</button>
                </div>
            </nav>)
}