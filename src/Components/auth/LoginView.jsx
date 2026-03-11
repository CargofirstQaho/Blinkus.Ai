import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../../utils/firebase"
import { getError, isValidEmail } from "./authHelpers"
import { ErrorBanner, GoogleButton, InputField, PrimaryButton, ModalHeader, Divider, EyeIcon, SwitchLink, TermsNote } from "./AuthUiKit"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

async function saveGoogleUser(u) {
  try {
    const ref = doc(db, "users", u.uid)
    const snap = await getDoc(ref)
    if (!snap.exists()) {
      await setDoc(ref, {
        uid: u.uid,
        displayName: u.displayName || "",
        email: u.email || "",
        phone: "",
        photoURL: u.photoURL || "",
        source: "google",
        emailVerified: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    } else {
      await setDoc(ref, { emailVerified: true, updatedAt: serverTimestamp() }, { merge: true })
    }
  } catch (_) {}
}

export default function LoginView({ onSwitch, onForgot, onClose }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!email) errs.email = "Email is required"
    else if (!isValidEmail(email)) errs.email = "Enter a valid email"
    if (!password) errs.password = "Password is required"
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleGoogle = async () => {
    setError("")
    setGoogleLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope("profile")
      provider.addScope("email")
      provider.setCustomParameters({ prompt: "select_account" })
      const result = await signInWithPopup(auth, provider)
      await saveGoogleUser(result.user)
      onClose()
    } catch (err) {
      if (err.code !== "auth/cancelled-popup-request" && err.code !== "auth/popup-closed-by-user") {
        setError(getError(err.code))
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  const handleLogin = async () => {
    if (!validate()) return
    setError("")
    setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password)
      const u = result.user
      if (!u.emailVerified) {
        await signOut(auth)
        setError("Your email is not verified yet. Please click the verification link in your inbox, then sign in again.")
        setLoading(false)
        return
      }
      try {
        await setDoc(doc(db, "users", u.uid), { emailVerified: true, updatedAt: serverTimestamp() }, { merge: true })
      } catch (_) {}
      onClose()
    } catch (err) {
      setError(getError(err.code))
      setLoading(false)
    }
  }

  return (
    <div>
      <ModalHeader
        iconBg={`linear-gradient(135deg,${NAVY},${PURPLE})`}
        iconShadow="0 8px 24px rgba(108,63,197,0.3)"
        title="Welcome back"
        subtitle="Sign in to your Blinkus account"
        icon={
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="15" r="5.5" fill="none" stroke="white" strokeWidth="2.2" />
            <circle cx="20" cy="15" r="2.2" fill="white" />
          </svg>
        }
      />
      <ErrorBanner message={error} />
      <GoogleButton onClick={handleGoogle} loading={googleLoading} label="Sign in with Google" />
      <Divider />
      <InputField label="Email address" type="email" value={email} autoFocus autoComplete="email"
        onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: "" })) }}
        placeholder="you@example.com" error={fieldErrors.email} />
      <InputField label="Password" type={showPassword ? "text" : "password"} value={password} autoComplete="current-password"
        onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: "" })) }}
        onKeyDown={(e) => { if (e.key === "Enter") handleLogin() }}
        placeholder="Enter your password" error={fieldErrors.password}
        rightElement={
          <button onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", cursor: "pointer", color: "#b0a0d0", padding: 0, display: "flex" }}>
            <EyeIcon show={showPassword} />
          </button>
        } />
      <div style={{ textAlign: "right", marginTop: "-8px", marginBottom: "18px" }}>
        <span onClick={onForgot} style={{ fontSize: "12px", color: PURPLE, cursor: "pointer", fontWeight: 700 }}
          onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline" }}
          onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none" }}>
          Forgot password?
        </span>
      </div>
      <PrimaryButton onClick={handleLogin} loading={loading} disabled={!email || !password}>
        Sign In →
      </PrimaryButton>
      <SwitchLink question="Don't have an account?" actionLabel="Create account" onClick={onSwitch} />
      <TermsNote />
    </div>
  )
}