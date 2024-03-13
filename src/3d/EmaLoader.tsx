import { Canvas, useFrame } from "@react-three/fiber";
import Ema from "./Ema";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { easing } from "maath";
//split in 2 components for ease of use: EmaHead loads the model and animates the rotation
function EmaHead(props: { angle: THREE.Euler }) {
    const Mesh = useRef<THREE.Group>(null);
    //add smooth rotation
    useFrame((_, dv) => {
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
//emaloader contains the canvas, lights and calculates the canvas size / angle
export default function EmaLoader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    function calculateEulerAngle() {
        if (!canvasRef.current) {
            return new THREE.Euler(0.05, 0.05, 0);
        }

        const canvasRect = canvasRef.current.getBoundingClientRect();
        const center = {
            x: canvasRect.left + canvasRect.width / 2 + window.scrollX,
            y: canvasRect.top + canvasRect.height / 2 + window.scrollY,
        };

        const offset = {
            x: mousePosition.x - center.x > 0 ? 1 : -1,
            y: mousePosition.y - center.y > 0 ? 1 : -1,
        };

        return new THREE.Euler(offset.y * 0.1, offset.x * 0.08, 0);
    }

    return (
        <Canvas
            ref={canvasRef}
            className="animate-[head_8s_ease_infinite] motion-reduce:animate-none">
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight intensity={1} position={[0, 0, 15]} />
                <EmaHead angle={calculateEulerAngle()} />
            </Suspense>
        </Canvas>
    );
}
