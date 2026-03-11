import { useState, useEffect } from "react"
import { VIEW } from "./auth/authHelpers"
import LoginView from "./auth/LoginView"
import SignupView from "./auth/SignupView"
import ForgotPasswordView from "./auth/ForgotPasswordView"
import VerifyEmailView from "./auth/VerifyEmailView"

export default function AuthModal({ onClose, onSuccess }) {
  const [view, setView] = useState(VIEW.LOGIN)
  const [verifyData, setVerifyData] = useState(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const handleVerifyEmail = (data) => {
    setVerifyData(data)
    setView(VIEW.VERIFY_EMAIL)
  }

  const handleSuccess = () => {
    if (onSuccess) onSuccess()
    else onClose()
  }

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "rgba(15,27,61,0.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <style>{`
        @media (min-width: 560px) {
          .auth-sheet { align-self: center !important; border-radius: 28px !important; max-height: 92dvh !important; margin: 16px !important; }
        }
        @media (max-width: 559px) {
          .auth-sheet { border-radius: 24px 24px 0 0 !important; max-height: 96dvh !important; }
        }
      `}</style>
      <div
        className="auth-sheet"
        onMouseDown={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "420px", background: "#ffffff", boxShadow: "0 -4px 40px rgba(108,63,197,0.18), 0 0 0 1px rgba(108,63,197,0.07)", overflowY: "auto", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "12px", paddingBottom: "4px" }}>
          <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: "#e2d9f7" }} />
        </div>
        <button onClick={onClose}
          style={{ position: "absolute", top: "14px", right: "14px", width: "28px", height: "28px", borderRadius: "50%", border: "none", background: "#ede9fe", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c6fa0", zIndex: 10 }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#ddd6fe" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#ede9fe" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div style={{ padding: "12px 24px 32px" }}>
          {view === VIEW.LOGIN && (
            <LoginView
              onSwitch={() => setView(VIEW.SIGNUP)}
              onForgot={() => setView(VIEW.FORGOT)}
              onClose={handleSuccess}
            />
          )}
          {view === VIEW.SIGNUP && (
            <SignupView
              onSwitch={() => setView(VIEW.LOGIN)}
              onClose={handleSuccess}
              onVerifyEmail={handleVerifyEmail}
            />
          )}
          {view === VIEW.FORGOT && (
            <ForgotPasswordView onBack={() => setView(VIEW.LOGIN)} />
          )}
          {view === VIEW.VERIFY_EMAIL && verifyData && (
            <VerifyEmailView
              email={verifyData.email}
              displayName={verifyData.displayName}
              onBack={() => setView(VIEW.LOGIN)}
              onClose={handleSuccess}
            />
          )}
        </div>
      </div>
    </div>
  )
}