import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import { clearError } from "../../redux/slices/authSlice"
import { api } from "../../utils/api"
import { c, P, font, Spinner, GoogleSvg, InputField, PasswordStrength } from "./AuthShared"

export default function RegisterForm({ onSuccess, onGoogleClick, googleLoading }) {
  const dispatch = useDispatch()
  const { loading } = useSelector((s) => s.auth)
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" })
  const [fieldErrors, setFieldErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email"
    if (!form.password) errs.password = "Password is required"
    else if (form.password.length < 8) errs.password = "Minimum 8 characters"
    if (form.password !== form.confirm) errs.confirm = "Passwords do not match"
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const data = await api.post("/auth/register", { name: form.name, email: form.email, password: form.password })
      if (window.gtag) {
  window.gtag('event', 'conversion', {
    send_to: 'AW-17763381505/IIeCCPSnmpocEIHinpZC',
    value: 1.0,
    currency: 'INR'
  });
}
      onSuccess(form.email, data.message)
    } catch (err) {
      dispatch(clearError())
      setFieldErrors({ general: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  const isLoading = loading || submitting

  return (
    <motion.form key="register" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }} onSubmit={handleSubmit}>
      {fieldErrors.general && <div style={c.errBox}>{fieldErrors.general}</div>}
      <InputField
        label="Full name" type="text" value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        placeholder="Your full name" error={fieldErrors.name}
        icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
      />
      <InputField
        label="Email address" type="email" value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        placeholder="you@example.com" error={fieldErrors.email}
        icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
      />
      <div style={c.fieldWrap}>
        <label style={c.label}>Password</label>
        <div style={c.inputWrap}>
          <span style={c.inputIcon}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          <input
            type={showPass ? "text" : "password"} value={form.password}
            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
            placeholder="Min. 8 characters" style={c.inputPaddedLeft(!!fieldErrors.password)}
            onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
            onBlur={(e) => { e.target.style.borderColor = fieldErrors.password ? "#f87171" : "#e8e0f8"; e.target.style.background = fieldErrors.password ? "#fff5f5" : "#fafafe"; e.target.style.boxShadow = "none" }}
          />
          <button type="button" onClick={() => setShowPass((v) => !v)} style={c.eyeBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {showPass ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
            </svg>
          </button>
        </div>
        {fieldErrors.password && <div style={c.fieldErr}>{fieldErrors.password}</div>}
        <PasswordStrength password={form.password} />
      </div>
      <InputField
        label="Confirm password" value={form.confirm}
        onChange={(e) => setForm((p) => ({ ...p, confirm: e.target.value }))}
        placeholder="Re-enter password" error={fieldErrors.confirm}
        showToggle showVal={showConfirm} onToggle={() => setShowConfirm((v) => !v)}
        icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
      />
      <button type="submit" disabled={isLoading} style={c.primaryBtn(isLoading)}>
        {isLoading ? <Spinner /> : null}{isLoading ? "Creating account..." : "Create Account"}
      </button>
      <div style={c.divider}><div style={c.divLine}/><span style={c.divText}>OR</span><div style={c.divLine}/></div>
      <button
        type="button" onClick={onGoogleClick} disabled={googleLoading}
        style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}
      >
        <GoogleSvg /> Continue with Google
      </button>
      <p style={c.terms}>By signing up you agree to our Terms of Service.</p>
    </motion.form>
  )
}