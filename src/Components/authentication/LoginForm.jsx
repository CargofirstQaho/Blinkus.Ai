// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { motion } from "framer-motion"
// import { loginUser, clearError } from "../../redux/slices/authSlice"
// import { c, P, font, Spinner, GoogleSvg, InputField } from "./authShared"

// export default function LoginForm({ onSuccess, onForgot, onGoogleClick, googleLoading }) {
//   const dispatch = useDispatch()
//   const { loading, error } = useSelector((s) => s.auth)
//   const [form, setForm] = useState({ email: "", password: "" })
//   const [fieldErrors, setFieldErrors] = useState({})
//   const [showPass, setShowPass] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const errs = {}
//     if (!form.email.trim()) errs.email = "Email is required"
//     if (!form.password) errs.password = "Password is required"
//     if (Object.keys(errs).length) { setFieldErrors(errs); return }

//     const result = await dispatch(loginUser({ email: form.email, password: form.password }))
//     if (result.meta.requestStatus === "fulfilled") {
//       onSuccess()
//       return
//     }
//     const payload = result.payload || ""
//     if (payload.includes("not verified") || result.error?.message?.includes("403")) {
//       onSuccess("unverified", form.email)
//     }
//   }

//   const globalErr = error || fieldErrors.general

//   return (
//     <motion.form key="login" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.2 }} onSubmit={handleSubmit}>
//       {globalErr && <div style={c.errBox}>{globalErr}</div>}
//       <InputField
//         label="Email address" type="email" value={form.email}
//         onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
//         placeholder="you@example.com" error={fieldErrors.email}
//         icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
//       />
//       <InputField
//         label="Password" value={form.password}
//         onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
//         placeholder="Your password" error={fieldErrors.password}
//         showToggle showVal={showPass} onToggle={() => setShowPass((v) => !v)}
//         icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
//       />
//       <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-6px", marginBottom: "16px" }}>
//         <button type="button" style={c.textLink} onClick={onForgot}>Forgot password?</button>
//       </div>
//       <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
//         {loading ? <Spinner /> : null}{loading ? "Signing in..." : "Sign In"}
//       </button>
//       <div style={c.divider}><div style={c.divLine}/><span style={c.divText}>OR</span><div style={c.divLine}/></div>
//       <button
//         type="button" onClick={onGoogleClick} disabled={googleLoading}
//         style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
//         onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
//         onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}
//       >
//         <GoogleSvg /> Continue with Google
//       </button>
//     </motion.form>
//   )
// }










// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { motion } from "framer-motion"
// import { loginUser, clearError } from "../../redux/slices/authSlice"
// import { api } from "../../utils/api"
// import { c, P, Spinner, GoogleSvg, InputField } from "./authShared"

// export default function LoginForm({ onSuccess, onForgot, onGoogleClick, googleLoading }) {
//   const dispatch = useDispatch()
//   const { loading, error } = useSelector((s) => s.auth)
//   const [form, setForm] = useState({ email: "", password: "" })
//   const [fieldErrors, setFieldErrors] = useState({})
//   const [showPass, setShowPass] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const errs = {}
//     if (!form.email.trim()) errs.email = "Email is required"
//     if (!form.password) errs.password = "Password is required"
//     if (Object.keys(errs).length) { setFieldErrors(errs); return }
//     setFieldErrors({})

//     const result = await dispatch(loginUser({ email: form.email, password: form.password }))
//     if (result.meta.requestStatus === "fulfilled") {
//       onSuccess()
//       return
//     }
//     const payload = result.payload || ""
//     const isUnverified =
//       payload.includes?.("not verified") ||
//       payload.includes?.("requiresVerification") ||
//       result.error?.message?.includes("403")

//     if (isUnverified) {
//       onSuccess("unverified", form.email)
//     }
//   }

//   const globalErr = error || fieldErrors.general

//   return (
//     <motion.form
//       key="login"
//       initial={{ opacity: 0, x: -16 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 16 }}
//       transition={{ duration: 0.2 }}
//       onSubmit={handleSubmit}
//     >
//       {globalErr && <div style={c.errBox}>{globalErr}</div>}

//       <InputField
//         label="Email address"
//         type="email"
//         value={form.email}
//         onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
//         placeholder="you@example.com"
//         error={fieldErrors.email}
//         icon={
//           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//             <polyline points="22,6 12,13 2,6"/>
//           </svg>
//         }
//       />

//       <InputField
//         label="Password"
//         value={form.password}
//         onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
//         placeholder="Your password"
//         error={fieldErrors.password}
//         showToggle
//         showVal={showPass}
//         onToggle={() => setShowPass((v) => !v)}
//         icon={
//           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//             <rect x="3" y="11" width="18" height="11" rx="2"/>
//             <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//           </svg>
//         }
//       />

//       <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-6px", marginBottom: "16px" }}>
//         <button type="button" style={c.textLink} onClick={onForgot}>
//           Forgot password?
//         </button>
//       </div>

//       <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
//         {loading ? <Spinner /> : null}
//         {loading ? "Signing in..." : "Sign In"}
//       </button>

//       <div style={c.divider}>
//         <div style={c.divLine}/>
//         <span style={c.divText}>OR</span>
//         <div style={c.divLine}/>
//       </div>

//       <button
//         type="button"
//         onClick={onGoogleClick}
//         disabled={googleLoading}
//         style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
//         onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
//         onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}
//       >
//         {googleLoading ? <Spinner /> : <GoogleSvg />}
//         {googleLoading ? "Connecting..." : "Continue with Google"}
//       </button>
//     </motion.form>
//   )
// }









import { useState } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { api } from "../../utils/api"
import { c, P, Spinner, GoogleSvg, InputField } from "./authShared"

export default function LoginForm({ onSuccess, onForgot, onGoogleClick, googleLoading }) {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ email: "", password: "" })
  const [fieldErrors, setFieldErrors] = useState({})
  const [globalError, setGlobalError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.email.trim()) errs.email = "Email is required"
    if (!form.password) errs.password = "Password is required"
    if (Object.keys(errs).length) { setFieldErrors(errs); return }
    setFieldErrors({})
    setGlobalError("")
    setLoading(true)

    try {
      const data = await api.post("/auth/login", { email: form.email.trim(), password: form.password })
      localStorage.setItem("blinkus_token", data.token)
      localStorage.setItem("blinkus_refresh", data.refreshToken)
      localStorage.setItem("blinkus_user", JSON.stringify(data.user))
      dispatch({ type: "auth/login/fulfilled", payload: data })
      onSuccess()
    } catch (err) {
      if (err.status === 403) {
        onSuccess("unverified", form.email.trim())
      } else {
        setGlobalError(err.message || "Login failed. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      key="login"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.2 }}
      onSubmit={handleSubmit}
    >
      {globalError && <div style={c.errBox}>{globalError}</div>}

      <InputField
        label="Email address"
        type="email"
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        placeholder="you@example.com"
        error={fieldErrors.email}
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        }
      />

      <InputField
        label="Password"
        value={form.password}
        onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
        placeholder="Your password"
        error={fieldErrors.password}
        showToggle
        showVal={showPass}
        onToggle={() => setShowPass((v) => !v)}
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        }
      />

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-6px", marginBottom: "16px" }}>
        <button type="button" style={c.textLink} onClick={onForgot}>
          Forgot password?
        </button>
      </div>

      <button type="submit" disabled={loading} style={c.primaryBtn(loading)}>
        {loading ? <Spinner /> : null}
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <div style={c.divider}>
        <div style={c.divLine}/>
        <span style={c.divText}>OR</span>
        <div style={c.divLine}/>
      </div>

      <button
        type="button"
        onClick={onGoogleClick}
        disabled={googleLoading}
        style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}
      >
        {googleLoading ? <Spinner /> : <GoogleSvg />}
        {googleLoading ? "Connecting..." : "Continue with Google"}
      </button>
    </motion.form>
  )
}