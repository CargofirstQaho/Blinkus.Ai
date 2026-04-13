import { useRef } from "react"

export const N = "#0f1b3d"
export const P = "#6c3fc5"
export const PL = "#8b5cf6"
export const PS = "rgba(108,63,197,0.07)"
export const font = "'DM Sans','Segoe UI',system-ui,sans-serif"

export const c = {
  fieldWrap: { marginBottom: "14px" },
  label: {
    display: "block", fontSize: "11px", fontWeight: 700,
    color: "#9585c0", marginBottom: "6px",
    letterSpacing: "0.05em", textTransform: "uppercase",
  },
  inputWrap: { position: "relative" },
  input: (err) => ({
    width: "100%", padding: "12px 40px 12px 14px",
    borderRadius: "12px", border: `1.5px solid ${err ? "#f87171" : "#e8e0f8"}`,
    fontSize: "14px", color: N, outline: "none",
    background: err ? "#fff5f5" : "#fafafe",
    fontFamily: font, transition: "all 0.18s",
    boxSizing: "border-box",
  }),
  inputIcon: {
    position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
    color: "#c4b5f4", pointerEvents: "none", display: "flex",
  },
  inputPaddedLeft: (err) => ({
    width: "100%", padding: "12px 40px 12px 38px",
    borderRadius: "12px", border: `1.5px solid ${err ? "#f87171" : "#e8e0f8"}`,
    fontSize: "14px", color: N, outline: "none",
    background: err ? "#fff5f5" : "#fafafe",
    fontFamily: font, transition: "all 0.18s",
    boxSizing: "border-box",
  }),
  eyeBtn: {
    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
    background: "none", border: "none", cursor: "pointer",
    color: "#c4b5f4", padding: 0, display: "flex", alignItems: "center",
  },
  fieldErr: { fontSize: "11px", color: "#ef4444", fontWeight: 600, marginTop: "5px" },
  primaryBtn: (disabled) => ({
    width: "100%", padding: "14px 0",
    borderRadius: "13px", border: "none",
    background: disabled ? "#d4c8f0" : `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
    color: "#fff", fontSize: "14px", fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: font, transition: "all 0.18s",
    boxShadow: disabled ? "none" : "0 6px 20px rgba(108,63,197,0.32)",
    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
    marginTop: "4px",
  }),
  divider: { display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" },
  divLine: { flex: 1, height: "1px", background: "#ede8f8" },
  divText: { fontSize: "11px", color: "#b0a0d0", fontWeight: 700, letterSpacing: "0.06em" },
  googleBtn: {
    width: "100%", padding: "13px 0",
    borderRadius: "13px", border: "1.5px solid #e8e0f8",
    background: "#fff", color: N,
    fontSize: "13px", fontWeight: 600,
    cursor: "pointer", fontFamily: font,
    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
    transition: "all 0.15s",
  },
  textLink: {
    background: "none", border: "none", cursor: "pointer",
    color: PL, fontSize: "12px", fontWeight: 700,
    padding: 0, fontFamily: font,
    textDecoration: "underline", textDecorationColor: "transparent",
  },
  errBox: {
    padding: "11px 14px", background: "#fff5f5",
    border: "1px solid #fecaca", borderRadius: "12px",
    fontSize: "13px", color: "#dc2626", fontWeight: 500,
    marginBottom: "18px", lineHeight: 1.5,
  },
  successBox: {
    padding: "11px 14px", background: "#f0fdf4",
    border: "1px solid #bbf7d0", borderRadius: "12px",
    fontSize: "13px", color: "#16a34a", fontWeight: 500,
    marginBottom: "18px", lineHeight: 1.5,
  },
  terms: { fontSize: "11px", color: "#b0a0d0", textAlign: "center", marginTop: "14px", lineHeight: 1.5 },
}

export function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "authSpin 0.8s linear infinite" }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      <style>{`@keyframes authSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </svg>
  )
}

export function EyeIcon({ open }) {
  return open
    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
}

export function GoogleSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

export function InputField({ label, type = "text", value, onChange, error, placeholder, icon, showToggle, showVal, onToggle, autoFocus }) {
  return (
    <div style={c.fieldWrap}>
      {label && <label style={c.label}>{label}</label>}
      <div style={c.inputWrap}>
        {icon && <span style={c.inputIcon}>{icon}</span>}
        <input
          type={showToggle ? (showVal ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete="off"
          style={icon ? c.inputPaddedLeft(!!error) : c.input(!!error)}
          onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
          onBlur={(e) => { e.target.style.borderColor = error ? "#f87171" : "#e8e0f8"; e.target.style.background = error ? "#fff5f5" : "#fafafe"; e.target.style.boxShadow = "none" }}
        />
        {showToggle && (
          <button type="button" onClick={onToggle} style={c.eyeBtn}>
            <EyeIcon open={showVal} />
          </button>
        )}
      </div>
      {error && <div style={c.fieldErr}>{error}</div>}
    </div>
  )
}

export function OtpInput({ value, onChange, disabled }) {
  const refs = useRef([])
  const vals = value.split("")

  const handleKey = (e, i) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const arr = value.split("")
      if (arr[i]) {
        arr[i] = ""
        onChange(arr.join(""))
      } else if (i > 0) {
        arr[i - 1] = ""
        onChange(arr.join(""))
        refs.current[i - 1]?.focus()
      }
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus()
    } else if (e.key === "ArrowRight" && i < 5) {
      refs.current[i + 1]?.focus()
    }
  }

  const handleChange = (e, i) => {
    const char = e.target.value.replace(/\D/g, "").slice(-1)
    if (!char) return
    const arr = value.split("").concat(Array(6).fill("")).slice(0, 6)
    arr[i] = char
    const joined = arr.join("")
    onChange(joined)
    if (i < 5) refs.current[i + 1]?.focus()
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    onChange(pasted.padEnd(6, "").slice(0, 6).trimEnd())
    const nextIdx = Math.min(pasted.length, 5)
    refs.current[nextIdx]?.focus()
  }

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "20px 0" }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={vals[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKey(e, i)}
          onPaste={handlePaste}
          disabled={disabled}
          style={{
            width: "clamp(36px,10vw,48px)", height: "clamp(44px,12vw,56px)",
            textAlign: "center", fontSize: "22px", fontWeight: 900, fontFamily: font,
            borderRadius: "13px", border: `2px solid ${vals[i] ? P : "#e8e0f8"}`,
            background: vals[i] ? PS : "#fafafe", color: N, outline: "none",
            transition: "all 0.15s",
            boxShadow: vals[i] ? "0 0 0 3px rgba(108,63,197,0.12)" : "none",
            opacity: disabled ? 0.5 : 1,
          }}
          onFocus={(e) => { e.target.style.borderColor = P; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.15)" }}
          onBlur={(e) => { e.target.style.borderColor = vals[i] ? P : "#e8e0f8"; e.target.style.boxShadow = vals[i] ? "0 0 0 3px rgba(108,63,197,0.12)" : "none" }}
        />
      ))}
    </div>
  )
}

export function checkPasswordStrength(pw) {
  let score = 0
  const checks = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /\d/.test(pw),
    special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pw),
  }
  score = Object.values(checks).filter(Boolean).length
  if (pw.length >= 12) score = Math.min(score + 1, 5)
  const levels = ["", "Very Weak", "Weak", "Fair", "Strong", "Very Strong"]
  const colors = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a"]
  return { score, level: levels[Math.min(score, 5)], color: colors[Math.min(score, 5)], checks }
}

export function PasswordStrength({ password }) {
  if (!password) return null
  const { score, level, color, checks } = checkPasswordStrength(password)
  return (
    <div style={{ marginTop: "8px" }}>
      <div style={{ display: "flex", gap: "4px", marginBottom: "6px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: "4px", borderRadius: "4px",
            background: i < score ? color : "#ede8f8",
            transition: "background 0.25s",
          }} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color }}>{level}</span>
        {score < 4 && (
          <span style={{ fontSize: "11px", color: "#9585c0" }}>
            {!checks.upper ? "Add uppercase" : !checks.number ? "Add number" : !checks.special ? "Add symbol" : "Make it longer"}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {[
          { key: "length", label: "8+ chars" }, { key: "upper", label: "Uppercase" },
          { key: "lower", label: "Lowercase" }, { key: "number", label: "Number" },
          { key: "special", label: "Symbol" },
        ].map(({ key, label }) => (
          <span key={key} style={{
            fontSize: "10px", padding: "3px 8px", borderRadius: "6px", fontWeight: 600,
            background: checks[key] ? "#f0fdf4" : "#f5f3ff",
            color: checks[key] ? "#16a34a" : "#9585c0",
            border: `1px solid ${checks[key] ? "#bbf7d0" : "#ede8f8"}`,
          }}>
            {checks[key] ? "✓" : "·"} {label}
          </span>
        ))}
      </div>
    </div>
  )
}