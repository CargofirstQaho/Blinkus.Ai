// import {  Zap } from "lucide-react"
// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const footerLinks = {
//   Product: ["Features", "How It Works", "Pricing", "API"],
//   Coverage: ["Commodities", "Countries", "HS Codes", "Regulations"],
//   Company: ["About", "Blog", "Careers", "Contact"],
//   Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
// }
 
// export function Footer() {
//   return (
//     <footer className="py-14 border-t" style={{ background: "#faf9ff", borderColor: "rgba(108,63,197,0.08)" }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//           <div className="col-span-2 lg:col-span-1">
//             <div className="flex items-center gap-2 mb-3">
//               <div
//                 className="w-7 h-7 rounded-lg flex items-center justify-center"
//                 style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//               >
//                 <Zap size={13} className="text-white" fill="white" />
//               </div>
//               <span className="font-black text-base" style={{ color: NAVY }}>
//                 Blinkus<span style={{ color: PURPLE }}>.ai</span>
//               </span>
//             </div>
//             <p className="text-sm leading-relaxed" style={{ color: "#9585c0" }}>
//               AI-powered trade intelligence for the Indian import/export sector.
//             </p>
//           </div>
 
//           {Object.entries(footerLinks).map(([group, links]) => (
//             <div key={group}>
//               <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#b0a0d0" }}>
//                 {group}
//               </p>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       className="text-sm font-medium transition-colors"
//                       style={{ color: "#7c6fa0" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = PURPLE)}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#7c6fa0")}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
 
//         <div
//           className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
//           style={{ borderColor: "rgba(108,63,197,0.08)" }}
//         >
//           <p className="text-xs" style={{ color: "#b0a0d0" }}>
//             © 2026 Blinkus.ai. All rights reserved.
//           </p>
//           <p className="text-xs" style={{ color: "#b0a0d0" }}>
//             Built for the Indian trade community.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
 

// import logo from "../assets/logo2.png"

// const footerCols = {
//   Product: ["Features","How It Works","Pricing","API"],
//   Coverage: ["Commodities","Countries","HS Codes","Regulations"],
//   Company: ["About","Blog","Careers","Contact"],
//   Legal: ["Privacy Policy","Terms of Service","Cookie Policy"],
// }

// const N = "#0f1b3d"
// const P = "#6c3fc5"
 
// export function Footer() {
//   return (
//     <footer style={{ background: "#faf9ff", borderTop: "1px solid rgba(108,63,197,0.08)", padding: "56px 0 32px" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,32px)" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: "clamp(20px,4vw,40px)", marginBottom: 48 }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//               {/* <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${N}, ${P})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
//               </div>
//               <span style={{ fontSize: 16, fontWeight: 900, color: N, letterSpacing: "-0.03em" }}>
//                 Blinkus<span style={{ color: P }}>.ai</span>
//               </span> */}
//               <img src={logo} alt="logo" className="h-15" />
//             </div>
//             <p style={{ fontSize: 13, color: "#9585c0", lineHeight: 1.6, maxWidth: 200 }}>
//               AI-powered trade intelligence for the Indian import/export sector.
//             </p>
//           </div>
 
//           {Object.entries(footerCols).map(([group, links]) => (
//             <div key={group}>
//               <p style={{ fontSize: 11, fontWeight: 800, color: "#b0a0d0", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 14 }}>
//                 {group}
//               </p>
//               <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                 {links.map((link) => (
//                   <li key={link} style={{ marginBottom: 10 }}>
//                     <a href="#" style={{ fontSize: 13, fontWeight: 500, color: "#7c6fa0", textDecoration: "none", transition: "color 0.15s" }}
//                       onMouseEnter={(e) => { e.currentTarget.style.color = P }}
//                       onMouseLeave={(e) => { e.currentTarget.style.color = "#7c6fa0" }}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
 
//         <div style={{ borderTop: "1px solid rgba(108,63,197,0.08)", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
//           <p style={{ fontSize: 12, color: "#b0a0d0" }}>© 2026 Blinkus.ai. All rights reserved.</p>
//           <p style={{ fontSize: 12, color: "#b0a0d0" }}>Built for the Indian trade community.</p>
//         </div>
//       </div>
 
//       <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}`}</style>
//     </footer>
//   )
// }





import { motion } from "framer-motion"
import { useState } from "react"
import logo from "../assets/logo2.png"

const N = "#6c3dff"
const P = "#6c3fc5"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/blinkus-ai",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blinkus.ai?utm_source=qr&igsh=eTg5cHVocm84a2E1",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "How Safe Is Your Data", href: "/data-safety" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer style={{
      background: "#fff",
      borderTop: "1px solid rgba(108,63,197,0.08)",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px clamp(16px,4vw,32px) 0" }}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
        }}>
          <div style={{ flex: "0 0 auto", maxWidth: 300 }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 14, display: "block" }}
            >
              <img src={logo} alt="Blinkus" style={{ height: 32, width: "auto" }} />
            </button>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.75, marginBottom: 22, maxWidth: 250 }}>
              AI-powered trade intelligence for exporters and importers. Real data, instant answers.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    border: "1px solid rgba(108,63,197,0.12)",
                    background: "#faf9ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#7c6fa0", transition: "all 0.18s", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(108,63,197,0.08)"
                    e.currentTarget.style.color = P
                    e.currentTarget.style.borderColor = "rgba(108,63,197,0.25)"
                    e.currentTarget.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#faf9ff"
                    e.currentTarget.style.color = "#7c6fa0"
                    e.currentTarget.style.borderColor = "rgba(108,63,197,0.12)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h4 style={{
              fontSize: 11, fontWeight: 800, color: "#1a1040",
              letterSpacing: "0.09em", textTransform: "uppercase", margin: 0,
            }}>
              Legal & Trust
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontSize: 14, color: "#6b7280", fontFamily: "inherit",
                      fontWeight: 500, transition: "color 0.15s",
                      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = P }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(108,63,197,0.08)",
          marginTop: 32, padding: "22px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "#9585c0", margin: 0 }}>
            © {new Date().getFullYear()} Blinkus.ai. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#22c55e", animation: "footerPulse 2s infinite",
            }} />
            <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 600 }}>All systems operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 600px) {
          .footer-inner { flex-direction: column !important; }
        }
      `}</style>
    </footer>
  )
}