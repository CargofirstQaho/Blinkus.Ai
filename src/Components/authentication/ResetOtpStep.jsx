import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { api } from "../../utils/api"
import { c, N, Spinner, OtpInput } from "./AuthShared"

export default function ResetOtpStep({ email, onSuccess }) {
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
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

  const handleContinue = (e) => {
    e?.preventDefault()
    if (otp.replace(/\s/g, "").length < 6) { setError("Enter the 6-digit code from your email"); return }
    setError("")
    onSuccess(otp)
  }

  const handleResend = async () => {
    if (cooldown > 0) return
    setLoading(true)
    try {
      await api.post("/auth/forgot-password", { email })
      setOtp("")
      setError("")
      setCooldown(60)
      cooldownRef.current = setInterval(() => {
        setCooldown((p) => {
          if (p <= 1) { clearInterval(cooldownRef.current); return 0 }
          return p - 1
        })
      }, 1000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const isDisabled = loading || otp.replace(/\s/g, "").length < 6

  return (
    <motion.div key="resetotp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
      {error && <div style={c.errBox}>{error}</div>}
      <p style={{ fontSize: "14px", color: "#7c6fa0", lineHeight: 1.6, textAlign: "center" }}>
        Enter the reset code sent to <strong style={{ color: N }}>{email}</strong>.
      </p>
      <OtpInput value={otp} onChange={setOtp} disabled={loading} />
      <button onClick={handleContinue} disabled={isDisabled} style={c.primaryBtn(isDisabled)}>
        {loading ? <Spinner /> : null}{loading ? "Verifying..." : "Continue"}
      </button>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <button
          type="button" onClick={handleResend} disabled={cooldown > 0}
          style={{ ...c.textLink, opacity: cooldown > 0 ? 0.5 : 1, cursor: cooldown > 0 ? "default" : "pointer" }}
        >
          {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
        </button>
      </div>
    </motion.div>
  )
}