// import { useState, useRef, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addMessage, clearChat, setView } from "../redux/slices/chatSlice"
// import { useNavigate } from "react-router-dom"
// import Sidebar from "./Sidebar"
// import logo from "../assets/logo2.png"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_LIGHT = "#8b5cf6"
// const PURPLE_SOFT = "#ede9fe"

// const suggestions = [
//   {
//     icon: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//     bold: "Analyse",
//     rest: " commodity price trends",
//   },
//   {
//     icon: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="18" height="18" rx="2" />
//         <line x1="7" y1="8" x2="17" y2="8" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="7" y1="16" x2="13" y2="16" />
//       </svg>
//     ),
//     bold: "Research",
//     rest: " import/export regulations",
//   },
//   {
//     icon: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//       </svg>
//     ),
//     bold: "Find",
//     rest: " best export destinations",
//   },
//   {
//     icon: (
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//       </svg>
//     ),
//     bold: "Explain",
//     rest: " HS codes for basmati exports",
//   },
// ]

// function BotIcon() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
//       <circle cx="10" cy="7" r="3.5" fill="none" stroke="white" strokeWidth="1.8" />
//       <circle cx="10" cy="7" r="1.4" fill="white" />
//     </svg>
//   )
// }

// function BotAvatar() {
//   return (
//     <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//       <BotIcon />
//     </div>
//   )
// }

// function UserAvatar({ user }) {
//   if (user?.photoURL) {
//     return (
//       <img src={user.photoURL} alt="avatar" referrerPolicy="no-referrer"
//         style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${PURPLE_SOFT}`, flexShrink: 0 }}
//         onError={(e) => { e.currentTarget.style.display = "none" }} />
//     )
//   }
//   return (
//     <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: PURPLE_SOFT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//       <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
//       </svg>
//     </div>
//   )
// }

// function ThinkingBubble() {
//   return (
//     <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
//       <BotAvatar />
//       <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 14px", borderRadius: "16px 16px 16px 4px", background: "#f8f7ff", border: `1px solid ${PURPLE_SOFT}`, fontSize: "13px", color: "#7c6fa0" }}>
//         <span style={{ fontStyle: "italic" }}>Thinking…</span>
//         <span style={{ display: "flex", gap: "3px", alignItems: "center" }}>
//           {[0, 1, 2].map((i) => (
//             <span key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: PURPLE_LIGHT, animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`, display: "inline-block" }} />
//           ))}
//         </span>
//         <style>{`@keyframes dotBounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-4px);opacity:1}}`}</style>
//       </div>
//     </div>
//   )
// }

// function LandingCard({ onNavigate }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <button onClick={onNavigate} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
//       style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderRadius: "14px", border: `1.5px solid ${hovered ? "#c4b5f4" : "#e2d9f7"}`, background: hovered ? "#faf9ff" : "#fff", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.18s", boxShadow: hovered ? "0 8px 24px rgba(108,63,197,0.12)" : "0 2px 8px rgba(108,63,197,0.06)", transform: hovered ? "translateY(-2px)" : "translateY(0)", width: "100%", maxWidth: "400px" }}>
//       <div style={{ width: "40px", height: "40px", borderRadius: "11px", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(108,63,197,0.28)" }}>
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
//         </svg>
//       </div>
//       <div style={{ flex: 1, minWidth: 0 }}>
//         <p style={{ fontSize: "14px", fontWeight: 800, color: NAVY, marginBottom: "2px", letterSpacing: "-0.02em" }}>Explore Blinkus.ai →</p>
//         <p style={{ fontSize: "12px", color: "#9585c0", lineHeight: 1.4 }}>Features, launch date & your early access</p>
//       </div>
//       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={hovered ? PURPLE : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transition: "stroke 0.18s" }}>
//         <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
//       </svg>
//     </button>
//   )
// }

// function AssistantMessage({ message, onNavigate }) {
//   if (message.type === "landing_link") {
//     return (
//       <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
//         <BotAvatar />
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: 0, flex: 1, maxWidth: "min(520px,100%)" }}>
//           <div style={{ fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.68", padding: "11px 14px", borderRadius: "16px 16px 16px 4px", background: "#f8f7ff", color: NAVY, border: `1px solid ${PURPLE_SOFT}` }}>
//             {message.content}
//           </div>
//           <LandingCard onNavigate={onNavigate} />
//         </div>
//       </div>
//     )
//   }
//   return (
//     <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
//       <BotAvatar />
//       <div style={{ fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.68", padding: "11px 14px", borderRadius: "16px 16px 16px 4px", background: "#f8f7ff", color: NAVY, border: `1px solid ${PURPLE_SOFT}`, wordBreak: "break-word", minWidth: 0 }}>
//         {message.content}
//       </div>
//     </div>
//   )
// }

// function RailBtn({ onClick, title, children }) {
//   return (
//     <button onClick={onClick} title={title}
//       style={{ width: "32px", height: "32px", borderRadius: "9px", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#9585c0" }}
//       onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT; e.currentTarget.style.color = PURPLE }}
//       onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9585c0" }}>
//       {children}
//     </button>
//   )
// }

// function SendBtn({ disabled, active }) {
//   return (
//     <div style={{ width: "30px", height: "30px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: active ? `linear-gradient(135deg,${NAVY},${PURPLE})` : "#f0edf9", transition: "all 0.15s", boxShadow: active ? "0 4px 12px rgba(108,63,197,0.3)" : "none", flexShrink: 0 }}>
//       <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//         <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
//       </svg>
//     </div>
//   )
// }

// export default function Chat({ openAuth, pendingQuery, onPendingQueryUsed }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { user } = useSelector((s) => s.auth)
//   const { messages, view } = useSelector((s) => s.chat)
//   const [input, setInput] = useState("")
//   const [isThinking, setIsThinking] = useState(false)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const textareaRef = useRef(null)
//   const messagesEndRef = useRef(null)
//   const pendingHandled = useRef(false)
//   const inputDisabled = isThinking

//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"
//       textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 140) + "px"
//     }
//   }, [input])

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages, isThinking])

//   useEffect(() => {
//     if (user && pendingQuery && !pendingHandled.current) {
//       pendingHandled.current = true
//       onPendingQueryUsed()
//       sendMessage(pendingQuery)
//     }
//   }, [user, pendingQuery])

//   const sendMessage = (msg) => {
//     dispatch(addMessage({ role: "user", content: msg }))
//     if (view === "home") dispatch(setView("chat"))
//     setIsThinking(true)
//     setTimeout(() => {
//       setIsThinking(false)
//       dispatch(addMessage({
//         role: "assistant",
//         type: "landing_link",
//         content: "Great question! Blinkus.ai provides real-time trade intelligence on commodities, pricing, regulations, HS codes, and global market trends. We're launching on March 31st with full AI-powered analytics. Explore your early access dashboard below:",
//       }))
//     }, 1800)
//   }

//   const handleSend = (text) => {
//     const msg = (text !== undefined ? text : input).trim()
//     if (!msg || inputDisabled) return
//     if (!user) { setInput(""); openAuth(msg); return }
//     setInput("")
//     sendMessage(msg)
//   }

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend() }
//   }

//   return (
//     <div style={{ display: "flex", height: "100dvh", width: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", overflow: "hidden" }}>
//       <style>{`
//         *,*::before,*::after{box-sizing:border-box;}
//         ::placeholder{color:#b0a0d0;}
//         textarea{font-family:inherit;resize:none;}
//         ::-webkit-scrollbar{width:4px;}
//         ::-webkit-scrollbar-track{background:transparent;}
//         ::-webkit-scrollbar-thumb{background:#e0d9f7;border-radius:4px;}
//         .sugg-btn:hover{background:${PURPLE_SOFT}!important;border-color:#d4bffb!important;color:${PURPLE}!important;}
//       `}</style>

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <aside style={{ width: "clamp(42px,5vw,52px)", flexShrink: 0, borderRight: "1px solid #f0edf9", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "14px", paddingBottom: "14px", gap: "4px", background: "#faf9ff", zIndex: 30 }}>
//         <div style={{ marginBottom: "10px" }}>
//           <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <BotIcon />
//           </div>
//         </div>
//         <RailBtn onClick={() => setIsSidebarOpen(true)} title="Menu">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
//         </RailBtn>
//         <RailBtn onClick={() => { dispatch(clearChat()); setInput(""); pendingHandled.current = false }} title="New chat">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
//         </RailBtn>
//         <div style={{ flex: 1 }} />
//         <button onClick={() => !user && openAuth()} title={user ? "Account" : "Sign in"}
//           style={{ width: "32px", height: "32px", borderRadius: "9px", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <UserAvatar user={user} />
//         </button>
//       </aside>

//       <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
//         <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px clamp(12px,3vw,24px)", borderBottom: "1px solid #f0edf9", background: "#fff", flexShrink: 0, gap: "8px" }}>
//           <img src={logo} alt="Blinkus" style={{ height: "clamp(22px,3.5vw,28px)", objectFit: "contain", flexShrink: 0 }} />
//           <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
//             {!user ? (
//               <button onClick={() => openAuth()} style={{ padding: "7px clamp(10px,2vw,16px)", borderRadius: "10px", border: "none", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, color: "white", fontSize: "clamp(11px,1.8vw,13px)", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
//                 Sign In
//               </button>
//             ) : (
//               <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
//                 <UserAvatar user={user} />
//                 <span style={{ fontSize: "clamp(11px,1.8vw,13px)", fontWeight: 600, color: NAVY, maxWidth: "clamp(60px,12vw,120px)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   {user.displayName || user.email?.split("@")[0]}
//                 </span>
//               </div>
//             )}
//           </div>
//         </header>

//         {view === "home" ? (
//           <HomeView input={input} setInput={setInput} handleKeyDown={handleKeyDown} handleSend={handleSend} textareaRef={textareaRef} inputDisabled={inputDisabled} user={user} openAuth={openAuth} />
//         ) : (
//           <ChatView messages={messages} isThinking={isThinking} input={input} setInput={setInput} handleKeyDown={handleKeyDown} handleSend={handleSend} textareaRef={textareaRef} messagesEndRef={messagesEndRef} inputDisabled={inputDisabled} user={user} onNavigate={() => navigate("/home")} />
//         )}
//       </div>
//     </div>
//   )
// }

// function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, user, openAuth }) {
//   return (
//     <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflowY: "auto", padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px)" }}>
//       <div style={{ width: "100%", maxWidth: "600px" }}>
//         <div style={{ textAlign: "center", marginBottom: "clamp(20px,4vw,36px)" }}>
//           <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
//             <img src={logo} alt="Blinkus" style={{ height: "clamp(28px,5vw,36px)", objectFit: "contain" }} />
//           </div>
//           <h1 style={{ fontSize: "clamp(20px,4.5vw,30px)", fontWeight: 900, color: NAVY, letterSpacing: "-0.04em", marginBottom: "8px", lineHeight: 1.18 }}>
//             What can I help you{" "}
//             <span style={{ background: `linear-gradient(135deg,${PURPLE},${PURPLE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>trade today?</span>
//           </h1>
//           <p style={{ fontSize: "clamp(12px,2vw,14px)", color: "#9585c0", lineHeight: 1.6 }}>
//             Ask about import/export, commodities, duties, regulations, pricing
//           </p>
//         </div>

//         <div style={{ position: "relative", marginBottom: "12px" }}>
//           <div style={{ position: "relative", borderRadius: "16px", border: `1.5px solid #e2d9f7`, background: "#fff", boxShadow: "0 4px 20px rgba(108,63,197,0.07)", transition: "border-color 0.15s,box-shadow 0.15s" }}
//             onFocusCapture={(e) => { e.currentTarget.style.borderColor = PURPLE_LIGHT; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(108,63,197,0.09)" }}
//             onBlurCapture={(e) => { e.currentTarget.style.borderColor = "#e2d9f7"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(108,63,197,0.07)" }}>
//             <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} rows={1}
//               placeholder="Ask about trade regulations, commodity prices, HS codes…"
//               disabled={inputDisabled}
//               style={{ width: "100%", background: "transparent", color: NAVY, fontSize: "clamp(13px,2vw,15px)", lineHeight: "1.6", padding: "14px 50px 36px 16px", border: "none", outline: "none", borderRadius: "16px", maxHeight: "140px", caretColor: PURPLE }} />
//             <button onClick={() => handleSend()} disabled={inputDisabled || !input.trim()}
//               style={{ position: "absolute", bottom: "10px", right: "10px", width: "30px", height: "30px", borderRadius: "8px", border: "none", cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", background: input.trim() && !inputDisabled ? `linear-gradient(135deg,${NAVY},${PURPLE})` : "#f0edf9", transition: "all 0.15s", boxShadow: input.trim() && !inputDisabled ? "0 4px 12px rgba(108,63,197,0.3)" : "none" }}>
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !inputDisabled ? "white" : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//             </button>
//           </div>
//           <div style={{ position: "absolute", bottom: "10px", left: "13px" }}>
//             <span style={{ fontSize: "9px", color: "#c4b5f4", fontWeight: 700, letterSpacing: "0.07em" }}>BLINKUS AI</span>
//           </div>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
//           {suggestions.map((s, i) => (
//             <button key={i} className="sugg-btn" onClick={() => handleSend(s.bold + s.rest)} disabled={inputDisabled}
//               style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "9px 11px", borderRadius: "11px", border: "1px solid #f0edf9", background: "#faf9ff", cursor: inputDisabled ? "not-allowed" : "pointer", fontSize: "clamp(11px,1.6vw,12.5px)", color: "#7c6fa0", textAlign: "left", fontFamily: "inherit", transition: "all 0.14s", lineHeight: 1.4 }}>
//               <span style={{ color: PURPLE_LIGHT, flexShrink: 0, display: "flex", paddingTop: "1px" }}>{s.icon}</span>
//               <span style={{ wordBreak: "break-word" }}><strong style={{ fontWeight: 700, color: NAVY }}>{s.bold}</strong>{s.rest}</span>
//             </button>
//           ))}
//         </div>

//         {!user && (
//           <p style={{ textAlign: "center", fontSize: "12px", color: "#b0a0d0", marginTop: "16px" }}>
//             <span onClick={() => openAuth()} style={{ color: PURPLE, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Sign in</span> to save your conversations
//           </p>
//         )}
//       </div>
//     </div>
//   )
// }

// function ChatView({ messages, isThinking, input, setInput, handleKeyDown, handleSend, textareaRef, messagesEndRef, inputDisabled, user, onNavigate }) {
//   return (
//     <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
//       <div style={{ flex: 1, overflowY: "auto" }}>
//         <div style={{ width: "100%", maxWidth: "660px", margin: "0 auto", padding: "clamp(14px,3vw,28px) clamp(12px,3vw,20px) 10px", display: "flex", flexDirection: "column", gap: "14px" }}>
//           {messages.map((m, i) => (
//             <div key={i}>
//               {m.role === "user" ? (
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", justifyContent: "flex-end" }}>
//                   <div style={{ fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.65", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", maxWidth: "min(460px,80%)", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, color: "#fff", wordBreak: "break-word" }}>
//                     {m.content}
//                   </div>
//                   <UserAvatar user={user} />
//                 </div>
//               ) : (
//                 <AssistantMessage message={m} onNavigate={onNavigate} />
//               )}
//             </div>
//           ))}
//           {isThinking && <ThinkingBubble />}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <div style={{ borderTop: "1px solid #f0edf9", background: "#fff", padding: "clamp(8px,2vw,14px) clamp(12px,3vw,20px) clamp(10px,2vw,16px)" }}>
//         <div style={{ width: "100%", maxWidth: "660px", margin: "0 auto" }}>
//           <div style={{ position: "relative", borderRadius: "14px", background: "#fff", border: `1.5px solid #e2d9f7`, boxShadow: "0 2px 10px rgba(108,63,197,0.06)", transition: "border-color 0.15s,box-shadow 0.15s" }}
//             onFocusCapture={(e) => { e.currentTarget.style.borderColor = PURPLE_LIGHT; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.09)" }}
//             onBlurCapture={(e) => { e.currentTarget.style.borderColor = "#e2d9f7"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(108,63,197,0.06)" }}>
//             <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} rows={1}
//               placeholder={isThinking ? "Blinkus is thinking…" : "Ask your trade question…"}
//               disabled={inputDisabled}
//               style={{ width: "100%", background: "transparent", color: NAVY, fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.6", padding: "12px 46px 32px 16px", border: "none", outline: "none", borderRadius: "14px", maxHeight: "140px", caretColor: PURPLE, opacity: inputDisabled ? 0.5 : 1 }} />
//             <button onClick={() => handleSend()} disabled={inputDisabled || !input.trim()}
//               style={{ position: "absolute", bottom: "9px", right: "9px", width: "28px", height: "28px", borderRadius: "7px", border: "none", cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", background: input.trim() && !inputDisabled ? `linear-gradient(135deg,${NAVY},${PURPLE})` : "#f0edf9", transition: "all 0.15s" }}>
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !inputDisabled ? "white" : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }









import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage, clearChat, setView } from "../redux/slices/chatSlice"
import { useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import logo from "../assets/logo2.png" 

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_LIGHT = "#8b5cf6"
const PURPLE_SOFT = "#ede9fe"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const suggestions = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    bold: "Analyse",
    rest: " basmati rice export prices to UAE",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="7" y1="8" x2="17" y2="8" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="7" y1="16" x2="13" y2="16" />
      </svg>
    ),
    bold: "Top",
    rest: " exporters of maize from India",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    bold: "Find",
    rest: " HS code for non-basmati rice exports",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    bold: "Volume",
    rest: " of pulses exported to Saudi Arabia",
  },
]

function BotIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="10" cy="7" r="1.4" fill="white" />
    </svg>
  )
}

function BotAvatar() {
  return (
    <div style={{ width: "28px", height: "28px", borderRadius: "9px", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <BotIcon />
    </div>
  )
}

function UserAvatar({ user }) {
  if (user?.photoURL) {
    return (
      <img src={user.photoURL} alt="avatar" referrerPolicy="no-referrer"
        style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${PURPLE_SOFT}`, flexShrink: 0 }}
        onError={(e) => { e.currentTarget.style.display = "none" }} />
    )
  }
  return (
    <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: PURPLE_SOFT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

function ThinkingBubble() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <BotAvatar />
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "11px 14px", borderRadius: "16px 16px 16px 4px", background: "#f8f7ff", border: `1px solid ${PURPLE_SOFT}`, fontSize: "13px", color: "#7c6fa0" }}>
        <span style={{ fontStyle: "italic" }}>Thinking…</span>
        <span style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: PURPLE_LIGHT, animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`, display: "inline-block" }} />
          ))}
        </span>
        <style>{`@keyframes dotBounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-4px);opacity:1}}`}</style>
      </div>
    </div>
  )
}

function MarkdownRenderer({ text }) {
  const lines = text.split("\n")
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} style={{ fontSize: "13px", fontWeight: 800, color: NAVY, margin: "12px 0 4px", letterSpacing: "-0.01em" }}>
          {renderInline(line.slice(4))}
        </h3>
      )
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{ fontSize: "14px", fontWeight: 800, color: NAVY, margin: "14px 0 6px", letterSpacing: "-0.02em" }}>
          {renderInline(line.slice(3))}
        </h2>
      )
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} style={{ fontSize: "15px", fontWeight: 900, color: NAVY, margin: "14px 0 8px", letterSpacing: "-0.02em" }}>
          {renderInline(line.slice(2))}
        </h1>
      )
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems = []
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        listItems.push(
          <li key={i} style={{ fontSize: "13px", color: "#3d3459", lineHeight: "1.65", marginBottom: "3px" }}>
            {renderInline(lines[i].slice(2))}
          </li>
        )
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: "16px", margin: "6px 0", listStyle: "none" }}>
          {listItems.map((item, idx) => (
            <li key={idx} style={{ display: "flex", gap: "6px", fontSize: "13px", color: "#3d3459", lineHeight: "1.65", marginBottom: "3px" }}>
              <span style={{ color: PURPLE_LIGHT, flexShrink: 0, marginTop: "2px" }}>▸</span>
              <span>{item.props.children}</span>
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const listItems = []
      let num = 1
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push({ num, content: lines[i].replace(/^\d+\. /, "") })
        i++
        num++
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ paddingLeft: "0", margin: "6px 0", listStyle: "none" }}>
          {listItems.map((item, idx) => (
            <li key={idx} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#3d3459", lineHeight: "1.65", marginBottom: "4px" }}>
              <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0, minWidth: "16px" }}>{item.num}.</span>
              <span>{renderInline(item.content)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    } else if (line.startsWith("|")) {
      const tableLines = []
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      elements.push(renderTable(tableLines, i))
      continue
    } else if (line.startsWith("---") || line.startsWith("***")) {
      elements.push(<hr key={i} style={{ border: "none", borderTop: `1px solid ${PURPLE_SOFT}`, margin: "10px 0" }} />)
    } else if (line.trim() === "") {
      elements.push(<div key={i} style={{ height: "6px" }} />)
    } else {
      elements.push(
        <p key={i} style={{ fontSize: "13px", color: "#3d3459", lineHeight: "1.7", margin: "2px 0" }}>
          {renderInline(line)}
        </p>
      )
    }
    i++
  }

  return <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>{elements}</div>
}

function renderTable(lines, keyBase) {
  const rows = lines.map((l) =>
    l.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map((c) => c.trim())
  )
  const headers = rows[0] || []
  const dataRows = rows.filter((_, idx) => idx > 1)

  return (
    <div key={keyBase} style={{ overflowX: "auto", margin: "8px 0", borderRadius: "8px", border: `1px solid ${PURPLE_SOFT}` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
        <thead>
          <tr style={{ background: PURPLE_SOFT }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "7px 10px", textAlign: "left", fontWeight: 700, color: NAVY, whiteSpace: "nowrap" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: `1px solid #f0edf9`, background: ri % 2 === 0 ? "#fff" : "#faf9ff" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "6px 10px", color: "#3d3459" }}>
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderInline(text) {
  if (!text) return null
  const parts = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    const codeMatch = remaining.match(/`(.+?)`/)

    const firstBold = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity
    const firstCode = codeMatch ? remaining.indexOf(codeMatch[0]) : Infinity

    if (firstBold === Infinity && firstCode === Infinity) {
      parts.push(remaining)
      break
    }

    if (firstBold < firstCode) {
      if (firstBold > 0) parts.push(remaining.slice(0, firstBold))
      parts.push(<strong key={key++} style={{ fontWeight: 700, color: NAVY }}>{boldMatch[1]}</strong>)
      remaining = remaining.slice(firstBold + boldMatch[0].length)
    } else {
      if (firstCode > 0) parts.push(remaining.slice(0, firstCode))
      parts.push(
        <code key={key++} style={{ background: PURPLE_SOFT, color: PURPLE, padding: "1px 5px", borderRadius: "4px", fontSize: "11px", fontFamily: "monospace" }}>
          {codeMatch[1]}
        </code>
      )
      remaining = remaining.slice(firstCode + codeMatch[0].length)
    }
  }

  return parts
}

function DataSourceBadge({ source }) {
  const isDB = source === "database"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "8px" }}>
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: isDB ? "#22c55e" : "#f59e0b" }} />
      <span style={{ fontSize: "10px", color: isDB ? "#16a34a" : "#b45309", fontWeight: 600 }}>
        {isDB ? "From trade database" : "AI general knowledge"}
      </span>
    </div>
  )
}

function AssistantMessage({ message }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
      <BotAvatar />
      <div style={{ minWidth: 0, flex: 1, maxWidth: "min(540px,100%)" }}>
        <div style={{ padding: "12px 14px", borderRadius: "16px 16px 16px 4px", background: "#f8f7ff", border: `1px solid ${PURPLE_SOFT}`, wordBreak: "break-word" }}>
          <MarkdownRenderer text={message.content} />
        </div>
        {message.dataSource && <DataSourceBadge source={message.dataSource} />}
      </div>
    </div>
  )
}

function RailBtn({ onClick, title, children }) {
  return (
    <button onClick={onClick} title={title}
      style={{ width: "32px", height: "32px", borderRadius: "9px", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#9585c0" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT; e.currentTarget.style.color = PURPLE }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#9585c0" }}>
      {children}
    </button>
  )
}

export default function Chat({ openAuth, pendingQuery, onPendingQueryUsed }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((s) => s.auth)
  const { messages, view } = useSelector((s) => s.chat)
  const [input, setInput] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)
  const pendingHandled = useRef(false)
  const inputDisabled = isThinking

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 140) + "px"
    }
  }, [input])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isThinking])

  useEffect(() => {
    if (user && pendingQuery && !pendingHandled.current) {
      pendingHandled.current = true
      onPendingQueryUsed()
      sendMessage(pendingQuery)
    }
  }, [user, pendingQuery])

  const sendMessage = async (msg) => {
    dispatch(addMessage({ role: "user", content: msg }))
    if (view === "home") dispatch(setView("chat"))
    setIsThinking(true)

    try {
      const conversationHistory = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }))

      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: msg, conversationHistory }),
      }) 

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || `Server error ${res.status}`)
      }

      const data = await res.json()

      dispatch(
        addMessage({
          role: "assistant",
          content: data.answer,
          dataSource: data.dataSource,
          metadata: data.metadata,
        })
      )
    } catch (err) {
      dispatch(
        addMessage({
          role: "assistant",
          content: `**Something went wrong.** ${err.message || "Please try again in a moment."}`,
          dataSource: "error",
        })
      )
    } finally {
      setIsThinking(false)
    }
  }

  const handleSend = (text) => {
    const msg = (text !== undefined ? text : input).trim()
    if (!msg || inputDisabled) return
    if (!user) { setInput(""); openAuth(msg); return }
    setInput("")
    sendMessage(msg)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  return (
    <div style={{ display: "flex", height: "100dvh", width: "100%", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", overflow: "hidden" }}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;}
        ::placeholder{color:#b0a0d0;}
        textarea{font-family:inherit;resize:none;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#e0d9f7;border-radius:4px;}
        .sugg-btn:hover{background:${PURPLE_SOFT}!important;border-color:#d4bffb!important;color:${PURPLE}!important;}
      `}</style>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <aside style={{ width: "clamp(42px,5vw,52px)", flexShrink: 0, borderRight: "1px solid #f0edf9", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "14px", paddingBottom: "14px", gap: "4px", background: "#faf9ff", zIndex: 30 }}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BotIcon />
          </div>
        </div>
        <RailBtn onClick={() => setIsSidebarOpen(true)} title="Menu">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </RailBtn>
        <RailBtn onClick={() => { dispatch(clearChat()); setInput(""); pendingHandled.current = false }} title="New chat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        </RailBtn>
        <div style={{ flex: 1 }} />
        <button onClick={() => !user && openAuth()} title={user ? "Account" : "Sign in"}
          style={{ width: "32px", height: "32px", borderRadius: "9px", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <UserAvatar user={user} />
        </button>
      </aside>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px clamp(12px,3vw,24px)", borderBottom: "1px solid #f0edf9", background: "#fff", flexShrink: 0, gap: "8px" }}>
          <img src={logo} alt="Blinkus" style={{ height: "clamp(22px,3.5vw,28px)", objectFit: "contain", flexShrink: 0 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            {!user ? (
              <button onClick={() => openAuth()} style={{ padding: "7px clamp(10px,2vw,16px)", borderRadius: "10px", border: "none", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, color: "white", fontSize: "clamp(11px,1.8vw,13px)", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                Sign In
              </button>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <UserAvatar user={user} />
                <span style={{ fontSize: "clamp(11px,1.8vw,13px)", fontWeight: 600, color: NAVY, maxWidth: "clamp(60px,12vw,120px)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {user.displayName || user.email?.split("@")[0]}
                </span>
              </div>
            )}
          </div>
        </header>

        {view === "home" ? (
          <HomeView input={input} setInput={setInput} handleKeyDown={handleKeyDown} handleSend={handleSend} textareaRef={textareaRef} inputDisabled={inputDisabled} user={user} openAuth={openAuth} />
        ) : (
          <ChatView messages={messages} isThinking={isThinking} input={input} setInput={setInput} handleKeyDown={handleKeyDown} handleSend={handleSend} textareaRef={textareaRef} messagesEndRef={messagesEndRef} inputDisabled={inputDisabled} user={user} />
        )}
      </div>
    </div>
  )
}

function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, user, openAuth }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflowY: "auto", padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px)" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(20px,4vw,36px)" }}>
          <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="Blinkus" style={{ height: "clamp(28px,5vw,36px)", objectFit: "contain" }} />
          </div>
          <h1 style={{ fontSize: "clamp(20px,4.5vw,30px)", fontWeight: 900, color: NAVY, letterSpacing: "-0.04em", marginBottom: "8px", lineHeight: 1.18 }}>
            What can I help you{" "}
            <span style={{ background: `linear-gradient(135deg,${PURPLE},${PURPLE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>trade today?</span>
          </h1>
          <p style={{ fontSize: "clamp(12px,2vw,14px)", color: "#9585c0", lineHeight: 1.6 }}>
            Ask about commodities, export data, HS codes, pricing, duties & regulations
          </p>
        </div>

        <div style={{ position: "relative", marginBottom: "12px" }}>
          <div style={{ position: "relative", borderRadius: "16px", border: `1.5px solid #e2d9f7`, background: "#fff", boxShadow: "0 4px 20px rgba(108,63,197,0.07)", transition: "border-color 0.15s,box-shadow 0.15s" }}
            onFocusCapture={(e) => { e.currentTarget.style.borderColor = PURPLE_LIGHT; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(108,63,197,0.09)" }}
            onBlurCapture={(e) => { e.currentTarget.style.borderColor = "#e2d9f7"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(108,63,197,0.07)" }}>
            <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} rows={1}
              placeholder="Ask about rice export prices, HS codes, top importers…"
              disabled={inputDisabled}
              style={{ width: "100%", background: "transparent", color: NAVY, fontSize: "clamp(13px,2vw,15px)", lineHeight: "1.6", padding: "14px 50px 36px 16px", border: "none", outline: "none", borderRadius: "16px", maxHeight: "140px", caretColor: PURPLE }} />
            <button onClick={() => handleSend()} disabled={inputDisabled || !input.trim()}
              style={{ position: "absolute", bottom: "10px", right: "10px", width: "30px", height: "30px", borderRadius: "8px", border: "none", cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", background: input.trim() && !inputDisabled ? `linear-gradient(135deg,${NAVY},${PURPLE})` : "#f0edf9", transition: "all 0.15s", boxShadow: input.trim() && !inputDisabled ? "0 4px 12px rgba(108,63,197,0.3)" : "none" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !inputDisabled ? "white" : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          <div style={{ position: "absolute", bottom: "10px", left: "13px" }}>
            <span style={{ fontSize: "9px", color: "#c4b5f4", fontWeight: 700, letterSpacing: "0.07em" }}>BLINKUS AI</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
          {suggestions.map((s, i) => (
            <button key={i} className="sugg-btn" onClick={() => handleSend(s.bold + s.rest)} disabled={inputDisabled}
              style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "9px 11px", borderRadius: "11px", border: "1px solid #f0edf9", background: "#faf9ff", cursor: inputDisabled ? "not-allowed" : "pointer", fontSize: "clamp(11px,1.6vw,12.5px)", color: "#7c6fa0", textAlign: "left", fontFamily: "inherit", transition: "all 0.14s", lineHeight: 1.4 }}>
              <span style={{ color: PURPLE_LIGHT, flexShrink: 0, display: "flex", paddingTop: "1px" }}>{s.icon}</span>
              <span style={{ wordBreak: "break-word" }}><strong style={{ fontWeight: 700, color: NAVY }}>{s.bold}</strong>{s.rest}</span>
            </button>
          ))}
        </div>

        {!user && (
          <p style={{ textAlign: "center", fontSize: "12px", color: "#b0a0d0", marginTop: "16px" }}>
            <span onClick={() => openAuth()} style={{ color: PURPLE, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Sign in</span> to save your conversations
          </p>
        )}
      </div>
    </div>
  )
}

function ChatView({ messages, isThinking, input, setInput, handleKeyDown, handleSend, textareaRef, messagesEndRef, inputDisabled, user }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto", padding: "clamp(14px,3vw,28px) clamp(12px,3vw,20px) 10px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {messages.map((m, i) => (
            <div key={i}>
              {m.role === "user" ? (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", justifyContent: "flex-end" }}>
                  <div style={{ fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.65", padding: "10px 14px", borderRadius: "16px 16px 4px 16px", maxWidth: "min(460px,80%)", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, color: "#fff", wordBreak: "break-word" }}>
                    {m.content}
                  </div>
                  <UserAvatar user={user} />
                </div>
              ) : (
                <AssistantMessage message={m} />
              )}
            </div>
          ))}
          {isThinking && <ThinkingBubble />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div style={{ borderTop: "1px solid #f0edf9", background: "#fff", padding: "clamp(8px,2vw,14px) clamp(12px,3vw,20px) clamp(10px,2vw,16px)" }}>
        <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ position: "relative", borderRadius: "14px", background: "#fff", border: `1.5px solid #e2d9f7`, boxShadow: "0 2px 10px rgba(108,63,197,0.06)", transition: "border-color 0.15s,box-shadow 0.15s" }}
            onFocusCapture={(e) => { e.currentTarget.style.borderColor = PURPLE_LIGHT; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.09)" }}
            onBlurCapture={(e) => { e.currentTarget.style.borderColor = "#e2d9f7"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(108,63,197,0.06)" }}>
            <textarea ref={textareaRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} rows={1}
              placeholder={isThinking ? "Blinkus is analyzing…" : "Ask your trade question…"}
              disabled={inputDisabled}
              style={{ width: "100%", background: "transparent", color: NAVY, fontSize: "clamp(13px,1.8vw,14px)", lineHeight: "1.6", padding: "12px 46px 32px 16px", border: "none", outline: "none", borderRadius: "14px", maxHeight: "140px", caretColor: PURPLE, opacity: inputDisabled ? 0.5 : 1 }} />
            <button onClick={() => handleSend()} disabled={inputDisabled || !input.trim()}
              style={{ position: "absolute", bottom: "9px", right: "9px", width: "28px", height: "28px", borderRadius: "7px", border: "none", cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", background: input.trim() && !inputDisabled ? `linear-gradient(135deg,${NAVY},${PURPLE})` : "#f0edf9", transition: "all 0.15s" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !inputDisabled ? "white" : "#c4b5f4"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}