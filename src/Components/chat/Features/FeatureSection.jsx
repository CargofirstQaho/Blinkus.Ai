// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   TrendingUp,
//   Users,
//   ArrowLeftRight,
//   Package,
//   Globe,
//   UserSearch,
//   Lock,
// } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const features = [
//   {
//     id: "market-overview",
//     icon: TrendingUp,
//     title: "Market Overview",
//     description:
//       "Real-time trade volumes, pricing trends, and market dynamics across global corridors",
//     bg: "#edf4ff",
//     iconBg: "#dbeafe",
//     iconColor: "#3b82f6",
//     accent: "rgba(59,130,246,0.15)",
//   },
//   {
//     id: "competitor-intelligence",
//     icon: Users,
//     title: "Competitor Intelligence & Alerts",
//     description:
//       "Track competitor activity, market share shifts, and get instant alerts on new entrants",
//     bg: "#fdf2f8",
//     iconBg: "#fce7f3",
//     iconColor: "#ec4899",
//     accent: "rgba(236,72,153,0.15)",
//   },
//   {
//     id: "import-export-trends",
//     icon: ArrowLeftRight,
//     title: "Import–Export Trends",
//     description:
//       "Analyze bilateral trade flows, growth patterns, and emerging corridors",
//     bg: "#f0fdf4",
//     iconBg: "#dcfce7",
//     iconColor: "#22c55e",
//     accent: "rgba(34,197,94,0.15)",
//   },
//   {
//     id: "hs-code-analysis",
//     icon: Package,
//     title: "Commodity / HS Code Analysis",
//     description:
//       "Deep dive into product categories, harmonized codes, and commodity-specific intelligence",
//     bg: "#fff7ed",
//     iconBg: "#ffedd5",
//     iconColor: "#f97316",
//     accent: "rgba(249,115,22,0.15)",
//   },
//   {
//     id: "markets-seasonality",
//     icon: Globe,
//     title: "Markets & Seasonality",
//     description:
//       "Discover seasonal patterns, regional demand cycles, and optimal timing strategies",
//     bg: "#f5f3ff",
//     iconBg: "#ede9fe",
//     iconColor: "#8b5cf6",
//     accent: "rgba(139,92,246,0.15)",
//   },
//   {
//     id: "buyer-signals",
//     icon: UserSearch,
//     title: "Buyers & New Buyer Signals",
//     description:
//       "Identify consistent buyers, detect new market entrants, and analyze buyer behavior",
//     bg: "#fff0f3",
//     iconBg: "#ffe4e6",
//     iconColor: "#f43f5e",
//     accent: "rgba(244,63,94,0.15)",
//   },
// ]

// function FeatureCard({ feature, index }) {
//   const [hovered, setHovered] = useState(false)
//   const Icon = feature.icon

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: 0.08 + index * 0.07, ease: "easeOut" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         borderRadius: 16,
//         background: feature.bg,
//         border: `1.5px solid ${hovered ? feature.accent : "transparent"}`,
//         padding: "20px 20px 22px",
//         cursor: "not-allowed",
//         userSelect: "none",
//         transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
//         boxShadow: hovered
//           ? `0 8px 28px ${feature.accent}`
//           : "0 1px 4px rgba(0,0,0,0.04)",
//         transform: hovered ? "translateY(-2px)" : "translateY(0)",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: 38,
//           height: 38,
//           borderRadius: 11,
//           background: feature.iconBg,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginBottom: 14,
//           transition: "transform 0.2s",
//           transform: hovered ? "scale(1.08)" : "scale(1)",
//         }}
//       >
//         <Icon size={17} color={feature.iconColor} strokeWidth={2} />
//       </div>

//       <p
//         style={{
//           fontSize: 13,
//           fontWeight: 800,
//           color: NAVY,
//           marginBottom: 6,
//           letterSpacing: "-0.01em",
//           lineHeight: 1.3,
//         }}
//       >
//         {feature.title}
//       </p>
//       <p
//         style={{
//           fontSize: 12,
//           color: "#6b7280",
//           lineHeight: 1.65,
//           margin: 0,
//         }}
//       >
//         {feature.description}
//       </p>

//       <div
//         style={{
//           position: "absolute",
//           top: 14,
//           right: 14,
//           width: 26,
//           height: 26,
//           borderRadius: 8,
//           background: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
//           border: `1px solid ${hovered ? feature.accent : "rgba(0,0,0,0.06)"}`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transition: "all 0.2s",
//           backdropFilter: "blur(4px)",
//         }}
//       >
//         <Lock
//           size={11}
//           color={hovered ? feature.iconColor : "#9ca3af"}
//           strokeWidth={2.5}
//           style={{ transition: "color 0.2s" }}
//         />
//       </div>

//       {hovered && (
//         <motion.div
//           initial={{ opacity: 0, y: 4 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.15 }}
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: `linear-gradient(to top, ${feature.bg}, transparent)`,
//             padding: "10px 16px 10px",
//             display: "flex",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           <Lock size={9} color={feature.iconColor} strokeWidth={2.5} />
//           <span
//             style={{
//               fontSize: 10,
//               fontWeight: 700,
//               color: feature.iconColor,
//               letterSpacing: "0.06em",
//               textTransform: "uppercase",
//             }}
//           >
//             Coming Soon
//           </span>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }

// export default function FeatureSection() {
//   return (
//     <div style={{ width: "100%", maxWidth: 600 }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 14,
//           marginTop: 4,
//         }}
//       >
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to right, #f0edf9, transparent)",
//           }}
//         />
//         <span
//           style={{
//             fontSize: 10,
//             fontWeight: 800,
//             color: "#c4b5f4",
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Explore modules
//         </span>
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to left, #f0edf9, transparent)",
//           }}
//         />
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gap: 10,
//           fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//         }}
//         className="feature-grid"
//       >
//         {features.map((f, i) => (
//           <FeatureCard key={f.id} feature={f} index={i} />
//         ))}
//       </div>

//       <style>{`
//         @media (max-width: 520px) {
//           .feature-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//         @media (max-width: 340px) {
//           .feature-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   )
// }



// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   TrendingUp,
//   Users,
//   ArrowLeftRight,
//   Package,
//   Globe,
//   UserSearch,
//   Lock,
// } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const features = [
//   {
//     id: "market-overview",
//     icon: TrendingUp,
//     title: "Market Overview",
//     description:
//       "Real-time trade volumes, pricing trends, and market dynamics across global corridors",
//     bg: "#edf4ff",
//     iconBg: "#dbeafe",
//     iconColor: "#3b82f6",
//     accent: "rgba(59,130,246,0.15)",
//   },
//   {
//     id: "competitor-intelligence",
//     icon: Users,
//     title: "Competitor Intelligence & Alerts",
//     description:
//       "Track competitor activity, market share shifts, and get instant alerts on new entrants",
//     bg: "#fdf2f8",
//     iconBg: "#fce7f3",
//     iconColor: "#ec4899",
//     accent: "rgba(236,72,153,0.15)",
//   },
//   {
//     id: "import-export-trends",
//     icon: ArrowLeftRight,
//     title: "Import–Export Trends",
//     description:
//       "Analyze bilateral trade flows, growth patterns, and emerging corridors",
//     bg: "#f0fdf4",
//     iconBg: "#dcfce7",
//     iconColor: "#22c55e",
//     accent: "rgba(34,197,94,0.15)",
//   },
//   {
//     id: "hs-code-analysis",
//     icon: Package,
//     title: "Commodity / HS Code Analysis",
//     description:
//       "Deep dive into product categories, harmonized codes, and commodity-specific intelligence",
//     bg: "#fff7ed",
//     iconBg: "#ffedd5",
//     iconColor: "#f97316",
//     accent: "rgba(249,115,22,0.15)",
//   },
//   {
//     id: "markets-seasonality",
//     icon: Globe,
//     title: "Markets & Seasonality",
//     description:
//       "Discover seasonal patterns, regional demand cycles, and optimal timing strategies",
//     bg: "#f5f3ff",
//     iconBg: "#ede9fe",
//     iconColor: "#8b5cf6",
//     accent: "rgba(139,92,246,0.15)",
//   },
//   {
//     id: "buyer-signals",
//     icon: UserSearch,
//     title: "Buyers & New Buyer Signals",
//     description:
//       "Identify consistent buyers, detect new market entrants, and analyze buyer behavior",
//     bg: "#fff0f3",
//     iconBg: "#ffe4e6",
//     iconColor: "#f43f5e",
//     accent: "rgba(244,63,94,0.15)",
//   },
// ]

// function FeatureCard({ feature, index, onNavigate }) {
//   const [hovered, setHovered] = useState(false)
//   const Icon = feature.icon

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: 0.08 + index * 0.07, ease: "easeOut" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => onNavigate(feature.id)}
//       style={{
//         position: "relative",
//         borderRadius: 16,
//         background: feature.bg,
//         border: `1.5px solid ${hovered ? feature.accent : "transparent"}`,
//         padding: "20px 20px 22px",
//         cursor: "pointer",
//         userSelect: "none",
//         transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
//         boxShadow: hovered
//           ? `0 8px 28px ${feature.accent}`
//           : "0 1px 4px rgba(0,0,0,0.04)",
//         transform: hovered ? "translateY(-2px)" : "translateY(0)",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: 38,
//           height: 38,
//           borderRadius: 11,
//           background: feature.iconBg,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginBottom: 14,
//           transition: "transform 0.2s",
//           transform: hovered ? "scale(1.08)" : "scale(1)",
//         }}
//       >
//         <Icon size={17} color={feature.iconColor} strokeWidth={2} />
//       </div>

//       <p
//         style={{
//           fontSize: 13,
//           fontWeight: 800,
//           color: NAVY,
//           marginBottom: 6,
//           letterSpacing: "-0.01em",
//           lineHeight: 1.3,
//         }}
//       >
//         {feature.title}
//       </p>
//       <p
//         style={{
//           fontSize: 12,
//           color: "#6b7280",
//           lineHeight: 1.65,
//           margin: 0,
//         }}
//       >
//         {feature.description}
//       </p>

//       <div
//         style={{
//           position: "absolute",
//           top: 14,
//           right: 14,
//           width: 26,
//           height: 26,
//           borderRadius: 8,
//           background: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
//           border: `1px solid ${hovered ? feature.accent : "rgba(0,0,0,0.06)"}`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transition: "all 0.2s",
//           backdropFilter: "blur(4px)",
//         }}
//       >
//         <Lock
//           size={11}
//           color={hovered ? feature.iconColor : "#9ca3af"}
//           strokeWidth={2.5}
//           style={{ transition: "color 0.2s" }}
//         />
//       </div>

//       {hovered && (
//         <motion.div
//           initial={{ opacity: 0, y: 4 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.15 }}
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: `linear-gradient(to top, ${feature.bg}, transparent)`,
//             padding: "10px 16px 10px",
//             display: "flex",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           <Lock size={9} color={feature.iconColor} strokeWidth={2.5} />
//           <span
//             style={{
//               fontSize: 10,
//               fontWeight: 700,
//               color: feature.iconColor,
//               letterSpacing: "0.06em",
//               textTransform: "uppercase",
//             }}
//           >
//             Explore Now
//           </span>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }

// export default function FeatureSection({ onNavigate }) {
//   return (
//     <div style={{ width: "100%", maxWidth: 600 }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 14,
//           marginTop: 4,
//         }}
//       >
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to right, #f0edf9, transparent)",
//           }}
//         />
//         <span
//           style={{
//             fontSize: 10,
//             fontWeight: 800,
//             color: "#c4b5f4",
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Explore modules
//         </span>
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to left, #f0edf9, transparent)",
//           }}
//         />
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gap: 10,
//           fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//         }}
//         className="feature-grid"
//       >
//         {features.map((f, i) => (
//           <FeatureCard key={f.id} feature={f} index={i} onNavigate={onNavigate} />
//         ))}
//       </div>

//       <style>{`
//         @media (max-width: 520px) {
//           .feature-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//         @media (max-width: 340px) {
//           .feature-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   )
// }


















// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   TrendingUp,
//   Users,
//   ArrowLeftRight,
//   Package,
//   Globe,
//   UserSearch,
//   Lock,
// } from "lucide-react"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const features = [
//   {
//     id: "market-overview",
//     icon: TrendingUp,
//     title: "Market Overview",
//     description:
//       "Real-time trade volumes, pricing trends, and market dynamics across global corridors",
//     bg: "#edf4ff",
//     iconBg: "#dbeafe",
//     iconColor: "#3b82f6",
//     accent: "rgba(59,130,246,0.15)",
//   },
//   {
//     id: "competitor-intelligence",
//     icon: Users,
//     title: "Competitor Intelligence & Alerts",
//     description:
//       "Track competitor activity, market share shifts, and get instant alerts on new entrants",
//     bg: "#fdf2f8",
//     iconBg: "#fce7f3",
//     iconColor: "#ec4899",
//     accent: "rgba(236,72,153,0.15)",
//   },
//   {
//     id: "import-export-trends",
//     icon: ArrowLeftRight,
//     title: "Import–Export Trends",
//     description:
//       "Analyze bilateral trade flows, growth patterns, and emerging corridors",
//     bg: "#f0fdf4",
//     iconBg: "#dcfce7",
//     iconColor: "#22c55e",
//     accent: "rgba(34,197,94,0.15)",
//   },
//   {
//     id: "hs-code-analysis",
//     icon: Package,
//     title: "Commodity / HS Code Analysis",
//     description:
//       "Deep dive into product categories, harmonized codes, and commodity-specific intelligence",
//     bg: "#fff7ed",
//     iconBg: "#ffedd5",
//     iconColor: "#f97316",
//     accent: "rgba(249,115,22,0.15)",
//   },
//   {
//     id: "markets-seasonality",
//     icon: Globe,
//     title: "Markets & Seasonality",
//     description:
//       "Discover seasonal patterns, regional demand cycles, and optimal timing strategies",
//     bg: "#f5f3ff",
//     iconBg: "#ede9fe",
//     iconColor: "#8b5cf6",
//     accent: "rgba(139,92,246,0.15)",
//   },
//   {
//     id: "buyer-signals",
//     icon: UserSearch,
//     title: "Buyers & New Buyer Signals",
//     description:
//       "Identify consistent buyers, detect new market entrants, and analyze buyer behavior",
//     bg: "#fff0f3",
//     iconBg: "#ffe4e6",
//     iconColor: "#f43f5e",
//     accent: "rgba(244,63,94,0.15)",
//   },
// ]

// function FeatureCard({ feature, index, onNavigate }) {
//   const [hovered, setHovered] = useState(false)
//   const Icon = feature.icon

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: 0.08 + index * 0.07, ease: "easeOut" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => onNavigate && onNavigate(feature.id)}
//       style={{
//         position: "relative",
//         borderRadius: 16,
//         background: feature.bg,
//         border: `1.5px solid ${hovered ? feature.accent : "transparent"}`,
//         padding: "20px 20px 22px",
//         cursor: "pointer",
//         userSelect: "none",
//         transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
//         boxShadow: hovered
//           ? `0 8px 28px ${feature.accent}`
//           : "0 1px 4px rgba(0,0,0,0.04)",
//         transform: hovered ? "translateY(-2px)" : "translateY(0)",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: 38,
//           height: 38,
//           borderRadius: 11,
//           background: feature.iconBg,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginBottom: 14,
//           transition: "transform 0.2s",
//           transform: hovered ? "scale(1.08)" : "scale(1)",
//         }}
//       >
//         <Icon size={17} color={feature.iconColor} strokeWidth={2} />
//       </div>

//       <p
//         style={{
//           fontSize: 13,
//           fontWeight: 800,
//           color: NAVY,
//           marginBottom: 6,
//           letterSpacing: "-0.01em",
//           lineHeight: 1.3,
//         }}
//       >
//         {feature.title}
//       </p>
//       <p
//         style={{
//           fontSize: 12,
//           color: "#6b7280",
//           lineHeight: 1.65,
//           margin: 0,
//         }}
//       >
//         {feature.description}
//       </p>

//       <div
//         style={{
//           position: "absolute",
//           top: 14,
//           right: 14,
//           width: 26,
//           height: 26,
//           borderRadius: 8,
//           background: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
//           border: `1px solid ${hovered ? feature.accent : "rgba(0,0,0,0.06)"}`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transition: "all 0.2s",
//           backdropFilter: "blur(4px)",
//         }}
//       >
//         <Lock
//           size={11}
//           color={hovered ? feature.iconColor : "#9ca3af"}
//           strokeWidth={2.5}
//           style={{ transition: "color 0.2s" }}
//         />
//       </div>

//       {hovered && (
//         <motion.div
//           initial={{ opacity: 0, y: 4 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.15 }}
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: `linear-gradient(to top, ${feature.bg}, transparent)`,
//             padding: "10px 16px 10px",
//             display: "flex",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           <Lock size={9} color={feature.iconColor} strokeWidth={2.5} />
//           <span
//             style={{
//               fontSize: 10,
//               fontWeight: 700,
//               color: feature.iconColor,
//               letterSpacing: "0.06em",
//               textTransform: "uppercase",
//             }}
//           >
//             Explore Now
//           </span>
//         </motion.div>
//       )}
//     </motion.div>
//   )
// }

// export default function FeatureSection({ onNavigate }) {
//   return (
//     <div style={{ width: "100%", maxWidth: 600 }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 14,
//           marginTop: 4,
//         }}
//       >
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to right, #f0edf9, transparent)",
//           }}
//         />
//         <span
//           style={{
//             fontSize: 10,
//             fontWeight: 800,
//             color: "#c4b5f4",
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Explore modules
//         </span>
//         <div
//           style={{
//             flex: 1,
//             height: 1,
//             background: "linear-gradient(to left, #f0edf9, transparent)",
//           }}
//         />
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gap: 10,
//           fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//         }}
//         className="feature-grid"
//       >
//         {features.map((f, i) => (
//           <FeatureCard key={f.id} feature={f} index={i} onNavigate={onNavigate} />
//         ))}
//       </div>

//       <style>{`
//         @media (max-width: 520px) {
//           .feature-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//         @media (max-width: 340px) {
//           .feature-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   )
// }













import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Users,
  ArrowLeftRight,
  Package,
  Globe,
  UserSearch,
} from "lucide-react"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

const features = [
  {
    id: "market-overview",
    icon: TrendingUp,
    title: "Market Overview",
    description:
      "Real-time trade volumes, pricing trends, and market dynamics across global corridors",
    bg: "#edf4ff",
    iconBg: "#dbeafe",
    iconColor: "#3b82f6",
    accent: "rgba(59,130,246,0.15)",
  },
  {
    id: "competitor-intelligence",
    icon: Users,
    title: "Competitor Intelligence & Alerts",
    description:
      "Track competitor activity, market share shifts, and get instant alerts on new entrants",
    bg: "#fdf2f8",
    iconBg: "#fce7f3",
    iconColor: "#ec4899",
    accent: "rgba(236,72,153,0.15)",
  },
  {
    id: "import-export-trends",
    icon: ArrowLeftRight,
    title: "Import–Export Trends",
    description:
      "Analyze bilateral trade flows, growth patterns, and emerging corridors",
    bg: "#f0fdf4",
    iconBg: "#dcfce7",
    iconColor: "#22c55e",
    accent: "rgba(34,197,94,0.15)",
  },
  {
    id: "hs-code-analysis",
    icon: Package,
    title: "Commodity / HS Code Analysis",
    description:
      "Deep dive into product categories, harmonized codes, and commodity-specific intelligence",
    bg: "#fff7ed",
    iconBg: "#ffedd5",
    iconColor: "#f97316",
    accent: "rgba(249,115,22,0.15)",
  },
  {
    id: "markets-seasonality",
    icon: Globe,
    title: "Markets & Seasonality",
    description:
      "Discover seasonal patterns, regional demand cycles, and optimal timing strategies",
    bg: "#f5f3ff",
    iconBg: "#ede9fe",
    iconColor: "#8b5cf6",
    accent: "rgba(139,92,246,0.15)",
  },
  {
    id: "buyer-signals",
    icon: UserSearch,
    title: "Buyers & New Buyer Signals",
    description:
      "Identify consistent buyers, detect new market entrants, and analyze buyer behavior",
    bg: "#fff0f3",
    iconBg: "#ffe4e6",
    iconColor: "#f43f5e",
    accent: "rgba(244,63,94,0.15)",
  },
]

function FeatureCard({ feature, index, onNavigate }) {
  const [hovered, setHovered] = useState(false)
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate && onNavigate(feature.id)}
      style={{
        position: "relative",
        borderRadius: 16,
        background: feature.bg,
        border: `1.5px solid ${hovered ? feature.accent : "transparent"}`,
        padding: "20px 20px 22px",
        cursor: "pointer",
        userSelect: "none",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        boxShadow: hovered
          ? `0 8px 28px ${feature.accent}`
          : "0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          background: feature.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          transition: "transform 0.2s",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Icon size={17} color={feature.iconColor} strokeWidth={2} />
      </div>

      <p
        style={{
          fontSize: 13,
          fontWeight: 800,
          color: NAVY,
          marginBottom: 6,
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}
      >
        {feature.title}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "#6b7280",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function FeatureSection({ onNavigate }) {
  return (
    <div style={{ width: "100%", maxWidth: 600 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 14,
          marginTop: 4,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, #f0edf9, transparent)",
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#c4b5f4",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Explore modules
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to left, #f0edf9, transparent)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        }}
        className="feature-grid"
      >
        {features.map((f, i) => (
          <FeatureCard key={f.id} feature={f} index={i} onNavigate={onNavigate} />
        ))}
      </div>

      <style>{`
        @media (max-width: 520px) {
          .feature-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 340px) {
          .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}