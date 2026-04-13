// import { useEffect, useRef } from "react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { motion } from "framer-motion"
// import { ArrowRight, TrendingUp, Globe, BarChart3, ChevronDown } from "lucide-react"
// import gsap from "gsap"
// import GlobeCanvas from "./GlobeCanvas"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const badges = [
//   { icon: TrendingUp, label: "2M+ Shipment Records" },
//   { icon: Globe, label: "190+ Countries" },
//   { icon: BarChart3, label: "Real-time Pricing" },
// ]

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function Hero({ onOpenAuth }) {
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
//   const particleRef = useRef(null)

//   useEffect(() => {
//     const canvas = particleRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let animId
//     let w = (canvas.width = canvas.offsetWidth)
//     let h = (canvas.height = canvas.offsetHeight)

//     const particles = Array.from({ length: 60 }, () => ({
//       x: Math.random() * w,
//       y: Math.random() * h,
//       r: Math.random() * 1.5 + 0.5,
//       vx: (Math.random() - 0.5) * 0.3,
//       vy: (Math.random() - 0.5) * 0.3,
//       opacity: Math.random() * 0.4 + 0.1,
//     }))

//     const draw = () => {
//       ctx.clearRect(0, 0, w, h)
//       particles.forEach((p) => {
//         p.x += p.vx
//         p.y += p.vy
//         if (p.x < 0) p.x = w
//         if (p.x > w) p.x = 0
//         if (p.y < 0) p.y = h
//         if (p.y > h) p.y = 0
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(139,92,246,${p.opacity})`
//         ctx.fill()
//       })
//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach((b) => {
//           const dist = Math.hypot(a.x - b.x, a.y - b.y)
//           if (dist < 120) {
//             ctx.beginPath()
//             ctx.moveTo(a.x, a.y)
//             ctx.lineTo(b.x, b.y)
//             ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 120)})`
//             ctx.lineWidth = 0.5
//             ctx.stroke()
//           }
//         })
//       })
//       animId = requestAnimationFrame(draw)
//     }
//     draw()

//     const onResize = () => {
//       w = canvas.width = canvas.offsetWidth
//       h = canvas.height = canvas.offsetHeight
//     }
//     window.addEventListener("resize", onResize)

//     return () => {
//       cancelAnimationFrame(animId)
//       window.removeEventListener("resize", onResize)
//     }
//   }, [])

//   const handleCTA = () => (user ? navigate("/chat") : onOpenAuth("register"))
//   const handleDemo = () => {
//     const el = document.querySelector("#how-it-works")
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section
//       className="relative min-h-screen flex flex-col justify-center overflow-hidden"
//       style={{ background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 50%, #ffffff 100%)" }}
//     >
//       <canvas
//         ref={particleRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ opacity: 0.6 }}
//       />

//       <div
//         className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(108,63,197,0.08) 0%, transparent 70%)" }}
//       />
//       <div
//         className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-xl"
//           >
//             <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
//               <div
//                 className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border"
//                 style={{ background: "rgba(108,63,197,0.06)", borderColor: "rgba(108,63,197,0.2)", color: PURPLE }}
//               >
//                 <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
//                 AI-Powered Trade Intelligence
//               </div>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter mb-6"
//               style={{ color: NAVY, letterSpacing: "-0.04em" }}
//             >
//               Smarter decisions
//               <br />
//               for every{" "}
//               <span
//                 style={{
//                   backgroundImage: `linear-gradient(135deg, ${PURPLE}, #a78bfa)`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 trade
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
//               style={{ color: "#6b7280" }}
//             >
//               Ask anything about Indian exports, commodity prices, HS codes, top exporters, country
//               trade flows, and import/export regulations — answered instantly with real shipment data.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
//               <button
//                 onClick={handleCTA}
//                 className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-transform active:scale-95"
//                 style={{
//                   background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
//                   boxShadow: "0 8px 24px rgba(108,63,197,0.35)",
//                 }}
//               >
//                 {user ? "Open Chat" : "Start for Free"}
//                 <ArrowRight size={15} />
//               </button>
//               <button
//                 onClick={handleDemo}
//                 className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold border transition-colors hover:bg-purple-50"
//                 style={{ borderColor: "rgba(108,63,197,0.25)", color: PURPLE }}
//               >
//                 See How It Works
//               </button>
//             </motion.div>

//             <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
//               {badges.map(({ icon: Icon, label }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border"
//                   style={{
//                     background: "rgba(255,255,255,0.8)",
//                     borderColor: "rgba(108,63,197,0.12)",
//                     color: "#4a4060",
//                     backdropFilter: "blur(8px)",
//                   }}
//                 >
//                   <Icon size={13} style={{ color: PURPLE }} />
//                   {label}
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="relative h-72 sm:h-96 lg:h-[520px]"
//           >
//             <div
//               className="absolute inset-0 rounded-3xl overflow-hidden"
//               style={{
//                 background: "radial-gradient(ellipse at center, rgba(108,63,197,0.08) 0%, transparent 70%)",
//               }}
//             >
//               <GlobeCanvas />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="absolute top-8 right-4 sm:right-8 bg-white rounded-2xl px-4 py-3 shadow-xl border border-purple-50"
//               style={{ backdropFilter: "blur(12px)" }}
//             >
//               <p className="text-xs font-bold mb-0.5" style={{ color: NAVY }}>
//                 Basmati Rice — UAE
//               </p>
//               <p className="text-xl font-black" style={{ color: PURPLE }}>
//                 $1,240<span className="text-sm font-semibold text-green-500 ml-1">+4.2%</span>
//               </p>
//               <p className="text-xs" style={{ color: "#9585c0" }}>
//                 per MT — Updated live
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.2, duration: 0.6 }}
//               className="absolute bottom-12 left-4 sm:left-0 bg-white rounded-2xl px-4 py-3 shadow-xl border border-purple-50"
//             >
//               <p className="text-xs font-semibold mb-1" style={{ color: "#9585c0" }}>
//                 Top Exporters Found
//               </p>
//               <div className="flex -space-x-1.5">
//                 {["#6c3fc5", "#8b5cf6", "#a78bfa", "#0f1b3d", "#1e3a7b"].map((c, i) => (
//                   <div
//                     key={i}
//                     className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
//                     style={{ background: c }}
//                   >
//                     {String.fromCharCode(65 + i)}
//                   </div>
//                 ))}
//               </div>
//               <p className="text-xs font-bold mt-1" style={{ color: NAVY }}>
//                 +240 more exporters
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 0.6 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
//         onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
//       >
//         <span className="text-xs font-semibold" style={{ color: "#b0a0d0" }}>
//           Scroll to explore
//         </span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <ChevronDown size={18} style={{ color: "#b0a0d0" }} />
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }







// import { useEffect, useRef } from "react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { motion } from "framer-motion"
// import AlienRobot from "./AlienRobot"

// const N = "#6c3dff"
// const P = "#6c3fc5"
// const PL = "#8b5cf6"

// function TrendIcon() {
//   return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
// }
// function GlobeIcon() {
//   return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
// }
// function BarIcon() {
//   return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
// }

// const badges = [
//   { icon: <TrendIcon />, label: "2M+ Shipment Records" },
//   { icon: <GlobeIcon />, label: "190+ Countries" },
//   { icon: <BarIcon />, label: "Real-time Pricing" },
// ]

// const itemV = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
// }

// export default function Hero({ onOpenAuth }) {
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let animId
//     let w = (canvas.width = canvas.offsetWidth)
//     let h = (canvas.height = canvas.offsetHeight)
//     const pts = Array.from({ length: 55 }, () => ({
//       x: Math.random() * w, y: Math.random() * h,
//       vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
//       r: Math.random() * 1.5 + 0.4, o: Math.random() * 0.35 + 0.08,
//     }))
//     const draw = () => {
//       ctx.clearRect(0, 0, w, h)
//       pts.forEach((p) => {
//         p.x += p.vx; p.y += p.vy
//         if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
//         if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(139,92,246,${p.o})`; ctx.fill()
//       })
//       pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
//         const d = Math.hypot(a.x - b.x, a.y - b.y)
//         if (d < 110) {
//           ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
//           ctx.strokeStyle = `rgba(139,92,246,${0.07 * (1 - d / 110)})`
//           ctx.lineWidth = 0.5; ctx.stroke()
//         }
//       }))
//       animId = requestAnimationFrame(draw)
//     }
//     draw()
//     const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
//     window.addEventListener("resize", onResize)
//     return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize) }
//   }, [])

//   const handleCTA = () => user ? navigate("/chat") : onOpenAuth("register")
//   const handleLearnMore = () => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })

//   return (
//     <section id="hero-section" style={{
//       position: "relative", minHeight: "100vh",
//       display: "flex", flexDirection: "column", justifyContent: "center",
//       overflow: "hidden", paddingTop: 64,
//       background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 50%, #fff 100%)",
//     }}>
//       <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.55 }} />
//       <div style={{ position: "absolute", top: "15%", left: "20%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,63,197,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "clamp(40px,8vw,80px) clamp(16px,4vw,32px)", width: "100%" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,64px)", alignItems: "center" }}>

//           <div style={{ maxWidth: 560 }}>
//             <motion.div custom={0} variants={itemV} initial="hidden" animate="visible">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: 6,
//                 padding: "6px 14px", borderRadius: 100, marginBottom: 20,
//                 background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//                 fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.02em",
//               }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", background: PL, display: "inline-block", animation: "pulse 2s infinite" }} />
//                 AI-Powered Trade Intelligence
//               </div>
//             </motion.div>

//             <motion.h1 custom={1} variants={itemV} initial="hidden" animate="visible" style={{
//               fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 900, lineHeight: 1.1,
//               letterSpacing: "-0.04em", color: N, marginBottom: 20,
//               fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//             }}>
//               Smarter decisions{" "}
//               <span style={{ display: "inline-block" }}>for every{" "}
//                 <span style={{ background: `linear-gradient(135deg, ${P}, ${PL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                   trade
//                 </span>
//               </span>
//             </motion.h1>

//             <motion.p custom={2} variants={itemV} initial="hidden" animate="visible" style={{
//               fontSize: "clamp(14px,1.6vw,17px)", color: "#6b7280", lineHeight: 1.7,
//               marginBottom: 32, maxWidth: 480,
//               fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//             }}>
//               Ask anything about exports, commodity prices, HS codes, top exporters, and import/export regulations — answered instantly using real shipment data.
//             </motion.p>

//             <motion.div custom={3} variants={itemV} initial="hidden" animate="visible" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
//               <button
//                 onClick={handleCTA}
//                 style={{
//                   padding: "13px 28px", borderRadius: 13, border: "none",
//                   background: `linear-gradient(135deg, ${N}, ${P})`,
//                   color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
//                   boxShadow: "0 8px 24px rgba(108,63,197,0.35)",
//                   display: "flex", alignItems: "center", gap: 8,
//                   fontFamily: "inherit", transition: "transform 0.15s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
//               >
//                 {user ? "Open Chat" : "Start for Free"}
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//               </button>
//               <button
//                 onClick={handleLearnMore}
//                 style={{
//                   padding: "13px 24px", borderRadius: 13,
//                   border: "1.5px solid rgba(108,63,197,0.25)",
//                   background: "transparent", color: P, fontSize: 15, fontWeight: 700,
//                   cursor: "pointer", fontFamily: "inherit",
//                   transition: "all 0.15s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(108,63,197,0.06)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
//               >
//                 See Features
//               </button>
//             </motion.div>

//             <motion.div custom={4} variants={itemV} initial="hidden" animate="visible" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//               {badges.map(({ icon, label }) => (
//                 <div key={label} style={{
//                   display: "flex", alignItems: "center", gap: 7,
//                   padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600,
//                   background: "rgba(255,255,255,0.9)", border: "1px solid rgba(108,63,197,0.12)",
//                   color: "#4a4060", backdropFilter: "blur(8px)",
//                 }}>
//                   <span style={{ color: P }}>{icon}</span>
//                   {label}
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             style={{ position: "relative", height: "clamp(300px,45vw,540px)" }}
//           >
//              <div
//   style={{
//     position: "absolute",
//     inset: 0,
//     borderRadius: 28,
//     overflow: "hidden",
//   }}
// >
//   <AlienRobot scale={5.5} positionY={-5}/>
// </div>

//             <motion.div
//               initial={{ opacity: 0, x: 20, y: -10 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ delay: 1.1, duration: 0.6 }}
//               style={{
//                 position: "absolute", top: "8%", right: "4%",
//                 background: "#fff", borderRadius: 16, padding: "12px 16px",
//                 boxShadow: "0 8px 32px rgba(108,63,197,0.15)", border: "1px solid rgba(108,63,197,0.08)",
//                 fontFamily: "inherit",
//               }}
//             >
//               <p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 3 }}>Basmati Rice — UAE</p>
//               <p style={{ fontSize: 22, fontWeight: 900, color: P, lineHeight: 1, display: "flex", alignItems: "baseline", gap: 6 }}>
//                 $1,240
//                 <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>+4.2%</span>
//               </p>
//               <p style={{ fontSize: 10, color: "#9585c0", marginTop: 3 }}>per MT</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20, y: 10 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ delay: 1.3, duration: 0.6 }}
//               style={{
//                 position: "absolute", bottom: "15%", left: "0%",
//                 background: "#fff", borderRadius: 16, padding: "12px 16px",
//                 boxShadow: "0 8px 32px rgba(108,63,197,0.15)", border: "1px solid rgba(108,63,197,0.08)",
//                 fontFamily: "inherit",
//               }}
//             >
//               <p style={{ fontSize: 10, fontWeight: 600, color: "#9585c0", marginBottom: 7 }}>Top Exporters Found</p>
//               <div style={{ display: "flex" }}>
//                 {["#6c3fc5","#8b5cf6","#a78bfa","#0f1b3d","#1e3a7b"].map((c, i) => (
//                   <div key={i} style={{
//                     width: 28, height: 28, borderRadius: "50%",
//                     background: c, border: "2px solid #fff",
//                     marginLeft: i === 0 ? 0 : -8,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "#fff", fontSize: 10, fontWeight: 700,
//                   }}>
//                     {String.fromCharCode(65 + i)}
//                   </div>
//                 ))}
//               </div>
//               <p style={{ fontSize: 11, fontWeight: 700, color: N, marginTop: 6 }}>+240 more exporters</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.8 }}
//         style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
//         onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
//       >
//         <span style={{ fontSize: 11, color: "#b0a0d0", fontWeight: 600 }}>Scroll to explore</span>
//         <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b0a0d0" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
//         </motion.div>
//       </motion.div>

//       <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
//     </section>
//   )
// }










// import { useEffect, useRef, Suspense, lazy } from "react"
// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { motion } from "framer-motion"

// const AlienRobot = lazy(() => import("./AlienRobot"))

// const N = "#6c3dff"
// const P = "#6c3fc5"
// const PL = "#8b5cf6"

// const badges = [
//   { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, label: "2M+ Shipment Records" },
//   { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: "190+ Countries" },
//   { icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, label: "Real-time Pricing" },
// ]

// const itemV = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
// }

// function RobotFallback() {
//   return (
//     <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div style={{
//           width: 120, height: 120, borderRadius: "50%",
//           background: "linear-gradient(135deg, rgba(108,63,197,0.15), rgba(139,92,246,0.1))",
//           border: "2px solid rgba(108,63,197,0.2)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}>
//           <div style={{
//             width: 60, height: 60, borderRadius: "50%",
//             background: "linear-gradient(135deg, rgba(108,63,197,0.3), rgba(139,92,246,0.2))",
//             animation: "robotPulse 1.5s ease-in-out infinite",
//           }} />
//         </div>
//         <div style={{
//           position: "absolute",
//           width: 160, height: 160, borderRadius: "50%",
//           border: "2px dashed rgba(108,63,197,0.15)",
//           animation: "robotSpin 3s linear infinite",
//         }} />
//       </div>
//       <style>{`
//         @keyframes robotPulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
//         @keyframes robotSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
//       `}</style>
//     </div>
//   )
// }

// export default function Hero({ onOpenAuth }) {
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     let animId
//     let w = (canvas.width = canvas.offsetWidth)
//     let h = (canvas.height = canvas.offsetHeight)
//     const pts = Array.from({ length: 45 }, () => ({
//       x: Math.random() * w, y: Math.random() * h,
//       vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
//       r: Math.random() * 1.5 + 0.4, o: Math.random() * 0.3 + 0.06,
//     }))
//     const draw = () => {
//       ctx.clearRect(0, 0, w, h)
//       pts.forEach((p) => {
//         p.x += p.vx; p.y += p.vy
//         if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
//         if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(139,92,246,${p.o})`; ctx.fill()
//       })
//       pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
//         const d = Math.hypot(a.x - b.x, a.y - b.y)
//         if (d < 100) {
//           ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
//           ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - d / 100)})`
//           ctx.lineWidth = 0.5; ctx.stroke()
//         }
//       }))
//       animId = requestAnimationFrame(draw)
//     }
//     draw()
//     const onResize = () => {
//       w = canvas.width = canvas.offsetWidth
//       h = canvas.height = canvas.offsetHeight
//     }
//     window.addEventListener("resize", onResize)
//     return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize) }
//   }, [])

//   const handleCTA = () => user ? navigate("/chat") : onOpenAuth("register")

//   return (
//     <section id="hero-section" style={{
//       position: "relative", minHeight: "100vh",
//       display: "flex", flexDirection: "column", justifyContent: "center",
//       overflow: "hidden", paddingTop: 64,
//       background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 50%, #fff 100%)",
//       fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//     }}>
//       <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }} />
//       <div style={{ position: "absolute", top: "10%", left: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,63,197,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "clamp(32px,6vw,64px) clamp(16px,4vw,32px)", width: "100%" }}>
//         <div className="hero-grid">
//           <div style={{ maxWidth: 560 }}>
//             <motion.div custom={0} variants={itemV} initial="hidden" animate="visible">
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: 6,
//                 padding: "6px 14px", borderRadius: 100, marginBottom: 20,
//                 background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//                 fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.02em",
//               }}>
//                 <span style={{ width: 6, height: 6, borderRadius: "50%", background: PL, display: "inline-block", animation: "pulse 2s infinite" }} />
//                 AI-Powered Trade Intelligence
//               </div>
//             </motion.div>

//             <motion.h1 custom={1} variants={itemV} initial="hidden" animate="visible" style={{
//               fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 900, lineHeight: 1.1,
//               letterSpacing: "-0.04em", color: N, marginBottom: 20,
//             }}>
//               Smarter decisions{" "}
//               <span style={{ display: "inline-block" }}>for every{" "}
//                 <span style={{ background: `linear-gradient(135deg, ${P}, ${PL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                   trade
//                 </span>
//               </span>
//             </motion.h1>

//             <motion.p custom={2} variants={itemV} initial="hidden" animate="visible" style={{
//               fontSize: "clamp(14px,1.6vw,17px)", color: "#6b7280", lineHeight: 1.7,
//               marginBottom: 32, maxWidth: 480,
//             }}>
//               Ask anything about exports, commodity prices, HS codes, top exporters, and import/export regulations — answered instantly using real shipment data.
//             </motion.p>

//             <motion.div custom={3} variants={itemV} initial="hidden" animate="visible" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
//               <button
//                 onClick={handleCTA}
//                 style={{
//                   padding: "13px 28px", borderRadius: 13, border: "none",
//                   background: `linear-gradient(135deg, ${N}, ${P})`,
//                   color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
//                   boxShadow: "0 8px 24px rgba(108,63,197,0.35)",
//                   display: "flex", alignItems: "center", gap: 8,
//                   fontFamily: "inherit", transition: "transform 0.15s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
//               >
//                 {user ? "Open Chat" : "Start for Free"}
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//               </button>
//               <button
//                 onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
//                 style={{
//                   padding: "13px 24px", borderRadius: 13,
//                   border: "1.5px solid rgba(108,63,197,0.25)",
//                   background: "transparent", color: P, fontSize: 15, fontWeight: 700,
//                   cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(108,63,197,0.06)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
//               >
//                 See Features
//               </button>
//             </motion.div>

//             <motion.div custom={4} variants={itemV} initial="hidden" animate="visible" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//               {badges.map(({ icon, label }) => (
//                 <div key={label} style={{
//                   display: "flex", alignItems: "center", gap: 7,
//                   padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600,
//                   background: "rgba(255,255,255,0.9)", border: "1px solid rgba(108,63,197,0.12)",
//                   color: "#4a4060", backdropFilter: "blur(8px)",
//                 }}>
//                   <span style={{ color: P }}>{icon}</span>
//                   {label}
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           <motion.div
//             className="hero-visual"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             style={{ position: "relative", height: "clamp(280px,40vw,520px)" }}
//           >
//             <div style={{ position: "absolute", inset: 0, borderRadius: 28, overflow: "hidden" }} className="">
//               {/* <Suspense fallback={<RobotFallback />}> */}
//                 <AlienRobot scale={5.5} positionY={-5} />
//               {/* </Suspense> */}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, x: 20, y: -10 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ delay: 1.1, duration: 0.6 }}
//               style={{
//                 position: "absolute", top: "8%", right: "4%",
//                 background: "#fff", borderRadius: 16, padding: "12px 16px",
//                 boxShadow: "0 8px 32px rgba(108,63,197,0.15)", border: "1px solid rgba(108,63,197,0.08)",
//                 fontFamily: "inherit",
//               }}
//             >
//               <p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 3 }}>Basmati Rice — UAE</p>
//               <p style={{ fontSize: 22, fontWeight: 900, color: P, lineHeight: 1, display: "flex", alignItems: "baseline", gap: 6 }}>
//                 $1,240
//                 <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>+4.2%</span>
//               </p>
//               <p style={{ fontSize: 10, color: "#9585c0", marginTop: 3 }}>per MT</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20, y: 10 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ delay: 1.3, duration: 0.6 }}
//               style={{
//                 position: "absolute", bottom: "15%", left: "0%",
//                 background: "#fff", borderRadius: 16, padding: "12px 16px",
//                 boxShadow: "0 8px 32px rgba(108,63,197,0.15)", border: "1px solid rgba(108,63,197,0.08)",
//                 fontFamily: "inherit",
//               }}
//             >
//               <p style={{ fontSize: 10, fontWeight: 600, color: "#9585c0", marginBottom: 7 }}>Top Exporters Found</p>
//               <div style={{ display: "flex" }}>
//                 {["#6c3fc5","#8b5cf6","#a78bfa","#0f1b3d","#1e3a7b"].map((c, i) => (
//                   <div key={i} style={{
//                     width: 28, height: 28, borderRadius: "50%",
//                     background: c, border: "2px solid #fff",
//                     marginLeft: i === 0 ? 0 : -8,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "#fff", fontSize: 10, fontWeight: 700,
//                   }}>
//                     {String.fromCharCode(65 + i)}
//                   </div>
//                 ))}
//               </div>
//               <p style={{ fontSize: 11, fontWeight: 700, color: N, marginTop: 6 }}>+240 more exporters</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.8 }}
//         className="hero-scroll-hint"
//         style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}
//         onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
//       >
//         <span style={{ fontSize: 11, color: "#b0a0d0", fontWeight: 600 }}>Scroll to explore</span>
//         <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b0a0d0" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
//         </motion.div>
//       </motion.div>

//       <style>{`
//         .hero-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: clamp(32px,6vw,64px);
//           align-items: center;
//         }
//         @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
//         @media (max-width: 768px) {
//           .hero-grid {
//             grid-template-columns: 1fr;
//           }
//           .hero-visual {
//             order: -1;
//             height: 280px !important;
//           }
//           .hero-scroll-hint {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }










import { useEffect, useRef, Suspense, lazy } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const AlienRobot = lazy(() => import("./AlienRobot"))

const N = "#6c3dff"
const P = "#6c3fc5"
const PL = "#8b5cf6"

const badges = [
  {
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    label: "2M+ Shipment Records",
  },
  {
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    label: "190+ Countries",
  },
  {
    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    label: "Real-time Pricing",
  },
]

const itemV = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

function RobotFallback() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 90, height: 90, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(108,63,197,0.15), rgba(139,92,246,0.1))",
          border: "2px solid rgba(108,63,197,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(108,63,197,0.3), rgba(139,92,246,0.2))",
            animation: "robotPulse 1.5s ease-in-out infinite",
          }} />
        </div>
        <div style={{
          position: "absolute", width: 130, height: 130, borderRadius: "50%",
          border: "2px dashed rgba(108,63,197,0.15)",
          animation: "robotSpin 3s linear infinite",
        }} />
      </div>
      <style>{`
        @keyframes robotPulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        @keyframes robotSpin  { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      `}</style>
    </div>
  )
}

export default function Hero({ onOpenAuth }) {
  const navigate = useNavigate()
  const { user } = useSelector((s) => s.auth)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animId
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.4 + 0.3, o: Math.random() * 0.28 + 0.05,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139,92,246,${p.o})`; ctx.fill()
      })
      pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(139,92,246,${0.055 * (1 - d / 90)})`
          ctx.lineWidth = 0.5; ctx.stroke()
        }
      }))
      animId = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener("resize", onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize) }
  }, [])

  const handleCTA = () => user ? navigate("/chat") : onOpenAuth("register")

  return (
    <section
      id="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        paddingTop: 64,
        background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 50%, #fff 100%)",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }}
      />
      <div style={{
        position: "absolute", top: "10%", left: "15%", width: 500, height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108,63,197,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, margin: "0 auto",
        padding: "clamp(32px,6vw,64px) clamp(16px,4vw,32px)",
        width: "100%",
      }}>
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div custom={0} variants={itemV} initial="hidden" animate="visible">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 100, marginBottom: 20,
                background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
                fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.02em",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: PL, display: "inline-block", animation: "heroPulse 2s infinite" }} />
                AI-Powered Trade Intelligence
              </div>
            </motion.div>

            <motion.h1
              custom={1} variants={itemV} initial="hidden" animate="visible"
              style={{
                fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 900, lineHeight: 1.1,
                letterSpacing: "-0.04em", color: N, marginBottom: 20,
              }}
            >
              Smarter decisions{" "}
              <span style={{ display: "inline-block" }}>
                for every{" "}
                <span style={{ background: `linear-gradient(135deg, ${P}, ${PL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  trade
                </span>
              </span>
            </motion.h1>

            <motion.p
              custom={2} variants={itemV} initial="hidden" animate="visible"
              style={{
                fontSize: "clamp(14px,1.6vw,17px)", color: "#6b7280", lineHeight: 1.7,
                marginBottom: 32, maxWidth: 480,
              }}
            >
              Ask anything about exports, commodity prices, HS codes, top exporters, and import/export regulations — answered instantly using real shipment data.
            </motion.p>

            <motion.div
              custom={3} variants={itemV} initial="hidden" animate="visible"
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}
            >
              <button
                onClick={handleCTA}
                style={{
                  padding: "13px 28px", borderRadius: 13, border: "none",
                  background: `linear-gradient(135deg, ${N}, ${P})`,
                  color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(108,63,197,0.35)",
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "inherit", transition: "transform 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                {user ? "Open Chat" : "Start for Free"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  padding: "13px 24px", borderRadius: 13,
                  border: "1.5px solid rgba(108,63,197,0.25)",
                  background: "transparent", color: P, fontSize: 15, fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(108,63,197,0.06)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
              >
                See Features
              </button>
            </motion.div>

            <motion.div
              custom={4} variants={itemV} initial="hidden" animate="visible"
              style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
            >
              {badges.map(({ icon, label }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "8px 14px", borderRadius: 10, fontSize: 12, fontWeight: 600,
                  background: "rgba(255,255,255,0.9)", border: "1px solid rgba(108,63,197,0.12)",
                  color: "#4a4060", backdropFilter: "blur(8px)",
                }}>
                  <span style={{ color: P }}>{icon}</span>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-robot-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-robot-inner">
              <Suspense fallback={<RobotFallback />}>
                <AlienRobot scale={6} positionY={-6}/>
              </Suspense>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="hero-float-card hero-float-top"
              >
                <p style={{ fontSize: 11, fontWeight: 700, color: N, marginBottom: 3 }}>Basmati Rice — UAE</p>
                <p style={{ fontSize: 22, fontWeight: 900, color: P, lineHeight: 1, display: "flex", alignItems: "baseline", gap: 6 }}>
                  $1,240
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>+4.2%</span>
                </p>
                <p style={{ fontSize: 10, color: "#9585c0", marginTop: 3 }}>per MT</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="hero-float-card hero-float-bottom"
              >
                <p style={{ fontSize: 10, fontWeight: 600, color: "#9585c0", marginBottom: 7 }}>Top Exporters Found</p>
                <div style={{ display: "flex" }}>
                  {["#6c3fc5","#8b5cf6","#a78bfa","#0f1b3d","#1e3a7b"].map((c, i) => (
                    <div key={i} style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: c, border: "2px solid #fff",
                      marginLeft: i === 0 ? 0 : -7,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontSize: 9, fontWeight: 700,
                    }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, color: N, marginTop: 6 }}>+240 more exporters</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="hero-scroll-hint"
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer",
        }}
        onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ fontSize: 11, color: "#b0a0d0", fontWeight: 600, whiteSpace: "nowrap" }}>Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b0a0d0" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px,5vw,56px);
          align-items: center;
        }

        .hero-content {
          order: 1;
        }

        .hero-robot-col {
          order: 2;
          position: relative;
          height: clamp(340px,44vw,520px);
        }

        .hero-robot-inner {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          overflow: visible;
        }

        .hero-float-card {
          position: absolute;
          background: #fff;
          border-radius: 16px;
          padding: 12px 16px;
          box-shadow: 0 8px 32px rgba(108,63,197,0.15);
          border: 1px solid rgba(108,63,197,0.08);
          font-family: inherit;
          z-index: 10;
        }

        .hero-float-top {
          top: 8%;
          right: -2%;
        }

        .hero-float-bottom {
          bottom: 18%;
          left: -2%;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .hero-content {
            order: 1;
          }

          .hero-robot-col {
            order: 2;
            height: 260px;
            margin-top: 16px;
            width: 100%;
          }

          .hero-robot-inner {
            overflow: hidden;
          }

          .hero-float-top {
            top: 4%;
            right: 2%;
          }

          .hero-float-bottom {
            bottom: 8%;
            left: 2%;
          }

          .hero-scroll-hint {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-robot-col {
            height: 220px;
          }
        }
      `}</style>
    </section>
  )
}