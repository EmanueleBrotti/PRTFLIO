import Phone from "./Phone";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function PhoneModel() {
    const Mesh = useRef<THREE.Group>(null);

    useFrame(() => {
        if (Mesh.current) {
            Mesh.current.rotation.y =
                (Mesh.current.rotation.y - 0.005) % (Math.PI * 2);
        }
    });

    return (
        <group position={[0, 0, 0]} ref={Mesh} rotation={[0, 0, 0.2]}>
            <Phone />
        </group>
    );
}

export default function PhoneLoader() {
    return (
        <Canvas className="animate-[head_8s_ease_infinite]">
            <ambientLight intensity={0.4} />
            <directionalLight intensity={1} position={[0, 6, 15]} />
            <Suspense fallback={null}>
                <PhoneModel />
            </Suspense>
        </Canvas>
    );
}
