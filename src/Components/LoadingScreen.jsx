import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float } from "@react-three/drei"
import * as THREE from "three"

const N = "#0f1b3d"
const P = "#6c3fc5"
const PL = "#8b5cf6"
const font = "'DM Sans','Segoe UI',system-ui,sans-serif"

function RobotRunning({ progress }) {
  const ref = useRef()
  const { scene } = useGLTF("/model/alien_robot.glb")
  const timeRef = useRef(0)

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.material = child.material.clone()
        child.material.metalness = 0.9
        child.material.roughness = 0.15
        child.material.emissive = new THREE.Color("#7c3aed")
        child.material.emissiveIntensity = 0.5
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (!ref.current) return
    timeRef.current += delta

    const p = progress.current
    const xRange = 10
    ref.current.position.x = -xRange / 2 + p * xRange

    const bounce = Math.abs(Math.sin(timeRef.current * 8)) * 0.12
    ref.current.position.y = -1.2 + bounce

    ref.current.rotation.y = Math.PI * 0.5 + Math.sin(timeRef.current * 12) * 0.06

    const lean = Math.sin(timeRef.current * 8) * 0.06
    ref.current.rotation.z = lean

    ref.current.position.z = 0
  })

  return <primitive ref={ref} object={scene} scale={1.8} position={[-5, -1.2, 0]} />
}

useGLTF.preload("/model/alien_robot.glb")

function RobotCanvas({ progress }) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "200px" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow />
      <pointLight position={[0, 3, 2]} intensity={4} color="#7c3aed" />
      <pointLight position={[3, 0, 2]} intensity={2} color="#3b82f6" />
      <Environment preset="city" />
      <RobotRunning progress={progress} />
    </Canvas>
  )
}

function ZapIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
}

function TrackLine() {
  return (
    <div style={{ position: "absolute", bottom: "58px", left: "5%", right: "5%", height: "2px" }}>
      <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)" }} />
      <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 8px" }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} style={{ width: "1px", height: "6px", background: "rgba(139,92,246,0.2)" }} />
        ))}
      </div>
    </div>
  )
}

const loadingSteps = [
  "Initializing AI engine...",
  "Loading trade database...",
  "Calibrating commodity models...",
  "Warming up market analysis...",
  "Almost ready...",
]

export default function LoadingScreen({ onComplete }) {
  const [pct, setPct] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)
  const [done, setDone] = useState(false)
  const progressRef = useRef(0)
  const animRef = useRef(null)
  const startRef = useRef(Date.now())

  const TOTAL_MS = 3200

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const raw = Math.min(elapsed / TOTAL_MS, 1)
      const eased = raw < 0.8 ? raw / 0.8 * 0.92 : 0.92 + (raw - 0.8) / 0.2 * 0.08
      const p = Math.round(eased * 100)
      progressRef.current = eased
      setPct(p)
      setStepIdx(Math.min(Math.floor(eased * loadingSteps.length), loadingSteps.length - 1))
      if (raw >= 1) {
        setPct(100)
        progressRef.current = 1
        setTimeout(() => { setDone(true); setTimeout(onComplete, 500) }, 200)
        return
      }
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            background: "linear-gradient(160deg, #0a0620 0%, #0f1b3d 40%, #1a0a3e 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            fontFamily: font, overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "20%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,63,197,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              borderRadius: "50%",
              background: `rgba(139,92,246,${Math.random() * 0.4 + 0.1})`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite alternate`,
            }} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "48px", zIndex: 1 }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(139,92,246,0.3))",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(139,92,246,0.4)",
            }}>
              <ZapIcon />
            </div>
            <span style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}>
              Blinkus<span style={{ color: PL, opacity: 0.8 }}>.ai</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: "min(680px, 90vw)", position: "relative", zIndex: 1 }}
          >
            <div style={{
              position: "relative", height: "180px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: "20px",
              border: "1px solid rgba(139,92,246,0.2)",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <RobotCanvas progress={progressRef} />
              </div>

              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(180deg, transparent, rgba(10,6,32,0.6))" }} />

              <div style={{
                position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)",
                width: "90%", height: "2px",
                background: "rgba(139,92,246,0.15)",
                borderRadius: "2px", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", left: `${pct - 12}%`, width: "24px", height: "100%",
                  background: "rgba(255,255,255,0.4)", filter: "blur(4px)",
                  transition: "left 0.1s linear",
                }} />
              </div>

              <div style={{
                position: "absolute", top: "10px", right: "14px",
                fontSize: "10px", fontWeight: 700, color: "rgba(139,92,246,0.6)",
                letterSpacing: "0.08em", fontFamily: "monospace",
              }}>
                {pct}%
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={{
                width: "100%", height: "6px", borderRadius: "6px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(139,92,246,0.15)",
                overflow: "hidden", position: "relative",
              }}>
                <motion.div
                  style={{
                    height: "100%", borderRadius: "6px",
                    background: `linear-gradient(90deg, ${P}, ${PL}, #60a5fa)`,
                    boxShadow: "0 0 12px rgba(139,92,246,0.6)",
                    position: "relative", overflow: "hidden",
                  }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    animation: "shimmer 1.5s linear infinite",
                  }} />
                </motion.div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={stepIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}
                  >
                    {loadingSteps[stepIdx]}
                  </motion.span>
                </AnimatePresence>
                <span style={{
                  fontSize: "13px", fontWeight: 800, letterSpacing: "0.03em",
                  background: `linear-gradient(135deg, ${PL}, #60a5fa)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {pct}%
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ marginTop: "32px", fontSize: "12px", color: "#fff", letterSpacing: "0.04em", zIndex: 1 }}
          >
            AI Trade Intelligence Platform
          </motion.p>

          <style>{`
            @keyframes twinkle { from { opacity: 0.1; transform: scale(0.8) } to { opacity: 0.8; transform: scale(1.2) } }
            @keyframes shimmer { 0% { transform: translateX(-100%) } 100% { transform: translateX(200%) } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}