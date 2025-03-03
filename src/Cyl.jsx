import React, { useRef } from 'react'
import 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
function Cyl() {
    let tex = useTexture("/vector.png");
    let cyl = useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y += delta;
    })
    return (
        <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl} >
          <cylinderGeometry args={[2, 2, 2,60,60,true]}/>
          <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
    )
}

export default Cyl