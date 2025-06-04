import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Play: React.FC = () => {
    const [position, setPosition] = useState([0, 0, 0]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const playerRef = useRef<any>([]);

    useFrame(() => {
        const movementSpeed = 0.05;
        setPosition([position[0], position[1], position[2] - movementSpeed]);
        playerRef.current.position.set(...position);
    });

    return (
        <Canvas>
            <ambientLight intensity={0.3} color="blue" />
            <mesh ref={playerRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    )
}

export default Play;