// import { useRef, useEffect } from "react"
// import { motion } from "framer-motion"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { MessageSquare, Search, Sparkles } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const steps = [
//   {
//     step: "01",
//     icon: MessageSquare,
//     title: "Ask in plain language",
//     desc: "Type your trade question naturally — commodity prices, top exporters, HS codes, regulations, or market analysis. No technical jargon needed.",
//     example: '"What are the top rice exporters from India to Saudi Arabia in 2024?"',
//   },
//   {
//     step: "02",
//     icon: Search,
//     title: "AI searches the database",
//     desc: "Blinkus.ai extracts intent from your query and searches millions of real shipment records in real time. If no data exists, it consults the AI knowledge base.",
//     example: "Scanning 2M+ shipment records across 190 countries...",
//   },
//   {
//     step: "03",
//     icon: Sparkles,
//     title: "Get expert insights",
//     desc: "Receive structured analysis with prices, volumes, exporters, trends, and actionable recommendations — like having a senior trade analyst on call.",
//     example: "Formatted with tables, figures, and strategic takeaways.",
//   },
// ]

// export default function HowItWorks() {
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".hiw-line", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         scaleX: 0,
//         transformOrigin: "left center",
//         duration: 1.2,
//         ease: "power3.out",
//       })
//     }, sectionRef)
//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       id="how-it-works"
//       ref={sectionRef}
//       className="py-20 sm:py-28"
//       style={{ background: "white" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-2xl mx-auto mb-16"
//         >
//           <div
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-5"
//             style={{
//               background: "rgba(108,63,197,0.06)",
//               borderColor: "rgba(108,63,197,0.2)",
//               color: PURPLE,
//             }}
//           >
//             How It Works
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
//             style={{ color: NAVY, letterSpacing: "-0.04em" }}
//           >
//             From question to insight in seconds
//           </h2>
//           <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
//             No complex dashboards. No manual data hunting. Just ask your question.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="hidden lg:block absolute top-16 left-0 right-0 h-px hiw-line" style={{ background: "linear-gradient(90deg, rgba(108,63,197,0.1), rgba(108,63,197,0.4), rgba(108,63,197,0.1))", marginLeft: "16.67%", marginRight: "16.67%" }} />

//           <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//             {steps.map((s, i) => {
//               const Icon = s.icon
//               return (
//                 <motion.div
//                   key={s.step}
//                   initial={{ opacity: 0, y: 32 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-40px" }}
//                   transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
//                   className="relative flex flex-col"
//                 >
//                   <div className="flex items-start gap-4 mb-5">
//                     <div className="relative">
//                       <div
//                         className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative z-10"
//                         style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, boxShadow: "0 8px 24px rgba(108,63,197,0.3)" }}
//                       >
//                         <Icon size={22} className="text-white" />
//                       </div>
//                       <div
//                         className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white z-20"
//                         style={{ background: "#a78bfa", fontSize: "10px" }}
//                       >
//                         {i + 1}
//                       </div>
//                     </div>
//                     <div className="pt-1">
//                       <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#b0a0d0" }}>
//                         Step {s.step}
//                       </span>
//                     </div>
//                   </div>

//                   <div
//                     className="flex-1 p-5 rounded-2xl border"
//                     style={{
//                       background: "#faf9ff",
//                       borderColor: "rgba(108,63,197,0.1)",
//                     }}
//                   >
//                     <h3 className="text-lg font-bold mb-2.5" style={{ color: NAVY }}>
//                       {s.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
//                       {s.desc}
//                     </p>
//                     <div
//                       className="px-3.5 py-2.5 rounded-xl text-xs font-medium italic"
//                       style={{
//                         background: "white",
//                         border: "1px solid rgba(108,63,197,0.12)",
//                         color: "#7c6fa0",
//                       }}
//                     >
//                       {s.example}
//                     </div>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




// import { motion } from "framer-motion"

// const N = "#6c3dff"
// const P = "#6c3fc5"
// const PL = "#8b5cf6"

// const steps = [
//   {
//     num: "01",
//     title: "Ask in plain language",
//     desc: "Type your trade question naturally — commodity prices, top exporters, HS codes, regulations, or market analysis. No technical jargon needed.",
//     example: '"What are the top rice exporters from India to Saudi Arabia in 2024?"',
//     icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
//   },
//   {
//     num: "02",
//     title: "AI searches the database",
//     desc: "Blinkus.ai extracts intent from your query and searches millions of real shipment records in real time. If no data exists, it consults its AI knowledge base.",
//     example: "Scanning 2M+ shipment records across 190 countries...",
//     icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
//   },
//   {
//     num: "03",
//     title: "Get expert insights",
//     desc: "Receive structured analysis with prices, volumes, exporters, trends, and actionable recommendations — like having a senior trade analyst on call.",
//     example: "Formatted with tables, figures, and strategic takeaways.",
//     icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
//   },
// ]

// export default function HowItWorks() {
//   return (
//     <section id="how-it-works" style={{ padding: "80px 0", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}
//         >
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: 6,
//             padding: "6px 14px", borderRadius: 100, marginBottom: 16,
//             background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//             fontSize: 12, fontWeight: 700, color: P,
//           }}>
//             How It Works
//           </div>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 14 }}>
//             From question to insight in seconds
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
//             No complex dashboards. No manual data hunting. Just ask your question.
//           </p>
//         </motion.div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
//           {steps.map((step, i) => (
//             <motion.div
//               key={step.num}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
//                 <div style={{ position: "relative" }}>
//                   <div style={{
//                     width: 56, height: 56, borderRadius: 18, flexShrink: 0,
//                     background: `linear-gradient(135deg, ${N}, ${P})`,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     boxShadow: "0 8px 24px rgba(108,63,197,0.3)",
//                   }}>
//                     {step.icon}
//                   </div>
//                   <div style={{
//                     position: "absolute", top: -4, right: -4,
//                     width: 22, height: 22, borderRadius: "50%",
//                     background: PL, border: "2px solid #fff",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: 10, fontWeight: 900, color: "#fff",
//                   }}>
//                     {i + 1}
//                   </div>
//                 </div>
//                 <span style={{ fontSize: 11, fontWeight: 800, color: "#c4b5f4", letterSpacing: "0.12em", textTransform: "uppercase" }}>
//                   Step {step.num}
//                 </span>
//               </div>

//               <div style={{
//                 flex: 1, padding: 22, borderRadius: 18,
//                 background: "#faf9ff", border: "1px solid rgba(108,63,197,0.1)",
//               }}>
//                 <h3 style={{ fontSize: 17, fontWeight: 800, color: N, marginBottom: 10, letterSpacing: "-0.02em" }}>
//                   {step.title}
//                 </h3>
//                 <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 14 }}>
//                   {step.desc}
//                 </p>
//                 <div style={{
//                   padding: "10px 14px", borderRadius: 12,
//                   background: "#fff", border: "1px solid rgba(108,63,197,0.1)",
//                   fontSize: 12, color: "#7c6fa0", fontStyle: "italic", lineHeight: 1.5,
//                 }}>
//                   {step.example}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }











import { motion } from "framer-motion"

const N = "#6c3dff"
const P = "#6c3fc5"
const PL = "#8b5cf6"

const steps = [
  {
    num: "01",
    title: "Ask in plain language",
    desc: "Type your trade question naturally — commodity prices, top exporters, HS codes, regulations, or market analysis. No technical jargon needed.",
    example: '"What are the top rice exporters from India to Saudi Arabia in 2024?"',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    stat: "< 5 seconds",
    statLabel: "avg. response time",
  },
  {
    num: "02",
    title: "AI searches the database",
    desc: "Blinkus.ai extracts intent from your query and searches millions of real shipment records in real time.",
    example: "Scanning 2M+ shipment records across 190 countries...",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    stat: "2M+",
    statLabel: "shipment records",
  },
  {
    num: "03",
    title: "Get expert insights",
    desc: "Receive structured analysis with prices, volumes, exporters, trends, and actionable recommendations — like a senior trade analyst on call.",
    example: "Formatted with tables, figures, and strategic takeaways.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    stat: "190+",
    statLabel: "countries covered",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 0", background: "#faf9ff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 72px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
            fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            How It Works
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.1 }}>
            From question to insight in seconds
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7 }}>
            No complex dashboards. No manual data hunting. Just ask your question.
          </p>
        </motion.div>

        <div className="hiw-layout">
          <div className="hiw-steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", gap: 20, position: "relative" }}
              >
                {i < steps.length - 1 && (
                  <div style={{
                    position: "absolute", left: 27, top: 64, bottom: -32,
                    width: 2,
                    background: "linear-gradient(180deg, rgba(108,63,197,0.2) 0%, transparent 100%)",
                    zIndex: 0,
                  }} />
                )}
                <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 18,
                    background: `linear-gradient(135deg, ${N}, ${P})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(108,63,197,0.3)",
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{
                    position: "absolute", top: -5, right: -5,
                    width: 22, height: 22, borderRadius: "50%",
                    background: PL, border: "2.5px solid #faf9ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 900, color: "#fff",
                  }}>
                    {i + 1}
                  </div>
                </div>
                <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? 40 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 19, fontWeight: 800, color: N, letterSpacing: "-0.02em", margin: 0 }}>
                      {step.title}
                    </h3>
                    <div style={{
                      padding: "3px 10px", borderRadius: 8,
                      background: "rgba(108,63,197,0.08)",
                      fontSize: 11, fontWeight: 700, color: P,
                    }}>
                      Step {step.num}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 12 }}>
                    {step.desc}
                  </p>
                  <div style={{
                    padding: "12px 16px", borderRadius: 12,
                    background: "#fff", border: "1px solid rgba(108,63,197,0.1)",
                    fontSize: 13, color: "#7c6fa0", fontStyle: "italic", lineHeight: 1.5,
                    borderLeft: `3px solid ${P}`,
                  }}>
                    {step.example}
                  </div>
                  <div style={{ display: "flex", gap: 20, marginTop: 14, flexWrap: "wrap" }}>
                    <div>
                      <p style={{ fontSize: 22, fontWeight: 900, color: P, letterSpacing: "-0.03em", margin: 0 }}>{step.stat}</p>
                      <p style={{ fontSize: 11, color: "#9585c0", fontWeight: 600, margin: 0 }}>{step.statLabel}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hiw-image"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 32px 80px rgba(108,63,197,0.2)" }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85"
                alt="Trade Intelligence Platform"
                style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(108,63,197,0.8) 100%)",
                borderRadius: 28,
              }} />
            </div>

            <div style={{
              position: "absolute", bottom: 28, left: 20, right: 20,
              background: "rgba(255,255,255,0.96)", borderRadius: 20,
              padding: "20px 24px", backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `linear-gradient(135deg, ${N}, ${P})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "#9585c0", fontWeight: 600, margin: 0 }}>Sample Query</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: N, margin: 0 }}>Top Basmati exporters to UAE</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: "ABC Ltd.", share: "28%" },
                  { label: "XY Foods", share: "21%" },
                  { label: "VVV Agro", share: "15%" },
                ].map((e) => (
                  <div key={e.label} style={{
                    flex: 1, padding: "8px 10px", borderRadius: 10,
                    background: "#f5f2ff", border: "1px solid rgba(108,63,197,0.1)",
                    textAlign: "center",
                  }}>
                    <p style={{ fontSize: 14, fontWeight: 900, color: P, margin: 0 }}>{e.share}</p>
                    <p style={{ fontSize: 10, color: "#7c6fa0", fontWeight: 600, margin: 0 }}>{e.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              position: "absolute", top: 24, right: -16,
              background: "#fff", borderRadius: 16, padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(108,63,197,0.15)",
              border: "1px solid rgba(108,63,197,0.08)",
            }}>
              <p style={{ fontSize: 11, color: "#9585c0", fontWeight: 600, margin: "0 0 4px" }}>Response Speed</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: P, margin: 0, lineHeight: 1 }}>3.3s</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hiw-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px,6vw,80px);
          align-items: start;
        }
        .hiw-image {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 900px) {
          .hiw-layout {
            grid-template-columns: 1fr;
          }
          .hiw-image {
            position: relative;
            top: auto;
            order: -1;
          }
          .hiw-image img {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  )
}











// import { useRef } from "react"
// import { motion, useScroll, useTransform, useInView } from "framer-motion"

// const N = "#6c3dff"
// const P = "#6c3fc5"
// const PL = "#8b5cf6"

// const steps = [
//   {
//     num: "01",
//     title: "Ask in plain language",
//     desc: "Type your trade question naturally — prices, exporters, HS codes, market analysis. No dashboards, no jargon.",
//     example: '"Top rice exporters from India to Saudi Arabia in 2024?"',
//     color: "#6c3dff",
//     accent: "#ede9fe",
//     icon: (
//       <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
//         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//       </svg>
//     ),
//     mockup: (
//       <div style={{
//         background: "#fff", borderRadius: 14, padding: "14px 16px",
//         boxShadow: "0 4px 20px rgba(108,63,197,0.1)",
//         border: "1px solid rgba(108,63,197,0.1)",
//       }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
//           <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#6c3dff,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
//           </div>
//           <span style={{ fontSize: 12, fontWeight: 700, color: N }}>Blinkus.ai</span>
//         </div>
//         <div style={{ fontSize: 13, color: "#6b7280", background: "#f5f2ff", borderRadius: 10, padding: "10px 12px", lineHeight: 1.5 }}>
//           "What are the <span style={{ color: N, fontWeight: 700 }}>top 5 exporters</span> of basmati rice to UAE in 2024?"
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
//           <div style={{ flex: 1, height: 36, background: "#faf9ff", borderRadius: 8, border: "1px solid rgba(108,63,197,0.15)", display: "flex", alignItems: "center", padding: "0 10px" }}>
//             <span style={{ fontSize: 12, color: "#c4b5f4" }}>Ask a trade question...</span>
//           </div>
//           <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#6c3dff,#6c3fc5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     num: "02",
//     title: "AI searches millions of records",
//     desc: "Blinkus.ai extracts intent and scans 2M+ real shipment records in real time across 190+ countries.",
//     example: "Scanning verified Indian customs data...",
//     color: "#7c3aed",
//     accent: "#f3f0ff",
//     icon: (
//       <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
//         <circle cx="11" cy="11" r="8"/>
//         <line x1="21" y1="21" x2="16.65" y2="16.65"/>
//       </svg>
//     ),
//     mockup: (
//       <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//         {[
//           { label: "Parsing query intent", done: true },
//           { label: "Matching commodity HS code", done: true },
//           { label: "Scanning 2M+ shipments", done: false, active: true },
//           { label: "Ranking by volume", done: false },
//         ].map((item) => (
//           <div key={item.label} style={{
//             display: "flex", alignItems: "center", gap: 10,
//             padding: "10px 14px", borderRadius: 10, background: "#fff",
//             border: `1px solid ${item.active ? "rgba(108,63,197,0.25)" : "rgba(108,63,197,0.08)"}`,
//             boxShadow: item.active ? "0 2px 12px rgba(108,63,197,0.1)" : "none",
//           }}>
//             <div style={{
//               width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
//               background: item.done ? "rgba(34,197,94,0.1)" : item.active ? "rgba(108,63,197,0.1)" : "rgba(0,0,0,0.04)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//             }}>
//               {item.done
//                 ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
//                 : item.active
//                   ? <div style={{ width: 8, height: 8, borderRadius: "50%", background: P, animation: "hiw-pulse 1s infinite" }}/>
//                   : <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d1d5db" }}/>
//               }
//             </div>
//             <span style={{ fontSize: 12, fontWeight: 600, color: item.done ? "#6b7280" : item.active ? N : "#9ca3af" }}>
//               {item.label}
//             </span>
//             {item.done && <span style={{ marginLeft: "auto", fontSize: 11, color: "#22c55e", fontWeight: 700 }}>✓</span>}
//             {item.active && <span style={{ marginLeft: "auto", fontSize: 11, color: P, fontWeight: 700 }}>...</span>}
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     num: "03",
//     title: "Get expert trade insights",
//     desc: "Receive structured analysis with prices, volumes, exporters, trends, and actionable recommendations in seconds.",
//     example: "Formatted with tables, charts, and strategic takeaways.",
//     color: "#8b5cf6",
//     accent: "#faf5ff",
//     icon: (
//       <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
//         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//       </svg>
//     ),
//     mockup: (
//       <div style={{
//         background: "#fff", borderRadius: 14, padding: "14px 16px",
//         boxShadow: "0 4px 20px rgba(108,63,197,0.1)",
//         border: "1px solid rgba(108,63,197,0.1)",
//       }}>
//         <p style={{ fontSize: 11, fontWeight: 800, color: N, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 10 }}>Top Exporters — Basmati Rice → UAE</p>
//         {[
//           { name: "KRBL Ltd.", share: 28, val: "$42.3M" },
//           { name: "LT Foods", share: 21, val: "$31.5M" },
//           { name: "REI Agro", share: 15, val: "$22.1M" },
//         ].map((e, i) => (
//           <div key={e.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 2 ? 8 : 0 }}>
//             <span style={{ fontSize: 11, fontWeight: 800, color: P, width: 16, flexShrink: 0 }}>{i + 1}</span>
//             <div style={{ flex: 1 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: N }}>{e.name}</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>{e.val}</span>
//               </div>
//               <div style={{ height: 5, borderRadius: 3, background: "#f0edf9", overflow: "hidden" }}>
//                 <div style={{ height: "100%", width: `${e.share * 3}%`, background: `linear-gradient(90deg,${N},${P})`, borderRadius: 3 }}/>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     ),
//   },
// ]

// function StepCard({ step, index }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-80px" })

//   const fromLeft = index % 2 === 0
//   const xInitial = fromLeft ? -60 : 60

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: xInitial, y: 30 }}
//       animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
//       style={{ position: "relative" }}
//     >
//       <div
//         className={`hiw-step-card ${fromLeft ? "hiw-from-left" : "hiw-from-right"}`}
//         style={{
//           background: "#fff",
//           borderRadius: 28,
//           overflow: "hidden",
//           boxShadow: "0 8px 40px rgba(108,63,197,0.1), 0 0 0 1px rgba(108,63,197,0.07)",
//           transition: "box-shadow 0.3s, transform 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.boxShadow = "0 20px 60px rgba(108,63,197,0.18), 0 0 0 1px rgba(108,63,197,0.12)"
//           e.currentTarget.style.transform = "translateY(-4px)"
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.boxShadow = "0 8px 40px rgba(108,63,197,0.1), 0 0 0 1px rgba(108,63,197,0.07)"
//           e.currentTarget.style.transform = "translateY(0)"
//         }}
//       >
//         <div style={{
//           background: `linear-gradient(135deg, ${step.color} 0%, #a78bfa 100%)`,
//           padding: "28px 32px 24px",
//           position: "relative",
//           overflow: "hidden",
//         }}>
//           <div style={{
//             position: "absolute", top: -30, right: -30,
//             width: 140, height: 140, borderRadius: "50%",
//             background: "rgba(255,255,255,0.06)",
//             pointerEvents: "none",
//           }}/>
//           <div style={{
//             position: "absolute", bottom: -20, left: "40%",
//             width: 90, height: 90, borderRadius: "50%",
//             background: "rgba(255,255,255,0.04)",
//             pointerEvents: "none",
//           }}/>
//           <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
//             <div style={{
//               width: 52, height: 52, borderRadius: 16,
//               background: "rgba(255,255,255,0.15)",
//               backdropFilter: "blur(8px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//             }}>
//               {step.icon}
//             </div>
//             <span style={{
//               fontSize: 56, fontWeight: 900, color: "rgba(255,255,255,0.12)",
//               lineHeight: 1, letterSpacing: "-0.05em", fontFamily: "monospace",
//             }}>
//               {step.num}
//             </span>
//           </div>
//           <h3 style={{
//             fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 900, color: "#fff",
//             letterSpacing: "-0.03em", marginTop: 18, marginBottom: 8, position: "relative", zIndex: 1,
//           }}>
//             {step.title}
//           </h3>
//           <p style={{
//             fontSize: 14, color: "rgba(255,255,255,0.8)",
//             lineHeight: 1.7, margin: 0, position: "relative", zIndex: 1,
//           }}>
//             {step.desc}
//           </p>
//         </div>

//         <div style={{ padding: "24px 28px" }}>
//           <p style={{
//             fontSize: 11, fontWeight: 800, color: "#c4b5f4",
//             letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14,
//           }}>
//             Example
//           </p>
//           {step.mockup}
//           <div style={{
//             marginTop: 16, padding: "10px 14px", borderRadius: 10,
//             background: step.accent,
//             border: `1px solid rgba(108,63,197,0.1)`,
//             fontSize: 12, color: "#7c6fa0", fontStyle: "italic", lineHeight: 1.5,
//             borderLeft: `3px solid ${step.color}`,
//           }}>
//             {step.example}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// function FloatingOrb({ style }) {
//   return (
//     <div style={{
//       position: "absolute", borderRadius: "50%", pointerEvents: "none",
//       ...style,
//     }} />
//   )
// }

// export default function HowItWorks() {
//   const sectionRef = useRef(null)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
//   const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
//   const orb3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
//   const titleY = useTransform(scrollYProgress, [0, 0.4], ["20px", "0px"])
//   const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

//   return (
//     <section
//       id="how-it-works"
//       ref={sectionRef}
//       style={{
//         padding: "120px 0",
//         background: "linear-gradient(180deg, #faf9ff 0%, #fff 100%)",
//         fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <motion.div style={{ y: orb1Y }} className="hiw-orb-wrap">
//         <FloatingOrb style={{
//           top: "5%", left: "-8%",
//           width: "clamp(200px,30vw,400px)",
//           height: "clamp(200px,30vw,400px)",
//           background: "radial-gradient(circle, rgba(108,63,197,0.07) 0%, transparent 70%)",
//         }}/>
//       </motion.div>
//       <motion.div style={{ y: orb2Y }} className="hiw-orb-wrap">
//         <FloatingOrb style={{
//           top: "40%", right: "-10%",
//           width: "clamp(180px,28vw,360px)",
//           height: "clamp(180px,28vw,360px)",
//           background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
//         }}/>
//       </motion.div>
//       <motion.div style={{ y: orb3Y }} className="hiw-orb-wrap">
//         <FloatingOrb style={{
//           bottom: "10%", left: "30%",
//           width: "clamp(160px,24vw,300px)",
//           height: "clamp(160px,24vw,300px)",
//           background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
//         }}/>
//       </motion.div>

//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)", position: "relative", zIndex: 1 }}>
//         <motion.div
//           style={{ y: titleY, opacity: titleOpacity }}
//           style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 80px" }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: 6,
//               padding: "6px 16px", borderRadius: 100, marginBottom: 18,
//               background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//               fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.04em", textTransform: "uppercase",
//             }}>
//               How It Works
//             </div>
//             <h2 style={{
//               fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: N,
//               letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.1,
//             }}>
//               From question to insight{" "}
//               <span style={{ background: `linear-gradient(135deg, ${P}, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 in seconds
//               </span>
//             </h2>
//             <p style={{ fontSize: "clamp(15px,1.8vw,17px)", color: "#6b7280", lineHeight: 1.75 }}>
//               No complex dashboards. No manual data hunting. Just ask your question and get expert-level trade intelligence instantly.
//             </p>
//           </motion.div>
//         </motion.div>

//         <div className="hiw-cards-grid">
//           {steps.map((step, i) => (
//             <StepCard key={step.num} step={step} index={i} />
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           style={{
//             marginTop: 64,
//             background: `linear-gradient(135deg, ${N} 0%, #2d1b69 50%, ${P} 100%)`,
//             borderRadius: 24, padding: "clamp(24px,4vw,40px) clamp(24px,5vw,52px)",
//             display: "flex", alignItems: "center", justifyContent: "space-between",
//             gap: 24, flexWrap: "wrap",
//             position: "relative", overflow: "hidden",
//           }}
//         >
//           <div style={{
//             position: "absolute", top: -40, right: "20%",
//             width: 200, height: 200, borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
//             pointerEvents: "none",
//           }}/>
//           <div style={{ position: "relative", zIndex: 1 }}>
//             <p style={{ fontSize: "clamp(16px,2.5vw,22px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>
//               Ready to try it yourself?
//             </p>
//             <p style={{ fontSize: "clamp(13px,1.5vw,15px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
//               Join thousands of exporters getting smarter trade insights every day.
//             </p>
//           </div>
//           <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
//             {[
//               { label: "< 3s", sublabel: "avg response" },
//               { label: "2M+", sublabel: "shipment records" },
//               { label: "190+", sublabel: "countries" },
//             ].map((stat) => (
//               <div key={stat.label} style={{
//                 padding: "12px 20px", borderRadius: 14,
//                 background: "rgba(255,255,255,0.1)",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 textAlign: "center", backdropFilter: "blur(8px)",
//                 minWidth: 80,
//               }}>
//                 <p style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1 }}>{stat.label}</p>
//                 <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600, margin: "4px 0 0" }}>{stat.sublabel}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       <style>{`
//         .hiw-orb-wrap {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           z-index: 0;
//         }
//         .hiw-cards-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: clamp(16px, 2.5vw, 28px);
//           align-items: start;
//         }
//         @keyframes hiw-pulse {
//           0%,100% { opacity:0.5; transform:scale(0.9); }
//           50% { opacity:1; transform:scale(1.1); }
//         }
//         @media (max-width: 1024px) {
//           .hiw-cards-grid {
//             grid-template-columns: 1fr 1fr;
//           }
//         }
//         @media (max-width: 680px) {
//           .hiw-cards-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }