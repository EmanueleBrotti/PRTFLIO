
export default function About() {

    return ( <div className="w-full bg-light text-dark p-4 flex flex-col">
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl title font-bold mt-5">
                    INTERESTED?
                </h2>
    
                <div className="w-full flex flex-col-reverse h-fit justify-between items-center pt-6 lg:p-4 gap-4 lg:flex-row">

                    <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl title m-4 lg:border-l p-4 text-pretty">
                        Continuously expanding my programming language skills since I was a kid,
                        i strive to maintain a flexible mindset in an ever-changing industry,
                        to deliver cutting-edge solutions to my clients. <br/>
                        My goal is to provide an exceptional digital experience,
                        ensuring a seamless journey from start to finish.
                    </p>
                    
                    
                    <img src="https://placehold.co/400/orange/white"></img>
                </div>

                <div>

                </div>

                <hr className="w-[90%] mt-5"></hr>
                <h3 className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-wrap xsm:text-nowrap title font-bold mt-5">
                    TRUSTED BY:
                </h3>

                <div>

                </div>
            </div>)
}