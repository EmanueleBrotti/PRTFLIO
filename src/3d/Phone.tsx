import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
        mesh_0_1: THREE.Mesh;
    };
    materials: {
        screen: THREE.MeshStandardMaterial;
        phone: THREE.MeshStandardMaterial;
    };
};

export default function Phone(props: JSX.IntrinsicElements["group"]) {
    const { nodes } = useGLTF("/3d/phone-transformed.glb") as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group
                position={[0, 0.5, 0]}
                rotation={[0, -Math.PI / 2, -Math.PI / 2]}
                scale={28}>
                <mesh
                    geometry={nodes.mesh_0.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: 0x0e0e0e,
                            metalness: 0.7,
                            roughness: 0.2,
                        })
                    }
                />
                <mesh
                    geometry={nodes.mesh_0_1.geometry}
                    material={
                        new THREE.MeshStandardMaterial({
                            color: 0xffffff,
                            metalness: 0.7,
                            roughness: 0.2,
                        })
                    }
                />
            </group>
        </group>
    );
}

useGLTF.preload("/phone-transformed.glb");
