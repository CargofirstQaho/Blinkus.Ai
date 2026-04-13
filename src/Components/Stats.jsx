// import { useRef, useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { TrendingUp, Globe, Package, Building2 } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const stats = [
//   { icon: TrendingUp, value: 2, suffix: "M+", label: "Shipment Records", sublabel: "Real export transactions" },
//   { icon: Globe, value: 190, suffix: "+", label: "Countries Covered", sublabel: "Global trade destinations" },
//   { icon: Package, value: 5000, suffix: "+", label: "Commodities Tracked", sublabel: "Across all HS categories" },
//   { icon: Building2, value: 50, suffix: "K+", label: "Exporters Indexed", sublabel: "Verified Indian exporters" },
// ]

// function StatCard({ stat, index }) {
//   const Icon = stat.icon
//   const numRef = useRef(null)
//   const [triggered, setTriggered] = useState(false)

//   useEffect(() => {
//     if (!triggered) return
//     const target = stat.value
//     gsap.fromTo(
//       numRef.current,
//       { innerText: 0 },
//       {
//         innerText: target,
//         duration: 2,
//         delay: index * 0.12,
//         ease: "power2.out",
//         snap: { innerText: target >= 1000 ? 100 : 1 },
//         onUpdate() {
//           const val = Math.round(parseFloat(numRef.current.innerText))
//           numRef.current.innerText = val >= 1000 ? (val / 1000).toFixed(0) + "K" : val
//         },
//         onComplete() {
//           numRef.current.innerText = stat.value >= 1000 ? stat.value / 1000 : stat.value
//         },
//       }
//     )
//   }, [triggered])

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={() => { setTriggered(true); return { opacity: 1, y: 0 } }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
//       className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border"
//       style={{
//         background: "white",
//         borderColor: "rgba(108,63,197,0.1)",
//         boxShadow: "0 2px 16px rgba(108,63,197,0.05)",
//       }}
//     >
//       <div
//         className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
//         style={{ background: "rgba(108,63,197,0.08)" }}
//       >
//         <Icon size={20} style={{ color: PURPLE }} />
//       </div>
//       <div className="flex items-end gap-0.5 mb-2">
//         <span ref={numRef} className="text-4xl sm:text-5xl font-black" style={{ color: NAVY, lineHeight: 1 }}>
//           {stat.value >= 1000 ? stat.value / 1000 : stat.value}
//         </span>
//         <span className="text-2xl sm:text-3xl font-black mb-1" style={{ color: PURPLE }}>
//           {stat.suffix}
//         </span>
//       </div>
//       <p className="text-sm font-bold mb-1" style={{ color: NAVY }}>
//         {stat.label}
//       </p>
//       <p className="text-xs" style={{ color: "#9585c0" }}>
//         {stat.sublabel}
//       </p>
//     </motion.div>
//   )
// }

// export default function Stats() {
//   return (
//     <section id="stats" className="py-20 sm:py-28" style={{ background: "#faf9ff" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <h2
//             className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
//             style={{ color: NAVY, letterSpacing: "-0.04em" }}
//           >
//             Powered by real trade data
//           </h2>
//           <p className="text-base" style={{ color: "#6b7280" }}>
//             Our database grows continuously with verified shipment records from Indian customs authorities.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((s, i) => (
//             <StatCard key={s.label} stat={s} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



// import { useRef, useState } from "react"
// import { motion } from "framer-motion"

// const N = "#6c3dff"
// const P = "#6c3fc5"

// const stats = [
//   { value: 2000000, display: "2M+", label: "Shipment Records", sub: "Real export transactions", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
//   { value: 190, display: "190+", label: "Countries Covered", sub: "Global trade destinations", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
//   { value: 5000, display: "5K+", label: "Commodities Tracked", sub: "Across all HS categories", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
//   { value: 50000, display: "50K+", label: "Exporters Indexed", sub: "Verified Indian exporters", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
// ]

// function StatCard({ stat, index }) {
//   const [shown, setShown] = useState(false)
//   const [count, setCount] = useState(0)

//   const handleInView = () => {
//     if (shown) return
//     setShown(true)
//     const end = stat.value
//     const duration = 1800
//     const start = Date.now()
//     const tick = () => {
//       const elapsed = Date.now() - start
//       const progress = Math.min(elapsed / duration, 1)
//       const eased = 1 - Math.pow(1 - progress, 3)
//       setCount(Math.round(end * eased))
//       if (progress < 1) requestAnimationFrame(tick)
//     }
//     requestAnimationFrame(tick)
//   }

//   const formatCount = (n) => {
//     if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "M+"
//     if (n >= 1000) return (n / 1000).toFixed(0) + "K+"
//     return n + "+"
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={() => { handleInView(); return { opacity: 1, y: 0 } }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{ duration: 0.7, delay: index * 0.1 }}
//       style={{
//         display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
//         padding: "clamp(20px,4vw,36px) clamp(16px,3vw,28px)",
//         borderRadius: 20, background: "#fff",
//         border: "1px solid rgba(108,63,197,0.1)",
//         boxShadow: "0 2px 16px rgba(108,63,197,0.05)",
//       }}
//     >
//       <div style={{
//         width: 48, height: 48, borderRadius: 16,
//         background: "rgba(108,63,197,0.08)", marginBottom: 20,
//         display: "flex", alignItems: "center", justifyContent: "center", color: P,
//       }}>
//         {stat.icon}
//       </div>
//       <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
//         <span style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, color: N, lineHeight: 1, letterSpacing: "-0.04em" }}>
//           {shown ? formatCount(count) : stat.display}
//         </span>
//       </div>
//       <p style={{ fontSize: 14, fontWeight: 700, color: N, marginBottom: 5 }}>{stat.label}</p>
//       <p style={{ fontSize: 12, color: "#9585c0" }}>{stat.sub}</p>
//     </motion.div>
//   )
// }

// export default function Stats() {
//   return (
//     <section id="stats" style={{ padding: "80px 0", background: "#faf9ff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", maxWidth: 500, margin: "0 auto 48px" }}
//         >
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 14 }}>
//             Powered by real trade data
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
//             Our database grows continuously with verified shipment records from Indian customs authorities.
//           </p>
//         </motion.div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
//           {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
//         </div>
//       </div>
//     </section>
//   )
// }









import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const N = "#6c3dff"
const P = "#6c3fc5"

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ value, suffix, prefix, label, icon, desc, delay, started }) {
  const num = useCountUp(value, 2200, started)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "clamp(24px,3vw,36px)", borderRadius: 24,
        background: "#fff",
        border: "1px solid rgba(108,63,197,0.09)",
        boxShadow: "0 4px 24px rgba(108,63,197,0.06)",
        transition: "all 0.25s", cursor: "default",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(108,63,197,0.2)"
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(108,63,197,0.12)"
        e.currentTarget.style.transform = "translateY(-4px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(108,63,197,0.09)"
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(108,63,197,0.06)"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      <div style={{
        position: "absolute", top: -30, right: -30, width: 100, height: 100,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(108,63,197,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        width: 48, height: 48, borderRadius: 14, marginBottom: 20,
        background: "rgba(108,63,197,0.08)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: P,
      }}>
        {icon}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, marginBottom: 8, flexWrap: "wrap" }}>
        {prefix && <span style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", lineHeight: 1 }}>{prefix}</span>}
        <span style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", lineHeight: 1 }}>{num.toLocaleString()}</span>
        {suffix && <span style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 900, color: P, letterSpacing: "-0.04em", lineHeight: 1.1 }}>{suffix}</span>}
      </div>
      <p style={{ fontSize: 15, fontWeight: 800, color: "#1a1040", marginBottom: 6, letterSpacing: "-0.01em" }}>{label}</p>
      <p style={{ fontSize: 13, color: "#9585c0", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </motion.div>
  )
}

const stats = [
  {
    value: 2000000,
    suffix: "+",
    label: "Shipment Records",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    desc: "Real, verified export shipment records from customs",
  },
  {
    value: 190,
    suffix: "+",
    label: "Countries Covered",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    desc: "Bilateral trade analysis with any country in the world",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Active Exporters",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    desc: "Verified exporters across all commodity categories",
  },
  {
    value: 500,
    suffix: "+",
    label: "Commodity Categories",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    desc: "From agricultural goods to engineering products and chemicals",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Platform Uptime",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    desc: "Always available when you need critical trade intelligence",
  },
  {
    value: 5,
    prefix: "<",
    label: "Second Response",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    desc: "Average time from question to complete trade intelligence",
  },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section style={{ padding: "100px 0", background: "linear-gradient(180deg, #fff 0%, #faf9ff 100%)", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
            fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            By The Numbers
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.1 }}>
            The scale behind every answer
          </h2>


          <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7 }}>
            Our platform is backed by the largest trade shipment database available.
          </p>
        </motion.div>

        <div ref={ref} className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.08} started={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            marginTop: 48, borderRadius: 24, overflow: "hidden",
            background: `linear-gradient(135deg, ${N} 0%, #1a0f4e 50%, ${P} 100%)`,
            padding: "clamp(28px,4vw,48px) clamp(24px,5vw,56px)",
            display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 8 }}>
              Updated in real-time
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Our database syncs with the latest shipment records daily, so your intelligence is always current.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Daily Updates", "Verified Data", "DGFT Compliant"].map((tag) => (
              <div key={tag} style={{
                padding: "10px 18px", borderRadius: 12,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: 13, fontWeight: 700, color: "#fff",
                backdropFilter: "blur(8px)",
              }}>
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}