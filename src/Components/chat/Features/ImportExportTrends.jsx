// import { useState } from "react"
// import { ArrowLeft, Bookmark, TrendingUp, TrendingDown, Calendar, Hash, Globe, Truck } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const GREEN_BG = "#f0fdf4"
// const GREEN = "#22c55e"

// export default function ImportExportTrends({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")
//   const [year, setYear] = useState("2024")
//   const [hsCode, setHsCode] = useState("all")
//   const [country, setCountry] = useState("all")
//   const [transport, setTransport] = useState("all")

//   const alerts = [
//     { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
//     { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
//     { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
//     { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Market Overview</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: GREEN_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <TrendingUp size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Import-Export Trends</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Analyze historical and current trends in your import-export activities to make informed business decisions. Track export volumes, import patterns, trade balance, and pricing trends with flexible time period filters spanning back to 2015.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Volume Analysis", "Seasonal Patterns", "Growth Tracking"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: GREEN, border: "1px solid rgba(34,197,94,0.2)" }}>
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
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Calendar size={12} />
//                 Year Range
//               </label>
//               <select value={year} onChange={(e) => setYear(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option>2024</option>
//                 <option>2023</option>
//                 <option>2022</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Hash size={12} />
//                 HS Code
//               </label>
//               <select value={hsCode} onChange={(e) => setHsCode(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All Categories</option>
//                 <option>8471</option>
//                 <option>7208</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Globe size={12} />
//                 Country
//               </label>
//               <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All</option>
//                 <option>USA</option>
//                 <option>Germany</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Truck size={12} />
//                 Transport Mode
//               </label>
//               <select value={transport} onChange={(e) => setTransport(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All</option>
//                 <option>Sea</option>
//                 <option>Air</option>
//               </select>
//             </div>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
//             {[
//               { icon: TrendingUp, label: "Total Export Volume", value: "42.8K", change: "+23.4%", color: GREEN, bg: "#dcfce7" },
//               { icon: TrendingDown, label: "Total Import Volume", value: "33.6K", change: "+18.2%", color: "#3b82f6", bg: "#dbeafe" },
//               { icon: TrendingUp, label: "Trade Balance", value: "$128M", change: "+12.8%", color: "#ec4899", bg: "#fce7f3" },
//               { icon: TrendingDown, label: "Avg. Unit Price", value: "$15.3", change: "-3.2%", color: "#f97316", bg: "#ffedd5" },
//             ].map((metric, i) => (
//               <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//                   <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
//                 </div>
//                 <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{metric.value}</div>
//                 <div style={{ fontSize: 11, fontWeight: 700, color: metric.change.startsWith("+") ? GREEN : "#f97316", background: metric.change.startsWith("+") ? "#dcfce7" : "#ffedd5", padding: "2px 8px", borderRadius: 6, display: "inline-block" }}>
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 24 }}>
//             <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 20 }}>Export vs Import Volume Trend</h3>
//             <div style={{ position: "relative", height: 280 }}>
//               <svg viewBox="0 0 800 280" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="exportGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
//                   </linearGradient>
//                   <linearGradient id="importGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M 50 180 Q 200 200 350 170 T 750 120" fill="url(#exportGrad)" />
//                 <path d="M 50 180 Q 200 200 350 170 T 750 120" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//                 <path d="M 50 210 Q 200 220 350 200 T 750 160" fill="url(#importGrad)" />
//                 <path d="M 50 210 Q 200 220 350 200 T 750 160" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
//                 <text x="50" y="30" fontSize="11" fill="#6b7280" fontWeight="600">8000</text>
//                 <text x="50" y="100" fontSize="11" fill="#6b7280" fontWeight="600">6000</text>
//                 <text x="50" y="170" fontSize="11" fill="#6b7280" fontWeight="600">4000</text>
//               </svg>
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
//               <TrendingUp size={14} color={GREEN} />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
//               ))}
//               <text x="250" y="50" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
//               <text x="240" y="135" fontSize="10" fill="#3b82f6" fontWeight="700">volume: 3800</text>
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
// import { ArrowLeft, Bookmark, TrendingUp, TrendingDown, Calendar, Hash, Globe, Truck } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const GREEN_BG = "#f0fdf4"
// const GREEN = "#22c55e"

// export default function ImportExportTrends({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")
//   const [year, setYear] = useState("2024")
//   const [hsCode, setHsCode] = useState("all")
//   const [country, setCountry] = useState("all")
//   const [transport, setTransport] = useState("all")

//   const alerts = [
//     { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
//     { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
//     { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
//     { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Market Overview</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: GREEN_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <TrendingUp size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Import-Export Trends</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Analyze historical and current trends in your import-export activities to make informed business decisions. Track export volumes, import patterns, trade balance, and pricing trends with flexible time period filters spanning back to 2015.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Volume Analysis", "Seasonal Patterns", "Growth Tracking"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: GREEN, border: "1px solid rgba(34,197,94,0.2)" }}>
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
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Calendar size={12} />
//                 Year Range
//               </label>
//               <select value={year} onChange={(e) => setYear(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option>2024</option>
//                 <option>2023</option>
//                 <option>2022</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Hash size={12} />
//                 HS Code
//               </label>
//               <select value={hsCode} onChange={(e) => setHsCode(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All Categories</option>
//                 <option>8471</option>
//                 <option>7208</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Globe size={12} />
//                 Country
//               </label>
//               <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All</option>
//                 <option>USA</option>
//                 <option>Germany</option>
//               </select>
//             </div>
//             <div>
//               <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Truck size={12} />
//                 Transport Mode
//               </label>
//               <select value={transport} onChange={(e) => setTransport(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
//                 <option value="all">All</option>
//                 <option>Sea</option>
//                 <option>Air</option>
//               </select>
//             </div>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
//             {[
//               { icon: TrendingUp, label: "Total Export Volume", value: "42.8K", change: "+23.4%", color: GREEN, bg: "#dcfce7" },
//               { icon: TrendingDown, label: "Total Import Volume", value: "33.6K", change: "+18.2%", color: "#3b82f6", bg: "#dbeafe" },
//               { icon: TrendingUp, label: "Trade Balance", value: "$128M", change: "+12.8%", color: "#ec4899", bg: "#fce7f3" },
//               { icon: TrendingDown, label: "Avg. Unit Price", value: "$15.3", change: "-3.2%", color: "#f97316", bg: "#ffedd5" },
//             ].map((metric, i) => (
//               <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//                   <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
//                 </div>
//                 <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{metric.value}</div>
//                 <div style={{ fontSize: 11, fontWeight: 700, color: metric.change.startsWith("+") ? GREEN : "#f97316", background: metric.change.startsWith("+") ? "#dcfce7" : "#ffedd5", padding: "2px 8px", borderRadius: 6, display: "inline-block" }}>
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 24 }}>
//             <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 20 }}>Export vs Import Volume Trend</h3>
//             <div style={{ position: "relative", height: 280 }}>
//               <svg viewBox="0 0 800 280" style={{ width: "100%", height: "100%" }}>
//                 <defs>
//                   <linearGradient id="exportGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
//                   </linearGradient>
//                   <linearGradient id="importGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M 50 180 Q 200 200 350 170 T 750 120" fill="url(#exportGrad)" />
//                 <path d="M 50 180 Q 200 200 350 170 T 750 120" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//                 <path d="M 50 210 Q 200 220 350 200 T 750 160" fill="url(#importGrad)" />
//                 <path d="M 50 210 Q 200 220 350 200 T 750 160" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
//                 <text x="50" y="30" fontSize="11" fill="#6b7280" fontWeight="600">8000</text>
//                 <text x="50" y="100" fontSize="11" fill="#6b7280" fontWeight="600">6000</text>
//                 <text x="50" y="170" fontSize="11" fill="#6b7280" fontWeight="600">4000</text>
//               </svg>
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
//               <TrendingUp size={14} color={GREEN} />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
//             </div>
//             <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
//               <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
//               {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
//                 <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
//               ))}
//               <text x="250" y="50" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
//               <text x="240" y="135" fontSize="10" fill="#3b82f6" fontWeight="700">volume: 3800</text>
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











import { useState } from "react"
import { ArrowLeft, Bookmark, TrendingUp, TrendingDown, Calendar, Hash, Globe, Truck, Lock } from "lucide-react"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const GREEN_BG = "#f0fdf4"
const GREEN = "#22c55e"

export default function ImportExportTrends({ onBack }) {
  const [timeRange, setTimeRange] = useState("monthly")
  const [year, setYear] = useState("2024")
  const [hsCode, setHsCode] = useState("all")
  const [country, setCountry] = useState("all")
  const [transport, setTransport] = useState("all")

  const alerts = [
    { icon: "🟢", color: "#22c55e", text: "New buyer from Germany detected" },
    { icon: "🔵", color: "#3b82f6", text: "Demand from India rises 23%" },
    { icon: "🟠", color: "#f97316", text: "Export price fall warning" },
    { icon: "🔴", color: "#ef4444", text: "New regulation in EU market" },
  ]

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ArrowLeft size={16} color={NAVY} />
          </button>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Market Overview</h1>
        </div>
        <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
          <Bookmark size={14} />
          WATCHLIST
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ display: "flex", gap: 24, padding: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ background: GREEN_BG, borderRadius: 16, padding: 24, marginBottom: 24, position: "relative" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "#fff", padding: "6px 12px", borderRadius: 8, border: "1px solid #dcfce7", display: "flex", alignItems: "center", gap: 6 }}>
                <Lock size={12} color="#6b7280" />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.05em" }}>COMING SOON</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TrendingUp size={24} color="#fff" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Import-Export Trends</h2>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
                    Analyze historical and current trends in your import-export activities to make informed business decisions. Track export volumes, import patterns, trade balance, and pricing trends with flexible time period filters spanning back to 2015.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Volume Analysis", "Seasonal Patterns", "Growth Tracking"].map((tag) => (
                  <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: GREEN, border: "1px solid rgba(34,197,94,0.2)" }}>
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
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Calendar size={12} />
                  Year Range
                </label>
                <select value={year} onChange={(e) => setYear(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Hash size={12} />
                  HS Code
                </label>
                <select value={hsCode} onChange={(e) => setHsCode(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
                  <option value="all">All Categories</option>
                  <option>8471</option>
                  <option>7208</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Globe size={12} />
                  Country
                </label>
                <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
                  <option value="all">All</option>
                  <option>USA</option>
                  <option>Germany</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Truck size={12} />
                  Transport Mode
                </label>
                <select value={transport} onChange={(e) => setTransport(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, fontWeight: 600, color: NAVY, background: "#fff", cursor: "pointer" }}>
                  <option value="all">All</option>
                  <option>Sea</option>
                  <option>Air</option>
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { icon: TrendingUp, label: "Total Export Volume", value: "42.8K", change: "+23.4%", color: GREEN, bg: "#dcfce7" },
                { icon: TrendingDown, label: "Total Import Volume", value: "33.6K", change: "+18.2%", color: "#3b82f6", bg: "#dbeafe" },
                { icon: TrendingUp, label: "Trade Balance", value: "$128M", change: "+12.8%", color: "#ec4899", bg: "#fce7f3" },
                { icon: TrendingDown, label: "Avg. Unit Price", value: "$15.3", change: "-3.2%", color: "#f97316", bg: "#ffedd5" },
              ].map((metric, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{metric.value}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: metric.change.startsWith("+") ? GREEN : "#f97316", background: metric.change.startsWith("+") ? "#dcfce7" : "#ffedd5", padding: "2px 8px", borderRadius: 6, display: "inline-block" }}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 20 }}>Export vs Import Volume Trend</h3>
              <div style={{ position: "relative", height: 280 }}>
                <svg viewBox="0 0 800 280" style={{ width: "100%", height: "100%" }}>
                  <defs>
                    <linearGradient id="exportGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="importGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path d="M 50 180 Q 200 200 350 170 T 750 120" fill="url(#exportGrad)" />
                  <path d="M 50 180 Q 200 200 350 170 T 750 120" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
                  <path d="M 50 210 Q 200 220 350 200 T 750 160" fill="url(#importGrad)" />
                  <path d="M 50 210 Q 200 220 350 200 T 750 160" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
                  <text x="50" y="30" fontSize="11" fill="#6b7280" fontWeight="600">8000</text>
                  <text x="50" y="100" fontSize="11" fill="#6b7280" fontWeight="600">6000</text>
                  <text x="50" y="170" fontSize="11" fill="#6b7280" fontWeight="600">4000</text>
                </svg>
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
                <TrendingUp size={14} color={GREEN} />
                <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Export Volume Trend</h3>
              </div>
              <svg viewBox="0 0 280 140" style={{ width: "100%", height: 140 }}>
                <path d="M 10 100 L 40 95 L 70 105 L 100 90 L 130 85 L 160 95 L 190 80 L 220 75 L 250 60 L 270 55" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
                {[10, 40, 70, 100, 130, 160, 190, 220, 250, 270].map((x, i) => (
                  <circle key={i} cx={x} cy={[100, 95, 105, 90, 85, 95, 80, 75, 60, 55][i]} r="3" fill="#3b82f6" />
                ))}
                <text x="250" y="50" fontSize="11" fill="#6b7280" fontWeight="600">Feb</text>
                <text x="240" y="135" fontSize="10" fill="#3b82f6" fontWeight="700">volume: 3800</text>
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