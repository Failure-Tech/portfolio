import { Environment, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { CharacterController } from "./CharacterController";
import Map from "./Map";
import { useRef } from "react";

const maps = {
    castle_on_hills: {
        scale: 2.5,
        position: [-6, -7, 0]
    },
    basketball_court: {
        scale: 5,
        position: [-8, -8, 0]
    }
};

const Experience = () => {
    const shadowCamRef = useRef(null);
    const { map } = useControls("Map", {
        map: {
            value: "castle_on_hills",
            options: Object.keys(maps)
        },
    });

    return (
        <>
            <Environment preset="sunset" />
            <directionalLight
                intensity={0.65}
                castShadow
                position={[-15, 10, 15]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.00005}
            >
                <OrthographicCamera 
                    left={-22}
                    right={15}
                    top={10}
                    bottom={-20}
                    ref={shadowCamRef}
                    attach={"shadow-camera"}
                />
            </directionalLight>
            <Physics key={map}>
                <Map 
                    scale={maps[map as keyof typeof maps].scale}
                    position={maps[map as keyof typeof maps].position}
                    model={`./src/assets/models/${map}.glb`}
                />
                <CharacterController />
            </Physics>
        </>
    )
}

export default Experience;