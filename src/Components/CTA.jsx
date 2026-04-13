// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { motion } from "framer-motion"
// import { ArrowRight, Zap } from "lucide-react"
 
// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
 
// export function CTA({ onOpenAuth }) {
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
 
//   return (
//     <section
//       id="pricing"
//       className="py-20 sm:py-28 relative overflow-hidden"
//       style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1a0f4e 50%, ${PURPLE} 100%)` }}
//     >
//       <div
//         className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)" }}
//       />
//       <div
//         className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
//       />
 
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-6 border-white/20 text-white/80 bg-white/10">
//             <Zap size={12} fill="currentColor" />
//             Free to get started
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-5 text-white" style={{ letterSpacing: "-0.04em" }}>
//             Your AI trade analyst,
//             <br />
//             available 24/7
//           </h2>
//           <p className="text-base sm:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
//             Stop spending hours hunting through spreadsheets. Start asking questions and getting expert trade intelligence in seconds.
//           </p>
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button
//               onClick={() => user ? navigate("/chat") : onOpenAuth("register")}
//               className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-purple-700 transition-transform active:scale-95 hover:shadow-xl"
//               style={{ color: PURPLE, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
//             >
//               {user ? "Go to Chat" : "Get Started Free"}
//               <ArrowRight size={15} />
//             </button>
//             <button
//               onClick={() => onOpenAuth("login")}
//               className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
//             >
//               {user ? null : "Sign In"}
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }






// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { motion } from "framer-motion"
 
// // const N = "#0f1b3d"
// const N = "#6c3dff"
// const P = "#6c3fc5"
 
// export function CTA({ onOpenAuth }) {
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
 
//   return (
//     <section style={{
//       padding: "80px 0", position: "relative", overflow: "hidden",
//       background: `linear-gradient(135deg, ${N} 0%, #1a0f4e 50%, ${P} 100%)`,
//     }}>
//       <div style={{ position: "absolute", top: 0, left: "25%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: 0, right: "25%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
 
//       <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)", textAlign: "center", position: "relative", zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//         >
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: 6,
//             padding: "6px 14px", borderRadius: 100, marginBottom: 20,
//             background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
//             fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.8)",
//           }}>
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
//             Free to get started
//           </div>
//           <h2 style={{
//             fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "#fff",
//             letterSpacing: "-0.04em", marginBottom: 18, lineHeight: 1.15,
//           }}>
//             Your AI trade analyst,<br />available 24/7
//           </h2>
//           <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "rgba(255,255,255,0.7)", marginBottom: 36, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 36px" }}>
//             Stop spending hours hunting through spreadsheets. Ask questions and get expert trade intelligence in seconds.
//           </p>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
//             <button
//               onClick={() => user ? navigate("/chat") : onOpenAuth("register")}
//               style={{
//                 padding: "14px 32px", borderRadius: 13, border: "none",
//                 background: "#fff", color: P, fontSize: 15, fontWeight: 800,
//                 cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.2)", fontFamily: "inherit",
//                 transition: "transform 0.15s",
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)" }}
//               onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
//             >
//               {user ? "Go to Chat" : "Get Started Free"}
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//             </button>
//             {!user && (
//               <button
//                 onClick={() => onOpenAuth("login")}
//                 style={{
//                   padding: "14px 28px", borderRadius: 13,
//                   border: "1.5px solid rgba(255,255,255,0.3)",
//                   background: "transparent", color: "#fff",
//                   fontSize: 15, fontWeight: 700, cursor: "pointer",
//                   fontFamily: "inherit", transition: "background 0.15s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }











import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const N = "#6c3dff"
const P = "#6c3fc5"

const trustItems = [
  { label: "Free to start", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { label: "No credit card needed", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> },
  { label: "Cancel anytime", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
]

export function CTA({ onOpenAuth }) {
  const navigate = useNavigate()
  const { user } = useSelector((s) => s.auth)

  return (
    <section style={{ padding: "100px 0", background: "#faf9ff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          style={{
            borderRadius: 32, overflow: "hidden",
            background: `linear-gradient(135deg, ${N} 0%, #1a0f4e 50%, ${P} 100%)`,
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute", top: -100, left: "20%", width: 600, height: 600,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, right: "10%", width: 400, height: 400,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="cta-layout">
            <div style={{ flex: 1, padding: "clamp(40px,5vw,72px) clamp(32px,5vw,64px)", position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 100, marginBottom: 24,
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Free to get started
              </div>
              <h2 style={{
                fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#fff",
                letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1.1,
              }}>
                Your AI trade analyst,<br />available 24/7
              </h2>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "rgba(255,255,255,0.75)", marginBottom: 36, lineHeight: 1.7, maxWidth: 440 }}>
                Stop spending hours hunting through spreadsheets. Ask questions and get expert trade intelligence in seconds.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                <button
                  onClick={() => user ? navigate("/chat") : onOpenAuth("register")}
                  style={{
                    padding: "14px 32px", borderRadius: 14, border: "none",
                    background: "#fff", color: P, fontSize: 15, fontWeight: 800,
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)", fontFamily: "inherit",
                    transition: "transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
                >
                  {user ? "Go to Chat" : "Get Started Free"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                {!user && (
                  <button
                    onClick={() => onOpenAuth("login")}
                    style={{
                      padding: "14px 28px", borderRadius: 14,
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      background: "transparent", color: "#fff",
                      fontSize: 15, fontWeight: 700, cursor: "pointer",
                      fontFamily: "inherit", transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                  >
                    Sign In
                  </button>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {trustItems.map((t) => (
                  <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ color: "rgba(167,139,250,1)" }}>{t.icon}</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-image-col" style={{ flex: 1, position: "relative", minHeight: 340 }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
                alt="Trade intelligence team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(108,63,197,0.5), transparent 60%)",
              }} />
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(255,255,255,0.95)",
                borderRadius: 20, padding: "20px 24px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                width: "calc(100% - 64px)",
                maxWidth: 280,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `linear-gradient(135deg, ${N}, ${P})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: "#9585c0", fontWeight: 600, margin: 0 }}>Blinkus.ai</p>
                    <p style={{ fontSize: 13, fontWeight: 800, color: N, margin: 0 }}>Answering your query...</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Scanning shipment records", "Matching 18 exporters", "Generating analysis"].map((s, i) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: i < 2 ? "rgba(34,197,94,0.15)" : "rgba(108,63,197,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {i < 2
                          ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                          : <div style={{ width: 6, height: 6, borderRadius: "50%", background: P, animation: "ctaDot 1s infinite" }} />
                        }
                      </div>
                      <span style={{ fontSize: 12, color: "#4a4060", fontWeight: 600 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-layout {
          display: flex;
          flex-direction: row;
        }
        .cta-image-col {
          display: block;
        }
        @keyframes ctaDot { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @media (max-width: 900px) {
          .cta-layout { flex-direction: column; }
          .cta-image-col { min-height: 240px !important; }
        }
      `}</style>
    </section>
  )
}