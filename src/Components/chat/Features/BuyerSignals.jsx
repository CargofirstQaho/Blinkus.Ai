// import { useState } from "react"
// import { ArrowLeft, Bookmark, UserSearch, TrendingUp, Users, MapPin } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const RED_BG = "#fff0f3"
// const RED = "#f43f5e"

// export default function BuyerSignals({ onBack }) {
//   const [timeRange, setTimeRange] = useState("monthly")

//   const alerts = [
//     { icon: "🟢", text: "New buyer from Germany detected" },
//     { icon: "🔵", text: "Demand from India rises 23%" },
//     { icon: "🟠", text: "Export price fall warning" },
//     { icon: "🔴", text: "New regulation in EU market" },
//   ]

//   const buyerSignals = [
//     {
//       company: "Techimport GmbH",
//       country: "Germany",
//       potential: "High Potential",
//       badge: "#22c55e",
//       order: "$28,500",
//       insight: "AI detected: Strong buying pattern, likely to repeat",
//     },
//     {
//       company: "Asia Electronics Ltd.",
//       country: "Singapore",
//       potential: "Very High Potential",
//       badge: "#22c55e",
//       order: "$42,000",
//       insight: "AI detected: Strong buying pattern, likely to repeat",
//     },
//     {
//       company: "Nordic Trading AS",
//       country: "Norway",
//       potential: "Medium Potential",
//       badge: "#f59e0b",
//       order: "$18,000",
//       insight: "AI detected: Moderate interest, monitor for repeat orders",
//     },
//     {
//       company: "Dubai Commerce LLC",
//       country: "UAE",
//       potential: "High Potential",
//       badge: "#22c55e",
//       order: "$35,200",
//       insight: "AI detected: Strong buying pattern, likely to repeat",
//     },
//   ]

//   return (
//     <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
//       <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
//             <ArrowLeft size={16} color={NAVY} />
//           </button>
//           <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Buyers & New Buyer Signals</h1>
//         </div>
//         <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
//           <Bookmark size={14} />
//           WATCHLIST
//         </button>
//       </div>

//       <div style={{ display: "flex", gap: 24, padding: 24 }}>
//         <div style={{ flex: 1 }}>
//           <div style={{ background: RED_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
//               <div style={{ width: 56, height: 56, borderRadius: 14, background: RED, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <UserSearch size={24} color="#fff" strokeWidth={2.5} />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Buyers & New Buyer Signals</h2>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
//                   Manage your buyer relationships and unlock new business opportunities with comprehensive buyer intelligence. Track 57 active buyers across 48 convenient partners, 8 new Q3 acquisitions, 15 occasional buyers, and 6 dormant accounts with emerging buyer signals and behavioral analysis.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//               {["Buyer Intelligence", "Signal Detection", "Relationship Management"].map((tag) => (
//                 <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: RED, border: "1px solid rgba(244,63,94,0.2)" }}>
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
//                 }}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
//             {[
//               { icon: Users, label: "Consistent Buyers", value: "51 buyers", change: "+12%", bg: "#dbeafe", color: "#3b82f6" },
//               { icon: UserSearch, label: "New Buyers (Q3)", value: "8 buyers", change: "New", bg: "#fce7f3", color: "#ec4899" },
//               { icon: Users, label: "Occasional Buyers", value: "15 buyers", change: "-8%", bg: "#dcfce7", color: "#22c55e" },
//               { icon: Users, label: "Dormant Buyers", value: "6 buyers", change: "-15%", bg: "#ffedd5", color: "#f97316" },
//             ].map((metric, i) => (
//               <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//                   <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
//                 </div>
//                 <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
//                 <div style={{ fontSize: 16, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{metric.value}</div>
//                 <div style={{ fontSize: 10, fontWeight: 700, color: metric.change === "New" ? "#3b82f6" : metric.change.startsWith("+") ? "#22c55e" : "#f97316" }}>
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20 }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//               <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: 0 }}>New Buyer Signals</h3>
//               <button style={{ padding: "8px 16px", borderRadius: 8, background: "#3b82f6", color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
//                 <TrendingUp size={12} />
//                 AI Analyze
//               </button>
//             </div>

//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {buyerSignals.map((buyer, i) => (
//                 <div key={i} style={{ background: "#fafafa", borderRadius: 12, padding: 16, border: "1px solid #f3f4f6" }}>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                       <div style={{ width: 40, height: 40, borderRadius: 10, background: buyer.badge === "#22c55e" ? "#dcfce7" : "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <Users size={18} color={buyer.badge} />
//                       </div>
//                       <div>
//                         <div style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>{buyer.company}</div>
//                         <div style={{ fontSize: 11, color: "#6b7280", display: "flex", alignItems: "center", gap: 4 }}>
//                           <MapPin size={10} />
//                           {buyer.country}
//                         </div>
//                       </div>
//                     </div>
//                     <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                       <span style={{ padding: "4px 10px", borderRadius: 6, background: buyer.badge === "#22c55e" ? "#dcfce7" : "#fef3c7", fontSize: 10, fontWeight: 700, color: buyer.badge }}>
//                         {buyer.potential}
//                       </span>
//                       <div style={{ textAlign: "right" }}>
//                         <div style={{ fontSize: 10, color: "#6b7280" }}>First Order</div>
//                         <div style={{ fontSize: 12, fontWeight: 700, color: NAVY }}>{buyer.order}</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb" }}>
//                     <span style={{ fontSize: 11 }}>🤖</span>
//                     <span style={{ fontSize: 11, color: "#6b7280" }}>{buyer.insight}</span>
//                   </div>
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16, marginBottom: 16 }}>
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

//           <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               <MapPin size={14} color="#3b82f6" />
//               <h3 style={{ fontSize: 13, fontWeight: 700, color: NAVY, margin: 0 }}>Top 5 Markets</h3>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//               {[
//                 { name: "China", value: 100 },
//                 { name: "USA", value: 80 },
//                 { name: "Germany", value: 65 },
//                 { name: "India", value: 55 },
//                 { name: "Japan", value: 45 },
//               ].map((market, i) => (
//                 <div key={i}>
//                   <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{market.name}</div>
//                   <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
//                     <div style={{ width: `${market.value}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }













import { useState } from "react"
import { ArrowLeft, Bookmark, UserSearch, TrendingUp, Users, MapPin } from "lucide-react"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const RED_BG = "#fff0f3"
const RED = "#f43f5e"

export default function BuyerSignals({ onBack }) {
  const [timeRange, setTimeRange] = useState("monthly")

  const alerts = [
    { icon: "🟢", text: "New buyer from Germany detected" },
    { icon: "🔵", text: "Demand from India rises 23%" },
    { icon: "🟠", text: "Export price fall warning" },
    { icon: "🔴", text: "New regulation in EU market" },
  ]

  const buyerSignals = [
    {
      company: "Techimport GmbH",
      country: "Germany",
      potential: "High Potential",
      badge: "#22c55e",
      order: "$28,500",
      insight: "AI detected: Strong buying pattern, likely to repeat",
    },
    {
      company: "Asia Electronics Ltd.",
      country: "Singapore",
      potential: "Very High Potential",
      badge: "#22c55e",
      order: "$42,000",
      insight: "AI detected: Strong buying pattern, likely to repeat",
    },
    {
      company: "Nordic Trading AS",
      country: "Norway",
      potential: "Medium Potential",
      badge: "#f59e0b",
      order: "$18,000",
      insight: "AI detected: Moderate interest, monitor for repeat orders",
    },
    {
      company: "Dubai Commerce LLC",
      country: "UAE",
      potential: "High Potential",
      badge: "#22c55e",
      order: "$35,200",
      insight: "AI detected: Strong buying pattern, likely to repeat",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <ArrowLeft size={16} color={NAVY} />
          </button>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: NAVY, margin: 0 }}>Buyers & New Buyer Signals</h1>
        </div>
        <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, fontWeight: 600, color: NAVY }}>
          <Bookmark size={14} />
          WATCHLIST
        </button>
      </div>

      <div style={{ display: "flex", gap: 24, padding: 24 }}>
        <div style={{ flex: 1 }}>
          <div style={{ background: RED_BG, borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: RED, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UserSearch size={24} color="#fff" strokeWidth={2.5} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: NAVY, margin: "0 0 6px 0" }}>Buyers & New Buyer Signals</h2>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
                  Manage your buyer relationships and unlock new business opportunities with comprehensive buyer intelligence. Track 57 active buyers across 48 convenient partners, 8 new Q3 acquisitions, 15 occasional buyers, and 6 dormant accounts with emerging buyer signals and behavioral analysis.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Buyer Intelligence", "Signal Detection", "Relationship Management"].map((tag) => (
                <span key={tag} style={{ padding: "6px 12px", borderRadius: 20, background: "#fff", fontSize: 11, fontWeight: 600, color: RED, border: "1px solid rgba(244,63,94,0.2)" }}>
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
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            {[
              { icon: Users, label: "Consistent Buyers", value: "51 buyers", change: "+12%", bg: "#dbeafe", color: "#3b82f6" },
              { icon: UserSearch, label: "New Buyers (Q3)", value: "8 buyers", change: "New", bg: "#fce7f3", color: "#ec4899" },
              { icon: Users, label: "Occasional Buyers", value: "15 buyers", change: "-8%", bg: "#dcfce7", color: "#22c55e" },
              { icon: Users, label: "Dormant Buyers", value: "6 buyers", change: "-15%", bg: "#ffedd5", color: "#f97316" },
            ].map((metric, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: metric.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <metric.icon size={18} color={metric.color} strokeWidth={2.5} />
                </div>
                <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4, fontWeight: 600 }}>{metric.label}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: NAVY, marginBottom: 4 }}>{metric.value}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: metric.change === "New" ? "#3b82f6" : metric.change.startsWith("+") ? "#22c55e" : "#f97316" }}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY, margin: 0 }}>New Buyer Signals</h3>
              <button style={{ padding: "8px 16px", borderRadius: 8, background: "#3b82f6", color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                <TrendingUp size={12} />
                AI Analyze
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {buyerSignals.map((buyer, i) => (
                <div key={i} style={{ background: "#fafafa", borderRadius: 12, padding: 16, border: "1px solid #f3f4f6" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: buyer.badge === "#22c55e" ? "#dcfce7" : "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Users size={18} color={buyer.badge} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>{buyer.company}</div>
                        <div style={{ fontSize: 11, color: "#6b7280", display: "flex", alignItems: "center", gap: 4 }}>
                          <MapPin size={10} />
                          {buyer.country}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ padding: "4px 10px", borderRadius: 6, background: buyer.badge === "#22c55e" ? "#dcfce7" : "#fef3c7", fontSize: 10, fontWeight: 700, color: buyer.badge }}>
                        {buyer.potential}
                      </span>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 10, color: "#6b7280" }}>First Order</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: NAVY }}>{buyer.order}</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb" }}>
                    <span style={{ fontSize: 11 }}>🤖</span>
                    <span style={{ fontSize: 11, color: "#6b7280" }}>{buyer.insight}</span>
                  </div>
                </div>
              ))}
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
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
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
              {[
                { name: "China", value: 100 },
                { name: "USA", value: 80 },
                { name: "Germany", value: 65 },
                { name: "India", value: 55 },
                { name: "Japan", value: 45 },
              ].map((market, i) => (
                <div key={i}>
                  <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>{market.name}</div>
                  <div style={{ width: "100%", height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${market.value}%`, height: "100%", background: "#3b82f6", borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}