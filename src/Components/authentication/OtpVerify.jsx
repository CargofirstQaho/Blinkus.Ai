import { useState, useCallback, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { api } from "../../utils/api"
import { c, N, P, PL, font, Spinner, OtpInput } from "./AuthShared"

export default function OtpVerify({ email, onSuccess, onBack }) {
  const dispatch = useDispatch()
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [cooldown, setCooldown] = useState(60)
  const cooldownRef = useRef(null)

  useEffect(() => {
    cooldownRef.current = setInterval(() => {
      setCooldown((p) => {
        if (p <= 1) { clearInterval(cooldownRef.current); return 0 }
        return p - 1
      })
    }, 1000)
    return () => clearInterval(cooldownRef.current)
  }, [])

  const handleVerify = async (e) => {
    e?.preventDefault()
    if (otp.replace(/\s/g, "").length < 6) { setError("Please enter the complete 6-digit code"); return }
    setLoading(true)
    setError("")
    try {
      const data = await api.post("/auth/verify-otp", { email, otp })
      localStorage.setItem("blinkus_token", data.token)
      localStorage.setItem("blinkus_refresh", data.refreshToken)
      localStorage.setItem("blinkus_user", JSON.stringify(data.user))
      dispatch({ type: "auth/login/fulfilled", payload: data })
      onSuccess()
    } catch (err) {
      if (err.message?.includes("expired")) {
        setError("Code expired. Please request a new one.")
        setOtp("")
      } else {
        setError(err.message || "Invalid code. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (cooldown > 0) return
    setLoading(true)
    try {
      await api.post("/auth/resend-otp", { email })
      setError("")
      setOtp("")
      setSuccessMsg("New code sent to your email.")
      setCooldown(60)
      cooldownRef.current = setInterval(() => {
        setCooldown((p) => {
          if (p <= 1) { clearInterval(cooldownRef.current); return 0 }
          return p - 1
        })
      }, 1000)
    } catch (err) {
      setError(err.message || "Failed to resend. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isDisabled = loading || otp.replace(/\s/g, "").length < 6

  return (
    <motion.div key="otp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
      {error && <div style={c.errBox}>{error}</div>}
      {successMsg && !error && <div style={c.successBox}>{successMsg}</div>}
      <p style={{ fontSize: "14px", color: "#7c6fa0", lineHeight: 1.6, textAlign: "center" }}>
        We sent a 6-digit code to <strong style={{ color: N }}>{email}</strong>.<br />Check your inbox and spam folder.
      </p>
      <OtpInput value={otp} onChange={setOtp} disabled={loading} />
      <button onClick={handleVerify} disabled={isDisabled} style={c.primaryBtn(isDisabled)}>
        {loading ? <Spinner /> : null}{loading ? "Verifying..." : "Verify Email"}
      </button>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <span style={{ fontSize: "13px", color: "#9585c0" }}>Didn't receive it? </span>
        <button
          type="button" onClick={handleResend}
          disabled={cooldown > 0 || loading}
          style={{ ...c.textLink, opacity: cooldown > 0 ? 0.5 : 1, cursor: cooldown > 0 ? "default" : "pointer" }}
        >
          {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          type="button"
          style={{ ...c.textLink, color: "#9585c0", fontSize: "12px", textDecoration: "none" }}
          onClick={onBack}
        >
          ← Back
        </button>
      </div>
    </motion.div>
  )
}