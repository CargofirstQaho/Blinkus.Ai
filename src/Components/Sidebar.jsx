import { useDispatch, useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { clearUser } from "../redux/slices/authSlice"
import { clearChat } from "../redux/slices/chatSlice"
import logo from "../assets/logo2.png"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_SOFT = "#ede9fe"

export default function Sidebar({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.auth)

  const handleLogout = async () => {
    await signOut(auth)
    dispatch(clearUser())
    dispatch(clearChat())
    onClose()
  }

  const handleNewChat = () => {
    dispatch(clearChat())
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, background: "rgba(15,27,61,0.35)", zIndex: 40, backdropFilter: "blur(2px)" }} />
          <motion.aside
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            style={{ position: "fixed", left: 0, top: 0, height: "100dvh", width: "clamp(240px,75vw,280px)", background: "#fff", borderRight: "1px solid #f0edf9", zIndex: 50, display: "flex", flexDirection: "column", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", boxShadow: "4px 0 24px rgba(108,63,197,0.08)" }}>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 14px", borderBottom: "1px solid #f0edf9" }}>
              <img src={logo} alt="Blinkus" style={{ height: "24px", objectFit: "contain" }} />
              <button onClick={onClose}
                style={{ width: "30px", height: "30px", borderRadius: "8px", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#9585c0" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>

            <div style={{ padding: "10px", borderBottom: "1px solid #f9f7ff" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#b0a0d0", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 8px 6px" }}>Navigation</p>
              <NavBtn onClick={handleNewChat} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>}>New Chat</NavBtn>
              <NavBtn onClick={() => {}} icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}>Chat History</NavBtn>
            </div>

            <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#b0a0d0", letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 8px 6px" }}>Topics</p>
              {["Commodity Pricing", "Export Regulations", "Import Duties", "Trade Routes", "HS Codes", "Compliance"].map((topic) => (
                <button key={topic}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "9px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#7c6fa0", textAlign: "left", fontFamily: "inherit" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT; e.currentTarget.style.color = PURPLE }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#7c6fa0" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#d4bffb", flexShrink: 0 }} />
                  {topic}
                </button>
              ))}
            </div>

            <div style={{ padding: "14px", borderTop: "1px solid #f0edf9", background: "#faf9ff" }}>
              {user ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 12px", borderRadius: "12px", background: "#fff", border: "1px solid #f0edf9", marginBottom: "10px", boxShadow: "0 1px 4px rgba(108,63,197,0.05)" }}>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="avatar" referrerPolicy="no-referrer"
                        style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, boxShadow: `0 0 0 2px ${PURPLE_SOFT}` }}
                        onError={(e) => { e.currentTarget.style.display = "none" }} />
                    ) : (
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg,${PURPLE_SOFT},#ddd6fe)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                      </div>
                    )}
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: NAVY, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.displayName || user.phoneNumber || "User"}</p>
                      {user.email && <p style={{ fontSize: "11px", color: "#9585c0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: "1px" }}>{user.email}</p>}
                    </div>
                  </div>
                  <button onClick={handleLogout}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", padding: "9px 16px", borderRadius: "11px", border: "1px solid #fecaca", background: "#fff5f5", cursor: "pointer", fontSize: "13px", fontWeight: 700, color: "#ef4444", fontFamily: "inherit" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#fef2f2" }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#fff5f5" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Sign Out
                  </button>
                </>
              ) : (
                <p style={{ fontSize: "12px", color: "#b0a0d0", textAlign: "center", padding: "4px 0 8px" }}>Sign in to save your chats</p>
              )}
              <p style={{ fontSize: "10px", color: "#d4bffb", textAlign: "center", marginTop: "10px" }}>© 2026 Blinkus.ai</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function NavBtn({ onClick, icon, children }) {
  return (
    <button onClick={onClick}
      style={{ width: "100%", display: "flex", alignItems: "center", gap: "9px", padding: "9px 10px", borderRadius: "10px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#7c6fa0", textAlign: "left", fontFamily: "inherit", fontWeight: 600 }}
      onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT; e.currentTarget.style.color = PURPLE }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#7c6fa0" }}>
      <span style={{ color: "#b0a0d0", display: "flex", flexShrink: 0 }}>{icon}</span>
      {children}
    </button>
  )
}