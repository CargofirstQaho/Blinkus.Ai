// import { useState, useEffect, useRef } from "react"
// import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
// import { auth } from "../../utils/firebase"
// import { ErrorBanner, SuccessBanner, InfoBanner, PrimaryButton, BackLink } from "./AuthUiKit"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"

// export default function VerifyEmailView({ email, displayName, onBack, onClose }) {
//   const [checkLoading, setCheckLoading] = useState(false)
//   const [resending, setResending] = useState(false)
//   const [resendTimer, setResendTimer] = useState(60)
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState("")
//   const [tempPassword, setTempPassword] = useState("")
//   const [needPassword, setNeedPassword] = useState(false)
//   const timerRef = useRef(null)

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setResendTimer((t) => {
//         if (t <= 1) { clearInterval(timerRef.current); return 0 }
//         return t - 1
//       })
//     }, 1000)
//     return () => clearInterval(timerRef.current)
//   }, [])

//   const restartTimer = () => {
//     setResendTimer(60)
//     clearInterval(timerRef.current)
//     timerRef.current = setInterval(() => {
//       setResendTimer((t) => {
//         if (t <= 1) { clearInterval(timerRef.current); return 0 }
//         return t - 1
//       })
//     }, 1000)
//   }

//   const handleCheckVerification = async (passwordOverride) => {
//     const pwd = passwordOverride || tempPassword
//     if (!pwd) {
//       setNeedPassword(true)
//       return
//     }
//     setCheckLoading(true)
//     setError("")
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, pwd)
//       const u = result.user
//       if (u.emailVerified) {
//         onClose()
//       } else {
//         setError("Email not verified yet. Please click the link in your inbox first, then try again.")
//         const { signOut } = await import("firebase/auth")
//         await signOut(auth)
//       }
//     } catch (err) {
//       if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
//         setError("Incorrect password. Please enter the password you used to sign up.")
//         setNeedPassword(true)
//       } else {
//         setError("Failed to check verification. Please try again.")
//       }
//     } finally {
//       setCheckLoading(false)
//     }
//   }

//   const handleResend = async () => {
//     if (resendTimer > 0 || resending) return
//     setResending(true)
//     setError("")
//     try {
//       const pwd = tempPassword
//       if (!pwd) { setNeedPassword(true); setResending(false); return }
//       const result = await signInWithEmailAndPassword(auth, email, pwd)
//       await sendEmailVerification(result.user)
//       const { signOut } = await import("firebase/auth")
//       await signOut(auth)
//       setSuccess("Verification email resent! Check your inbox.")
//       restartTimer()
//       setTimeout(() => setSuccess(""), 5000)
//     } catch (_) {
//       setError("Could not resend. Please wait a moment and try again.")
//     } finally {
//       setResending(false)
//     }
//   }

//   return (
//     <div>
//       <BackLink onClick={onBack} label="Back to sign in" />
//       <div style={{ textAlign: "center", marginBottom: "24px" }}>
//         <div style={{ width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 16px", background: "linear-gradient(135deg,#f5f3ff,#ede9fe)", border: "2px solid #ddd6fe", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//             <polyline points="22,6 12,13 2,6" />
//           </svg>
//           <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "20px", height: "20px", borderRadius: "50%", background: PURPLE, border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
//               <line x1="12" y1="5" x2="12" y2="12" />
//               <line x1="12" y1="16" x2="12.01" y2="16" />
//             </svg>
//           </div>
//         </div>
//         <h2 style={{ fontSize: "21px", fontWeight: 900, color: NAVY, marginBottom: "6px", letterSpacing: "-0.04em" }}>Verify your email</h2>
//         <p style={{ fontSize: "13px", color: "#7c6fa0", lineHeight: "1.55" }}>
//           {displayName ? `Hi ${displayName}! We sent a verification link to` : "We sent a verification link to"}<br />
//           <strong style={{ color: NAVY }}>{email}</strong>
//         </p>
//       </div>
//       <ErrorBanner message={error} />
//       <SuccessBanner message={success} />
//       <InfoBanner>Click the verification link in your email, then enter your password below and press the button to continue.</InfoBanner>

//       <div style={{ marginBottom: "14px" }}>
//         <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: NAVY, marginBottom: "6px" }}>Your password</label>
//         <input
//           type="password"
//           value={tempPassword}
//           onChange={(e) => { setTempPassword(e.target.value); setNeedPassword(false); setError("") }}
//           onKeyDown={(e) => { if (e.key === "Enter") handleCheckVerification() }}
//           placeholder="Enter your password to continue"
//           style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: "12px", fontSize: "14px", color: NAVY, border: `1.5px solid ${needPassword ? "#fca5a5" : "#e2d9f7"}`, background: needPassword ? "#fff5f5" : "#faf9ff", outline: "none", fontFamily: "inherit", caretColor: PURPLE }}
//           onFocus={(e) => { e.target.style.borderColor = PURPLE; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.1)"; e.target.style.background = "#fff" }}
//           onBlur={(e) => { e.target.style.borderColor = needPassword ? "#fca5a5" : "#e2d9f7"; e.target.style.boxShadow = "none"; e.target.style.background = needPassword ? "#fff5f5" : "#faf9ff" }}
//         />
//         {needPassword && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "5px" }}>Password is required to verify your account</p>}
//       </div>

//       <PrimaryButton onClick={() => handleCheckVerification()} loading={checkLoading} disabled={!tempPassword} color="green">
//         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//           <polyline points="22 4 12 14.01 9 11.01" />
//         </svg>
//         I've Verified — Continue
//       </PrimaryButton>

//       <div style={{ marginTop: "16px", textAlign: "center" }}>
//         {resendTimer > 0 ? (
//           <p style={{ fontSize: "13px", color: "#b0a0d0" }}>
//             Resend in <span style={{ fontWeight: 700, color: NAVY, fontVariantNumeric: "tabular-nums" }}>0:{resendTimer.toString().padStart(2, "0")}</span>
//           </p>
//         ) : (
//           <button onClick={handleResend} disabled={resending}
//             style={{ fontSize: "13px", fontWeight: 700, color: PURPLE, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
//             {resending ? "Sending…" : "Resend verification email"}
//           </button>
//         )}
//       </div>

//       <div style={{ marginTop: "20px", padding: "12px 14px", borderRadius: "12px", background: "#faf9ff", border: "1px solid #f0edf9" }}>
//         <p style={{ fontSize: "11.5px", color: "#7c6fa0", lineHeight: "1.6", margin: 0 }}>
//           <strong style={{ color: NAVY }}>Didn't receive the email?</strong><br />
//           Check your spam folder. The link expires in 24 hours. Make sure <strong>{email}</strong> is correct.
//         </p>
//       </div>
//     </div>
//   )
// }


import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Loader2, Zap } from "lucide-react"
import { api } from "../../utils/api"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

export default function VerifyEmailView() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const token = searchParams.get("token")
    if (!token) {
      setStatus("error")
      setMessage("No verification token found in the link.")
      return
    }

    api
      .get(`/auth/verify-email/${token}`)
      .then((data) => {
        setStatus("success")
        setMessage(data.message || "Your email has been verified successfully.")
      })
      .catch((err) => {
        setStatus("error")
        setMessage(err.message || "This verification link is invalid or has expired.")
      })
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border p-8 text-center"
        style={{ borderColor: "rgba(108,63,197,0.1)" }}
      >
        <div className="flex justify-center mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
          >
            <Zap size={18} className="text-white" fill="white" />
          </div>
        </div>

        <h1 className="text-xl font-black mb-2" style={{ color: NAVY, letterSpacing: "-0.03em" }}>
          Email Verification
        </h1>

        {status === "loading" && (
          <div className="flex flex-col items-center gap-3 py-6">
            <Loader2 size={36} className="animate-spin" style={{ color: PURPLE }} />
            <p className="text-sm font-medium" style={{ color: "#7c6fa0" }}>
              Verifying your email address...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="py-4">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(34,197,94,0.08)" }}
              >
                <CheckCircle size={32} className="text-green-500" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              {message}
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-transform active:scale-95"
              style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
            >
              Go to Blinkus.ai
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="py-4">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.08)" }}
              >
                <XCircle size={32} className="text-red-500" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              {message}
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full py-3 rounded-xl text-sm font-bold border transition-colors hover:bg-purple-50"
              style={{ borderColor: "rgba(108,63,197,0.25)", color: PURPLE }}
            >
              Back to Home
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}