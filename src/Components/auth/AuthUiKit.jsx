const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_LIGHT = "#8b5cf6"
const PURPLE_SOFT = "#ede9fe"

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export function Spinner({ color = "currentColor" }) {
  return (
    <svg style={{ animation: "spin360 0.7s linear infinite", flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <style>{`@keyframes spin360{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
    </svg>
  )
}

export function EyeIcon({ show }) {
  return show ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function ErrorBanner({ message }) {
  if (!message) return null
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "11px 14px", borderRadius: "12px", background: "#fef2f2", border: "1px solid #fecaca", fontSize: "12.5px", color: "#dc2626", marginBottom: "18px", lineHeight: "1.5" }}>
      <svg width="14" height="14" style={{ flexShrink: 0, marginTop: "1px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {message}
    </div>
  )
}

export function SuccessBanner({ message }) {
  if (!message) return null
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "11px 14px", borderRadius: "12px", background: "#f0fdf4", border: "1px solid #bbf7d0", fontSize: "12.5px", color: "#15803d", marginBottom: "18px", lineHeight: "1.5" }}>
      <svg width="14" height="14" style={{ flexShrink: 0, marginTop: "1px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      {message}
    </div>
  )
}

export function InfoBanner({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "11px 14px", borderRadius: "12px", background: "#f5f3ff", border: "1px solid #ddd6fe", fontSize: "12.5px", color: PURPLE, marginBottom: "18px", lineHeight: "1.55" }}>
      <svg width="14" height="14" style={{ flexShrink: 0, marginTop: "1px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <span>{children}</span>
    </div>
  )
}

export function InputField({ label, type, value, onChange, placeholder, error, rightElement, autoFocus, autoComplete, onKeyDown }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: NAVY, marginBottom: "6px", letterSpacing: "0.01em" }}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          type={type} value={value} onChange={onChange} onKeyDown={onKeyDown}
          placeholder={placeholder} autoFocus={autoFocus} autoComplete={autoComplete}
          style={{ width: "100%", boxSizing: "border-box", padding: rightElement ? "12px 44px 12px 14px" : "12px 14px", borderRadius: "12px", fontSize: "14px", color: NAVY, border: `1.5px solid ${error ? "#fca5a5" : "#e2d9f7"}`, background: error ? "#fff5f5" : "#faf9ff", outline: "none", fontFamily: "inherit", caretColor: PURPLE, transition: "border-color 0.15s, box-shadow 0.15s" }}
          onFocus={(e) => { e.target.style.borderColor = error ? "#f87171" : PURPLE_LIGHT; e.target.style.boxShadow = error ? "0 0 0 3px rgba(239,68,68,0.1)" : "0 0 0 3px rgba(108,63,197,0.1)"; e.target.style.background = "#ffffff" }}
          onBlur={(e) => { e.target.style.borderColor = error ? "#fca5a5" : "#e2d9f7"; e.target.style.boxShadow = "none"; e.target.style.background = error ? "#fff5f5" : "#faf9ff" }}
        />
        {rightElement && <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>{rightElement}</div>}
      </div>
      {error && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "5px", paddingLeft: "2px" }}>{error}</p>}
    </div>
  )
}

export function PasswordStrength({ password }) {
  if (!password) return null
  const checks = [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^A-Za-z0-9]/.test(password)]
  const score = checks.filter(Boolean).length
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e"]
  const labels = ["Weak", "Fair", "Good", "Strong"]
  return (
    <div style={{ marginTop: "-8px", marginBottom: "14px" }}>
      <div style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
        {[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1, height: "3px", borderRadius: "100px", background: i < score ? colors[score - 1] : "#e2d9f7", transition: "background 0.3s" }} />)}
      </div>
      {score > 0 && <p style={{ fontSize: "11px", color: colors[score - 1], textAlign: "right" }}>{labels[score - 1]}</p>}
    </div>
  )
}

export function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "18px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "#f0edf9" }} />
      <span style={{ fontSize: "12px", color: "#b0a0d0", fontWeight: 600 }}>or</span>
      <div style={{ flex: 1, height: "1px", background: "#f0edf9" }} />
    </div>
  )
}

export function GoogleButton({ onClick, loading, label = "Continue with Google" }) {
  return (
    <button onClick={onClick} disabled={loading}
      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px 20px", borderRadius: "12px", border: "1.5px solid #e2d9f7", background: "#ffffff", cursor: loading ? "not-allowed" : "pointer", fontSize: "14px", fontWeight: 600, color: NAVY, boxShadow: "0 1px 4px rgba(108,63,197,0.08)", fontFamily: "inherit", opacity: loading ? 0.7 : 1, transition: "all 0.15s" }}
      onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = "#faf9ff"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(108,63,197,0.12)" } }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(108,63,197,0.08)" }}>
      {loading ? <Spinner /> : <GoogleIcon />}
      {loading ? "Redirecting to Google…" : label}
    </button>
  )
}

export function PrimaryButton({ onClick, disabled, loading, children, color = "indigo" }) {
  const isGreen = color === "green"
  const bg = disabled ? "#f0edf9" : isGreen ? "linear-gradient(135deg,#10b981,#059669)" : `linear-gradient(135deg,${NAVY},${PURPLE})`
  const shadow = disabled ? "none" : isGreen ? "0 4px 16px rgba(16,185,129,0.35)" : "0 4px 16px rgba(108,63,197,0.35)"
  return (
    <button onClick={onClick} disabled={disabled || loading}
      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px 20px", borderRadius: "13px", border: "none", fontFamily: "inherit", fontSize: "14px", fontWeight: 700, cursor: disabled || loading ? "not-allowed" : "pointer", background: bg, color: disabled ? "#b0a0d0" : "#ffffff", boxShadow: shadow, transition: "all 0.2s", marginTop: "4px" }}
      onMouseEnter={(e) => { if (!disabled && !loading) { e.currentTarget.style.opacity = "0.92"; e.currentTarget.style.transform = "translateY(-1px)" } }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)" }}>
      {loading ? <><Spinner color={disabled ? "#b0a0d0" : "white"} /><span style={{ marginLeft: "6px" }}>Please wait…</span></> : children}
    </button>
  )
}

export function ModalHeader({ icon, iconBg, iconShadow, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "24px" }}>
      <div style={{ width: "52px", height: "52px", borderRadius: "16px", margin: "0 auto 14px", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: iconShadow }}>
        {icon}
      </div>
      <h2 style={{ fontSize: "22px", fontWeight: 900, color: NAVY, marginBottom: "4px", letterSpacing: "-0.04em" }}>{title}</h2>
      <p style={{ fontSize: "13px", color: "#9585c0" }}>{subtitle}</p>
    </div>
  )
}

export function BackLink({ onClick, label = "Back" }) {
  return (
    <button onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "none", cursor: "pointer", fontSize: "12px", color: "#b0a0d0", padding: 0, marginBottom: "22px", fontFamily: "inherit", fontWeight: 600 }}
      onMouseEnter={(e) => { e.currentTarget.style.color = PURPLE }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "#b0a0d0" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
      </svg>
      {label}
    </button>
  )
}

export function SwitchLink({ question, actionLabel, onClick }) {
  return (
    <p style={{ textAlign: "center", fontSize: "13px", color: "#7c6fa0", marginTop: "20px" }}>
      {question}{" "}
      <span onClick={onClick} style={{ color: PURPLE, fontWeight: 700, cursor: "pointer" }}
        onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline" }}
        onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none" }}>{actionLabel}</span>
    </p>
  )
}

export function TermsNote() {
  return (
    <p style={{ textAlign: "center", fontSize: "11px", color: "#b0a0d0", marginTop: "14px" }}>
      By continuing, you agree to our{" "}
      <span style={{ color: "#7c6fa0", textDecoration: "underline", cursor: "pointer" }}>Terms</span>
      {" "}and{" "}
      <span style={{ color: "#7c6fa0", textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>
    </p>
  )
}