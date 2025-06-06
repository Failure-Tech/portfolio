import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";

// interface Keyboard {
//     forward: Event | string;
//     backward: Event | string;
//     left: Event | string;
//     right: Event | string;
//     run: Event | string;
//     jump: Event | string;
//     keys: [];
// }

const keyboardMap = [
    { name: "forward", keys:["ArrowUp", "KeyW"] },
    { name: "backward", keys:["ArrowDown", "KeyS"] },
    { name: "left", keys:["ArrowLeft", "KeyA"] },
    { name: "right", keys:["ArrowRight", "KeyD"] },
    { name: "run", keys:["Shift"] },
    { name: "jump", keys:["Space"] }
]

const Play: React.FC = () => {
    return (
        <>
            <KeyboardControls map={keyboardMap}>
                <Canvas
                    shadows
                    camera={{position: [3, 3, 3], near: 0.1, fov: 40}}
                    style={{ touchAction: "none", height: "100vh", width: "100vw" }}
                >
                    <color attach="background" args={["#ececec"]} />
                    <Experience />
                </Canvas>
            </KeyboardControls>
        </>
    )
}

export default Play;