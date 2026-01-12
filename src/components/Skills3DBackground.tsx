import { Canvas } from '@react-three/fiber';

export default function Skills3DBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{
          alpha: true,
          antialias: false,
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
        onError={(error) => {
          console.error('Three.js canvas error:', error);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}