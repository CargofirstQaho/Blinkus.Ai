// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import {
//   Database,
//   TrendingUp,
//   Hash,
//   Users,
//   Globe,
//   FileText,
//   Layers,
//   Anchor,
// } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const features = [
//   {
//     icon: Database,
//     title: "Live Trade Database",
//     desc: "Instantly search through millions of Indian export shipment records updated regularly. Get real data — not estimates.",
//     accent: "#6c3fc5",
//   },
//   {
//     icon: TrendingUp,
//     title: "Price Intelligence",
//     desc: "Track commodity export prices across countries, ports, and time periods. Identify pricing trends and outliers.",
//     accent: "#7c3aed",
//   },
//   {
//     icon: Hash,
//     title: "HS Code Lookup",
//     desc: "Find the exact ITC-HS code for any product. Understand classification rules and applicable duties instantly.",
//     accent: "#8b5cf6",
//   },
//   {
//     icon: Users,
//     title: "Exporter Discovery",
//     desc: "Identify verified exporters by commodity, port, or destination country. Access shipment volumes and trade history.",
//     accent: "#6c3fc5",
//   },
//   {
//     icon: Globe,
//     title: "Country Analysis",
//     desc: "Understand bilateral trade flows between India and 190+ countries. Volume, value, and market share in one view.",
//     accent: "#7c3aed",
//   },
//   {
//     icon: Anchor,
//     title: "Port Intelligence",
//     desc: "Analyse trade activity by Indian and foreign ports. Volume, frequency, preferred modes, and seasonal patterns.",
//     accent: "#8b5cf6",
//   },
//   {
//     icon: Layers,
//     title: "Commodity Trends",
//     desc: "Month-over-month export trends for any commodity. Spot seasonality, growth, and market shifts before your competitors.",
//     accent: "#6c3fc5",
//   },
//   {
//     icon: FileText,
//     title: "Regulations & Compliance",
//     desc: "Get accurate guidance on trade regulations, DGFT policies, export incentives, customs duties, and compliance requirements.",
//     accent: "#7c3aed",
//   },
// ]

// function FeatureCard({ feature, index }) {
//   const Icon = feature.icon
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -4, transition: { duration: 0.2 } }}
//       className="group relative p-6 rounded-2xl border cursor-default transition-all"
//       style={{
//         background: "white",
//         borderColor: "rgba(108,63,197,0.1)",
//         boxShadow: "0 2px 12px rgba(108,63,197,0.04)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderColor = "rgba(108,63,197,0.25)"
//         e.currentTarget.style.boxShadow = "0 8px 32px rgba(108,63,197,0.1)"
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderColor = "rgba(108,63,197,0.1)"
//         e.currentTarget.style.boxShadow = "0 2px 12px rgba(108,63,197,0.04)"
//       }}
//     >
//       <div
//         className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
//         style={{ background: `${feature.accent}14` }}
//       >
//         <Icon size={20} style={{ color: feature.accent }} />
//       </div>
//       <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>
//         {feature.title}
//       </h3>
//       <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
//         {feature.desc}
//       </p>
//     </motion.div>
//   )
// }

// export default function Features() {
//   const headRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(headRef.current, {
//         scrollTrigger: { trigger: headRef.current, start: "top 85%", toggleActions: "play none none none" },
//         y: 24,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.out",
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return (
//     <section id="features" className="py-20 sm:py-28" style={{ background: "#faf9ff" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div ref={headRef} className="text-center max-w-2xl mx-auto mb-14">
//           <div
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-5"
//             style={{
//               background: "rgba(108,63,197,0.06)",
//               borderColor: "rgba(108,63,197,0.2)",
//               color: PURPLE,
//             }}
//           >
//             Capabilities
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
//             style={{ color: NAVY, letterSpacing: "-0.04em" }}
//           >
//             Everything your trade team needs
//           </h2>
//           <p className="text-base leading-relaxed" style={{ color: "#6b7280" }}>
//             Blinkus.ai combines a live shipment database with AI reasoning to answer any question
//             about Indian import/export trade — instantly.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {features.map((f, i) => (
//             <FeatureCard key={f.title} feature={f} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




// import { motion } from "framer-motion"

// const N = "#0f1b3d"
// const P = "#6c3fc5"

// const features = [
//   { title: "Live Trade Database", desc: "Search millions of Indian export shipment records. Real data — not estimates.", color: "#6c3fc5",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
//   { title: "Price Intelligence", desc: "Track commodity export prices across countries, ports, and time periods.", color: "#7c3aed",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
//   { title: "HS Code Lookup", desc: "Find the exact ITC-HS code for any product. Understand duties instantly.", color: "#8b5cf6",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg> },
//   { title: "Exporter Discovery", desc: "Identify verified exporters by commodity, port, or destination country.", color: "#6c3fc5",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
//   { title: "Country Analysis", desc: "Understand bilateral trade flows between India and 190+ countries.", color: "#7c3aed",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
//   { title: "Port Intelligence", desc: "Analyse trade activity by Indian and foreign ports. Volume, frequency, seasonal patterns.", color: "#8b5cf6",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 17l3-8 3 4 2-3 3 7 3-4 3 4"/><path d="M2 20h20"/></svg> },
//   { title: "Commodity Trends", desc: "Month-over-month export trends for any commodity. Spot growth and market shifts.", color: "#6c3fc5",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg> },
//   { title: "Regulations & Compliance", desc: "DGFT policies, export incentives, customs duties, and compliance requirements.", color: "#7c3aed",
//     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
// ]

// export default function Features() {
//   return (
//     <section id="features" style={{ padding: "80px 0", background: "#faf9ff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}
//         >
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: 6,
//             padding: "6px 14px", borderRadius: 100, marginBottom: 16,
//             background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//             fontSize: 12, fontWeight: 700, color: P,
//           }}>
//             Capabilities
//           </div>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 14, fontFamily: "inherit" }}>
//             Everything your trade team needs
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
//             Blinkus.ai combines a live shipment database with AI reasoning to answer any question about Indian import/export trade — instantly.
//           </p>
//         </motion.div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//           gap: 16,
//         }}>
//           {features.map((f, i) => (
//             <motion.div
//               key={f.title}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
//               style={{
//                 padding: 22, borderRadius: 18,
//                 background: "#fff", border: "1px solid rgba(108,63,197,0.09)",
//                 boxShadow: "0 2px 12px rgba(108,63,197,0.04)",
//                 transition: "all 0.2s", cursor: "default",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(108,63,197,0.22)"
//                 e.currentTarget.style.boxShadow = "0 8px 28px rgba(108,63,197,0.1)"
//                 e.currentTarget.style.transform = "translateY(-3px)"
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(108,63,197,0.09)"
//                 e.currentTarget.style.boxShadow = "0 2px 12px rgba(108,63,197,0.04)"
//                 e.currentTarget.style.transform = "translateY(0)"
//               }}
//             >
//               <div style={{
//                 width: 44, height: 44, borderRadius: 13,
//                 background: `${f.color}12`,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 marginBottom: 16, color: f.color,
//               }}>
//                 {f.icon}
//               </div>
//               <h3 style={{ fontSize: 15, fontWeight: 800, color: N, marginBottom: 8, letterSpacing: "-0.01em" }}>
//                 {f.title}
//               </h3>
//               <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>
//                 {f.desc}
//               </p>
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

const features = [
  {
    title: "Live Trade Database",
    desc: "Search millions of export shipment records. Real data — not estimates.",
    color: "#6c3fc5",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  },
  {
    title: "Price Intelligence",
    desc: "Track commodity export prices across countries, ports, and time periods.",
    color: "#7c3aed",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    title: "HS Code Lookup",
    desc: "Find the exact ITC-HS code for any product. Understand duties instantly.",
    color: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>,
  },
  {
    title: "Exporter Discovery",
    desc: "Identify verified exporters by commodity, port, or destination country.",
    color: "#6c3fc5",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "Country Analysis",
    desc: "Understand bilateral trade flows between India and 190+ countries.",
    color: "#7c3aed",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    title: "Port Intelligence",
    desc: "Analyse trade activity by Indian and foreign ports. Volume, frequency, seasonal patterns.",
    color: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 17l3-8 3 4 2-3 3 7 3-4 3 4"/><path d="M2 20h20"/></svg>,
  },
  {
    title: "Commodity Trends",
    desc: "Month-over-month export trends for any commodity. Spot growth and market shifts.",
    color: "#6c3fc5",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
  {
    title: "Regulations & Compliance",
    desc: "DGFT policies, export incentives, customs duties, and compliance requirements.",
    color: "#7c3aed",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 0", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 72px" }}
        > 
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
            fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            Capabilities
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.1 }}>
            Everything your trade team needs
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Blinkus.ai combines a live shipment database with AI reasoning to answer any question about import/export trade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          style={{
            borderRadius: 28, overflow: "hidden",
            marginBottom: 32,
            boxShadow: `
  0 8px 32px rgba(31,38,135,0.50),
  0 2px 8px rgba(0,0,0,0.08),
  inset 0 1px 0 rgba(255,255,255,0.6)
`,
          }}
        >
          <div className="features-showcase">
            <div style={{
              flex: 1, padding: "clamp(32px,5vw,56px)",
              background: "linear-gradient(135deg, #f5f2ff 0%, #fff 100%)",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 16px", borderRadius: 100, marginBottom: 20,
                background: "rgba(108,63,197,0.08)", width: "fit-content",
                fontSize: 12, fontWeight: 700, color: P,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                AI-Powered Intelligence
              </div>
              <h3 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: N, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.2 }}>
                Real shipment data,<br />instant answers
              </h3>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 28, maxWidth: 400 }}>
                Access over 2 million real export shipment records from India. Ask in plain language and get structured intelligence in seconds.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Search across 2M+ real shipment records", "Get prices, volumes & exporter details", "Instant HS code and compliance lookup"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(108,63,197,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#4a4060", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, position: "relative", minHeight: 320, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85"
                alt="Trade Analytics Dashboard"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(108,63,197,0.5), rgba(139,92,246,0.3))",
              }} />
              <div style={{
                position: "absolute", bottom: 24, left: 24, right: 24,
                background: "rgba(255,255,255,0.95)", borderRadius: 16,
                padding: "16px 20px", backdropFilter: "blur(8px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#6b7280" }}>Export Volume — This Month</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>↑ 12.4%</span>
                </div>
                <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 40 }}>
                  {[65, 80, 55, 90, 75, 95, 70, 88, 60, 92, 85, 100].map((h, i) => (
                    <div key={i} style={{
                      flex: 1, borderRadius: 3,
                      background: i === 11 ? N : `rgba(108,63,197,${0.2 + i * 0.05})`,
                      height: `${h}%`,
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: 20, overflow: "hidden",
                background: "#fff", border: "1px solid rgba(108,63,197,0.08)",
                // boxShadow: "0 2px 16px rgba(108,63,197,0.04)",
                transition: "all 0.25s", cursor: "default",
                boxShadow: `
  0 8px 32px rgba(31,38,135,0.15),
  0 2px 8px rgba(0,0,0,0.08),
  inset 0 1px 0 rgba(255,255,255,0.6)
`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.2)"
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(108,63,197,0.12)"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.08)"
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(108,63,197,0.04)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div style={{ position: "relative", height: 140, overflow: "hidden" }}>
                <img
                  src={f.img}
                  alt={f.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(180deg, transparent 30%, rgba(15,10,40,0.7) 100%)`,
                }} />
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff",
                }}>
                  {f.icon}
                </div>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: N, marginBottom: 8, letterSpacing: "-0.01em" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
 
      <style>{`
        .features-showcase {
          display: flex;
          flex-direction: row;
        }
        .features-showcase > div:last-child {
          min-height: 400px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .features-showcase { flex-direction: column; }
          .features-showcase > div:last-child { min-height: 220px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}