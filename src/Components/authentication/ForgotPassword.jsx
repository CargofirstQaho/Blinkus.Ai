// import { useState } from "react"
// import { motion } from "framer-motion"
// import { api } from "../../utils/api"
// import { c, Spinner, InputField } from "./authShared"

// export default function ForgotPassword({ onSuccess, onBack }) {
//   const [email, setEmail] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!email.trim()) return
//     setLoading(true)
//     setError("")
//     try {
//       const data = await api.post("/auth/forgot-password", { email })
//       onSuccess(email, data.message)
//     } catch (err) {
//       setError(err.message || "Failed to send. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <motion.form key="forgot" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} onSubmit={handleSubmit}>
//       {error && <div style={c.errBox}>{error}</div>}
//       <InputField
//         label="Email address" type="email" value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="you@example.com" autoFocus
//         icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
//       />
//       <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
//         {loading ? <Spinner /> : null}{loading ? "Sending..." : "Send Reset Code"}
//       </button>
//       <div style={{ textAlign: "center", marginTop: "14px" }}>
//         <button
//           type="button"
//           style={{ ...c.textLink, color: "#9585c0", fontSize: "12px", textDecoration: "none" }}
//           onClick={onBack}
//         >
//           ← Back to Sign In
//         </button>
//       </div>
//     </motion.form>
//   )
// }









import { useState } from "react"
import { motion } from "framer-motion"
import { api } from "../../utils/api"
import { c, Spinner, InputField } from "./AuthShared"

export default function ForgotPassword({ onSuccess, onBack }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) { setError("Please enter your email address"); return }
    setLoading(true)
    setError("")
    try {
      const data = await api.post("/auth/forgot-password", { email: email.trim() })
      onSuccess(email.trim(), data.message)
    } catch (err) {
      setError(err.message || "Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      key="forgot"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      onSubmit={handleSubmit}
    >
      {error && <div style={c.errBox}>{error}</div>}
      <p style={{ fontSize: "14px", color: "#7c6fa0", lineHeight: 1.65, marginBottom: "18px" }}>
        Enter the email address associated with your Blinkus account and we'll send you a 6-digit OTP.
      </p>
      <InputField
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoFocus
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        }
      />
      <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
        {loading ? <Spinner /> : null}
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>
      <div style={{ textAlign: "center", marginTop: "14px" }}>
        <button
          type="button"
          style={{ ...c.textLink, color: "#9585c0", fontSize: "12px", textDecoration: "none" }}
          onClick={onBack}
        >
          ← Back to Sign In
        </button>
      </div>
    </motion.form>
  )
}