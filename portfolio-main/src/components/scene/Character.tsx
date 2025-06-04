import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const model = "./src/assets/models/character.glb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Character = ({ animation, ...props } : {animation: any}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const group = useRef<any>({});
    const { nodes, materials, animations } = useGLTF(model);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions[animation]?.reset().fadeIn(.24).play();
        return () => {
            actions?.[animation]?.fadeOut(0.24);
        }
    }, [actions, animation]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="fall_guys">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh 
                        name="body"
                        geometry={nodes.body.geometry}
                        material={materials.Material}
                        skeleton={nodes.body.skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="eye"
                        geometry={nodes.eye.geometry}
                        material={materials.Material}
                        skeleton={nodes.eye.skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="hand-"
                        geometry={nodes["hand-"].geometry}
                        material={materials.Material}
                        skeleton={nodes["hand-"].skeleton}
                        castShadow
                        receiveShadow
                    />
                    <skinnedMesh 
                        name="leg"
                        geometry={nodes.leg.geometry}
                        material={materials.Material}
                        skeleton={nodes.leg.skeleton}
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