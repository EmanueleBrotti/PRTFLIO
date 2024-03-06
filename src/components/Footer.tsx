export default function Footer() {
    return (
        <footer className="bg-dark p-4 h-[var(--navHeight)] border-t border-light flex flex-row items-center justify-between"> 
            <div>
                <a href="https://www.linkedin.com/in/emanuele-brotti-3329b22b6/" target="_blank" rel="noreferrer">
                <div className=" flex items-center justify-center p-2 rounded-lg text-4xl hover:text-green transition duration-300">
                    <i className={`devicon-linkedin-plain`}></i>
                </div>
                </a>
            </div> 
            <div className="flex flex-row">
                <button className=" rounded-lg p-2 hover:text-dark hover:bg-green text-sm xsm:text-base select-none transition duration-300" onClick={() => document.getElementById("intro")?.scrollIntoView()}>BACK TO TOP</button>
            </div>
        </footer>
    )
}