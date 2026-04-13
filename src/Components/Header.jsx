// import { useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Zap, ChevronRight } from "lucide-react"
// import { logout } from "../redux/slices/authSlice"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const navLinks = [
//   { label: "Features", href: "#features" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Commodities", href: "#commodities" },
//   { label: "Pricing", href: "#pricing" },
// ]

// export default function Header({ onOpenAuth }) {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const { user } = useSelector((s) => s.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handler, { passive: true })
//     return () => window.removeEventListener("scroll", handler)
//   }, [])

//   const scrollTo = (href) => {
//     const el = document.querySelector(href)
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//     setMobileOpen(false)
//   }

//   const handleCTA = () => {
//     if (user) {
//       navigate("/chat")
//     } else {
//       onOpenAuth("register")
//     }
//   }

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
//       style={{
//         background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(16px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(108,63,197,0.08)" : "1px solid transparent",
//         boxShadow: scrolled ? "0 2px 20px rgba(108,63,197,0.06)" : "none",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="flex items-center gap-2.5 shrink-0"
//         >
//           <div
//             className="w-8 h-8 rounded-xl flex items-center justify-center"
//             style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//           >
//             <Zap size={15} className="text-white" fill="white" />
//           </div>
//           <span className="text-lg font-black tracking-tight" style={{ color: NAVY }}>
//             Blinkus<span style={{ color: PURPLE }}>.ai</span>
//           </span>
//         </button>

//         <nav className="hidden md:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <button
//               key={link.href}
//               onClick={() => scrollTo(link.href)}
//               className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-purple-50"
//               style={{ color: "#6b7280" }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = PURPLE)}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
//             >
//               {link.label}
//             </button>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center gap-3">
//           {user ? (
//             <>
//               <div className="flex items-center gap-2.5">
//                 {user.avatar ? (
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-8 h-8 rounded-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                 ) : (
//                   <div
//                     className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                   >
//                     {user.name?.[0]?.toUpperCase()}
//                   </div>
//                 )}
//                 <span className="text-sm font-semibold max-w-28 truncate" style={{ color: NAVY }}>
//                   {user.name?.split(" ")[0]}
//                 </span>
//               </div>
//               <button
//                 onClick={() => navigate("/chat")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-1.5 transition-transform active:scale-95"
//                 style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//               >
//                 Go to Chat
//                 <ChevronRight size={14} />
//               </button>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="px-3 py-2 rounded-xl text-sm font-semibold border border-purple-100 hover:bg-purple-50 transition-colors"
//                 style={{ color: PURPLE }}
//               >
//                 Sign Out
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => onOpenAuth("login")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 hover:bg-purple-50 transition-colors"
//                 style={{ color: PURPLE }}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => onOpenAuth("register")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-1.5 transition-transform active:scale-95"
//                 style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, boxShadow: "0 4px 14px rgba(108,63,197,0.3)" }}
//               >
//                 Get Started
//                 <ChevronRight size={14} />
//               </button>
//             </>
//           )}
//         </div>

//         <button
//           onClick={() => setMobileOpen((p) => !p)}
//           className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-purple-100 hover:bg-purple-50 transition-colors"
//           style={{ color: PURPLE }}
//         >
//           {mobileOpen ? <X size={18} /> : <Menu size={18} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-purple-50 bg-white"
//           >
//             <div className="px-4 py-4 space-y-1">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.href}
//                   onClick={() => scrollTo(link.href)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-purple-50 transition-colors"
//                   style={{ color: "#4a4060" }}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//               <div className="pt-3 flex flex-col gap-2 border-t border-purple-50">
//                 {user ? (
//                   <button
//                     onClick={() => { navigate("/chat"); setMobileOpen(false) }}
//                     className="w-full py-3 rounded-xl text-sm font-bold text-white text-center"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                   >
//                     Go to Chat
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => { onOpenAuth("login"); setMobileOpen(false) }}
//                       className="w-full py-3 rounded-xl text-sm font-bold border border-purple-200 text-center"
//                       style={{ color: PURPLE }}
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => { onOpenAuth("register"); setMobileOpen(false) }}
//                       className="w-full py-3 rounded-xl text-sm font-bold text-white text-center"
//                       style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                     >
//                       Get Started Free
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }




// import { useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Zap, ChevronRight } from "lucide-react"
// import { logout } from "../redux/slices/authSlice"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// const navLinks = [
//   { label: "Features", href: "#features" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Commodities", href: "#commodities" },
//   { label: "Pricing", href: "#pricing" },
// ]

// export default function Header({ onOpenAuth }) {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const { user } = useSelector((s) => s.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handler, { passive: true })
//     return () => window.removeEventListener("scroll", handler)
//   }, [])

//   const scrollTo = (href) => {
//     const el = document.querySelector(href)
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//     setMobileOpen(false)
//   }

//   const handleCTA = () => {
//     if (user) {
//       navigate("/chat")
//     } else {
//       onOpenAuth("register")
//     }
//   }

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
//       style={{
//         background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(16px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(108,63,197,0.08)" : "1px solid transparent",
//         boxShadow: scrolled ? "0 2px 20px rgba(108,63,197,0.06)" : "none",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="flex items-center gap-2.5 shrink-0"
//         >
//           <div
//             className="w-8 h-8 rounded-xl flex items-center justify-center"
//             style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//           >
//             <Zap size={15} className="text-white" fill="white" />
//           </div>
//           <span className="text-lg font-black tracking-tight" style={{ color: NAVY }}>
//             Blinkus<span style={{ color: PURPLE }}>.ai</span>
//           </span>
//         </button>

//         <nav className="hidden md:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <button
//               key={link.href}
//               onClick={() => scrollTo(link.href)}
//               className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-purple-50"
//               style={{ color: "#6b7280" }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = PURPLE)}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
//             >
//               {link.label}
//             </button>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center gap-3">
//           {user ? (
//             <>
//               <div className="flex items-center gap-2.5">
//                 {user.avatar ? (
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-8 h-8 rounded-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                 ) : (
//                   <div
//                     className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                   >
//                     {user.name?.[0]?.toUpperCase()}
//                   </div>
//                 )}
//                 <span className="text-sm font-semibold max-w-28 truncate" style={{ color: NAVY }}>
//                   {user.name?.split(" ")[0]}
//                 </span>
//               </div>
//               <button
//                 onClick={() => navigate("/chat")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-1.5 transition-transform active:scale-95"
//                 style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//               >
//                 Go to Chat
//                 <ChevronRight size={14} />
//               </button>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="px-3 py-2 rounded-xl text-sm font-semibold border border-purple-100 hover:bg-purple-50 transition-colors"
//                 style={{ color: PURPLE }}
//               >
//                 Sign Out
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => onOpenAuth("login")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 hover:bg-purple-50 transition-colors"
//                 style={{ color: PURPLE }}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => onOpenAuth("register")}
//                 className="px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-1.5 transition-transform active:scale-95"
//                 style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, boxShadow: "0 4px 14px rgba(108,63,197,0.3)" }}
//               >
//                 Get Started
//                 <ChevronRight size={14} />
//               </button>
//             </>
//           )}
//         </div>

//         <button
//           onClick={() => setMobileOpen((p) => !p)}
//           className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-purple-100 hover:bg-purple-50 transition-colors"
//           style={{ color: PURPLE }}
//         >
//           {mobileOpen ? <X size={18} /> : <Menu size={18} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-purple-50 bg-white"
//           >
//             <div className="px-4 py-4 space-y-1">
//               {navLinks.map((link) => (
//                 <button
//                   key={link.href}
//                   onClick={() => scrollTo(link.href)}
//                   className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-purple-50 transition-colors"
//                   style={{ color: "#4a4060" }}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//               <div className="pt-3 flex flex-col gap-2 border-t border-purple-50">
//                 {user ? (
//                   <button
//                     onClick={() => { navigate("/chat"); setMobileOpen(false) }}
//                     className="w-full py-3 rounded-xl text-sm font-bold text-white text-center"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                   >
//                     Go to Chat
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => { onOpenAuth("login"); setMobileOpen(false) }}
//                       className="w-full py-3 rounded-xl text-sm font-bold border border-purple-200 text-center"
//                       style={{ color: PURPLE }}
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => { onOpenAuth("register"); setMobileOpen(false) }}
//                       className="w-full py-3 rounded-xl text-sm font-bold text-white text-center"
//                       style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
//                     >
//                       Get Started Free
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }









// import { useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { logout } from "../redux/slices/authSlice"
// import logo from "../assets/logo2.png"

// // const N = "#0f1b3d"
// const N = "#6c3dff"
// const P = "#6c3fc5"
// const PS = "#ede9fe"

// const navLinks = [
//   { label: "Features", href: "#features" },
//   { label: "How It Works", href: "#how-it-works" },
//   { label: "Commodities", href: "#commodities" },
// ]

// function ZapIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//     </svg>
//   )
// }
// function MenuIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
//     </svg>
//   )
// }
// function CloseIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//       <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
//     </svg>
//   )
// }

// function Avatar({ user, size = 32 }) {
//   if (user?.avatar) {
//     return (
//       <img
//         src={user.avatar}
//         alt={user.name || ""}
//         referrerPolicy="no-referrer"
//         style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", border: `2px solid ${PS}` }}
//         onError={(e) => { e.currentTarget.style.display = "none" }}
//       />
//     )
//   }
//   return (
//     <div style={{
//       width: size, height: size, borderRadius: "50%",
//       background: `linear-gradient(135deg, ${N}, ${P})`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       color: "white", fontSize: size * 0.4, fontWeight: 700,
//     }}>
//       {user?.name?.[0]?.toUpperCase() || "U"}
//     </div>
//   )
// }

// export default function Header({ onOpenAuth }) {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const { user } = useSelector((s) => s.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handler, { passive: true })
//     return () => window.removeEventListener("scroll", handler)
//   }, [])

//   const scrollTo = (href) => {
//     const el = document.querySelector(href)
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//     setMobileOpen(false)
//   }

//   const hStyle = {
//     position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//     transition: "all 0.25s",
//     background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
//     backdropFilter: scrolled ? "blur(16px)" : "none",
//     borderBottom: scrolled ? "1px solid rgba(108,63,197,0.1)" : "1px solid transparent",
//     boxShadow: scrolled ? "0 2px 20px rgba(108,63,197,0.06)" : "none",
//     fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
//   }
//   const inner = {
//     maxWidth: 1200, margin: "0 auto",
//     padding: "0 clamp(16px,4vw,32px)",
//     height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
//   }
//   const navBtn = {
//     padding: "8px 14px", borderRadius: 10, border: "none",
//     background: "transparent", cursor: "pointer",
//     fontSize: 14, fontWeight: 600, color: "#6b7280",
//     fontFamily: "inherit", transition: "color 0.15s",
//   }
//   const signInBtn = {
//     padding: "9px 20px", borderRadius: 11,
//     border: `1.5px solid rgba(108,63,197,0.25)`,
//     background: "transparent", cursor: "pointer",
//     fontSize: 14, fontWeight: 700, color: P,
//     fontFamily: "inherit", transition: "all 0.15s",
//   }
//   const primaryBtn = {
//     padding: "9px 20px", borderRadius: 11, border: "none",
//     background: `linear-gradient(135deg, ${N}, ${P})`,
//     cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#fff",
//     fontFamily: "inherit",
//     boxShadow: "0 4px 14px rgba(108,63,197,0.3)",
//     display: "flex", alignItems: "center", gap: 6,
//   }

//   return (
//     <header style={hStyle}>
//       <div style={inner}>
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", padding: 0 }}
//         >
//           {/* <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${N}, ${P})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <ZapIcon />
//           </div>
//           <span style={{ fontSize: 17, fontWeight: 900, color: N, letterSpacing: "-0.04em" }}>
//             Blinkus<span style={{ color: P }}>.ai</span>
//           </span> */}
//           <div className="h-10 w-20">
//             <img src={logo} alt="logo_img" />
//           </div>
//         </button>

//         <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }} className="desktop-nav">
//           {navLinks.map((l) => (
//             <button
//               key={l.href}
//               onClick={() => scrollTo(l.href)}
//               style={navBtn}
//               onMouseEnter={(e) => { e.currentTarget.style.color = P; e.currentTarget.style.background = PS }}
//               onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.background = "transparent" }}
//             >
//               {l.label}
//             </button>
//           ))}
//         </nav>

//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           {user ? (
//             <>
//               <button
//                 onClick={() => navigate("/chat")}
//                 style={primaryBtn}
//               >
//                 Go to Chat
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//               </button>
//               <button
//                 onClick={() => dispatch(logout())}
//                 style={{ ...signInBtn, fontSize: 13 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "#fff5f5"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#ef4444" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(108,63,197,0.25)"; e.currentTarget.style.color = P }}
//               >
//                 Sign Out
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => { console.log("Sign In clicked"); onOpenAuth("login") }}
//                 style={signInBtn}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = PS }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => { console.log("Get Started clicked"); onOpenAuth("register") }}
//                 style={primaryBtn}
//               >
//                 Get Started
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
//               </button>
//             </>
//           )}

//           <button
//             onClick={() => setMobileOpen((p) => !p)}
//             style={{
//               width: 36, height: 36, borderRadius: 10, border: `1px solid rgba(108,63,197,0.15)`,
//               background: "transparent", cursor: "pointer",
//               display: "flex", alignItems: "center", justifyContent: "center", color: P,
//             }}
//             id="mobile-menu-btn"
//           >
//             {mobileOpen ? <CloseIcon /> : <MenuIcon />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             style={{
//               borderTop: "1px solid rgba(108,63,197,0.08)",
//               background: "#fff",
//               overflow: "hidden",
//               fontFamily: "inherit",
//             }}
//           >
//             <div style={{ padding: "12px 16px 16px" }}>
//               {navLinks.map((l) => (
//                 <button
//                   key={l.href}
//                   onClick={() => scrollTo(l.href)}
//                   style={{
//                     width: "100%", textAlign: "left", padding: "12px 14px",
//                     borderRadius: 10, border: "none", background: "transparent",
//                     cursor: "pointer", fontSize: 14, fontWeight: 600,
//                     color: "#4a4060", fontFamily: "inherit", display: "block",
//                     marginBottom: 2,
//                   }}
//                   onMouseEnter={(e) => { e.currentTarget.style.background = PS; e.currentTarget.style.color = P }}
//                   onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4a4060" }}
//                 >
//                   {l.label}
//                 </button>
//               ))}
//               <div style={{ borderTop: "1px solid #f0edf9", paddingTop: 12, marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
//                 {user ? (
//                   <button
//                     onClick={() => { navigate("/chat"); setMobileOpen(false) }}
//                     style={{ ...primaryBtn, justifyContent: "center", width: "100%" }}
//                   >
//                     Go to Chat
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => { onOpenAuth("login"); setMobileOpen(false) }}
//                       style={{ ...signInBtn, textAlign: "center" }}
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => { onOpenAuth("register"); setMobileOpen(false) }}
//                       style={{ ...primaryBtn, justifyContent: "center" }}
//                     >
//                       Get Started Free
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>{`
//         @media (max-width: 768px) { .desktop-nav { display: none !important; } }
//         @media (min-width: 769px) { #mobile-menu-btn { display: none !important; } }
//       `}</style>
//     </header>
//   )
// }












import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { logout } from "../redux/slices/authSlice"
import logo from "../assets/logo2.png"

const N = "#6c3dff"
const P = "#6c3fc5"
const PS = "#ede9fe"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Commodities", href: "#commodities" },
]

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Header({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user } = useSelector((s) => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.25s",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108,63,197,0.1)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(108,63,197,0.06)" : "none",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "0 clamp(16px,4vw,32px)",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}
          >
            <img
              src={logo}
              alt="Blinkus"
              style={{ height: "clamp(26px,4vw,34px)", width: "auto", objectFit: "contain", display: "block" }}
            />
          </button>

          <nav className="hdr-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  padding: "8px 14px", borderRadius: 10, border: "none",
                  background: "transparent", cursor: "pointer",
                  fontSize: 14, fontWeight: 600, color: "#6b7280", fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = P; e.currentTarget.style.background = PS }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.background = "transparent" }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hdr-desktop-actions" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {user ? (
              <>
                <button
                  onClick={() => navigate("/chat")}
                  style={{
                    padding: "9px 20px", borderRadius: 11, border: "none",
                    background: `linear-gradient(135deg, ${N}, ${P})`,
                    cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#fff",
                    fontFamily: "inherit", boxShadow: "0 4px 14px rgba(108,63,197,0.3)",
                    display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
                  }}
                >
                  Go to Chat
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <button
                  onClick={() => dispatch(logout())}
                  style={{
                    padding: "9px 20px", borderRadius: 11,
                    border: "1.5px solid rgba(108,63,197,0.25)",
                    background: "transparent", cursor: "pointer",
                    fontSize: 13, fontWeight: 700, color: P, fontFamily: "inherit", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#fff5f5"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#ef4444" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(108,63,197,0.25)"; e.currentTarget.style.color = P }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth("login")}
                  style={{
                    padding: "9px 20px", borderRadius: 11,
                    border: "1.5px solid rgba(108,63,197,0.25)",
                    background: "transparent", cursor: "pointer",
                    fontSize: 14, fontWeight: 700, color: P, fontFamily: "inherit", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = PS }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth("register")}
                  style={{
                    padding: "9px 20px", borderRadius: 11, border: "none",
                    background: `linear-gradient(135deg, ${N}, ${P})`,
                    cursor: "pointer", fontSize: 14, fontWeight: 700, color: "#fff",
                    fontFamily: "inherit", boxShadow: "0 4px 14px rgba(108,63,197,0.3)",
                    display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
                  }}
                >
                  Get Started
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </>
            )}
          </div>

          <button
            className="hdr-hamburger"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              width: 40, height: 40, borderRadius: 10,
              border: "1.5px solid rgba(108,63,197,0.2)",
              background: mobileOpen ? PS : "rgba(255,255,255,0.85)",
              cursor: "pointer",
              alignItems: "center", justifyContent: "center",
              color: P, flexShrink: 0,
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 98,
                background: "rgba(15,10,40,0.45)", backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(300px, 82vw)",
                zIndex: 99, background: "#fff",
                boxShadow: "-8px 0 40px rgba(108,63,197,0.15)",
                display: "flex", flexDirection: "column",
                fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
                overflowY: "auto",
              }}
            >
              <div style={{
                padding: "18px 20px 14px",
                borderBottom: "1px solid rgba(108,63,197,0.08)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexShrink: 0,
              }}>
                <img src={logo} alt="Blinkus" style={{ height: 26, width: "auto" }} />
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: "1px solid rgba(108,63,197,0.15)",
                    background: "transparent", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", color: P,
                  }}
                >
                  <CloseIcon />
                </button>
              </div>

              <div style={{ flex: 1, padding: "14px 16px 24px" }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#c4b5f4", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 10px", marginBottom: 6 }}>
                  Navigation
                </p>
                {navLinks.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    style={{
                      width: "100%", textAlign: "left", padding: "13px 12px",
                      borderRadius: 10, border: "none", background: "transparent",
                      cursor: "pointer", fontSize: 15, fontWeight: 600,
                      color: "#374151", fontFamily: "inherit", display: "block", marginBottom: 2,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = PS; e.currentTarget.style.color = P }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151" }}
                  >
                    {l.label}
                  </button>
                ))}

                <div style={{ borderTop: "1px solid rgba(108,63,197,0.08)", paddingTop: 16, marginTop: 14 }}>
                  <p style={{ fontSize: 10, fontWeight: 800, color: "#c4b5f4", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 10px", marginBottom: 12 }}>
                    Account
                  </p>
                  {user ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <button
                        onClick={() => { navigate("/chat"); setMobileOpen(false) }}
                        style={{
                          padding: "14px", borderRadius: 12, border: "none",
                          background: `linear-gradient(135deg, ${N}, ${P})`,
                          color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                          boxShadow: "0 4px 16px rgba(108,63,197,0.3)",
                        }}
                      >
                        Go to Chat
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </button>
                      <button
                        onClick={() => { dispatch(logout()); setMobileOpen(false) }}
                        style={{
                          padding: "14px", borderRadius: 12,
                          border: "1.5px solid rgba(239,68,68,0.3)",
                          background: "#fff5f5", color: "#ef4444",
                          fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                        }}
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <button
                        onClick={() => { onOpenAuth("login"); setMobileOpen(false) }}
                        style={{
                          padding: "14px", borderRadius: 12,
                          border: "1.5px solid rgba(108,63,197,0.25)",
                          background: "transparent", color: P,
                          fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                        }}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => { onOpenAuth("register"); setMobileOpen(false) }}
                        style={{
                          padding: "14px", borderRadius: 12, border: "none",
                          background: `linear-gradient(135deg, ${N}, ${P})`,
                          color: "#fff", fontSize: 15, fontWeight: 700,
                          cursor: "pointer", fontFamily: "inherit",
                          boxShadow: "0 4px 20px rgba(108,63,197,0.35)",
                        }}
                      >
                        Get Started Free →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .hdr-desktop-nav  { display: flex !important; }
        .hdr-desktop-actions { display: flex !important; }
        .hdr-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .hdr-desktop-nav  { display: none !important; }
          .hdr-desktop-actions { display: none !important; }
          .hdr-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}