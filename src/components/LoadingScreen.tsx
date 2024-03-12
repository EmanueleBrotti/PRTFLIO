import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center justify-center gap-2 motion-reduce:hidden">
                <div className="h-6 w-6 animate-bounce rounded-full bg-green"></div>
                <div className="h-6 w-6 animate-bounce rounded-full bg-green [animation-delay:_0.1s]"></div>
                <div className="h-6 w-6 animate-bounce rounded-full bg-green [animation-delay:_0.2s]"></div>
                <h1 className="hidden motion-reduce:visible">Loading...</h1>
            </div>
            <h1 className="text-2xl">Making sure everything is perfect!</h1>
        </motion.div>
    );
}
