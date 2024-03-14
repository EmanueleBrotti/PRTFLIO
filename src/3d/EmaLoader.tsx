import { Canvas, useFrame } from "@react-three/fiber";
import Ema from "./Ema";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { useAppSelector } from "../store/hooks";

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

function calculateAngle(
    canvasRef: React.RefObject<HTMLCanvasElement>,
    mousePosition: { x: number; y: number },
) {
    if (!canvasRef.current) {
        return new THREE.Euler(0.05, 0.05, 0);
    }

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const center = {
        x: canvasRect.left + canvasRect.width / 2,
        y: canvasRect.top + canvasRect.height / 2,
    };

    const offset = {
        x: mousePosition.x - center.x > 0 ? 1 : -1,
        y: mousePosition.y - center.y > 0 ? 1 : -1,
    };

    return new THREE.Euler(offset.y * 0.1, offset.x * 0.08, 0);
}

export default function EmaLoader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosition = useAppSelector((state) => state.cursor.position);

    // Memoize the function to prevent recalculation on every render
    const angle = useMemo(
        () => calculateAngle(canvasRef, mousePosition),
        [canvasRef, mousePosition],
    );

    return (
        <Canvas
            ref={canvasRef}
            className="animate-[head_8s_ease_infinite] motion-reduce:animate-none">
            <ambientLight intensity={0.4} />
            <directionalLight intensity={1} position={[0, 0, 15]} />
            <EmaHead angle={angle} />
        </Canvas>
    );
}
