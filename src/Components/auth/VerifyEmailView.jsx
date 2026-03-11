import { useState, useEffect, useRef } from "react"
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { ErrorBanner, SuccessBanner, InfoBanner, PrimaryButton, BackLink } from "./AuthUiKit"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

export default function VerifyEmailView({ email, displayName, onBack, onClose }) {
  const [checkLoading, setCheckLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [resendTimer, setResendTimer] = useState(60)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [tempPassword, setTempPassword] = useState("")
  const [needPassword, setNeedPassword] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(timerRef.current); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const restartTimer = () => {
    setResendTimer(60)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(timerRef.current); return 0 }
        return t - 1
      })
    }, 1000)
  }

  const handleCheckVerification = async (passwordOverride) => {
    const pwd = passwordOverride || tempPassword
    if (!pwd) {
      setNeedPassword(true)
      return
    }
    setCheckLoading(true)
    setError("")
    try {
      const result = await signInWithEmailAndPassword(auth, email, pwd)
      const u = result.user
      if (u.emailVerified) {
        onClose()
      } else {
        setError("Email not verified yet. Please click the link in your inbox first, then try again.")
        const { signOut } = await import("firebase/auth")
        await signOut(auth)
      }
    } catch (err) {
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Incorrect password. Please enter the password you used to sign up.")
        setNeedPassword(true)
      } else {
        setError("Failed to check verification. Please try again.")
      }
    } finally {
      setCheckLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendTimer > 0 || resending) return
    setResending(true)
    setError("")
    try {
      const pwd = tempPassword
      if (!pwd) { setNeedPassword(true); setResending(false); return }
      const result = await signInWithEmailAndPassword(auth, email, pwd)
      await sendEmailVerification(result.user)
      const { signOut } = await import("firebase/auth")
      await signOut(auth)
      setSuccess("Verification email resent! Check your inbox.")
      restartTimer()
      setTimeout(() => setSuccess(""), 5000)
    } catch (_) {
      setError("Could not resend. Please wait a moment and try again.")
    } finally {
      setResending(false)
    }
  }

  return (
    <div>
      <BackLink onClick={onBack} label="Back to sign in" />
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 16px", background: "linear-gradient(135deg,#f5f3ff,#ede9fe)", border: "2px solid #ddd6fe", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "20px", height: "20px", borderRadius: "50%", background: PURPLE, border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>
        <h2 style={{ fontSize: "21px", fontWeight: 900, color: NAVY, marginBottom: "6px", letterSpacing: "-0.04em" }}>Verify your email</h2>
        <p style={{ fontSize: "13px", color: "#7c6fa0", lineHeight: "1.55" }}>
          {displayName ? `Hi ${displayName}! We sent a verification link to` : "We sent a verification link to"}<br />
          <strong style={{ color: NAVY }}>{email}</strong>
        </p>
      </div>
      <ErrorBanner message={error} />
      <SuccessBanner message={success} />
      <InfoBanner>Click the verification link in your email, then enter your password below and press the button to continue.</InfoBanner>

      <div style={{ marginBottom: "14px" }}>
        <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: NAVY, marginBottom: "6px" }}>Your password</label>
        <input
          type="password"
          value={tempPassword}
          onChange={(e) => { setTempPassword(e.target.value); setNeedPassword(false); setError("") }}
          onKeyDown={(e) => { if (e.key === "Enter") handleCheckVerification() }}
          placeholder="Enter your password to continue"
          style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: "12px", fontSize: "14px", color: NAVY, border: `1.5px solid ${needPassword ? "#fca5a5" : "#e2d9f7"}`, background: needPassword ? "#fff5f5" : "#faf9ff", outline: "none", fontFamily: "inherit", caretColor: PURPLE }}
          onFocus={(e) => { e.target.style.borderColor = PURPLE; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.1)"; e.target.style.background = "#fff" }}
          onBlur={(e) => { e.target.style.borderColor = needPassword ? "#fca5a5" : "#e2d9f7"; e.target.style.boxShadow = "none"; e.target.style.background = needPassword ? "#fff5f5" : "#faf9ff" }}
        />
        {needPassword && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "5px" }}>Password is required to verify your account</p>}
      </div>

      <PrimaryButton onClick={() => handleCheckVerification()} loading={checkLoading} disabled={!tempPassword} color="green">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        I've Verified — Continue
      </PrimaryButton>

      <div style={{ marginTop: "16px", textAlign: "center" }}>
        {resendTimer > 0 ? (
          <p style={{ fontSize: "13px", color: "#b0a0d0" }}>
            Resend in <span style={{ fontWeight: 700, color: NAVY, fontVariantNumeric: "tabular-nums" }}>0:{resendTimer.toString().padStart(2, "0")}</span>
          </p>
        ) : (
          <button onClick={handleResend} disabled={resending}
            style={{ fontSize: "13px", fontWeight: 700, color: PURPLE, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
            {resending ? "Sending…" : "Resend verification email"}
          </button>
        )}
      </div>

      <div style={{ marginTop: "20px", padding: "12px 14px", borderRadius: "12px", background: "#faf9ff", border: "1px solid #f0edf9" }}>
        <p style={{ fontSize: "11.5px", color: "#7c6fa0", lineHeight: "1.6", margin: 0 }}>
          <strong style={{ color: NAVY }}>Didn't receive the email?</strong><br />
          Check your spam folder. The link expires in 24 hours. Make sure <strong>{email}</strong> is correct.
        </p>
      </div>
    </div>
  )
}