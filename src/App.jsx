import 'react';
import Cyl from './Cyl';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
function App() {
  
  return (
    <Canvas flat camera={{ fov:55}}>
      <OrbitControls />
      <ambientLight/>
      <Cyl/>
      <EffectComposer>
      <Bloom
      mipmapBlur
    intensity={1.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
    />
    </EffectComposer>
    </Canvas>
  )
}

export default App