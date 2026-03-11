import { useState, useEffect, useRef } from "react"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { getError, isValidEmail } from "./authHelpers"
import { ErrorBanner, InputField, InfoBanner, PrimaryButton, ModalHeader, BackLink } from "./AuthUiKit"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

const ACTION_CODE_SETTINGS = {
  url: window.location.origin + "/",
  handleCodeInApp: false,
}

export default function ForgotPasswordView({ onBack }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => () => clearInterval(timerRef.current), [])

  const startTimer = () => {
    setResendTimer(60)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(timerRef.current); return 0 }
        return t - 1
      })
    }, 1000)
  }

  const doSend = async () => {
    await sendPasswordResetEmail(auth, email.trim(), ACTION_CODE_SETTINGS)
    setSent(true)
    startTimer()
  }

  const handleSend = async () => {
    if (!email.trim()) { setError("Please enter your email address."); return }
    if (!isValidEmail(email)) { setError("Enter a valid email address."); return }
    setError("")
    setLoading(true)
    try {
      await doSend()
    } catch (err) {
      setError(getError(err.code))
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendTimer > 0 || loading) return
    setError("")
    setLoading(true)
    try {
      await doSend()
    } catch (err) {
      setError(getError(err.code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <BackLink onClick={onBack} />
      <ModalHeader
        iconBg={`linear-gradient(135deg,${PURPLE},${NAVY})`}
        iconShadow="0 8px 24px rgba(108,63,197,0.3)"
        title="Reset password"
        subtitle={sent ? "Check your email inbox" : "We'll send you a reset link"}
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        }
      />
      <ErrorBanner message={error} />
      {!sent ? (
        <>
          <InfoBanner>Enter the email linked to your account and we'll send a password reset link straight to your inbox.</InfoBanner>
          <InputField label="Email address" type="email" value={email} autoFocus autoComplete="email"
            onChange={(e) => { setEmail(e.target.value); setError("") }}
            onKeyDown={(e) => { if (e.key === "Enter") handleSend() }}
            placeholder="you@example.com" />
          <PrimaryButton onClick={handleSend} loading={loading} disabled={!email.trim()}>
            Send Reset Link →
          </PrimaryButton>
        </>
      ) : (
        <>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "20px", textAlign: "center", marginBottom: "20px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#15803d", marginBottom: "4px" }}>Reset link sent!</p>
            <p style={{ fontSize: "12px", color: "#166534", lineHeight: "1.5" }}>
              Sent to <strong>{email}</strong>.<br />Check your inbox and spam folder.
            </p>
          </div>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            {resendTimer > 0 ? (
              <p style={{ fontSize: "13px", color: "#b0a0d0" }}>
                Resend in <span style={{ fontWeight: 700, color: NAVY, fontVariantNumeric: "tabular-nums" }}>0:{resendTimer.toString().padStart(2, "0")}</span>
              </p>
            ) : (
              <button onClick={handleResend} disabled={loading}
                style={{ fontSize: "13px", fontWeight: 700, color: PURPLE, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                {loading ? "Sending…" : "Resend reset link"}
              </button>
            )}
          </div>
          <button onClick={onBack}
            style={{ width: "100%", padding: "12px", borderRadius: "13px", border: "1.5px solid #e2d9f7", background: "#ffffff", fontSize: "14px", fontWeight: 700, color: NAVY, cursor: "pointer", fontFamily: "inherit" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#faf9ff" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff" }}>
            Back to Sign In
          </button>
        </>
      )}
    </div>
  )
}