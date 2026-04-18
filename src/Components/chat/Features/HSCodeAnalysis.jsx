// import { useState } from "react"
// import { ArrowLeft, Bookmark, Package, Calendar, DollarSign, TrendingUp } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const ORANGE_BG = "#fff7ed"
// const ORANGE = "#f97316"

// export default function HSCodeAnalysis({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
//     { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
//     { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
//     { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
//   ]

//   const topHSCodes = [
//     { code: "8471", volume: 15200, color: "#3b82f6" },
//     { code: "7208", volume: 12800, color: "#3b82f6" },
//     { code: "8517", volume: 10500, color: "#3b82f6" },
//     { code: "8708", volume: 9200, color: "#3b82f6" },
//     { code: "2710", volume: 7800, color: "#3b82f6" },
//   ]

//   const maxVolume = Math.max(...topHSCodes.map((c) => c.volume))

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Commodity / HS Code Analysis</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: ORANGE_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <Package size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Commodity Analysis</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Deep dive into your commodity portfolio with detailed HS code analysis and product category performance metrics. Track 287 active HS codes, analyze volume and value trends, and identify high-performing product categories to optimize your product mix.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["HS Code Tracking", "Portfolio Analysis", "Value Optimization"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: ORANGE, border: "1px solid rgba(249,115,22,0.2)" }}>
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
//             {["Monthly", "Yearly", "Long-term"].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setTimeRange(t.toLowerCase())}
//                 style={{
//                   padding: "8px 20px",
//                   borderRadius: 8,
//                   border: timeRange === t.toLowerCase() ? "none" : "1px solid #e5e7eb",
//                   background: timeRange === t.toLowerCase() ? "#3b82f6" : "#fff",
//                   color: timeRange === t.toLowerCase() ? "#fff" : NAVY,
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 6,
//                 }}
//               >
//                 {t === "Monthly" && <Calendar size={14} />}
//                 {t}
//               </button>
//             ))}
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
//             {[
//               { icon: Package, label: "Active HS Codes", value: "287", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: TrendingUp, label: "Total Volume", value: "55.5K", bg: "#fce7f3", color: "#ec4899" },
//               { icon: DollarSign, label: "Total Value", value: "$165M", bg: "#dcfce7", color: "#22c55e" },
//               { icon: TrendingUp, label: "Avg. Growth", value: "+19.2%", bg: "#ffedd5", color: "#f97316" },
//             ].map((metric, i) => (
//               <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//                   <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
//                 </div>
//                 <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>{metric.value}</div>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20 }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//               <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: 0 }}>Top HS Codes by Volume</h3>
//               <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative", group: "tooltip" }}>
//                 <span style={{ fontSize: 16 }}>ℹ️</span>
//                 <div style={{ position: "absolute", top: 50, right: 0, background: "#1f2937", color: "#fff", padding: "8px 12px", borderRadius: 8, fontSize: 11, whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", zIndex: 10 }}>
//                   Top HS Codes by Volume
//                   <br />
//                   Displays the top 5 Harmonized System (HS) codes
//                   <br />
//                   by shipment volume. HS codes classify traded
//                   <br />
//                   products internationally. This helps you identify
//                   <br />
//                   which product categories drive the most volume
//                   <br />
//                   in your export business.
//                 </div>
//               </div>
//             </div>

//             <div style={{ position: "relative", height: 340, paddingTop: 20 }}>
//               {topHSCodes.map((item, i) => {
//                 const barHeight = (item.volume / maxVolume) * 240
//                 return (
//                   <div
//                     key={i}
//                     style={{
//                       position: "absolute",
//                       bottom: 40,
//                       left: `${i * 20 + 8}%`,
//                       width: "14%",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         width: "100%",
//                         height: barHeight,
//                         background: `linear-gradient(to top, ${item.color}, #60a5fa)`,
//                         borderRadius: "8px 8px 0 0",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         cursor: "pointer",
//                         transition: "transform 0.2s",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "translateY(-4px)"
//                         e.currentTarget.querySelector(".tooltip").style.opacity = "1"
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "translateY(0)"
//                         e.currentTarget.querySelector(".tooltip").style.opacity = "0"
//                       }}
//                     >
//                       <div
//                         className="tooltip"
//                         style={{
//                           position: "absolute",
//                           top: -50,
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                           background: "#fff",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: 8,
//                           padding: "8px 12px",
//                           fontSize: 11,
//                           fontWeight: 700,
//                           color: NAVY,
//                           whiteSpace: "nowrap",
//                           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                           opacity: 0,
//                           transition: "opacity 0.2s",
//                           pointerEvents: "none",
//                           zIndex: 10,
//                         }}
//                       >
//                         {item.code}
//                         <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 600 }}>
//                           volume: {item.volume}
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 12,
//                         fontWeight: 700,
//                         color: NAVY,
//                         marginTop: 8,
//                       }}
//                     >
//                       {item.code}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>

//         <div style={{ width: 300 }}>
//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
//               <div style={{ width: 24, height: 24, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <span style={{ fontSize: 11 }}>ℹ️</span>
//               </div>
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Market Signals & Alerts</h3>
//             </div>
//             {alerts.map((alert, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < alerts.length - 1 ? "1px solid #f3f4f6" : "none" }}>
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: `${alert.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
//                   {alert.icon}
//                 </div>
//                 <p style={{ fontSize: 12, color: "#6b7280", margin: 0, flex: 1, lineHeight: 1.4 }}>{alert.text}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <TrendingUp size={14} color="#22c55e" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
//               ))}
//             </svg>
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <span style={{ fontSize: 14 }}>💰</span>
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Average Price Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 80 L 40 70 L 70 85 L 100 75 L 130 90 L 160 80 L 190 95 L 220 85 L 250 80 L 270 70" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[80, 70, 85, 75, 90, 80, 95, 85, 80, 70][i]} r="3" fill="#8b5cf6" />
//               ))}
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }











// import { useState } from "react"
// import { ArrowLeft, Bookmark, Package, Calendar, DollarSign, TrendingUp, Lock } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const ORANGE_BG = "#fff7ed"
// const ORANGE = "#f97316"

// export default function HSCodeAnalysis({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
//     { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
//     { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
//     { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
//   ]

//   const topHSCodes = [
//     { code: "8471", volume: 15200, color: "#3b82f6" },
//     { code: "7208", volume: 12800, color: "#3b82f6" },
//     { code: "8517", volume: 10500, color: "#3b82f6" },
//     { code: "8708", volume: 9200, color: "#3b82f6" },
//     { code: "2710", volume: 7800, color: "#3b82f6" },
//   ]

//   const maxVolume = Math.max(...topHSCodes.map((c) => c.volume))

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Commodity / HS Code Analysis</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ flex: 1, overflowY: "auto" }}>
//         <div style={{ display: "flex", gap: 24, padding: 24 }}>
//           <div style={{ flex: 1 }}>
//             <div style={{ background: ORANGE_BG, borderRadius: 16, padding: 24, marginBottom: 24, position: "relative" }}>
//               <div style={{ position: "absolute", top: 16, right: 16, background: "#fff", padding: "6px 12px", borderRadius: 8, border: "1px solid #ffedd5", display: "flex", alignItems: "center", gap: 6 }}>
//                 <Lock size={12} color="#6b7280" />
//                 <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.05em" }}>COMING SOON</span>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//                 <div style={{ width: 56, height: 56, borderRadius: 14, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <Package size={24} color="#fff" strokeWidth={2.5} />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Commodity Analysis</h2>
//                   <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                     Deep dive into your commodity portfolio with detailed HS code analysis and product category performance metrics. Track 287 active HS codes, analyze volume and value trends, and identify high-performing product categories to optimize your product mix.
//                   </p>
//                 </div>
//               </div>
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                 {["HS Code Tracking", "Portfolio Analysis", "Value Optimization"].map((tag) => (
//                   <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: ORANGE, border: "1px solid rgba(249,115,22,0.2)" }}>
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//           <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
//             {["Monthly", "Yearly", "Long-term"].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setTimeRange(t.toLowerCase())}
//                 style={{
//                   padding: "8px 20px",
//                   borderRadius: 8,
//                   border: timeRange === t.toLowerCase() ? "none" : "1px solid #e5e7eb",
//                   background: timeRange === t.toLowerCase() ? "#3b82f6" : "#fff",
//                   color: timeRange === t.toLowerCase() ? "#fff" : NAVY,
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 6,
//                 }}
//               >
//                 {t === "Monthly" && <Calendar size={14} />}
//                 {t}
//               </button>
//             ))}
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
//             {[
//               { icon: Package, label: "Active HS Codes", value: "287", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: TrendingUp, label: "Total Volume", value: "55.5K", bg: "#fce7f3", color: "#ec4899" },
//               { icon: DollarSign, label: "Total Value", value: "$165M", bg: "#dcfce7", color: "#22c55e" },
//               { icon: TrendingUp, label: "Avg. Growth", value: "+19.2%", bg: "#ffedd5", color: "#f97316" },
//             ].map((metric, i) => (
//               <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//                   <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
//                 </div>
//                 <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>{metric.value}</div>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20 }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//               <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: 0 }}>Top HS Codes by Volume</h3>
//               <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative", group: "tooltip" }}>
//                 <span style={{ fontSize: 16 }}>ℹ️</span>
//                 <div style={{ position: "absolute", top: 50, right: 0, background: "#1f2937", color: "#fff", padding: "8px 12px", borderRadius: 8, fontSize: 11, whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", zIndex: 10 }}>
//                   Top HS Codes by Volume
//                   <br />
//                   Displays the top 5 Harmonized System (HS) codes
//                   <br />
//                   by shipment volume. HS codes classify traded
//                   <br />
//                   products internationally. This helps you identify
//                   <br />
//                   which product categories drive the most volume
//                   <br />
//                   in your export business.
//                 </div>
//               </div>
//             </div>

//             <div style={{ position: "relative", height: 340, paddingTop: 20 }}>
//               {topHSCodes.map((item, i) => {
//                 const barHeight = (item.volume / maxVolume) * 240
//                 return (
//                   <div
//                     key={i}
//                     style={{
//                       position: "absolute",
//                       bottom: 40,
//                       left: `${i * 20 + 8}%`,
//                       width: "14%",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         position: "relative",
//                         width: "100%",
//                         height: barHeight,
//                         background: `linear-gradient(to top, ${item.color}, #60a5fa)`,
//                         borderRadius: "8px 8px 0 0",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         cursor: "pointer",
//                         transition: "transform 0.2s",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "translateY(-4px)"
//                         e.currentTarget.querySelector(".tooltip").style.opacity = "1"
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "translateY(0)"
//                         e.currentTarget.querySelector(".tooltip").style.opacity = "0"
//                       }}
//                     >
//                       <div
//                         className="tooltip"
//                         style={{
//                           position: "absolute",
//                           top: -50,
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                           background: "#fff",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: 8,
//                           padding: "8px 12px",
//                           fontSize: 11,
//                           fontWeight: 700,
//                           color: NAVY,
//                           whiteSpace: "nowrap",
//                           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                           opacity: 0,
//                           transition: "opacity 0.2s",
//                           pointerEvents: "none",
//                           zIndex: 10,
//                         }}
//                       >
//                         {item.code}
//                         <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 600 }}>
//                           volume: {item.volume}
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 12,
//                         fontWeight: 700,
//                         color: NAVY,
//                         marginTop: 8,
//                       }}
//                     >
//                       {item.code}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>

//         <div style={{ width: 300 }}>
//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
//               <div style={{ width: 24, height: 24, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <span style={{ fontSize: 11 }}>ℹ️</span>
//               </div>
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Market Signals & Alerts</h3>
//             </div>
//             {alerts.map((alert, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < alerts.length - 1 ? "1px solid #f3f4f6" : "none" }}>
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: `${alert.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
//                   {alert.icon}
//                 </div>
//                 <p style={{ fontSize: 12, color: "#6b7280", margin: 0, flex: 1, lineHeight: 1.4 }}>{alert.text}</p>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <TrendingUp size={14} color="#22c55e" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
//               ))}
//             </svg>
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <span style={{ fontSize: 14 }}>💰</span>
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Average Price Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 80 L 40 70 L 70 85 L 100 75 L 130 90 L 160 80 L 190 95 L 220 85 L 250 80 L 270 70" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[80, 70, 85, 75, 90, 80, 95, 85, 80, 70][i]} r="3" fill="#8b5cf6" />
//               ))}
//             </svg>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












import { useState } from "react"
import { ArrowLeft, Bookmark, Package, Calendar, DollarSign, TrendingUp, Lock } from "lucide-react"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const ORANGE_BG = "#fff7ed"
const ORANGE = "#f97316"

export default function HSCodeAnalysis({ onBack }) {
  const [timeRange, setTimeRange] = useState("monthly")

  const alerts = [
    { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
    { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
    { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
    { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
  ]

  const topHSCodes = [
    { code: "8471", volume: 15200, color: "#3b82f6" },
    { code: "7208", volume: 12800, color: "#3b82f6" },
    { code: "8517", volume: 10500, color: "#3b82f6" },
    { code: "8708", volume: 9200, color: "#3b82f6" },
    { code: "2710", volume: 7800, color: "#3b82f6" },
  ]

  const maxVolume = Math.max(...topHSCodes.map((c) => c.volume))

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ArrowLeft size={16} color={NAVY} />
          </button>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Commodity / HS Code Analysis</h1>
        </div>
        <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
          <Bookmark size={14} />
          WATCHLIST
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ display: "flex", gap: 24, padding: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ background: ORANGE_BG, borderRadius: 16, padding: 24, marginBottom: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "#fff", padding: "6px 12px", borderRadius: 8, border: "1px solid #ffedd5", display: "flex", alignItems: "center", gap: 6 }}>
                <Lock size={12} color="#6b7280" />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.05em" }}>COMING SOON</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Package size={24} color="#fff" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Commodity Analysis</h2>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
                    Deep dive into your commodity portfolio with detailed HS code analysis and product category performance metrics. Track 287 active HS codes, analyze volume and value trends, and identify high-performing product categories to optimize your product mix.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["HS Code Tracking", "Portfolio Analysis", "Value Optimization"].map((tag) => (
                  <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: ORANGE, border: "1px solid rgba(249,115,22,0.2)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
            {["Monthly", "Yearly", "Long-term"].map((t) => (
              <button
                key={t}
                onClick={() => setTimeRange(t.toLowerCase())}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  border: timeRange === t.toLowerCase() ? "none" : "1px solid #e5e7eb",
                  background: timeRange === t.toLowerCase() ? "#3b82f6" : "#fff",
                  color: timeRange === t.toLowerCase() ? "#fff" : NAVY,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {t === "Monthly" && <Calendar size={14} />}
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            {[
              { icon: Package, label: "Active HS Codes", value: "287", bg: "#dbeafe", color: "#3b82f6" },
              { icon: TrendingUp, label: "Total Volume", value: "55.5K", bg: "#fce7f3", color: "#ec4899" },
              { icon: DollarSign, label: "Total Value", value: "$165M", bg: "#dcfce7", color: "#22c55e" },
              { icon: TrendingUp, label: "Avg. Growth", value: "+19.2%", bg: "#ffedd5", color: "#f97316" },
            ].map((metric, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
                </div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: NAVY }}>{metric.value}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: 0 }}>Top HS Codes by Volume</h3>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative", group: "tooltip" }}>
                <span style={{ fontSize: 16 }}>ℹ️</span>
                <div style={{ position: "absolute", top: 50, right: 0, background: "#1f2937", color: "#fff", padding: "8px 12px", borderRadius: 8, fontSize: 11, whiteSpace: "nowrap", opacity: 0, pointerEvents: "none", zIndex: 10 }}>
                  Top HS Codes by Volume
                  <br />
                  Displays the top 5 Harmonized System (HS) codes
                  <br />
                  by shipment volume. HS codes classify traded
                  <br />
                  products internationally. This helps you identify
                  <br />
                  which product categories drive the most volume
                  <br />
                  in your export business.
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: 340, paddingTop: 20 }}>
              {topHSCodes.map((item, i) => {
                const barHeight = (item.volume / maxVolume) * 240
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      bottom: 40,
                      left: `${i * 20 + 8}%`,
                      width: "14%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: barHeight,
                        background: `linear-gradient(to top, ${item.color}, #60a5fa)`,
                        borderRadius: "8px 8px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)"
                        e.currentTarget.querySelector(".tooltip").style.opacity = "1"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.querySelector(".tooltip").style.opacity = "0"
                      }}
                    >
                      <div
                        className="tooltip"
                        style={{
                          position: "absolute",
                          top: -50,
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: 8,
                          padding: "8px 12px",
                          fontSize: 11,
                          fontWeight: 700,
                          color: NAVY,
                          whiteSpace: "nowrap",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          opacity: 0,
                          transition: "opacity 0.2s",
                          pointerEvents: "none",
                          zIndex: 10,
                        }}
                      >
                        {item.code}
                        <div style={{ fontSize: 10, color: "#6b7280", fontWeight: 600 }}>
                          volume: {item.volume}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: NAVY,
                        marginTop: 8,
                      }}
                    >
                      {item.code}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div style={{ width: 300 }}>
          <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 11 }}>ℹ️</span>
              </div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Market Signals & Alerts</h3>
            </div>
            {alerts.map((alert, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < alerts.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${alert.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                  {alert.icon}
                </div>
                <p style={{ fontSize: 12, color: "#6b7280", margin: 0, flex: 1, lineHeight: 1.4 }}>{alert.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <TrendingUp size={14} color="#22c55e" />
              <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
            </div>
            <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
              <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
              {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
                <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
              ))}
            </svg>
          </div>

          <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 14 }}>💰</span>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Average Price Trend</h3>
            </div>
            <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
              <path d="M 10 80 L 40 70 L 70 85 L 100 75 L 130 90 L 160 80 L 190 95 L 220 85 L 250 80 L 270 70" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
              {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
                <circle key={i} cx={x} cy={[80, 70, 85, 75, 90, 80, 95, 85, 80, 70][i]} r="3" fill="#8b5cf6" />
              ))}
            </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}