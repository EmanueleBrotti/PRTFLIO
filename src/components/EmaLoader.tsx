import { Canvas, useFrame } from "@react-three/fiber";
import Ema from "../3d/Ema";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { easing } from "maath";

function EmaHead(props: { angle: THREE.Euler }) {
    const Mesh = useRef<THREE.Group>(null);
    //add smooth rotation
    useFrame((state, dv) => {
        if (Mesh.current) {
            easing.dampE(Mesh.current.rotation, props.angle, 0.2, dv);
        }
    });

    return (
        <group ref={Mesh}>
            <Ema />
        </group>
    );
}

export default function EmaLoader() {
    //to make it look at the mouse
    const CanvasRef = useRef<HTMLCanvasElement>(null);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function mouseMove(e: MouseEvent) {
            setMouse({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    function calculateAngle() {
        if (!CanvasRef.current) {
            return new THREE.Euler(0.05, 0.05, 0);
        }
        const Prect = CanvasRef.current.getBoundingClientRect(); //parent rect
        const center = {
            x: Prect.left + Prect.width / 2 + window.scrollX,
            y: Prect.top + Prect.height / 2 + window.scrollY,
        };
        const offset = {
            x: mouse.x - center.x > 0 ? 1 : -1, //we only care about the sign
            y: mouse.y - center.y > 0 ? 1 : -1,
        };

        return new THREE.Euler(offset.y * 0.15, offset.x * 0.15, 0);
    }

    return (
        <Canvas
            ref={CanvasRef}
            className="animate-[head_8s_ease_infinite] motion-reduce:animate-none">
            <Suspense>
                <ambientLight intensity={0.4} />
                <directionalLight intensity={1} position={[0, 0, 15]} />
                <EmaHead angle={calculateAngle()} />
            </Suspense>
        </Canvas>
    );
}
