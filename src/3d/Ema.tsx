//this file is just the gltf model without any extra logic. The scale, rotation and size
//is only to give it the correct default orientation

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        mmGroup0: THREE.Mesh;
    };
    materials: {};
};

export default function Ema(props: JSX.IntrinsicElements["group"]) {
    const { nodes } = useGLTF("/3d/ema-transformed.glb") as GLTFResult;

    return (
        <group
            {...props}
            dispose={null}
            scale={[0.38, 0.38, 0.38]}
            position={[0, -2.2, 0]}
            rotation={[0, -Math.PI / 2, -0.02]}>
            <mesh
                geometry={nodes.mmGroup0.geometry}
                material={
                    new THREE.MeshLambertMaterial({
                        color: 0xe0e0e0,
                        wireframe: true,
                    })
                }
            />
        </group>
    );
}

useGLTF.preload("/ema-transformed.glb");
