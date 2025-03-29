import {Canvas, useFrame} from "@react-three/fiber";
import React, {useRef, useState} from "react";

function SpinningSphere() {
    const meshRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [lastX, setLastX] = useState(0);

    const onPointerDown = (e) => {
        setIsDragging(true);
        setLastX(e.clientX);
    };

    const onPointerUp = () => {
        setIsDragging(false);
    };

    const onPointerMove = (e) => {
        if (isDragging && meshRef.current) {
            // Calculate how much the pointer has moved horizontally
            const deltaX = e.clientX - lastX;
            // Adjust rotation speed as needed (here, 0.01 radians per pixel moved)
            meshRef.current.rotation.y += deltaX * 0.01;
            setLastX(e.clientX);
        }
    };

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= delta / 4;
        }
    });

    // Here, we set the position so that part of the sphere is off-screen.
    // Adjust the x value until only the left half is visible.
    return (
        <mesh ref={meshRef}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerMove={onPointerMove} position={[4, 0.5, 0]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshStandardMaterial color="white" wireframe={true} />
        </mesh>
    );
}

export default function Loading() {
    return             <group>
        <Canvas style={{ height: "120vh", width: "100vw" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-100, -5, 100]} intensity={10} />
            <SpinningSphere />
        </Canvas>
    </group>
}