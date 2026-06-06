import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const TECHS = ['React','Node.js','MongoDB','Java','Express','JavaScript','TypeScript','Git','Python','Tailwind']

function SphereNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const points = useMemo(() =>
    TECHS.map((label, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECHS.length)
      const theta = Math.sqrt(TECHS.length * Math.PI) * phi
      const r = 2.4
      return { label, pos: [r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi)] as [number, number, number] }
    }), [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.16
    groupRef.current.rotation.x += delta * 0.024
  })

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.7}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[1.6, 52, 52]} />
          <meshStandardMaterial color="#07122a" metalness={0.85} roughness={0.18} emissive="#0a1e44" emissiveIntensity={0.55} wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.45, 32, 32]} />
          <meshStandardMaterial color="#050f22" transparent opacity={0.6} emissive="#0b2060" emissiveIntensity={0.4} />
        </mesh>
        {points.map(({ label, pos }) => (
          <Html key={label} position={pos} center distanceFactor={9}>
            <div className="whitespace-nowrap rounded-full border border-white/12 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-cyan-100/90 backdrop-blur-sm select-none cursor-default hover:border-accent-cyan/50 hover:text-white transition-colors duration-200">
              {label}
            </div>
          </Html>
        ))}
      </group>
    </Float>
  )
}

export default function TechSphere() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10 pointer-events-none z-10" />
      <Canvas camera={{ position: [0, 0, 7.2], fov: 40 }}>
        <ambientLight intensity={1.0} />
        <pointLight position={[4, 5, 4]}   intensity={28} color="#3B82F6" />
        <pointLight position={[-5, -3, 2]} intensity={20} color="#8B5CF6" />
        <pointLight position={[0, -4, 3]}  intensity={14} color="#22D3EE" />
        <Suspense fallback={null}><SphereNodes /></Suspense>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI * 0.2} maxPolarAngle={Math.PI * 0.8} />
      </Canvas>
    </div>
  )
}