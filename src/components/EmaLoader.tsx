import { Canvas } from "@react-three/fiber";
import Ema from "../3d/Ema";
import { Suspense } from "react";

export default function EmaLoader() {
    return (
        <Suspense>
            <Canvas className="h-fit animate-[head_8s_ease_infinite]">
                <ambientLight intensity={0.5} />
                <directionalLight intensity={1} position={[0, 0, 10]} />
                <Ema />
            </Canvas>
        </Suspense>
    );
}
