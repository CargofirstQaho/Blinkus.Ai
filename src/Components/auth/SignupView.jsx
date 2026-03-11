import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signOut } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "../../utils/firebase"
import { getError, isValidEmail } from "./authHelpers"
import { ErrorBanner, GoogleButton, InputField, PasswordStrength, PrimaryButton, ModalHeader, Divider, EyeIcon, SwitchLink, TermsNote } from "./AuthUiKit"

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

export default function SignupView({ onSwitch, onClose, onVerifyEmail }) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!fullName.trim()) errs.fullName = "Full name is required"
    else if (fullName.trim().length < 2) errs.fullName = "Name must be at least 2 characters"
    if (!email) errs.email = "Email is required"
    else if (!isValidEmail(email)) errs.email = "Enter a valid email address"
    if (phone && !/^\+?[0-9\s\-().]{7,20}$/.test(phone)) errs.phone = "Enter a valid phone number"
    if (!password) errs.password = "Password is required"
    else if (password.length < 6) errs.password = "Password must be at least 6 characters"
    if (!confirmPassword) errs.confirmPassword = "Please confirm your password"
    else if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match"
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

  const handleSignup = async () => {
    if (!validate()) return
    setError("")
    setLoading(true)
    let firebaseUser = null
    try {
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password)
      firebaseUser = result.user

      await updateProfile(firebaseUser, { displayName: fullName.trim() })

      await sendEmailVerification(firebaseUser)

      await signOut(auth)

      onVerifyEmail({ email: email.trim(), displayName: fullName.trim() })
    } catch (err) {
      if (firebaseUser) {
        try { await firebaseUser.delete() } catch (_) {}
      }
      setError(getError(err.code))
      setLoading(false)
    }
  }

  return (
    <div>
      <ModalHeader
        iconBg={`linear-gradient(135deg,${PURPLE},${NAVY})`}
        iconShadow="0 8px 24px rgba(108,63,197,0.3)"
        title="Create account"
        subtitle="Join Blinkus — free forever"
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        }
      />
      <ErrorBanner message={error} />
      <GoogleButton onClick={handleGoogle} loading={googleLoading} label="Continue with Google" />
      <Divider />
      <InputField label="Full name" type="text" value={fullName} autoFocus autoComplete="name"
        onChange={(e) => { setFullName(e.target.value); setFieldErrors((p) => ({ ...p, fullName: "" })) }}
        placeholder="Your full name" error={fieldErrors.fullName} />
      <InputField label="Email address" type="email" value={email} autoComplete="email"
        onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: "" })) }}
        placeholder="you@example.com" error={fieldErrors.email} />
      <InputField label="Phone number" type="tel" value={phone} autoComplete="tel"
        onChange={(e) => { setPhone(e.target.value); setFieldErrors((p) => ({ ...p, phone: "" })) }}
        placeholder="+91 98765 43210" error={fieldErrors.phone} />
      <InputField label="Password" type={showPassword ? "text" : "password"} value={password} autoComplete="new-password"
        onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: "" })) }}
        placeholder="Min. 6 characters" error={fieldErrors.password}
        rightElement={
          <button onClick={() => setShowPassword(!showPassword)} style={{ background: "none", border: "none", cursor: "pointer", color: "#b0a0d0", padding: 0, display: "flex" }}>
            <EyeIcon show={showPassword} />
          </button>
        } />
      <PasswordStrength password={password} />
      <InputField label="Confirm password" type={showConfirm ? "text" : "password"} value={confirmPassword} autoComplete="new-password"
        onChange={(e) => { setConfirmPassword(e.target.value); setFieldErrors((p) => ({ ...p, confirmPassword: "" })) }}
        onKeyDown={(e) => { if (e.key === "Enter") handleSignup() }}
        placeholder="Re-enter your password" error={fieldErrors.confirmPassword}
        rightElement={
          <button onClick={() => setShowConfirm(!showConfirm)} style={{ background: "none", border: "none", cursor: "pointer", color: "#b0a0d0", padding: 0, display: "flex" }}>
            <EyeIcon show={showConfirm} />
          </button>
        } />
      <PrimaryButton onClick={handleSignup} loading={loading} disabled={!fullName || !email || !password || !confirmPassword}>
        Create Account →
      </PrimaryButton>
      <SwitchLink question="Already have an account?" actionLabel="Sign in" onClick={onSwitch} />
      <TermsNote />
    </div>
  )
}