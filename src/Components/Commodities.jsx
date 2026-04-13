// import { useRef } from "react"
// import { motion } from "framer-motion"
// import { Wheat, Leaf, Anchor, Droplets, Factory, Fish, Apple, Cpu } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const categories = [
//   { icon: Wheat, label: "Grains & Rice", items: ["Basmati Rice", "Non-Basmati", "Wheat", "Maize", "Jowar"], color: "#f59e0b" },
//   { icon: Leaf, label: "Pulses & Spices", items: ["Chana Dal", "Urad Dal", "Cumin", "Coriander", "Turmeric"], color: "#10b981" },
//   { icon: Factory, label: "Chemicals", items: ["Agrochemicals", "Dyes", "Pharmaceuticals", "Polymers", "Resins"], color: "#6c3fc5" },
//   { icon: Droplets, label: "Cotton & Yarn", items: ["Raw Cotton", "Cotton Yarn", "Woven Fabric", "Garments", "Textutre"], color: "#3b82f6" },
//   { icon: Fish, label: "Marine Products", items: ["Frozen Shrimp", "Fish Meal", "Squid", "Cuttlefish", "Lobster"], color: "#0891b2" },
//   { icon: Apple, label: "Fruits & Veg", items: ["Onion", "Grapes", "Mango", "Pomegranate", "Potato"], color: "#ef4444" },
//   { icon: Anchor, label: "Engineering", items: ["Iron Ore", "Steel", "Auto Parts", "Castings", "Machinery"], color: "#78716c" },
//   { icon: Cpu, label: "Electronics", items: ["Semiconductors", "LED", "Cables", "Components", "PCBs"], color: "#8b5cf6" },
// ]

// const ticker = [
//   "Basmati Rice", "Maize", "Cotton Yarn", "Iron Ore", "Frozen Shrimp",
//   "Cumin Seeds", "Raw Sugar", "Onion", "Steel Billets", "Urad Dal",
//   "Turmeric", "Guar Gum", "Castor Oil", "Groundnut", "Chillies",
//   "Sesame Seeds", "Psyllium Husk", "Tobacco", "Granite", "Granite Tiles",
// ]

// export default function Commodities() {
//   return (
//     <section id="commodities" className="py-20 sm:py-28" style={{ background: "white" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <div
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-5"
//             style={{ background: "rgba(108,63,197,0.06)", borderColor: "rgba(108,63,197,0.2)", color: PURPLE }}
//           >
//             Coverage
//           </div>
//           <h2
//             className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
//             style={{ color: NAVY, letterSpacing: "-0.04em" }}
//           >
//             Covers every major export commodity
//           </h2>
//           <p className="text-base" style={{ color: "#6b7280" }}>
//             From agricultural commodities to industrial goods — if India exports it, Blinkus.ai knows it.
//           </p>
//         </motion.div>
//       </div>

//       <div className="overflow-hidden mb-14">
//         <div className="flex gap-3 animate-marquee whitespace-nowrap py-2" style={{ width: "max-content" }}>
//           {[...ticker, ...ticker].map((item, i) => (
//             <span
//               key={i}
//               className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border shrink-0"
//               style={{
//                 background: "rgba(108,63,197,0.04)",
//                 borderColor: "rgba(108,63,197,0.12)",
//                 color: "#4a4060",
//               }}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//         <style>{`
//           @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
//           .animate-marquee { animation: marquee 30s linear infinite; }
//           .animate-marquee:hover { animation-play-state: paused; }
//         `}</style>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((cat, i) => {
//             const Icon = cat.icon
//             return (
//               <motion.div
//                 key={cat.label}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
//                 whileHover={{ y: -3, transition: { duration: 0.2 } }}
//                 className="p-5 rounded-2xl border cursor-default"
//                 style={{
//                   background: "#faf9ff",
//                   borderColor: "rgba(108,63,197,0.1)",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(108,63,197,0.25)"; e.currentTarget.style.background = "white" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(108,63,197,0.1)"; e.currentTarget.style.background = "#faf9ff" }}
//               >
//                 <div className="flex items-center gap-3 mb-3.5">
//                   <div
//                     className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
//                     style={{ background: `${cat.color}14` }}
//                   >
//                     <Icon size={17} style={{ color: cat.color }} />
//                   </div>
//                   <h3 className="text-sm font-bold" style={{ color: NAVY }}>
//                     {cat.label}
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap gap-1.5">
//                   {cat.items.map((item) => (
//                     <span
//                       key={item}
//                       className="text-xs px-2.5 py-1 rounded-lg font-medium"
//                       style={{ background: "white", border: "1px solid rgba(108,63,197,0.1)", color: "#7c6fa0" }}
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }





// import { motion } from "framer-motion"

// // const N = "#0f1b3d"
// const N = "#6c3dff"
// const P = "#6c3fc5"

// const ticker = [
//   "Basmati Rice","Maize","Cotton Yarn","Iron Ore","Frozen Shrimp",
//   "Cumin Seeds","Raw Sugar","Onion","Steel Billets","Urad Dal",
//   "Turmeric","Guar Gum","Castor Oil","Groundnut","Red Chillies",
//   "Sesame Seeds","Psyllium Husk","Tobacco","Granite","Garlic",
// ]

// const cats = [
//   { label: "Grains & Rice", items: ["Basmati Rice","Non-Basmati","Wheat","Maize","Jowar"], color: "#f59e0b" },
//   { label: "Pulses & Spices", items: ["Chana Dal","Urad Dal","Cumin","Coriander","Turmeric"], color: "#10b981" },
//   { label: "Chemicals", items: ["Agrochemicals","Dyes","Pharmaceuticals","Polymers","Resins"], color: "#6c3fc5" },
//   { label: "Cotton & Yarn", items: ["Raw Cotton","Cotton Yarn","Woven Fabric","Garments"], color: "#3b82f6" },
//   { label: "Marine Products", items: ["Frozen Shrimp","Fish Meal","Squid","Cuttlefish","Lobster"], color: "#0891b2" },
//   { label: "Fruits & Veg", items: ["Onion","Grapes","Mango","Pomegranate","Potato"], color: "#ef4444" },
//   { label: "Engineering", items: ["Iron Ore","Steel","Auto Parts","Castings","Machinery"], color: "#78716c" },
//   { label: "Electronics", items: ["Semiconductors","LED","Cables","Components","PCBs"], color: "#8b5cf6" },
// ]

// export default function Commodities() {
//   return (
//     <section id="commodities" style={{ padding: "80px 0", background: "#fff" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)", marginBottom: 0 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}
//         >
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: 6,
//             padding: "6px 14px", borderRadius: 100, marginBottom: 16,
//             background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
//             fontSize: 12, fontWeight: 700, color: P,
//           }}>
//             Coverage
//           </div>
//           <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 14 }}>
//             Covers every major export commodity
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7 }}>
//             From agricultural commodities to industrial goods — if India exports it, Blinkus.ai knows it.
//           </p>
//         </motion.div>
//       </div>

//       <div style={{ overflow: "hidden", marginBottom: 48, padding: "8px 0" }}>
//         <div className="marquee-track">
//           {[...ticker, ...ticker].map((item, i) => (
//             <span key={i} style={{
//               display: "inline-flex", alignItems: "center",
//               padding: "8px 18px", borderRadius: 100, flexShrink: 0,
//               fontSize: 13, fontWeight: 600, color: "#4a4060",
//               background: "rgba(108,63,197,0.05)", border: "1px solid rgba(108,63,197,0.12)",
//               marginRight: 10,
//             }}>
//               {item}
//             </span>
//           ))}
//         </div>
//         <style>{`
//           .marquee-track {
//             display: flex; width: max-content;
//             animation: marquee 32s linear infinite;
//           }
//           .marquee-track:hover { animation-play-state: paused; }
//           @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
//         `}</style>
//       </div>

//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
//           {cats.map((cat, i) => (
//             <motion.div
//               key={cat.label}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-40px" }}
//               transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
//               style={{
//                 padding: 20, borderRadius: 18,
//                 background: "#faf9ff", border: "1px solid rgba(108,63,197,0.1)",
//                 cursor: "default", transition: "all 0.2s",
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(108,63,197,0.22)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)" }}
//               onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(108,63,197,0.1)"; e.currentTarget.style.background = "#faf9ff"; e.currentTarget.style.transform = "translateY(0)" }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//                 <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
//                 <h3 style={{ fontSize: 14, fontWeight: 800, color: N, letterSpacing: "-0.01em" }}>{cat.label}</h3>
//               </div>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                 {cat.items.map((item) => (
//                   <span key={item} style={{
//                     fontSize: 11, padding: "4px 10px", borderRadius: 8, fontWeight: 600,
//                     background: "#fff", border: "1px solid rgba(108,63,197,0.1)", color: "#7c6fa0",
//                   }}>
//                     {item}
//                   </span>
//                 ))}
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

const ticker = [
  "Basmati Rice","Maize","Cotton Yarn","Iron Ore","Frozen Shrimp",
  "Cumin Seeds","Raw Sugar","Onion","Steel Billets","Urad Dal",
  "Turmeric","Guar Gum","Castor Oil","Groundnut","Red Chillies",
  "Sesame Seeds","Psyllium Husk","Tobacco","Granite","Garlic",
]

const cats = [
  {
    label: "Grains & Rice",
    items: ["Basmati Rice","Non-Basmati","Wheat","Maize","Jowar"],
    color: "#f59e0b",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
  },
  {
    label: "Pulses & Spices",
    items: ["Chana Dal","Urad Dal","Cumin","Coriander","Turmeric"],
    color: "#10b981",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
  },
  {
    label: "Chemicals",
    items: ["Agrochemicals","Dyes","Pharmaceuticals","Polymers","Resins"],
    color: "#6c3fc5",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
  },
  {
    label: "Cotton & Yarn",
    items: ["Raw Cotton","Cotton Yarn","Woven Fabric","Garments"],
    color: "#3b82f6",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    label: "Marine Products",
    items: ["Frozen Shrimp","Fish Meal","Squid","Cuttlefish","Lobster"],
    color: "#0891b2",
    img: "https://images.unsplash.com/photo-1559669967-abcf3741f7eb?w=400&q=80",
  },
  {
    label: "Fruits & Veg",
    items: ["Onion","Grapes","Mango","Pomegranate","Potato"],
    color: "#ef4444",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80",
  },
  {
    label: "Engineering",
    items: ["Iron Ore","Steel","Auto Parts","Castings","Machinery"],
    color: "#78716c",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80",
  },
  {
    label: "Electronics",
    items: ["Semiconductors","LED","Cables","Components","PCBs"],
    color: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  },
]

export default function Commodities() {
  return (
    <section id="commodities" style={{ padding: "100px 0", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <div className="commodities-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            style={{ flex: 1 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 16px", borderRadius: 100, marginBottom: 18,
              background: "rgba(108,63,197,0.07)", border: "1px solid rgba(108,63,197,0.2)",
              fontSize: 12, fontWeight: 700, color: P, letterSpacing: "0.04em", textTransform: "uppercase",
            }}>
              Coverage
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: N, letterSpacing: "-0.04em", marginBottom: 16, lineHeight: 1.1 }}>
              Covers every major export commodity
            </h2>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 480 }}>
              From agricultural commodities to industrial goods — if India exports it, Blinkus.ai knows it.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <div style={{ padding: "10px 18px", borderRadius: 12, background: "#faf9ff", border: "1px solid rgba(108,63,197,0.1)" }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: P }}>500+</span>
                <span style={{ fontSize: 13, color: "#9585c0", fontWeight: 600, marginLeft: 6 }}>categories</span>
              </div>
              <div style={{ padding: "10px 18px", borderRadius: 12, background: "#faf9ff", border: "1px solid rgba(108,63,197,0.1)" }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: P }}>5000+</span>
                <span style={{ fontSize: 13, color: "#9585c0", fontWeight: 600, marginLeft: 6 }}>HS codes</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="commodities-img-wrap"
            style={{ flex: 1, borderRadius: 24, overflow: "hidden", position: "relative" }}
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85"
              alt="Shipping containers - global trade"
              style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(108,63,197,0.6), rgba(139,92,246,0.3))",
            }} />
            <div style={{
              position: "absolute", bottom: 20, left: 20,
              background: "rgba(255,255,255,0.95)", borderRadius: 14,
              padding: "12px 16px", backdropFilter: "blur(8px)",
            }}>
              <p style={{ fontSize: 11, color: "#9585c0", fontWeight: 600, marginBottom: 4 }}>Total Export Value</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: P, letterSpacing: "-0.03em" }}>$776B</p>
              <p style={{ fontSize: 11, color: "#22c55e", fontWeight: 700 }}>↑ 6.2% YoY</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ overflow: "hidden", margin: "56px 0 48px", padding: "8px 0" }}>
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center",
              padding: "8px 18px", borderRadius: 100, flexShrink: 0,
              fontSize: 13, fontWeight: 600, color: "#4a4060",
              background: "rgba(108,63,197,0.05)", border: "1px solid rgba(108,63,197,0.12)",
              marginRight: 10,
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
        <div className="cats-grid">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                background: "#faf9ff", border: "1px solid rgba(108,63,197,0.1)",
                transition: "all 0.25s", cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.22)"
                e.currentTarget.style.background = "#fff"
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(108,63,197,0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.1)"
                e.currentTarget.style.background = "#faf9ff"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div style={{ position: "relative", height: 110, overflow: "hidden" }}>
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(135deg, ${cat.color}99, ${cat.color}44)`,
                }} />
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
                  <h3 style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{cat.label}</h3>
                </div>
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.items.map((item) => (
                    <span key={item} style={{
                      fontSize: 11, padding: "4px 10px", borderRadius: 8, fontWeight: 600,
                      background: "#fff", border: "1px solid rgba(108,63,197,0.1)", color: "#7c6fa0",
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .commodities-hero {
          display: flex;
          gap: clamp(32px,5vw,64px);
          align-items: center;
          margin-bottom: 8px;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        .cats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 1024px) {
          .cats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .commodities-hero { flex-direction: column; }
          .commodities-img-wrap { width: 100%; }
          .cats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
        @media (max-width: 480px) {
          .cats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}