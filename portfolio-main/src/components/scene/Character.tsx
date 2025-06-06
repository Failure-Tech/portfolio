import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { Group, Material, SkinnedMesh } from "three";

const model = "./src/assets/models/character.glb";

type GLTFResult = {
    nodes: Record<string, SkinnedMesh>,
    materials: Record<string, Material>,
    animations: THREE.AnimationClip[],
    scene: THREE.Group
};

type CharacterProps = JSX.IntrinsicElements["group"] & {
    animation: string;
};

const Character = ({ animation } : CharacterProps) => { // add ...props if necessary
    const group = useRef<Group>(null);
    const { nodes, materials, animations } = useGLTF(model) as unknown as GLTFResult;
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions[animation]?.reset().fadeIn(.24).play();
        return () => {
            actions?.[animation]?.fadeOut(0.24);
        }
    }, [actions, animation]);

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="fall_guys">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh 
                        name="body"
                        geometry={(nodes.body as unknown as SkinnedMesh).geometry}
                        material={materials.Material as unknown as Material}
                        skeleton={(nodes.body as unknown as SkinnedMesh).skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="eye"
                        geometry={(nodes.eye as unknown as SkinnedMesh).geometry}
                        material={materials.Material as unknown as Material}
                        skeleton={(nodes.eye as unknown as SkinnedMesh).skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="hand-"
                        geometry={(nodes["hand-"] as unknown as SkinnedMesh).geometry}
                        material={materials.Material as unknown as Material}
                        skeleton={(nodes["hand-"] as unknown as SkinnedMesh).skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="leg"
                        geometry={(nodes.leg as unknown as SkinnedMesh).geometry}
                        material={materials.Material as unknown as Material}
                        skeleton={(nodes.leg as unknown as SkinnedMesh).skeleton}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload(model);

export default Character;