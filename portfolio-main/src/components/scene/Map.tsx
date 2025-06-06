import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import type { Object3D } from "three";
import { Gltf } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = (typeof Gltf) & {
    scene: Object3D;
    animations: THREE.AnimationClip[];
}

type MapProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    model: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scale?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    position?: any;
}

const Map = ({model, ...props}: MapProps) => {
    const { scene, animations } = useGLTF(model) as unknown as GLTFResult;
    const group = useRef<THREE.Group>(null);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [scene]);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name]?.play();
        }
    }, [animations, actions]);

    return (
        <group>
            <RigidBody type="fixed" colliders="trimesh">
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <primitive object={scene} {...props} ref={group as never} />
            </RigidBody>
        </group>
    )
}

export default Map;