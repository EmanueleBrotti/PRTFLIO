import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import PhoneLoader from "../3d/PhoneLoader";
import { useAppDispatch } from "../store/hooks";
import { setCursorVariant } from "../store/slices/cursorSlice";

export default function ContactMe() {
    const dispatch = useAppDispatch();
    return (
        <div className="relative h-[calc(100vh-var(--navHeight))] min-h-[35em] w-full overflow-hidden p-4 text-light">
            <Reveal>
                <h2
                    className="mt-5 w-fit cursor-none pb-8 text-3xl font-bold transition-all duration-500 xsm:text-4xl sm:text-5xl md:text-6xl"
                    onMouseEnter={() => dispatch(setCursorVariant("text"))}
                    onMouseLeave={() => dispatch(setCursorVariant("default"))}>
                    LET'S RENDEZVOUS:
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <ContactForm />
            </Reveal>

            <div className="absolute right-0 top-10 -z-10 h-[40em] w-full md:h-full md:w-1/2 lg:-right-20">
                <PhoneLoader />
            </div>
        </div>
    );
}
