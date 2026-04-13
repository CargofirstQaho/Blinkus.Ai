// import { Canvas, useFrame } from "@react-three/fiber"
// import { useGLTF, Environment, Float } from "@react-three/drei"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import * as THREE from "three"

// gsap.registerPlugin(ScrollTrigger)

// function RobotModel({ scrollProgress, scale }) {
//   const ref = useRef()

//   const { scene } = useGLTF("/alien_robot.glb")

//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.metalness = 1
//         child.material.roughness = 0.2

//         // glow effect
//         child.material.emissive = new THREE.Color("#7c3aed")
//         child.material.emissiveIntensity = 0.5
//       }
//     })
//   }, [scene])

//   useFrame(() => {
//     if (!ref.current) return

//     // scroll-driven rotation
//     ref.current.rotation.y = scrollProgress.current * Math.PI * 2

//     // floating effect
//     ref.current.position.y =
//       Math.sin(scrollProgress.current * Math.PI * 2) * 0.3
//   })

//   return (
//     <primitive
//       ref={ref}
//       object={scene}
//       scale={scale}
//       position={[0, -1, 0]}
//     />
//   )
// }

// export default function AlienRobot({
//   scale = 1.5,
//   animationIntensity = 1,
// }) {
//   const scrollProgress = useRef(0)

//   useEffect(() => {
//     gsap.to(scrollProgress, {
//       current: 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#robot-section",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     })
//   }, [])

//   return (
//     <div
//       id="robot-section"
//       className="w-full h-[200vh] bg-black"
//     >
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 45 }}
//         className="sticky top-0 h-screen"
//       >
//         {/* Lighting */}
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <pointLight position={[-5, -5, -5]} intensity={2} color="#7c3aed" />

//         {/* HDRI Environment */}
//         <Environment preset="city" />

//         {/* Floating wrapper */}
//         <Float speed={2} rotationIntensity={0.5}>
//           <RobotModel
//             scrollProgress={scrollProgress}
//             scale={scale}
//           />
//         </Float>
//       </Canvas>
//     </div>
//   )
// }







import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float } from "@react-three/drei"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger)

function RobotModel({ scrollProgress, scale,positionY  }) {
  const ref = useRef()
  const { scene } = useGLTF("/model/alien_robot.glb")

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 1
        child.material.roughness = 0.2
        child.material.emissive = new THREE.Color("#7c3aed")
        child.material.emissiveIntensity = 0.6
      }
    })
  }, [scene])

  useFrame(() => {
    if (!ref.current) return
    const t = scrollProgress.current
    ref.current.rotation.y = t * Math.PI * 2
    ref.current.position.y = Math.sin(t * Math.PI * 2) * 0.25
  })

  return <primitive ref={ref} object={scene} scale={scale} position={[0, positionY, 0]} />
}

useGLTF.preload("/model/alien_robot.glb")

export default function AlienRobot({ scale = 1.5, positionY=-5 }) {
  const scrollProgress = useRef(0)

  useEffect(() => {
    gsap.to(scrollProgress, {
      current: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[0, 2, 2]} intensity={3} color="#7c3aed" />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.5}>
          <RobotModel scrollProgress={scrollProgress} scale={scale} positionY={positionY } />
        </Float>
      </Canvas>
    </div>
  )
}











// import { Canvas, useFrame } from "@react-three/fiber"
// import { useGLTF, Environment, Float } from "@react-three/drei"
// import { useRef, useEffect, Suspense } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import * as THREE from "three"

// gsap.registerPlugin(ScrollTrigger)

// function RobotModel({ scrollProgress, scale, positionY }) {
//   const ref = useRef()
//   const { scene } = useGLTF("/model/alien_robot.glb")

//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.metalness = 1
//         child.material.roughness = 0.2
//         child.material.emissive = new THREE.Color("#7c3aed")
//         child.material.emissiveIntensity = 0.6
//       }
//     })
//   }, [scene])

//   useFrame(() => {
//     if (!ref.current) return
//     const t = scrollProgress.current
//     ref.current.rotation.y = t * Math.PI * 2
//     ref.current.position.y = positionY + Math.sin(t * Math.PI * 2) * 0.25
//   })

//   return <primitive ref={ref} object={scene} scale={scale} position={[0, positionY, 0]} />
// }

// useGLTF.preload("/model/alien_robot.glb")

// function FallbackSphere() {
//   const ref = useRef()
//   useFrame((state) => {
//     if (!ref.current) return
//     ref.current.rotation.y = state.clock.elapsedTime * 0.5
//     ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
//   })
//   return (
//     <mesh ref={ref}>
//       <icosahedronGeometry args={[1.5, 1]} />
//       <meshStandardMaterial color="#7c3aed" metalness={0.9} roughness={0.1} wireframe />
//     </mesh>
//   )
// }

// export default function AlienRobot({ scale = 1.5, positionY = -5 }) {
//   const scrollProgress = useRef(0)

//   useEffect(() => {
//     gsap.to(scrollProgress, {
//       current: 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#hero-section",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     })
//     return () => ScrollTrigger.getAll().forEach((t) => t.kill())
//   }, [])

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <pointLight position={[0, 2, 2]} intensity={3} color="#7c3aed" />
//         <Environment preset="city" />
//         <Suspense fallback={<FallbackSphere />}>
//           <Float speed={2} rotationIntensity={0.5}>
//             <RobotModel scrollProgress={scrollProgress} scale={scale} positionY={positionY} />
//           </Float>
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }