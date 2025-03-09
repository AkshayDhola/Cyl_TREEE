import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'

function Cyl({ show = [], boxColor="orange" }) {  // Proper default empty array
  return (
    <Canvas style={{ height: '100vh', width: '100%' }} camera={{ position: [5, 5, 5], fov: 55 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 1]} />
      <CubeHandle showThis={show} boxColor={boxColor} />
    </Canvas>
  )
}

function CubeHandle({ showThis,boxColor }) {
  const meshRef = useRef(null)
  const defaultColor = boxColor;
  
  // Only load textures if we have image paths
  const textures = showThis.length > 0 
    ? useLoader(TextureLoader, showThis)
    : null

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.z += delta * 0.2
      meshRef.current.rotation.x += delta * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {textures ? (
        textures.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            map={texture}
            attach={`material-${index}`}
          />
        ))
      ) : (
        Array.from({ length: 6 }).map((_, index) => (
          <meshStandardMaterial
            key={index}
            color={defaultColor}
            attach={`material-${index}`}
          />
        ))
      )}
    </mesh>
  )
}

export default Cyl
