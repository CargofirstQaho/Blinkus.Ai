// import { useState } from "react"
// import { ArrowLeft, Bookmark, Globe, Calendar, TrendingUp, MapPin } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_BG = "#f5f3ff"
// const PURPLE_LIGHT = "#8b5cf6"

// export default function MarketsSeasonality({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", text: "New buyer from Germany detected" },
//     { icon: "🔵", text: "Demand from India rises 23%" },
//     { icon: "🟠", text: "Export price fall warning" },
//     { icon: "🔴", text: "New regulation in EU market" },
//   ]

//   const seasonalData = [
//     { month: "Jan-Mar", label: "Q1 (Jan-Mar)", value: 75, status: "Normal" },
//     { month: "Apr-Jun", label: "Q2 (Apr-Jun)", value: 80, status: "Peak" },
//     { month: "Jul-Sep", label: "Q3 (Jul-Sep)", value: 90, status: "Peak" },
//     { month: "Oct-Dec", label: "Q4 (Oct-Dec)", value: 85, status: "Normal" },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Markets & Seasonality</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: PURPLE_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: PURPLE_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <Globe size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Markets & Seasonality</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Understand current and projected dynamics across global regions to optimize your export-import timing and inventory planning. Analyze monthly demand fluctuations for different product categories and regional market performance to capitalize on peak seasons.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Seasonal Trends", "Regional Insights", "Demand Forecasting"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: PURPLE_LIGHT, border: "1px solid rgba(139,92,246,0.2)" }}>
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
//               { icon: Globe, label: "Active Markets", value: "68", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: TrendingUp, label: "Fastest Growing", value: "India", bg: "#fce7f3", color: "#ec4899" },
//               { icon: MapPin, label: "Peak Season", value: "Q2-Q3", bg: "#dcfce7", color: "#22c55e" },
//               { icon: Calendar, label: "Demand Index", value: "82/100", bg: "#ffedd5", color: "#f97316" },
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 20 }}>
//             <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Seasonal Demand Pattern (Last 6 Months)</h3>
//             <div style={{ position: "relative", height: 240, marginBottom: 20 }}>
//               <svg viewBox="0 0 800 240" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="seasonalGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
//                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140 L 680 240 L 80 240 Z" fill="url(#seasonalGrad)" />
//                 {[80, 200, 320, 440, 560, 680].map((x, i) => (
//                   <circle key={i} cx={x} cy={[160, 150, 120, 130, 110, 140][i]} r="5" fill="#3b82f6" />
//                 ))}
//                 <text x="60" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Dec</text>
//                 <text x="180" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Jan</text>
//                 <text x="300" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
//                 <text x="420" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Mar</text>
//                 <text x="540" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Apr</text>
//                 <text x="660" y="225" fontSize="11" fill="#6b7280" fontWeight="600">May</text>
//                 <text x="10" y="35" fontSize="11" fill="#6b7280" fontWeight="600">100</text>
//                 <text x="20" y="100" fontSize="11" fill="#6b7280" fontWeight="600">75</text>
//                 <text x="20" y="165" fontSize="11" fill="#6b7280" fontWeight="600">50</text>
//                 <text x="20" y="230" fontSize="11" fill="#6b7280" fontWeight="600">25</text>
//               </svg>
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
//               {seasonalData.map((item, i) => (
//                 <div key={i} style={{ textAlign: "center", padding: 12, borderRadius: 10, background: item.status === "Peak" ? "#fef3c7" : "#f9fafb" }}>
//                   <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{item.label}</div>
//                   <div style={{ fontSize: 12, fontWeight: 700, color: item.status === "Peak" ? "#f59e0b" : "#22c55e", marginBottom: 2 }}>{item.status}</div>
//                 </div>
//               ))}
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
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginTop: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <MapPin size={14} color="#3b82f6" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Top 5 Markets</h3>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//               {["China", "USA", "Germany", "India", "Japan"].map((country, i) => {
//                 const widths = [100, 85, 70, 60, 50]
//                 return (
//                   <div key={i}>
//                     <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{country}</div>
//                     <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
//                       <div style={{ width: `${widths[i]}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






// import { useState } from "react"
// import { ArrowLeft, Bookmark, Globe, Calendar, TrendingUp, MapPin } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_BG = "#f5f3ff"
// const PURPLE_LIGHT = "#8b5cf6"

// export default function MarketsSeasonality({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", text: "New buyer from Germany detected" },
//     { icon: "🔵", text: "Demand from India rises 23%" },
//     { icon: "🟠", text: "Export price fall warning" },
//     { icon: "🔴", text: "New regulation in EU market" },
//   ]

//   const seasonalData = [
//     { month: "Jan-Mar", label: "Q1 (Jan-Mar)", value: 75, status: "Normal" },
//     { month: "Apr-Jun", label: "Q2 (Apr-Jun)", value: 80, status: "Peak" },
//     { month: "Jul-Sep", label: "Q3 (Jul-Sep)", value: 90, status: "Peak" },
//     { month: "Oct-Dec", label: "Q4 (Oct-Dec)", value: 85, status: "Normal" },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Markets & Seasonality</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: PURPLE_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: PURPLE_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <Globe size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Markets & Seasonality</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Understand current and projected dynamics across global regions to optimize your export-import timing and inventory planning. Analyze monthly demand fluctuations for different product categories and regional market performance to capitalize on peak seasons.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Seasonal Trends", "Regional Insights", "Demand Forecasting"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: PURPLE_LIGHT, border: "1px solid rgba(139,92,246,0.2)" }}>
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
//               { icon: Globe, label: "Active Markets", value: "68", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: TrendingUp, label: "Fastest Growing", value: "India", bg: "#fce7f3", color: "#ec4899" },
//               { icon: MapPin, label: "Peak Season", value: "Q2-Q3", bg: "#dcfce7", color: "#22c55e" },
//               { icon: Calendar, label: "Demand Index", value: "82/100", bg: "#ffedd5", color: "#f97316" },
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 20 }}>
//             <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Seasonal Demand Pattern (Last 6 Months)</h3>
//             <div style={{ position: "relative", height: 240, marginBottom: 20 }}>
//               <svg viewBox="0 0 800 240" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="seasonalGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
//                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140 L 680 240 L 80 240 Z" fill="url(#seasonalGrad)" />
//                 {[80, 200, 320, 440, 560, 680].map((x, i) => (
//                   <circle key={i} cx={x} cy={[160, 150, 120, 130, 110, 140][i]} r="5" fill="#3b82f6" />
//                 ))}
//                 <text x="60" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Dec</text>
//                 <text x="180" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Jan</text>
//                 <text x="300" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
//                 <text x="420" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Mar</text>
//                 <text x="540" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Apr</text>
//                 <text x="660" y="225" fontSize="11" fill="#6b7280" fontWeight="600">May</text>
//                 <text x="10" y="35" fontSize="11" fill="#6b7280" fontWeight="600">100</text>
//                 <text x="20" y="100" fontSize="11" fill="#6b7280" fontWeight="600">75</text>
//                 <text x="20" y="165" fontSize="11" fill="#6b7280" fontWeight="600">50</text>
//                 <text x="20" y="230" fontSize="11" fill="#6b7280" fontWeight="600">25</text>
//               </svg>
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
//               {seasonalData.map((item, i) => (
//                 <div key={i} style={{ textAlign: "center", padding: 12, borderRadius: 10, background: item.status === "Peak" ? "#fef3c7" : "#f9fafb" }}>
//                   <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{item.label}</div>
//                   <div style={{ fontSize: 12, fontWeight: 700, color: item.status === "Peak" ? "#f59e0b" : "#22c55e", marginBottom: 2 }}>{item.status}</div>
//                 </div>
//               ))}
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
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginTop: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <MapPin size={14} color="#3b82f6" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Top 5 Markets</h3>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//               {["China", "USA", "Germany", "India", "Japan"].map((country, i) => {
//                 const widths = [100, 85, 70, 60, 50]
//                 return (
//                   <div key={i}>
//                     <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{country}</div>
//                     <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
//                       <div style={{ width: `${widths[i]}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


















// import { useState } from "react"
// import { ArrowLeft, Bookmark, Globe, Calendar, TrendingUp, MapPin } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_BG = "#f5f3ff"
// const PURPLE_LIGHT = "#8b5cf6"

// export default function MarketsSeasonality({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", text: "New buyer from Germany detected" },
//     { icon: "🔵", text: "Demand from India rises 23%" },
//     { icon: "🟠", text: "Export price fall warning" },
//     { icon: "🔴", text: "New regulation in EU market" },
//   ]

//   const seasonalData = [
//     { month: "Jan-Mar", label: "Q1 (Jan-Mar)", value: 75, status: "Normal" },
//     { month: "Apr-Jun", label: "Q2 (Apr-Jun)", value: 80, status: "Peak" },
//     { month: "Jul-Sep", label: "Q3 (Jul-Sep)", value: 90, status: "Peak" },
//     { month: "Oct-Dec", label: "Q4 (Oct-Dec)", value: 85, status: "Normal" },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Markets & Seasonality</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: PURPLE_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: PURPLE_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <Globe size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Markets & Seasonality</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Understand current and projected dynamics across global regions to optimize your export-import timing and inventory planning. Analyze monthly demand fluctuations for different product categories and regional market performance to capitalize on peak seasons.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Seasonal Trends", "Regional Insights", "Demand Forecasting"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: PURPLE_LIGHT, border: "1px solid rgba(139,92,246,0.2)" }}>
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
//               { icon: Globe, label: "Active Markets", value: "68", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: TrendingUp, label: "Fastest Growing", value: "India", bg: "#fce7f3", color: "#ec4899" },
//               { icon: MapPin, label: "Peak Season", value: "Q2-Q3", bg: "#dcfce7", color: "#22c55e" },
//               { icon: Calendar, label: "Demand Index", value: "82/100", bg: "#ffedd5", color: "#f97316" },
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 20 }}>
//             <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Seasonal Demand Pattern (Last 6 Months)</h3>
//             <div style={{ position: "relative", height: 240, marginBottom: 20 }}>
//               <svg viewBox="0 0 800 240" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="seasonalGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
//                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
//                 <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140 L 680 240 L 80 240 Z" fill="url(#seasonalGrad)" />
//                 {[80, 200, 320, 440, 560, 680].map((x, i) => (
//                   <circle key={i} cx={x} cy={[160, 150, 120, 130, 110, 140][i]} r="5" fill="#3b82f6" />
//                 ))}
//                 <text x="60" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Dec</text>
//                 <text x="180" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Jan</text>
//                 <text x="300" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
//                 <text x="420" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Mar</text>
//                 <text x="540" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Apr</text>
//                 <text x="660" y="225" fontSize="11" fill="#6b7280" fontWeight="600">May</text>
//                 <text x="10" y="35" fontSize="11" fill="#6b7280" fontWeight="600">100</text>
//                 <text x="20" y="100" fontSize="11" fill="#6b7280" fontWeight="600">75</text>
//                 <text x="20" y="165" fontSize="11" fill="#6b7280" fontWeight="600">50</text>
//                 <text x="20" y="230" fontSize="11" fill="#6b7280" fontWeight="600">25</text>
//               </svg>
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
//               {seasonalData.map((item, i) => (
//                 <div key={i} style={{ textAlign: "center", padding: 12, borderRadius: 10, background: item.status === "Peak" ? "#fef3c7" : "#f9fafb" }}>
//                   <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{item.label}</div>
//                   <div style={{ fontSize: 12, fontWeight: 700, color: item.status === "Peak" ? "#f59e0b" : "#22c55e", marginBottom: 2 }}>{item.status}</div>
//                 </div>
//               ))}
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
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginTop: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <MapPin size={14} color="#3b82f6" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Top 5 Markets</h3>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//               {["China", "USA", "Germany", "India", "Japan"].map((country, i) => {
//                 const widths = [100, 85, 70, 60, 50]
//                 return (
//                   <div key={i}>
//                     <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{country}</div>
//                     <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
//                       <div style={{ width: `${widths[i]}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }














import { useState } from "react"
import { ArrowLeft, Bookmark, Globe, Calendar, TrendingUp, MapPin, Lock } from "lucide-react"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_BG = "#f5f3ff"
const PURPLE_LIGHT = "#8b5cf6"

export default function MarketsSeasonality({ onBack }) {
  const [timeRange, setTimeRange] = useState("monthly")

  const alerts = [
    { icon: "🟢", text: "New buyer from Germany detected" },
    { icon: "🔵", text: "Demand from India rises 23%" },
    { icon: "🟠", text: "Export price fall warning" },
    { icon: "🔴", text: "New regulation in EU market" },
  ]

  const seasonalData = [
    { month: "Jan-Mar", label: "Q1 (Jan-Mar)", value: 75, status: "Normal" },
    { month: "Apr-Jun", label: "Q2 (Apr-Jun)", value: 80, status: "Peak" },
    { month: "Jul-Sep", label: "Q3 (Jul-Sep)", value: 90, status: "Peak" },
    { month: "Oct-Dec", label: "Q4 (Oct-Dec)", value: 85, status: "Normal" },
  ]

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <style>{`
        @media (max-width: 1024px) {
          .feature-main-grid { flex-direction: column !important; }
          .feature-sidebar { width: 100% !important; max-width: 100% !important; }
        }
        @media (max-width: 768px) {
          .metric-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .time-buttons { flex-wrap: wrap !important; }
        }
        @media (max-width: 640px) {
          .feature-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .seasonal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .metric-grid { grid-template-columns: 1fr !important; }
          .seasonal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="feature-header" style={{ padding: "clamp(12px,3vw,20px) clamp(16px,4vw,24px)", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px,2vw,16px)" }}>
          {/* <button onClick={onBack} style={{ width: "clamp(32px,5vw,36px)", height: "clamp(32px,5vw,36px)", borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <ArrowLeft size={16} color={NAVY} />
          </button> */}
          <h1 style={{ fontSize: "clamp(15px,3vw,18px)", fontWeight: 700, color: NAVY, margin: 0 }}>Markets & Seasonality</h1>
        </div>
        <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY, flexShrink: 0 }}>
          <Bookmark size={14} />
          <span style={{ display: window.innerWidth > 640 ? "inline" : "none" }}>WATCHLIST</span>
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        <div className="feature-main-grid" style={{ display: "flex", gap: "clamp(16px,3vw,24px)", padding: "clamp(16px,3vw,24px)" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ background: PURPLE_BG, borderRadius: 16, padding: "clamp(16px,3vw,24px)", marginBottom: "clamp(16px,3vw,24px)", position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "#fff", padding: "6px 12px", borderRadius: 8, border: "1px solid #ede9fe", display: "flex", alignItems: "center", gap: 6, zIndex: 1 }}>
                <Lock size={12} color="#6b7280" />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.05em" }}>COMING SOON</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: PURPLE_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Globe size={24} color="#fff" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h2 style={{ fontSize: "clamp(17px,3vw,20px)", fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Markets & Seasonality</h2>
                  <p style={{ fontSize: "clamp(12px,2vw,13px)", color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
                    Understand current and projected dynamics across global regions to optimize your export-import timing and inventory planning. Analyze monthly demand fluctuations for different product categories and regional market performance to capitalize on peak seasons.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Seasonal Trends", "Regional Insights", "Demand Forecasting"].map((tag) => (
                  <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: PURPLE_LIGHT, border: "1px solid rgba(139,92,246,0.2)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="time-buttons" style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
              {["Monthly", "Yearly", "Long-term"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeRange(t.toLowerCase())}
                  style={{
                    padding: "8px clamp(12px,2vw,20px)",
                    borderRadius: 8,
                    border: timeRange === t.toLowerCase() ? "none" : "1px solid #e5e7eb",
                    background: timeRange === t.toLowerCase() ? "#3b82f6" : "#fff",
                    color: timeRange === t.toLowerCase() ? "#fff" : NAVY,
                    fontSize: "clamp(12px,2vw,13px)",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t === "Monthly" && <Calendar size={14} />}
                  {t}
                </button>
              ))}
            </div>

            <div className="metric-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { icon: Globe, label: "Active Markets", value: "68", bg: "#dbeafe", color: "#3b82f6" },
                { icon: TrendingUp, label: "Fastest Growing", value: "India", bg: "#fce7f3", color: "#ec4899" },
                { icon: MapPin, label: "Peak Season", value: "Q2-Q3", bg: "#dcfce7", color: "#22c55e" },
                { icon: Calendar, label: "Demand Index", value: "82/100", bg: "#ffedd5", color: "#f97316" },
              ].map((metric, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: "clamp(12px,2vw,16px)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
                  <div style={{ fontSize: "clamp(16px,3vw,20px)", fontWeight: 800, color: NAVY }}>{metric.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: "clamp(16px,3vw,20px)", marginBottom: 24 }}>
              <h3 style={{ fontSize: "clamp(14px,2.5vw,15px)", fontWeight: 700, color: NAVY, marginBottom: 16 }}>Seasonal Demand Pattern (Last 6 Months)</h3>
              <div style={{ position: "relative", height: "clamp(180px,30vw,240px)", marginBottom: 20, overflowX: "auto" }}>
                <svg viewBox="0 0 800 240" style={{ width: "100%", minWidth: 600, height: "100%" }}>
                  <defs>
                    <linearGradient id="seasonalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140" fill="none" stroke="#3b82f6" strokeWidth="3" />
                  <path d="M 80 160 L 200 150 L 320 120 L 440 130 L 560 110 L 680 140 L 680 240 L 80 240 Z" fill="url(#seasonalGrad)" />
                  {[80, 200, 320, 440, 560, 680].map((x, i) => (
                    <circle key={i} cx={x} cy={[160, 150, 120, 130, 110, 140][i]} r="5" fill="#3b82f6" />
                  ))}
                  <text x="60" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Dec</text>
                  <text x="180" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Jan</text>
                  <text x="300" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
                  <text x="420" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Mar</text>
                  <text x="540" y="225" fontSize="11" fill="#6b7280" fontWeight="600">Apr</text>
                  <text x="660" y="225" fontSize="11" fill="#6b7280" fontWeight="600">May</text>
                </svg>
              </div>

              <div className="seasonal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {seasonalData.map((item, i) => (
                  <div key={i} style={{ textAlign: "center", padding: 12, borderRadius: 10, background: item.status === "Peak" ? "#fef3c7" : "#f9fafb" }}>
                    <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: item.status === "Peak" ? "#f59e0b" : "#22c55e", marginBottom: 2 }}>{item.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-sidebar" style={{ width: 300, flexShrink: 0 }}>
            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11 }}>ℹ️</span>
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Market Signals & Alerts</h3>
              </div>
              {alerts.map((alert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < alerts.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
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

            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
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

            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <MapPin size={14} color="#3b82f6" />
                <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Top 5 Markets</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["China", "USA", "Germany", "India", "Japan"].map((country, i) => {
                  const widths = [100, 85, 70, 60, 50]
                  return (
                    <div key={i}>
                      <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{country}</div>
                      <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${widths[i]}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}