/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const Map = ({model, ...props}: {model: any}) => {
    const { scene, animations } = useGLTF(model);
    const group = useRef();
    const { actions }: any | null = useAnimations(animations, group);

    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [scene]);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name].play();
        }
    }, [animations, actions]);

    return (
        <group>
            <RigidBody type="fixed" colliders="trimesh">
                <primitive object={scene} {...props} ref={group} />
            </RigidBody>
        </group>
    )
}

export default Map;