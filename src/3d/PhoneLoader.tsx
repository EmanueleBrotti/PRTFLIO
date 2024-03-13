import Phone from "./Phone";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";

function PhoneModel() {
    const [rotation, setRotation] = useState(0);

    useFrame(() => {
        setRotation((rotation - 0.005) % 360);
    });

    return (
        <group position={[0, 0, 0]} rotation={[0.2, rotation, -0.2]}>
            <Phone />
        </group>
    );
}

export default function PhoneLoader() {
    return (
        <Canvas className="animate-[head_8s_ease_infinite]">
            <ambientLight intensity={0.4} />
            <directionalLight intensity={1} position={[0, -2, 15]} />
            <Suspense fallback={null}>
                <PhoneModel />
            </Suspense>
        </Canvas>
    );
}
