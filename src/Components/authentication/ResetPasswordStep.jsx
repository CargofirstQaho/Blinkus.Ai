// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { motion } from "framer-motion"
// import { api } from "../../utils/api"
// import { c, P, Spinner, InputField, PasswordStrength } from "./authShared"

// export default function ResetPasswordStep({ email, otp, onSuccess }) {
//   const dispatch = useDispatch()
//   const [password, setPassword] = useState("")
//   const [confirm, setConfirm] = useState("")
//   const [showPass, setShowPass] = useState(false)
//   const [showConfirm, setShowConfirm] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (password.length < 8) { setError("Password must be at least 8 characters"); return }
//     if (password !== confirm) { setError("Passwords do not match"); return }
//     setLoading(true)
//     setError("")
//     try {
//       const data = await api.post("/auth/reset-password", { email, otp, password })
//       localStorage.setItem("blinkus_token", data.token)
//       localStorage.setItem("blinkus_refresh", data.refreshToken)
//       localStorage.setItem("blinkus_user", JSON.stringify(data.user))
//       dispatch({ type: "auth/login/fulfilled", payload: data })
//       onSuccess()
//     } catch (err) {
//       setError(err.message || "Reset failed. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <motion.form key="resetpass" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} onSubmit={handleSubmit}>
//       {error && <div style={c.errBox}>{error}</div>}
//       <div style={c.fieldWrap}>
//         <label style={c.label}>New Password</label>
//         <div style={c.inputWrap}>
//           <span style={c.inputIcon}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
//           <input
//             type={showPass ? "text" : "password"} value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Min. 8 characters" autoFocus
//             style={c.inputPaddedLeft(false)}
//             onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
//             onBlur={(e) => { e.target.style.borderColor = "#e8e0f8"; e.target.style.background = "#fafafe"; e.target.style.boxShadow = "none" }}
//           />
//           <button type="button" onClick={() => setShowPass((v) => !v)} style={c.eyeBtn}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               {showPass ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
//             </svg>
//           </button>
//         </div>
//         <PasswordStrength password={password} />
//       </div>
//       <InputField
//         label="Confirm password" value={confirm}
//         onChange={(e) => setConfirm(e.target.value)}
//         placeholder="Re-enter password"
//         showToggle showVal={showConfirm} onToggle={() => setShowConfirm((v) => !v)}
//         icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
//       />
//       <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
//         {loading ? <Spinner /> : null}{loading ? "Updating..." : "Update Password"}
//       </button>
//     </motion.form>
//   )
// }








import { useState } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { api } from "../../utils/api"
import { c, P, Spinner, InputField, PasswordStrength } from "./authShared"

export default function ResetPasswordStep({ email, otp, onSuccess }) {
  const dispatch = useDispatch()
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 8) { setError("Password must be at least 8 characters"); return }
    if (password !== confirm) { setError("Passwords do not match"); return }
    setLoading(true)
    setError("")
    try {
      const data = await api.post("/auth/reset-password", { email, otp, password })
      localStorage.setItem("blinkus_token", data.token)
      localStorage.setItem("blinkus_refresh", data.refreshToken)
      localStorage.setItem("blinkus_user", JSON.stringify(data.user))
      dispatch({ type: "auth/login/fulfilled", payload: data })
      onSuccess()
    } catch (err) {
      setError(err.message || "Reset failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      key="resetpass"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      onSubmit={handleSubmit}
    >
      {error && <div style={c.errBox}>{error}</div>}

      <div style={c.fieldWrap}>
        <label style={c.label}>New Password</label>
        <div style={c.inputWrap}>
          <span style={c.inputIcon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </span>
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            autoFocus
            style={c.inputPaddedLeft(false)}
            onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
            onBlur={(e) => { e.target.style.borderColor = "#e8e0f8"; e.target.style.background = "#fafafe"; e.target.style.boxShadow = "none" }}
          />
          <button type="button" onClick={() => setShowPass((v) => !v)} style={c.eyeBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {showPass
                ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
              }
            </svg>
          </button>
        </div>
        <PasswordStrength password={password} />
      </div>

      <InputField
        label="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Re-enter password"
        showToggle
        showVal={showConfirm}
        onToggle={() => setShowConfirm((v) => !v)}
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        }
      />

      <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
        {loading ? <Spinner /> : null}
        {loading ? "Updating..." : "Update Password"}
      </button>
    </motion.form>
  )
}