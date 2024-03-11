export default function Footer() {
    return (
        <footer className="z-20 flex h-[var(--navHeight)] flex-row items-center justify-between border-t border-light bg-dark p-4">
            <div className="flex flex-row gap-4">
                <a
                    href="https://www.linkedin.com/in/emanuele-brotti-3329b22b6/"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center rounded-lg text-3xl transition duration-300 hover:text-green">
                        <i className={`devicon-linkedin-plain`}></i>
                    </div>
                </a>
                <a
                    href="mailto:emanuelebrotti@gmail.com?subject=(your name) from Ema's Portfolio&body=Please include your name, where you work, your contact info and a brief description of your vision:"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center rounded-lg text-3xl transition duration-300 hover:text-green">
                        <i className={`fa-solid fa-envelope`}></i>
                    </div>
                </a>
                <a
                    href="https://github.com/EmanueleBrotti"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center rounded-lg text-3xl transition duration-300 hover:text-green">
                        <i className={`devicon-github-plain`}></i>
                    </div>
                </a>
            </div>
            <div className="flex flex-row">
                <button
                    className=" select-none rounded-lg p-2 text-sm transition duration-300 hover:bg-green hover:text-dark xsm:text-base"
                    onClick={() =>
                        document.getElementById("intro")?.scrollIntoView()
                    }>
                    BACK TO TOP
                </button>
            </div>
        </footer>
    );
}
