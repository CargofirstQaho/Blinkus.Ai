// import { useState, useEffect } from "react"
// import { VIEW } from "./auth/authHelpers"
// import LoginView from "./auth/LoginView"
// import SignupView from "./auth/SignupView"
// import ForgotPasswordView from "./auth/ForgotPasswordView"
// import VerifyEmailView from "./auth/VerifyEmailView"

// export default function AuthModal({ onClose, onSuccess }) {
//   const [view, setView] = useState(VIEW.LOGIN)
//   const [verifyData, setVerifyData] = useState(null)

//   useEffect(() => {
//     document.body.style.overflow = "hidden"
//     return () => { document.body.style.overflow = "" }
//   }, [])

//   const handleVerifyEmail = (data) => {
//     setVerifyData(data)
//     setView(VIEW.VERIFY_EMAIL)
//   }

//   const handleSuccess = () => {
//     if (onSuccess) onSuccess()
//     else onClose()
//   }

//   return (
//     <div
//       style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "rgba(15,27,61,0.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
//       onMouseDown={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <style>{`
//         @media (min-width: 560px) {
//           .auth-sheet { align-self: center !important; border-radius: 28px !important; max-height: 92dvh !important; margin: 16px !important; }
//         }
//         @media (max-width: 559px) {
//           .auth-sheet { border-radius: 24px 24px 0 0 !important; max-height: 96dvh !important; }
//         }
//       `}</style>
//       <div
//         className="auth-sheet"
//         onMouseDown={(e) => e.stopPropagation()}
//         style={{ width: "100%", maxWidth: "420px", background: "#ffffff", boxShadow: "0 -4px 40px rgba(108,63,197,0.18), 0 0 0 1px rgba(108,63,197,0.07)", overflowY: "auto", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", position: "relative" }}>
//         <div style={{ display: "flex", justifyContent: "center", paddingTop: "12px", paddingBottom: "4px" }}>
//           <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: "#e2d9f7" }} />
//         </div>
//         <button onClick={onClose}
//           style={{ position: "absolute", top: "14px", right: "14px", width: "28px", height: "28px", borderRadius: "50%", border: "none", background: "#ede9fe", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c6fa0", zIndex: 10 }}
//           onMouseEnter={(e) => { e.currentTarget.style.background = "#ddd6fe" }}
//           onMouseLeave={(e) => { e.currentTarget.style.background = "#ede9fe" }}>
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//         <div style={{ padding: "12px 24px 32px" }}>
//           {view === VIEW.LOGIN && (
//             <LoginView
//               onSwitch={() => setView(VIEW.SIGNUP)}
//               onForgot={() => setView(VIEW.FORGOT)}
//               onClose={handleSuccess}
//             />
//           )}
//           {view === VIEW.SIGNUP && (
//             <SignupView
//               onSwitch={() => setView(VIEW.LOGIN)}
//               onClose={handleSuccess}
//               onVerifyEmail={handleVerifyEmail}
//             />
//           )}
//           {view === VIEW.FORGOT && (
//             <ForgotPasswordView onBack={() => setView(VIEW.LOGIN)} />
//           )}
//           {view === VIEW.VERIFY_EMAIL && verifyData && (
//             <VerifyEmailView
//               email={verifyData.email}
//               displayName={verifyData.displayName}
//               onBack={() => setView(VIEW.LOGIN)}
//               onClose={handleSuccess}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }













// import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { useGoogleLogin } from "@react-oauth/google"
// import { X, Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react"
// import { loginUser, registerUser, googleLogin, clearError } from "../redux/slices/authSlice"
// import { api } from "../utils/api"

// const PURPLE = "#6c3fc5"
// const NAVY = "#0f1b3d"

// const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
// const card = {
//   hidden: { opacity: 0, scale: 0.95, y: 16 },
//   visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 28 } },
//   exit: { opacity: 0, scale: 0.95, y: 16, transition: { duration: 0.18 } },
// }

// function InputField({ icon: Icon, type, placeholder, value, onChange, error, rightElement }) {
//   return (
//     <div className="relative">
//       <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-300">
//         <Icon size={16} />
//       </div>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className={`w-full pl-10 pr-${rightElement ? "10" : "4"} py-3 rounded-xl border text-sm font-medium outline-none transition-all text-navy bg-white
//           ${error ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100" : "border-purple-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"}
//         `}
//         style={{ color: NAVY }}
//       />
//       {rightElement && (
//         <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightElement}</div>
//       )}
//       {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
//     </div>
//   )
// }

// export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { loading, error } = useSelector((s) => s.auth)

//   const [tab, setTab] = useState(defaultTab)
//   const [showPass, setShowPass] = useState(false)
//   const [showConfirm, setShowConfirm] = useState(false)
//   const [forgotMode, setForgotMode] = useState(false)
//   const [forgotEmail, setForgotEmail] = useState("")
//   const [forgotStatus, setForgotStatus] = useState(null)
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const [successMsg, setSuccessMsg] = useState("")

//   const [loginForm, setLoginForm] = useState({ email: "", password: "" })
//   const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" })
//   const [fieldErrors, setFieldErrors] = useState({})

//   useEffect(() => {
//     if (isOpen) {
//       setTab(defaultTab)
//       setForgotMode(false)
//       setSuccessMsg("")
//       setFieldErrors({})
//       dispatch(clearError())
//     }
//   }, [isOpen, defaultTab])

//   const switchTab = (t) => {
//     setTab(t)
//     setFieldErrors({})
//     setSuccessMsg("")
//     setForgotMode(false)
//     dispatch(clearError())
//   }

//   const validateLogin = () => {
//     const errs = {}
//     if (!loginForm.email) errs.email = "Email is required"
//     if (!loginForm.password) errs.password = "Password is required"
//     setFieldErrors(errs)
//     return Object.keys(errs).length === 0
//   }

//   const validateRegister = () => {
//     const errs = {}
//     if (!registerForm.name.trim()) errs.name = "Name is required"
//     if (!registerForm.email) errs.email = "Email is required"
//     else if (!/\S+@\S+\.\S+/.test(registerForm.email)) errs.email = "Enter a valid email"
//     if (!registerForm.password) errs.password = "Password is required"
//     else if (registerForm.password.length < 8) errs.password = "Minimum 8 characters"
//     if (registerForm.password !== registerForm.confirm) errs.confirm = "Passwords do not match"
//     setFieldErrors(errs)
//     return Object.keys(errs).length === 0
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     if (!validateLogin()) return
//     const result = await dispatch(loginUser({ email: loginForm.email, password: loginForm.password }))
//     if (result.meta.requestStatus === "fulfilled") {
//       onClose()
//       navigate("/chat")
//     }
//   }

//   const handleRegister = async (e) => {
//     e.preventDefault()
//     if (!validateRegister()) return
//     const result = await dispatch(
//       registerUser({ name: registerForm.name, email: registerForm.email, password: registerForm.password })
//     )
//     if (result.meta.requestStatus === "fulfilled") {
//       onClose()
//       navigate("/chat")
//     }
//   }

//   const handleForgot = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail) return
//     setForgotLoading(true)
//     try {
//       await api.post("/auth/forgot-password", { email: forgotEmail })
//       setForgotStatus("sent")
//     } catch {
//       setForgotStatus("error")
//     } finally {
//       setForgotLoading(false)
//     }
//   }

//   const handleGoogleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
//           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//         }).then((r) => r.json())

//         const result = await dispatch(googleLogin(tokenResponse.access_token))
//         if (result.meta.requestStatus === "fulfilled") {
//           onClose()
//           navigate("/chat")
//         }
//       } catch {
//         dispatch(clearError())
//       }
//     },
//     onError: () => {},
//   })

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           variants={overlay}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           style={{ background: "rgba(15,27,61,0.45)", backdropFilter: "blur(8px)" }}
//           onClick={(e) => e.target === e.currentTarget && onClose()}
//         >
//           <motion.div
//             variants={card}
//             className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
//           >
//             <div className="flex items-center justify-between px-6 pt-6 pb-4">
//               <div>
//                 <h2 className="text-xl font-black tracking-tight" style={{ color: NAVY }}>
//                   {forgotMode ? "Reset password" : tab === "login" ? "Welcome back" : "Create account"}
//                 </h2>
//                 <p className="text-sm text-purple-400 mt-0.5 font-medium">
//                   {forgotMode
//                     ? "Enter your email to receive a reset link"
//                     : tab === "login"
//                     ? "Sign in to your Blinkus.ai account"
//                     : "Start your trade intelligence journey"}
//                 </p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="w-9 h-9 rounded-xl flex items-center justify-center text-purple-300 hover:bg-purple-50 hover:text-purple-500 transition-colors"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {!forgotMode && (
//               <div className="flex mx-6 mb-4 bg-purple-50 rounded-xl p-1 gap-1">
//                 {["login", "register"].map((t) => (
//                   <button
//                     key={t}
//                     onClick={() => switchTab(t)}
//                     className="flex-1 py-2.5 rounded-lg text-sm font-700 transition-all"
//                     style={{
//                       fontWeight: 700,
//                       background: tab === t ? "white" : "transparent",
//                       color: tab === t ? PURPLE : "#9585c0",
//                       boxShadow: tab === t ? "0 1px 4px rgba(108,63,197,0.12)" : "none",
//                     }}
//                   >
//                     {t === "login" ? "Sign In" : "Sign Up"}
//                   </button>
//                 ))}
//               </div>
//             )}

//             <div className="px-6 pb-6">
//               {error && (
//                 <div className="mb-4 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium">
//                   {error}
//                 </div>
//               )}

//               {successMsg && (
//                 <div className="mb-4 px-4 py-3 bg-green-50 border border-green-100 rounded-xl text-sm text-green-700 font-medium flex items-center gap-2">
//                   <CheckCircle size={15} />
//                   {successMsg}
//                 </div>
//               )}

//               {forgotMode ? (
//                 <form onSubmit={handleForgot} className="space-y-4">
//                   {forgotStatus === "sent" ? (
//                     <div className="text-center py-4">
//                       <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
//                         <CheckCircle size={26} className="text-green-500" />
//                       </div>
//                       <p className="font-bold text-navy text-base" style={{ color: NAVY }}>
//                         Reset link sent
//                       </p>
//                       <p className="text-sm text-purple-400 mt-1">
//                         Check your email for the password reset link.
//                       </p>
//                     </div>
//                   ) : (
//                     <>
//                       <InputField
//                         icon={Mail}
//                         type="email"
//                         placeholder="Your email address"
//                         value={forgotEmail}
//                         onChange={(e) => setForgotEmail(e.target.value)}
//                       />
//                       <button
//                         type="submit"
//                         disabled={forgotLoading}
//                         className="w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity"
//                         style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, opacity: forgotLoading ? 0.7 : 1 }}
//                       >
//                         {forgotLoading ? "Sending..." : "Send Reset Link"}
//                         {!forgotLoading && <ArrowRight size={15} />}
//                       </button>
//                     </>
//                   )}
//                   <button
//                     type="button"
//                     onClick={() => setForgotMode(false)}
//                     className="w-full text-sm text-purple-400 hover:text-purple-600 font-medium py-1 transition-colors"
//                   >
//                     Back to sign in
//                   </button>
//                 </form>
//               ) : tab === "login" ? (
//                 <form onSubmit={handleLogin} className="space-y-3">
//                   <InputField
//                     icon={Mail}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginForm.email}
//                     onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))}
//                     error={fieldErrors.email}
//                   />
//                   <InputField
//                     icon={Lock}
//                     type={showPass ? "text" : "password"}
//                     placeholder="Password"
//                     value={loginForm.password}
//                     onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))}
//                     error={fieldErrors.password}
//                     rightElement={
//                       <button
//                         type="button"
//                         onClick={() => setShowPass((p) => !p)}
//                         className="text-purple-300 hover:text-purple-500 transition-colors"
//                       >
//                         {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
//                       </button>
//                     }
//                   />
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       onClick={() => setForgotMode(true)}
//                       className="text-xs font-semibold text-purple-400 hover:text-purple-600 transition-colors"
//                     >
//                       Forgot password?
//                     </button>
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity mt-1"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, opacity: loading ? 0.7 : 1 }}
//                   >
//                     {loading ? "Signing in..." : "Sign In"}
//                     {!loading && <ArrowRight size={15} />}
//                   </button>
//                   <div className="flex items-center gap-3 my-2">
//                     <div className="flex-1 h-px bg-purple-100" />
//                     <span className="text-xs text-purple-300 font-medium">or continue with</span>
//                     <div className="flex-1 h-px bg-purple-100" />
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => handleGoogleLogin()}
//                     className="w-full py-3 rounded-xl border border-purple-100 bg-white text-sm font-semibold flex items-center justify-center gap-2.5 hover:bg-purple-50 transition-colors"
//                     style={{ color: NAVY }}
//                   >
//                     <svg width="18" height="18" viewBox="0 0 48 48">
//                       <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
//                       <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
//                       <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
//                       <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
//                     </svg>
//                     Continue with Google
//                   </button>
//                 </form>
//               ) : (
//                 <form onSubmit={handleRegister} className="space-y-3">
//                   <InputField
//                     icon={User}
//                     type="text"
//                     placeholder="Full name"
//                     value={registerForm.name}
//                     onChange={(e) => setRegisterForm((p) => ({ ...p, name: e.target.value }))}
//                     error={fieldErrors.name}
//                   />
//                   <InputField
//                     icon={Mail}
//                     type="email"
//                     placeholder="Email address"
//                     value={registerForm.email}
//                     onChange={(e) => setRegisterForm((p) => ({ ...p, email: e.target.value }))}
//                     error={fieldErrors.email}
//                   />
//                   <InputField
//                     icon={Lock}
//                     type={showPass ? "text" : "password"}
//                     placeholder="Password (min. 8 characters)"
//                     value={registerForm.password}
//                     onChange={(e) => setRegisterForm((p) => ({ ...p, password: e.target.value }))}
//                     error={fieldErrors.password}
//                     rightElement={
//                       <button
//                         type="button"
//                         onClick={() => setShowPass((p) => !p)}
//                         className="text-purple-300 hover:text-purple-500 transition-colors"
//                       >
//                         {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
//                       </button>
//                     }
//                   />
//                   <InputField
//                     icon={Lock}
//                     type={showConfirm ? "text" : "password"}
//                     placeholder="Confirm password"
//                     value={registerForm.confirm}
//                     onChange={(e) => setRegisterForm((p) => ({ ...p, confirm: e.target.value }))}
//                     error={fieldErrors.confirm}
//                     rightElement={
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirm((p) => !p)}
//                         className="text-purple-300 hover:text-purple-500 transition-colors"
//                       >
//                         {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
//                       </button>
//                     }
//                   />
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity mt-1"
//                     style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`, opacity: loading ? 0.7 : 1 }}
//                   >
//                     {loading ? "Creating account..." : "Create Account"}
//                     {!loading && <ArrowRight size={15} />}
//                   </button>
//                   <div className="flex items-center gap-3 my-2">
//                     <div className="flex-1 h-px bg-purple-100" />
//                     <span className="text-xs text-purple-300 font-medium">or continue with</span>
//                     <div className="flex-1 h-px bg-purple-100" />
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => handleGoogleLogin()}
//                     className="w-full py-3 rounded-xl border border-purple-100 bg-white text-sm font-semibold flex items-center justify-center gap-2.5 hover:bg-purple-50 transition-colors"
//                     style={{ color: NAVY }}
//                   >
//                     <svg width="18" height="18" viewBox="0 0 48 48">
//                       <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
//                       <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
//                       <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
//                       <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
//                     </svg>
//                     Continue with Google
//                   </button>
//                   <p className="text-xs text-center text-purple-300 pt-1">
//                     By creating an account you agree to our Terms of Service.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }














// import { useState, useEffect, useRef, useCallback } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { loginUser, registerUser, googleLogin, clearError } from "../redux/slices/authSlice"
// import { api } from "../utils/api"

// const N = "#0f1b3d"
// const P = "#6c3fc5"
// const PL = "#8b5cf6"
// const PS = "rgba(108,63,197,0.07)"

// const font = "'DM Sans','Segoe UI',system-ui,sans-serif"

// const c = {
//   backdrop: {
//     position: "fixed", inset: 0, zIndex: 99999,
//     display: "flex", alignItems: "center", justifyContent: "center",
//     padding: "16px", background: "rgba(10,6,30,0.6)", backdropFilter: "blur(8px)",
//   },
//   modal: {
//     width: "100%", maxWidth: "460px", background: "#ffffff",
//     borderRadius: "24px", overflow: "hidden",
//     boxShadow: "0 32px 80px rgba(108,63,197,0.22), 0 0 0 1px rgba(108,63,197,0.08)",
//     fontFamily: font, position: "relative",
//   },
//   topBar: {
//     background: `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
//     padding: "28px 32px 24px",
//     position: "relative",
//   },
//   logoRow: {
//     display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px",
//   },
//   logoIcon: {
//     width: "28px", height: "28px", borderRadius: "8px",
//     background: "rgba(255,255,255,0.15)",
//     display: "flex", alignItems: "center", justifyContent: "center",
//   },
//   logoText: { fontSize: "15px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" },
//   logoSpan: { opacity: 0.65 },
//   titleArea: {},
//   title: { fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 },
//   sub: { fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "5px", fontWeight: 500 },
//   closeBtn: {
//     position: "absolute", top: "20px", right: "20px",
//     width: "30px", height: "30px", borderRadius: "8px",
//     background: "rgba(255,255,255,0.12)", border: "none",
//     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//     color: "rgba(255,255,255,0.8)", transition: "background 0.15s",
//   },
//   tabRow: {
//     display: "flex", gap: "4px",
//     background: "rgba(255,255,255,0.08)",
//     borderRadius: "12px", padding: "4px", marginTop: "16px",
//   },
//   tabActive: {
//     flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
//     cursor: "pointer", fontSize: "13px", fontWeight: 700,
//     background: "#fff", color: P, fontFamily: font,
//     boxShadow: "0 2px 8px rgba(0,0,0,0.15)", transition: "all 0.15s",
//   },
//   tabInactive: {
//     flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
//     cursor: "pointer", fontSize: "13px", fontWeight: 600,
//     background: "transparent", color: "rgba(255,255,255,0.65)", fontFamily: font,
//     transition: "all 0.15s",
//   },
//   body: { padding: "28px 32px 32px" },
//   errBox: {
//     padding: "11px 14px", background: "#fff5f5",
//     border: "1px solid #fecaca", borderRadius: "12px",
//     fontSize: "13px", color: "#dc2626", fontWeight: 500,
//     marginBottom: "18px", lineHeight: 1.5,
//   },
//   successBox: {
//     padding: "11px 14px", background: "#f0fdf4",
//     border: "1px solid #bbf7d0", borderRadius: "12px",
//     fontSize: "13px", color: "#16a34a", fontWeight: 500,
//     marginBottom: "18px", lineHeight: 1.5,
//   },
//   fieldWrap: { marginBottom: "14px" },
//   label: {
//     display: "block", fontSize: "11px", fontWeight: 700,
//     color: "#9585c0", marginBottom: "6px",
//     letterSpacing: "0.05em", textTransform: "uppercase",
//   },
//   inputWrap: { position: "relative" },
//   input: (err) => ({
//     width: "100%", padding: "12px 40px 12px 14px",
//     borderRadius: "12px", border: `1.5px solid ${err ? "#f87171" : "#e8e0f8"}`,
//     fontSize: "14px", color: N, outline: "none",
//     background: err ? "#fff5f5" : "#fafafe",
//     fontFamily: font, transition: "all 0.18s",
//     boxSizing: "border-box",
//   }),
//   inputIcon: {
//     position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
//     color: "#c4b5f4", pointerEvents: "none", display: "flex",
//   },
//   inputPaddedLeft: (err) => ({
//     width: "100%", padding: "12px 40px 12px 38px",
//     borderRadius: "12px", border: `1.5px solid ${err ? "#f87171" : "#e8e0f8"}`,
//     fontSize: "14px", color: N, outline: "none",
//     background: err ? "#fff5f5" : "#fafafe",
//     fontFamily: font, transition: "all 0.18s",
//     boxSizing: "border-box",
//   }),
//   eyeBtn: {
//     position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
//     background: "none", border: "none", cursor: "pointer",
//     color: "#c4b5f4", padding: 0, display: "flex", alignItems: "center",
//   },
//   fieldErr: { fontSize: "11px", color: "#ef4444", fontWeight: 600, marginTop: "5px" },
//   primaryBtn: (disabled) => ({
//     width: "100%", padding: "14px 0",
//     borderRadius: "13px", border: "none",
//     background: disabled ? "#d4c8f0" : `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
//     color: "#fff", fontSize: "14px", fontWeight: 700,
//     cursor: disabled ? "not-allowed" : "pointer",
//     fontFamily: font, transition: "all 0.18s",
//     boxShadow: disabled ? "none" : "0 6px 20px rgba(108,63,197,0.32)",
//     display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//     marginTop: "4px",
//   }),
//   divider: {
//     display: "flex", alignItems: "center", gap: "12px", margin: "16px 0",
//   },
//   divLine: { flex: 1, height: "1px", background: "#ede8f8" },
//   divText: { fontSize: "11px", color: "#b0a0d0", fontWeight: 700, letterSpacing: "0.06em" },
//   googleBtn: {
//     width: "100%", padding: "13px 0",
//     borderRadius: "13px", border: "1.5px solid #e8e0f8",
//     background: "#fff", color: N,
//     fontSize: "13px", fontWeight: 600,
//     cursor: "pointer", fontFamily: font,
//     display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
//     transition: "all 0.15s",
//   },
//   textLink: {
//     background: "none", border: "none", cursor: "pointer",
//     color: PL, fontSize: "12px", fontWeight: 700,
//     padding: 0, fontFamily: font,
//     textDecoration: "underline", textDecorationColor: "transparent",
//   },
//   terms: { fontSize: "11px", color: "#b0a0d0", textAlign: "center", marginTop: "14px", lineHeight: 1.5 },
// }

// function ZapIcon({ size = 14, color = "white" }) {
//   return <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
// }
// function EyeIcon({ open }) {
//   return open
//     ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
//     : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
// }
// function CloseIcon() {
//   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
// }
// function GoogleSvg() {
//   return <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
// }

// function checkPasswordStrength(pw) {
//   let score = 0
//   const checks = {
//     length: pw.length >= 8,
//     upper: /[A-Z]/.test(pw),
//     lower: /[a-z]/.test(pw),
//     number: /\d/.test(pw),
//     special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pw),
//   }
//   score = Object.values(checks).filter(Boolean).length
//   if (pw.length >= 12) score = Math.min(score + 1, 5)
//   const levels = ["", "Very Weak", "Weak", "Fair", "Strong", "Very Strong"]
//   const colors = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a"]
//   return { score, level: levels[Math.min(score, 5)], color: colors[Math.min(score, 5)], checks }
// }

// function PasswordStrength({ password }) {
//   if (!password) return null
//   const { score, level, color, checks } = checkPasswordStrength(password)
//   const bars = 5
//   return (
//     <div style={{ marginTop: "8px" }}>
//       <div style={{ display: "flex", gap: "4px", marginBottom: "6px" }}>
//         {Array.from({ length: bars }).map((_, i) => (
//           <div key={i} style={{
//             flex: 1, height: "4px", borderRadius: "4px",
//             background: i < score ? color : "#ede8f8",
//             transition: "background 0.25s",
//           }} />
//         ))}
//       </div>
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
//         <span style={{ fontSize: "11px", fontWeight: 700, color }}>
//           {level}
//         </span>
//         {score < 4 && (
//           <span style={{ fontSize: "11px", color: "#9585c0" }}>
//             {!checks.upper ? "Add uppercase" : !checks.number ? "Add number" : !checks.special ? "Add symbol" : "Make it longer"}
//           </span>
//         )}
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//         {[
//           { key: "length", label: "8+ chars" },
//           { key: "upper", label: "Uppercase" },
//           { key: "lower", label: "Lowercase" },
//           { key: "number", label: "Number" },
//           { key: "special", label: "Symbol" },
//         ].map(({ key, label }) => (
//           <span key={key} style={{
//             fontSize: "10px", padding: "3px 8px", borderRadius: "6px", fontWeight: 600,
//             background: checks[key] ? "#f0fdf4" : "#f5f3ff",
//             color: checks[key] ? "#16a34a" : "#9585c0",
//             border: `1px solid ${checks[key] ? "#bbf7d0" : "#ede8f8"}`,
//           }}>
//             {checks[key] ? "✓" : "·"} {label}
//           </span>
//         ))}
//       </div>
//     </div>
//   )
// }

// function OtpInput({ value, onChange, disabled }) {
//   const refs = useRef([])
//   const vals = value.split("")

//   const handleKey = (e, i) => {
//     if (e.key === "Backspace") {
//       e.preventDefault()
//       const arr = value.split("")
//       if (arr[i]) {
//         arr[i] = ""
//         onChange(arr.join(""))
//       } else if (i > 0) {
//         arr[i - 1] = ""
//         onChange(arr.join(""))
//         refs.current[i - 1]?.focus()
//       }
//     } else if (e.key === "ArrowLeft" && i > 0) {
//       refs.current[i - 1]?.focus()
//     } else if (e.key === "ArrowRight" && i < 5) {
//       refs.current[i + 1]?.focus()
//     }
//   }

//   const handleChange = (e, i) => {
//     const char = e.target.value.replace(/\D/g, "").slice(-1)
//     if (!char) return
//     const arr = value.split("").concat(Array(6).fill("")).slice(0, 6)
//     arr[i] = char
//     const joined = arr.join("")
//     onChange(joined)
//     if (i < 5) refs.current[i + 1]?.focus()
//   }

//   const handlePaste = (e) => {
//     e.preventDefault()
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
//     onChange(pasted.padEnd(6, "").slice(0, 6).trimEnd())
//     const nextIdx = Math.min(pasted.length, 5)
//     refs.current[nextIdx]?.focus()
//   }

//   return (
//     <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "20px 0" }}>
//       {Array.from({ length: 6 }).map((_, i) => (
//         <input
//           key={i}
//           ref={(el) => (refs.current[i] = el)}
//           type="text"
//           inputMode="numeric"
//           maxLength={1}
//           value={vals[i] || ""}
//           onChange={(e) => handleChange(e, i)}
//           onKeyDown={(e) => handleKey(e, i)}
//           onPaste={handlePaste}
//           disabled={disabled}
//           style={{
//             width: "48px", height: "56px", textAlign: "center",
//             fontSize: "22px", fontWeight: 900, fontFamily: font,
//             borderRadius: "13px", border: `2px solid ${vals[i] ? P : "#e8e0f8"}`,
//             background: vals[i] ? PS : "#fafafe",
//             color: N, outline: "none", transition: "all 0.15s",
//             boxShadow: vals[i] ? `0 0 0 3px rgba(108,63,197,0.12)` : "none",
//             opacity: disabled ? 0.5 : 1,
//           }}
//           onFocus={(e) => { e.target.style.borderColor = P; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.15)" }}
//           onBlur={(e) => { e.target.style.borderColor = vals[i] ? P : "#e8e0f8"; e.target.style.boxShadow = vals[i] ? "0 0 0 3px rgba(108,63,197,0.12)" : "none" }}
//         />
//       ))}
//     </div>
//   )
// }

// function InputField({ label, type = "text", value, onChange, error, placeholder, icon, showToggle, showVal, onToggle, autoFocus }) {
//   return (
//     <div style={c.fieldWrap}>
//       {label && <label style={c.label}>{label}</label>}
//       <div style={c.inputWrap}>
//         {icon && <span style={c.inputIcon}>{icon}</span>}
//         <input
//           type={showToggle ? (showVal ? "text" : "password") : type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           autoFocus={autoFocus}
//           autoComplete="off"
//           style={icon ? c.inputPaddedLeft(!!error) : c.input(!!error)}
//           onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
//           onBlur={(e) => { e.target.style.borderColor = error ? "#f87171" : "#e8e0f8"; e.target.style.background = error ? "#fff5f5" : "#fafafe"; e.target.style.boxShadow = "none" }}
//         />
//         {showToggle && (
//           <button type="button" onClick={onToggle} style={c.eyeBtn}>
//             <EyeIcon open={showVal} />
//           </button>
//         )}
//       </div>
//       {error && <div style={c.fieldErr}>{error}</div>}
//     </div>
//   )
// }

// const STEPS = { FORM: "form", OTP: "otp", FORGOT: "forgot", RESET_OTP: "reset_otp", RESET_PASS: "reset_pass" }

// export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { loading, error } = useSelector((s) => s.auth)

//   const [tab, setTab] = useState(defaultTab)
//   const [step, setStep] = useState(STEPS.FORM)
//   const [pendingEmail, setPendingEmail] = useState("")
//   const [otp, setOtp] = useState("")
//   const [otpLoading, setOtpLoading] = useState(false)
//   const [otpError, setOtpError] = useState("")
//   const [resendCooldown, setResendCooldown] = useState(0)
//   const [successMsg, setSuccessMsg] = useState("")
//   const [googleLoading, setGoogleLoading] = useState(false)
//   const [fieldErrors, setFieldErrors] = useState({})
//   const [showPass, setShowPass] = useState(false)
//   const [showConfirm, setShowConfirm] = useState(false)
//   const [showResetPass, setShowResetPass] = useState(false)

//   const [loginForm, setLoginForm] = useState({ email: "", password: "" })
//   const [regForm, setRegForm] = useState({ name: "", email: "", password: "", confirm: "" })
//   const [forgotEmail, setForgotEmail] = useState("")
//   const [resetOtp, setResetOtp] = useState("")
//   const [resetPass, setResetPass] = useState("")
//   const [resetConfirm, setResetConfirm] = useState("")

//   const cooldownRef = useRef(null)

//   const startCooldown = useCallback((secs = 60) => {
//     setResendCooldown(secs)
//     if (cooldownRef.current) clearInterval(cooldownRef.current)
//     cooldownRef.current = setInterval(() => {
//       setResendCooldown((p) => {
//         if (p <= 1) { clearInterval(cooldownRef.current); return 0 }
//         return p - 1
//       })
//     }, 1000)
//   }, [])

//   useEffect(() => {
//     if (isOpen) {
//       setTab(defaultTab)
//       setStep(STEPS.FORM)
//       setOtp("")
//       setOtpError("")
//       setSuccessMsg("")
//       setFieldErrors({})
//       setShowPass(false)
//       dispatch(clearError())
//     }
//     return () => { if (cooldownRef.current) clearInterval(cooldownRef.current) }
//   }, [isOpen, defaultTab, dispatch])

//   const afterAuth = useCallback(() => { onClose(); navigate("/chat") }, [onClose, navigate])

//   const validateRegister = () => {
//     const errs = {}
//     if (!regForm.name.trim()) errs.name = "Name is required"
//     if (!regForm.email.trim()) errs.email = "Email is required"
//     else if (!/\S+@\S+\.\S+/.test(regForm.email)) errs.email = "Enter a valid email"
//     if (!regForm.password) errs.password = "Password is required"
//     else if (regForm.password.length < 8) errs.password = "Minimum 8 characters"
//     if (regForm.password !== regForm.confirm) errs.confirm = "Passwords do not match"
//     setFieldErrors(errs)
//     return Object.keys(errs).length === 0
//   }

//   const handleRegister = async (e) => {
//     e.preventDefault()
//     if (!validateRegister()) return
//     try {
//       const data = await api.post("/auth/register", { name: regForm.name, email: regForm.email, password: regForm.password })
//       setPendingEmail(regForm.email)
//       setOtp("")
//       setOtpError("")
//       setStep(STEPS.OTP)
//       startCooldown(60)
//       setSuccessMsg(data.message)
//     } catch (err) {
//       dispatch(clearError())
//       setFieldErrors({ general: err.message })
//     }
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const errs = {}
//     if (!loginForm.email.trim()) errs.email = "Email is required"
//     if (!loginForm.password) errs.password = "Password is required"
//     if (Object.keys(errs).length) { setFieldErrors(errs); return }

//     const result = await dispatch(loginUser({ email: loginForm.email, password: loginForm.password }))
//     if (result.meta.requestStatus === "fulfilled") {
//       afterAuth()
//       return
//     }
//     const payload = result.payload || ""
//     if (payload.includes("not verified") || result.error?.message?.includes("403")) {
//       setPendingEmail(loginForm.email)
//       setOtp("")
//       setOtpError("")
//       setStep(STEPS.OTP)
//       startCooldown(60)
//       setSuccessMsg("A verification code has been sent to your email.")
//     }
//   }

//   const handleVerifyOtp = async (e) => {
//     e?.preventDefault()
//     if (otp.replace(/\s/g, "").length < 6) { setOtpError("Please enter the complete 6-digit code"); return }
//     setOtpLoading(true)
//     setOtpError("")
//     try {
//       const data = await api.post("/auth/verify-otp", { email: pendingEmail, otp })
//       localStorage.setItem("blinkus_token", data.token)
//       localStorage.setItem("blinkus_refresh", data.refreshToken)
//       localStorage.setItem("blinkus_user", JSON.stringify(data.user))
//       dispatch({ type: "auth/login/fulfilled", payload: data })
//       afterAuth()
//     } catch (err) {
//       if (err.message?.includes("expired")) {
//         setOtpError("Code expired. Please request a new one.")
//         setOtp("")
//       } else {
//         setOtpError(err.message || "Invalid code. Please try again.")
//       }
//     } finally {
//       setOtpLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     if (resendCooldown > 0) return
//     setOtpLoading(true)
//     try {
//       await api.post("/auth/resend-otp", { email: pendingEmail })
//       setOtpError("")
//       setOtp("")
//       setSuccessMsg("New code sent to your email.")
//       startCooldown(60)
//     } catch (err) {
//       setOtpError(err.message || "Failed to resend. Please try again.")
//     } finally {
//       setOtpLoading(false)
//     }
//   }

//   const handleForgot = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail.trim()) return
//     setOtpLoading(true)
//     setOtpError("")
//     try {
//       const data = await api.post("/auth/forgot-password", { email: forgotEmail })
//       setPendingEmail(forgotEmail)
//       setResetOtp("")
//       setStep(STEPS.RESET_OTP)
//       startCooldown(60)
//       setSuccessMsg(data.message)
//     } catch (err) {
//       setOtpError(err.message || "Failed to send. Please try again.")
//     } finally {
//       setOtpLoading(false)
//     }
//   }

//   const handleResetOtp = async (e) => {
//     e?.preventDefault()
//     if (resetOtp.replace(/\s/g, "").length < 6) { setOtpError("Enter the 6-digit code from your email"); return }
//     setOtpError("")
//     setStep(STEPS.RESET_PASS)
//   }

//   const handleResetPass = async (e) => {
//     e.preventDefault()
//     if (resetPass.length < 8) { setOtpError("Password must be at least 8 characters"); return }
//     if (resetPass !== resetConfirm) { setOtpError("Passwords do not match"); return }
//     setOtpLoading(true)
//     setOtpError("")
//     try {
//       const data = await api.post("/auth/reset-password", { email: pendingEmail, otp: resetOtp, password: resetPass })
//       localStorage.setItem("blinkus_token", data.token)
//       localStorage.setItem("blinkus_refresh", data.refreshToken)
//       localStorage.setItem("blinkus_user", JSON.stringify(data.user))
//       dispatch({ type: "auth/login/fulfilled", payload: data })
//       afterAuth()
//     } catch (err) {
//       setOtpError(err.message || "Reset failed. Please try again.")
//     } finally {
//       setOtpLoading(false)
//     }
//   }

//   const handleGoogleClick = useCallback(async () => {
//     if (googleLoading) return
//     const gid = import.meta.env.VITE_GOOGLE_CLIENT_ID
//     if (!gid) { alert("Google OAuth not configured. Set VITE_GOOGLE_CLIENT_ID."); return }
//     setGoogleLoading(true)
//     try {
//       const params = new URLSearchParams({
//         client_id: gid, redirect_uri: `${window.location.origin}/auth/google/callback`,
//         response_type: "token", scope: "openid email profile", prompt: "select_account",
//       })
//       const w = 500, h = 580
//       const l = window.screenX + (window.outerWidth - w) / 2
//       const t = window.screenY + (window.outerHeight - h) / 2
//       const popup = window.open(`https://accounts.google.com/o/oauth2/v2/auth?${params}`, "google_auth", `width=${w},height=${h},left=${l},top=${t}`)
//       const onMsg = async (ev) => {
//         if (ev.origin !== window.location.origin || !ev.data?.access_token) return
//         window.removeEventListener("message", onMsg)
//         popup?.close()
//         const result = await dispatch(googleLogin(ev.data.access_token))
//         if (result.meta.requestStatus === "fulfilled") afterAuth()
//         setGoogleLoading(false)
//       }
//       window.addEventListener("message", onMsg)
//       const t2 = setInterval(() => { if (popup?.closed) { clearInterval(t2); window.removeEventListener("message", onMsg); setGoogleLoading(false) } }, 500)
//     } catch {
//       setGoogleLoading(false)
//     }
//   }, [googleLoading, dispatch, afterAuth])

//   const switchTab = (t) => {
//     setTab(t); setStep(STEPS.FORM); setFieldErrors({}); setSuccessMsg(""); dispatch(clearError())
//   }

//   const stepTitles = {
//     [STEPS.FORM]: { title: tab === "login" ? "Welcome back" : "Create account", sub: tab === "login" ? "Sign in to your Blinkus.ai account" : "Start your trade intelligence journey" },
//     [STEPS.OTP]: { title: "Verify your email", sub: `Enter the 6-digit code sent to ${pendingEmail}` },
//     [STEPS.FORGOT]: { title: "Reset password", sub: "Enter your email to receive a reset code" },
//     [STEPS.RESET_OTP]: { title: "Enter reset code", sub: `We sent a code to ${pendingEmail}` },
//     [STEPS.RESET_PASS]: { title: "New password", sub: "Set a strong password for your account" },
//   }

//   const current = stepTitles[step]
//   const showTabs = step === STEPS.FORM
//   const globalErr = error || fieldErrors.general
//   const isLoading = loading || otpLoading

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.18 }}
//           style={c.backdrop}
//           onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93, y: 24 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.93, y: 24 }}
//             transition={{ type: "spring", stiffness: 360, damping: 32 }}
//             style={c.modal}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div style={c.topBar}>
//               <div style={c.logoRow}>
//                 <div style={c.logoIcon}><ZapIcon /></div>
//                 <span style={c.logoText}>Blinkus<span style={c.logoSpan}>.ai</span></span>
//               </div>
//               <div style={c.titleArea}>
//                 <h2 style={c.title}>{current.title}</h2>
//                 <p style={c.sub}>{current.sub}</p>
//               </div>
//               {showTabs && (
//                 <div style={c.tabRow}>
//                   <button style={tab === "login" ? c.tabActive : c.tabInactive} onClick={() => switchTab("login")}>Sign In</button>
//                   <button style={tab === "register" ? c.tabActive : c.tabInactive} onClick={() => switchTab("register")}>Sign Up</button>
//                 </div>
//               )}
//               <button style={c.closeBtn} onClick={onClose}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}>
//                 <CloseIcon />
//               </button>
//             </div>

//             <div style={c.body}>
//               {globalErr && <div style={c.errBox}>{globalErr}</div>}
//               {successMsg && !otpError && step !== STEPS.FORM && <div style={c.successBox}>{successMsg}</div>}
//               {otpError && <div style={c.errBox}>{otpError}</div>}

//               <AnimatePresence mode="wait">
//                 {step === STEPS.FORM && tab === "login" && (
//                   <motion.form key="login" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.2 }} onSubmit={handleLogin}>
//                     <InputField label="Email address" type="email" value={loginForm.email} onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@example.com" error={fieldErrors.email}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
//                     />
//                     <InputField label="Password" value={loginForm.password} onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))} placeholder="Your password" error={fieldErrors.password}
//                       showToggle showVal={showPass} onToggle={() => setShowPass((v) => !v)}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
//                     />
//                     <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-6px", marginBottom: "16px" }}>
//                       <button type="button" style={c.textLink} onClick={() => { setStep(STEPS.FORGOT); dispatch(clearError()); setOtpError("") }}>
//                         Forgot password?
//                       </button>
//                     </div>
//                     <button type="submit" disabled={isLoading} style={c.primaryBtn(isLoading)}>
//                       {isLoading ? <Spinner /> : null}{isLoading ? "Signing in..." : "Sign In"}
//                     </button>
//                     <div style={c.divider}><div style={c.divLine}/><span style={c.divText}>OR</span><div style={c.divLine}/></div>
//                     <button type="button" onClick={handleGoogleClick} disabled={googleLoading} style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
//                       onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
//                       onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}>
//                       <GoogleSvg /> Continue with Google
//                     </button>
//                   </motion.form>
//                 )}

//                 {step === STEPS.FORM && tab === "register" && (
//                   <motion.form key="register" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }} onSubmit={handleRegister}>
//                     <InputField label="Full name" type="text" value={regForm.name} onChange={(e) => setRegForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your full name" error={fieldErrors.name}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
//                     />
//                     <InputField label="Email address" type="email" value={regForm.email} onChange={(e) => setRegForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@example.com" error={fieldErrors.email}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
//                     />
//                     <div style={c.fieldWrap}>
//                       <label style={c.label}>Password</label>
//                       <div style={c.inputWrap}>
//                         <span style={c.inputIcon}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
//                         <input type={showPass ? "text" : "password"} value={regForm.password} onChange={(e) => setRegForm((p) => ({ ...p, password: e.target.value }))} placeholder="Min. 8 characters" style={c.inputPaddedLeft(!!fieldErrors.password)}
//                           onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
//                           onBlur={(e) => { e.target.style.borderColor = fieldErrors.password ? "#f87171" : "#e8e0f8"; e.target.style.background = fieldErrors.password ? "#fff5f5" : "#fafafe"; e.target.style.boxShadow = "none" }} />
//                         <button type="button" onClick={() => setShowPass((v) => !v)} style={c.eyeBtn}><EyeIcon open={showPass} /></button>
//                       </div>
//                       {fieldErrors.password && <div style={c.fieldErr}>{fieldErrors.password}</div>}
//                       <PasswordStrength password={regForm.password} />
//                     </div>
//                     <InputField label="Confirm password" value={regForm.confirm} onChange={(e) => setRegForm((p) => ({ ...p, confirm: e.target.value }))} placeholder="Re-enter password" error={fieldErrors.confirm}
//                       showToggle showVal={showConfirm} onToggle={() => setShowConfirm((v) => !v)}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
//                     />
//                     <button type="submit" disabled={isLoading} style={c.primaryBtn(isLoading)}>
//                       {isLoading ? <Spinner /> : null}{isLoading ? "Creating account..." : "Create Account"}
//                     </button>
//                     <div style={c.divider}><div style={c.divLine}/><span style={c.divText}>OR</span><div style={c.divLine}/></div>
//                     <button type="button" onClick={handleGoogleClick} disabled={googleLoading} style={{ ...c.googleBtn, opacity: googleLoading ? 0.7 : 1 }}
//                       onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafe"; e.currentTarget.style.borderColor = "#d4bffb" }}
//                       onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e8e0f8" }}>
//                       <GoogleSvg /> Continue with Google
//                     </button>
//                     <p style={c.terms}>By signing up you agree to our Terms of Service.</p>
//                   </motion.form>
//                 )}

//                 {step === STEPS.OTP && (
//                   <motion.div key="otp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
//                     <p style={{ fontSize: "14px", color: "#7c6fa0", lineHeight: 1.6, textAlign: "center" }}>
//                       We sent a 6-digit code to <strong style={{ color: N }}>{pendingEmail}</strong>.<br />Check your inbox and spam folder.
//                     </p>
//                     <OtpInput value={otp} onChange={setOtp} disabled={otpLoading} />
//                     <button onClick={handleVerifyOtp} disabled={isLoading || otp.replace(/\s/g, "").length < 6} style={c.primaryBtn(isLoading || otp.replace(/\s/g, "").length < 6)}>
//                       {isLoading ? <Spinner /> : null}{isLoading ? "Verifying..." : "Verify Email"}
//                     </button>
//                     <div style={{ textAlign: "center", marginTop: "16px" }}>
//                       <span style={{ fontSize: "13px", color: "#9585c0" }}>Didn't receive it? </span>
//                       <button type="button" onClick={handleResendOtp} disabled={resendCooldown > 0 || otpLoading}
//                         style={{ ...c.textLink, opacity: resendCooldown > 0 ? 0.5 : 1, cursor: resendCooldown > 0 ? "default" : "pointer" }}>
//                         {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend code"}
//                       </button>
//                     </div>
//                     <div style={{ textAlign: "center", marginTop: "10px" }}>
//                       <button type="button" style={{ ...c.textLink, color: "#9585c0", fontSize: "12px", textDecoration: "none" }} onClick={() => { setStep(STEPS.FORM); setOtp(""); setOtpError("") }}>
//                         ← Back
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}

//                 {step === STEPS.FORGOT && (
//                   <motion.form key="forgot" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} onSubmit={handleForgot}>
//                     <InputField label="Email address" type="email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="you@example.com" autoFocus
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
//                     />
//                     <button type="submit" disabled={isLoading} style={c.primaryBtn(isLoading)}>
//                       {isLoading ? <Spinner /> : null}{isLoading ? "Sending..." : "Send Reset Code"}
//                     </button>
//                     <div style={{ textAlign: "center", marginTop: "14px" }}>
//                       <button type="button" style={{ ...c.textLink, color: "#9585c0", fontSize: "12px", textDecoration: "none" }} onClick={() => { setStep(STEPS.FORM); setOtpError("") }}>
//                         ← Back to Sign In
//                       </button>
//                     </div>
//                   </motion.form>
//                 )}

//                 {step === STEPS.RESET_OTP && (
//                   <motion.div key="resetotp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
//                     <p style={{ fontSize: "14px", color: "#7c6fa0", lineHeight: 1.6, textAlign: "center" }}>
//                       Enter the reset code sent to <strong style={{ color: N }}>{pendingEmail}</strong>.
//                     </p>
//                     <OtpInput value={resetOtp} onChange={setResetOtp} disabled={otpLoading} />
//                     <button onClick={handleResetOtp} disabled={isLoading || resetOtp.replace(/\s/g, "").length < 6} style={c.primaryBtn(isLoading || resetOtp.replace(/\s/g, "").length < 6)}>
//                       Continue
//                     </button>
//                     <div style={{ textAlign: "center", marginTop: "16px" }}>
//                       <button type="button" onClick={async () => {
//                         setOtpLoading(true)
//                         try { await api.post("/auth/forgot-password", { email: pendingEmail }); setResetOtp(""); setOtpError(""); startCooldown(60) } catch (e) { setOtpError(e.message) } finally { setOtpLoading(false) }
//                       }} disabled={resendCooldown > 0} style={{ ...c.textLink, opacity: resendCooldown > 0 ? 0.5 : 1 }}>
//                         {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend code"}
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}

//                 {step === STEPS.RESET_PASS && (
//                   <motion.form key="resetpass" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} onSubmit={handleResetPass}>
//                     <div style={c.fieldWrap}>
//                       <label style={c.label}>New Password</label>
//                       <div style={c.inputWrap}>
//                         <span style={c.inputIcon}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
//                         <input type={showResetPass ? "text" : "password"} value={resetPass} onChange={(e) => setResetPass(e.target.value)} placeholder="Min. 8 characters" autoFocus style={c.inputPaddedLeft(false)}
//                           onFocus={(e) => { e.target.style.borderColor = P; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.12)" }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e8e0f8"; e.target.style.background = "#fafafe"; e.target.style.boxShadow = "none" }} />
//                         <button type="button" onClick={() => setShowResetPass((v) => !v)} style={c.eyeBtn}><EyeIcon open={showResetPass} /></button>
//                       </div>
//                       <PasswordStrength password={resetPass} />
//                     </div>
//                     <InputField label="Confirm password" value={resetConfirm} onChange={(e) => setResetConfirm(e.target.value)} placeholder="Re-enter password"
//                       showToggle showVal={showConfirm} onToggle={() => setShowConfirm((v) => !v)}
//                       icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
//                     />
//                     <button type="submit" disabled={isLoading} style={c.primaryBtn(isLoading)}>
//                       {isLoading ? <Spinner /> : null}{isLoading ? "Updating..." : "Update Password"}
//                     </button>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// function Spinner() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
//       <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
//       <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
//     </svg>
//   )
// }
















// import { useState, useEffect, useCallback } from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { googleLogin, clearError } from "../redux/slices/authSlice"
// import LoginForm from "./authentication/LoginForm"
// import RegisterForm from "./authentication/RegisterForm"
// import OtpVerify from "./authentication/OtpVerify"
// import ForgotPassword from "./authentication/ForgotPassword"
// import ResetOtpStep from "./authentication/ResetOtpStep"
// import ResetPasswordStep from "./authentication/ResetPasswordStep"
// import { N, P, font } from "./authentication/authShared"

// const STEPS = {
//   FORM: "form",
//   OTP: "otp",
//   FORGOT: "forgot",
//   RESET_OTP: "reset_otp",
//   RESET_PASS: "reset_pass",
// }

// function ZapIcon() {
//   return <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
// }

// function CloseIcon() {
//   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
// }

// const stepMeta = (tab, pendingEmail) => ({
//   [STEPS.FORM]: {
//     title: tab === "login" ? "Welcome back" : "Create account",
//     sub: tab === "login" ? "Sign in to your Blinkus.ai account" : "Start your trade intelligence journey",
//   },
//   [STEPS.OTP]: { title: "Verify your email", sub: `Enter the 6-digit code sent to ${pendingEmail}` },
//   [STEPS.FORGOT]: { title: "Reset password", sub: "Enter your email to receive a reset code" },
//   [STEPS.RESET_OTP]: { title: "Enter reset code", sub: `We sent a code to ${pendingEmail}` },
//   [STEPS.RESET_PASS]: { title: "New password", sub: "Set a strong password for your account" },
// })

// export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [tab, setTab] = useState(defaultTab)
//   const [step, setStep] = useState(STEPS.FORM)
//   const [pendingEmail, setPendingEmail] = useState("")
//   const [resetOtp, setResetOtp] = useState("")
//   const [googleLoading, setGoogleLoading] = useState(false)

//   useEffect(() => {
//     if (isOpen) {
//       setTab(defaultTab)
//       setStep(STEPS.FORM)
//       setPendingEmail("")
//       setResetOtp("")
//       setGoogleLoading(false)
//       dispatch(clearError())
//     }
//   }, [isOpen, defaultTab, dispatch])

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => { document.body.style.overflow = "" }
//   }, [isOpen])

//   const afterAuth = useCallback(() => { onClose(); navigate("/chat") }, [onClose, navigate])

//   const handleGoogleClick = useCallback(async () => {
//     if (googleLoading) return
//     const gid = import.meta.env.VITE_GOOGLE_CLIENT_ID
//     if (!gid) { alert("Google OAuth not configured."); return }
//     setGoogleLoading(true)
//     try {
//       const params = new URLSearchParams({
//         client_id: gid,
//         redirect_uri: `${window.location.origin}/auth/google/callback`,
//         response_type: "token", scope: "openid email profile", prompt: "select_account",
//       })
//       const w = 500, h = 580
//       const l = window.screenX + (window.outerWidth - w) / 2
//       const t = window.screenY + (window.outerHeight - h) / 2
//       const popup = window.open(`https://accounts.google.com/o/oauth2/v2/auth?${params}`, "google_auth", `width=${w},height=${h},left=${l},top=${t}`)
//       const onMsg = async (ev) => {
//         if (ev.origin !== window.location.origin || !ev.data?.access_token) return
//         window.removeEventListener("message", onMsg)
//         popup?.close()
//         const result = await dispatch(googleLogin(ev.data.access_token))
//         if (result.meta.requestStatus === "fulfilled") afterAuth()
//         setGoogleLoading(false)
//       }
//       window.addEventListener("message", onMsg)
//       const timer = setInterval(() => {
//         if (popup?.closed) {
//           clearInterval(timer)
//           window.removeEventListener("message", onMsg)
//           setGoogleLoading(false)
//         }
//       }, 500)
//     } catch {
//       setGoogleLoading(false)
//     }
//   }, [googleLoading, dispatch, afterAuth])

//   const handleLoginSuccess = (type, email) => {
//     if (type === "unverified" && email) {
//       setPendingEmail(email)
//       setStep(STEPS.OTP)
//     } else {
//       afterAuth()
//     }
//   }

//   const handleRegisterSuccess = (email, message) => {
//     setPendingEmail(email)
//     setStep(STEPS.OTP)
//   }

//   const handleForgotSuccess = (email, message) => {
//     setPendingEmail(email)
//     setStep(STEPS.RESET_OTP)
//   }

//   const handleResetOtpSuccess = (otp) => {
//     setResetOtp(otp)
//     setStep(STEPS.RESET_PASS)
//   }

//   const switchTab = (t) => {
//     setTab(t)
//     setStep(STEPS.FORM)
//     dispatch(clearError())
//   }

//   const meta = stepMeta(tab, pendingEmail)[step]
//   const showTabs = step === STEPS.FORM

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.18 }}
//           style={{
//             position: "fixed", inset: 0, zIndex: 99999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: "16px", background: "rgba(10,6,30,0.6)", backdropFilter: "blur(8px)",
//           }}
//           onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93, y: 24 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.93, y: 24 }}
//             transition={{ type: "spring", stiffness: 360, damping: 32 }}
//             style={{
//               width: "100%", maxWidth: "460px",
//               background: "#ffffff", borderRadius: "24px", overflow: "hidden",
//               boxShadow: "0 32px 80px rgba(108,63,197,0.22), 0 0 0 1px rgba(108,63,197,0.08)",
//               fontFamily: font, position: "relative",
//               maxHeight: "calc(100vh - 32px)", overflowY: "auto",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div style={{
//               background: `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
//               padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(20px,4vw,24px)",
//               position: "relative",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
//                 <div style={{
//                   width: "28px", height: "28px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <ZapIcon />
//                 </div>
//                 <span style={{ fontSize: "15px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
//                   Blinkus<span style={{ opacity: 0.65 }}>.ai</span>
//                 </span>
//               </div>
//               <h2 style={{ fontSize: "clamp(18px,4vw,22px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 }}>{meta.title}</h2>
//               <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "5px", fontWeight: 500 }}>{meta.sub}</p>
//               {showTabs && (
//                 <div style={{
//                   display: "flex", gap: "4px",
//                   background: "rgba(255,255,255,0.08)",
//                   borderRadius: "12px", padding: "4px", marginTop: "16px",
//                 }}>
//                   {["login", "register"].map((t) => (
//                     <button
//                       key={t}
//                       style={{
//                         flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
//                         cursor: "pointer", fontSize: "13px", fontWeight: tab === t ? 700 : 600,
//                         background: tab === t ? "#fff" : "transparent",
//                         color: tab === t ? P : "rgba(255,255,255,0.65)",
//                         fontFamily: font,
//                         boxShadow: tab === t ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
//                         transition: "all 0.15s",
//                       }}
//                       onClick={() => switchTab(t)}
//                     >
//                       {t === "login" ? "Sign In" : "Sign Up"}
//                     </button>
//                   ))}
//                 </div>
//               )}
//               <button
//                 style={{
//                   position: "absolute", top: "clamp(14px,3vw,20px)", right: "clamp(14px,3vw,20px)",
//                   width: "30px", height: "30px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.12)", border: "none",
//                   cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//                   color: "rgba(255,255,255,0.8)",
//                 }}
//                 onClick={onClose}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             <div style={{ padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(24px,4vw,32px)" }}>
//               <AnimatePresence mode="wait">
//                 {step === STEPS.FORM && tab === "login" && (
//                   <LoginForm
//                     onSuccess={handleLoginSuccess}
//                     onForgot={() => setStep(STEPS.FORGOT)}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.FORM && tab === "register" && (
//                   <RegisterForm
//                     onSuccess={handleRegisterSuccess}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.OTP && (
//                   <OtpVerify
//                     email={pendingEmail}
//                     onSuccess={afterAuth}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.FORGOT && (
//                   <ForgotPassword
//                     onSuccess={handleForgotSuccess}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.RESET_OTP && (
//                   <ResetOtpStep
//                     email={pendingEmail}
//                     onSuccess={handleResetOtpSuccess}
//                   />
//                 )}
//                 {step === STEPS.RESET_PASS && (
//                   <ResetPasswordStep
//                     email={pendingEmail}
//                     otp={resetOtp}
//                     onSuccess={afterAuth}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }







// import { useState, useEffect, useCallback } from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { clearError } from "../redux/slices/authSlice"
// import { api } from "../utils/api"
// import LoginForm from "./authentication/LoginForm"
// import RegisterForm from "./authentication/RegisterForm"
// import OtpVerify from "./authentication/OtpVerify"
// import ForgotPassword from "./authentication/ForgotPassword"
// import ResetOtpStep from "./authentication/ResetOtpStep"
// import ResetPasswordStep from "./authentication/ResetPasswordStep"
// import { N, P, font } from "./authentication/authShared"

// const STEPS = {
//   FORM: "form",
//   OTP: "otp",
//   FORGOT: "forgot",
//   RESET_OTP: "reset_otp",
//   RESET_PASS: "reset_pass",
// }

// function ZapIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
//       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//     </svg>
//   )
// }

// function CloseIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//       <line x1="18" y1="6" x2="6" y2="18"/>
//       <line x1="6" y1="6" x2="18" y2="18"/>
//     </svg>
//   )
// }

// const stepMeta = (tab, pendingEmail) => ({
//   [STEPS.FORM]: {
//     title: tab === "login" ? "Welcome back" : "Create account",
//     sub: tab === "login" ? "Sign in to your Blinkus.ai account" : "Start your trade intelligence journey",
//   },
//   [STEPS.OTP]: { title: "Verify your email", sub: `Enter the 6-digit OTP sent to ${pendingEmail}` },
//   [STEPS.FORGOT]: { title: "Reset password", sub: "Enter your email to receive an OTP" },
//   [STEPS.RESET_OTP]: { title: "Enter reset OTP", sub: `We sent a 6-digit OTP to ${pendingEmail}` },
//   [STEPS.RESET_PASS]: { title: "New password", sub: "Set a strong password for your account" },
// })

// export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [tab, setTab] = useState(defaultTab)
//   const [step, setStep] = useState(STEPS.FORM)
//   const [pendingEmail, setPendingEmail] = useState("")
//   const [resetOtp, setResetOtp] = useState("")
//   const [googleLoading, setGoogleLoading] = useState(false)

//   useEffect(() => {
//     if (isOpen) {
//       setTab(defaultTab)
//       setStep(STEPS.FORM)
//       setPendingEmail("")
//       setResetOtp("")
//       setGoogleLoading(false)
//       dispatch(clearError())
//     }
//   }, [isOpen, defaultTab, dispatch])

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : ""
//     return () => { document.body.style.overflow = "" }
//   }, [isOpen])

//   const afterAuth = useCallback(() => { onClose(); navigate("/chat") }, [onClose, navigate])

//   const handleGoogleClick = useCallback(async () => {
//     if (googleLoading) return
//     const gid = import.meta.env.VITE_GOOGLE_CLIENT_ID
//     if (!gid) { alert("Google OAuth is not configured. Set VITE_GOOGLE_CLIENT_ID in your .env file."); return } 

//     setGoogleLoading(true)

//     const params = new URLSearchParams({
//       client_id: gid,
//       redirect_uri: `${window.location.origin}/auth/google/callback`,
//       response_type: "token",
//       scope: "openid email profile",
//       prompt: "select_account",
//     })

//     const w = 500, h = 580
//     const left = Math.max(0, window.screenX + (window.outerWidth - w) / 2)
//     const top = Math.max(0, window.screenY + (window.outerHeight - h) / 2)
//     const popup = window.open(
//       `https://accounts.google.com/o/oauth2/v2/auth?${params}`,
//       "google_oauth",
//       `width=${w},height=${h},left=${left},top=${top},scrollbars=yes`
//     )

//     if (!popup) {
//       setGoogleLoading(false)
//       alert("Popup was blocked. Please allow popups for this site and try again.")
//       return
//     }

//     const onMessage = async (ev) => {
//       if (ev.origin !== window.location.origin) return
//       if (!ev.data?.type === "google_oauth" && !ev.data?.access_token) return

//       window.removeEventListener("message", onMessage)
//       clearInterval(pollTimer)
//       popup?.close()

//       const accessToken = ev.data?.access_token
//       if (!accessToken) {
//         setGoogleLoading(false)
//         return
//       }

//       try {
//         const data = await api.post("/auth/google", { access_token: accessToken })
//         localStorage.setItem("blinkus_token", data.token)
//         localStorage.setItem("blinkus_refresh", data.refreshToken)
//         localStorage.setItem("blinkus_user", JSON.stringify(data.user))
//         dispatch({ type: "auth/login/fulfilled", payload: data })
//         afterAuth()
//       } catch (err) {
//         console.error("Google auth error:", err.message)
//       } finally {
//         setGoogleLoading(false)
//       }
//     }

//     window.addEventListener("message", onMessage)

//     const pollTimer = setInterval(() => {
//       if (popup?.closed) {
//         clearInterval(pollTimer)
//         window.removeEventListener("message", onMessage)
//         setGoogleLoading(false)
//       }
//     }, 600)
//   }, [googleLoading, dispatch, afterAuth])

//   const handleLoginSuccess = (type, email) => {
//     if (type === "unverified" && email) {
//       setPendingEmail(email)
//       setStep(STEPS.OTP)
//     } else {
//       afterAuth()
//     }
//   }

//   const handleRegisterSuccess = (email) => {
//     setPendingEmail(email)
//     setStep(STEPS.OTP)
//   }

//   const handleForgotSuccess = (email) => {
//     setPendingEmail(email)
//     setStep(STEPS.RESET_OTP)
//   }

//   const handleResetOtpSuccess = (otp) => {
//     setResetOtp(otp)
//     setStep(STEPS.RESET_PASS)
//   }

//   const switchTab = (t) => {
//     setTab(t)
//     setStep(STEPS.FORM)
//     dispatch(clearError())
//   }

//   const meta = stepMeta(tab, pendingEmail)[step]
//   const showTabs = step === STEPS.FORM

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.18 }}
//           style={{
//             position: "fixed", inset: 0, zIndex: 99999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: "16px",
//             background: "rgba(10,6,30,0.6)",
//             backdropFilter: "blur(8px)",
//           }}
//           onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93, y: 24 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.93, y: 24 }}
//             transition={{ type: "spring", stiffness: 360, damping: 32 }}
//             style={{
//               width: "100%", maxWidth: "460px",
//               background: "#ffffff",
//               borderRadius: "24px",
//               overflow: "hidden",
//               boxShadow: "0 32px 80px rgba(108,63,197,0.22), 0 0 0 1px rgba(108,63,197,0.08)",
//               fontFamily: font,
//               maxHeight: "calc(100vh - 32px)",
//               overflowY: "auto",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div style={{
//               background: `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
//               padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(18px,4vw,24px)",
//               position: "relative",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
//                 <div style={{
//                   width: "28px", height: "28px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <ZapIcon />
//                 </div>
//                 <span style={{ fontSize: "15px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
//                   Blinkus<span style={{ opacity: 0.65 }}>.ai</span>
//                 </span>
//               </div>

//               <h2 style={{ fontSize: "clamp(18px,4vw,22px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 }}>
//                 {meta.title}
//               </h2>
//               <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "5px", fontWeight: 500, marginBottom: 0 }}>
//                 {meta.sub}
//               </p>

//               {showTabs && (
//                 <div style={{
//                   display: "flex", gap: "4px",
//                   background: "rgba(255,255,255,0.08)",
//                   borderRadius: "12px", padding: "4px", marginTop: "16px",
//                 }}>
//                   {["login", "register"].map((t) => (
//                     <button
//                       key={t}
//                       style={{
//                         flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
//                         cursor: "pointer", fontSize: "13px",
//                         fontWeight: tab === t ? 700 : 600,
//                         background: tab === t ? "#fff" : "transparent",
//                         color: tab === t ? P : "rgba(255,255,255,0.65)",
//                         fontFamily: font,
//                         boxShadow: tab === t ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
//                         transition: "all 0.15s",
//                       }}
//                       onClick={() => switchTab(t)}
//                     >
//                       {t === "login" ? "Sign In" : "Sign Up"}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               <button
//                 style={{
//                   position: "absolute",
//                   top: "clamp(14px,3vw,20px)",
//                   right: "clamp(14px,3vw,20px)",
//                   width: "30px", height: "30px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.12)", border: "none",
//                   cursor: "pointer",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   color: "rgba(255,255,255,0.8)",
//                 }}
//                 onClick={onClose}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             <div style={{ padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(24px,4vw,32px)" }}>
//               <AnimatePresence mode="wait">
//                 {step === STEPS.FORM && tab === "login" && (
//                   <LoginForm
//                     key="login-form"
//                     onSuccess={handleLoginSuccess}
//                     onForgot={() => setStep(STEPS.FORGOT)}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.FORM && tab === "register" && (
//                   <RegisterForm
//                     key="register-form"
//                     onSuccess={handleRegisterSuccess}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.OTP && (
//                   <OtpVerify
//                     key="otp-verify"
//                     email={pendingEmail}
//                     onSuccess={afterAuth}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.FORGOT && (
//                   <ForgotPassword
//                     key="forgot-password"
//                     onSuccess={handleForgotSuccess}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.RESET_OTP && (
//                   <ResetOtpStep
//                     key="reset-otp"
//                     email={pendingEmail}
//                     onSuccess={handleResetOtpSuccess}
//                   />
//                 )}
//                 {step === STEPS.RESET_PASS && (
//                   <ResetPasswordStep
//                     key="reset-pass"
//                     email={pendingEmail}
//                     otp={resetOtp}
//                     onSuccess={afterAuth}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }












// import { useState, useEffect, useCallback } from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import { clearError } from "../redux/slices/authSlice"
// import { api } from "../utils/api"
// import LoginForm from "./authentication/LoginForm"
// import RegisterForm from "./authentication/RegisterForm"
// import OtpVerify from "./authentication/OtpVerify"
// import ForgotPassword from "./authentication/ForgotPassword"
// import ResetOtpStep from "./authentication/ResetOtpStep"
// import ResetPasswordStep from "./authentication/ResetPasswordStep"
// import { N, P, font } from "./authentication/authShared"

// const STEPS = {
//   FORM: "form",
//   OTP: "otp",
//   FORGOT: "forgot",
//   RESET_OTP: "reset_otp",
//   RESET_PASS: "reset_pass",
// }

// function ZapIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
//       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//     </svg>
//   )
// }

// function CloseIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//       <line x1="18" y1="6" x2="6" y2="18"/>
//       <line x1="6" y1="6" x2="18" y2="18"/>
//     </svg>
//   )
// }

// const stepMeta = (tab, pendingEmail) => ({
//   [STEPS.FORM]: {
//     title: tab === "login" ? "Welcome back" : "Create account",
//     sub: tab === "login" ? "Sign in to your Blinkus.ai account" : "Start your trade intelligence journey",
//   },
//   [STEPS.OTP]: { title: "Verify your email", sub: `Enter the 6-digit OTP sent to ${pendingEmail}` },
//   [STEPS.FORGOT]: { title: "Reset password", sub: "Enter your email to receive an OTP" },
//   [STEPS.RESET_OTP]: { title: "Enter reset OTP", sub: `We sent a 6-digit OTP to ${pendingEmail}` },
//   [STEPS.RESET_PASS]: { title: "New password", sub: "Set a strong password for your account" },
// })

// export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [tab, setTab] = useState(defaultTab)
//   const [step, setStep] = useState(STEPS.FORM)
//   const [pendingEmail, setPendingEmail] = useState("")
//   const [resetOtp, setResetOtp] = useState("")
//   const [googleLoading, setGoogleLoading] = useState(false)
//   const [googleError, setGoogleError] = useState("")

//   useEffect(() => {
//     if (isOpen) {
//       setTab(defaultTab)
//       setStep(STEPS.FORM)
//       setPendingEmail("")
//       setResetOtp("")
//       setGoogleLoading(false)
//       setGoogleError("")
//       dispatch(clearError())
//     }
//   }, [isOpen, defaultTab, dispatch])

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : ""
//     return () => { document.body.style.overflow = "" }
//   }, [isOpen])

//   const afterAuth = useCallback(() => {
//     onClose()
//     navigate("/chat")
//   }, [onClose, navigate])

//   const handleGoogleClick = useCallback(() => {
//     const gid = import.meta.env.VITE_GOOGLE_CLIENT_ID
//     if (!gid) {
//       setGoogleError("Google OAuth is not configured. Contact support.")
//       return
//     }

//     const REDIRECT_URI = `${window.location.origin}/auth/google/callback`

//     const params = new URLSearchParams({
//       client_id: gid,
//       redirect_uri: REDIRECT_URI,
//       response_type: "token",
//       scope: "openid email profile",
//       prompt: "select_account",
//       include_granted_scopes: "true",
//     })

//     const w = 500
//     const h = 580
//     const left = Math.max(0, Math.round((window.screen.width - w) / 2))
//     const top = Math.max(0, Math.round((window.screen.height - h) / 2))
//     const features = `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`

//     const popup = window.open(
//       `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
//       "google_oauth_blinkus",
//       features
//     )

//     if (!popup || popup.closed || typeof popup.closed === "undefined") {
//       setGoogleError("Popup was blocked. Please allow popups for this site and try again.")
//       return
//     }

//     setGoogleLoading(true)
//     setGoogleError("")

//     let resolved = false

//     const onMessage = async (ev) => {

//         console.log("MESSAGE RECEIVED:", ev)

//   if (ev.origin !== window.location.origin) {
//     console.log("Origin mismatch:", ev.origin, window.location.origin)
//     return
//   }

//   if (!ev.data || ev.data.source !== "blinkus_google_oauth") {
//     console.log("Invalid data:", ev.data)
//     return
//   }

//       // if (ev.origin !== window.location.origin) return
//       // if (!ev.data || ev.data.source !== "blinkus_google_oauth") return

//       resolved = true
//       window.removeEventListener("message", onMessage)
//       clearInterval(pollTimer)
//       popup?.close()

//       if (ev.data.error) {
//         setGoogleError("Google sign-in was cancelled or failed. Please try again.")
//         setGoogleLoading(false)
//         return
//       }

//       const accessToken = ev.data.access_token
//       if (!accessToken) {
//         setGoogleError("No access token received. Please try again.")
//         setGoogleLoading(false)
//         return
//       }

//       try {
//         const data = await api.post("/auth/google", { access_token: accessToken })
//         console.log("BACKEND RESPONSE:", data)
//         localStorage.setItem("blinkus_token", data.token)
//         localStorage.setItem("blinkus_refresh", data.refreshToken)
//         localStorage.setItem("blinkus_user", JSON.stringify(data.user))
//         dispatch({ type: "auth/login/fulfilled", payload: data })
//         afterAuth()
//       } catch (err) {
//         setGoogleError(err.message || "Google sign-in failed. Please try again.")
//       } finally {
//         setGoogleLoading(false)
//       }
//     }

//     window.addEventListener("message", onMessage)

//     const pollTimer = setInterval(() => {
//       if (popup?.closed) {
//         clearInterval(pollTimer)
//         window.removeEventListener("message", onMessage)
//         if (!resolved) {
//           setGoogleLoading(false)
//         }
//       }
//     }, 500)
//   }, [dispatch, afterAuth])

//   const handleLoginSuccess = (type, email) => {
//     if (type === "unverified" && email) {
//       setPendingEmail(email)
//       setStep(STEPS.OTP)
//     } else {
//       afterAuth()
//     }
//   }

//   const handleRegisterSuccess = (email) => {
//     setPendingEmail(email)
//     setStep(STEPS.OTP)
//   }

//   const handleForgotSuccess = (email) => {
//     setPendingEmail(email)
//     setStep(STEPS.RESET_OTP)
//   }

//   const handleResetOtpSuccess = (otp) => {
//     setResetOtp(otp)
//     setStep(STEPS.RESET_PASS)
//   }

//   const switchTab = (t) => {
//     setTab(t)
//     setStep(STEPS.FORM)
//     setGoogleError("")
//     dispatch(clearError())
//   }

//   const meta = stepMeta(tab, pendingEmail)[step]
//   const showTabs = step === STEPS.FORM

//   if (!isOpen) return null

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.18 }}
//           style={{
//             position: "fixed", inset: 0, zIndex: 99999,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: "16px",
//             background: "rgba(10,6,30,0.6)",
//             backdropFilter: "blur(8px)",
//           }}
//           onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93, y: 24 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.93, y: 24 }}
//             transition={{ type: "spring", stiffness: 360, damping: 32 }}
//             style={{
//               width: "100%", maxWidth: "460px",
//               background: "#ffffff",
//               borderRadius: "24px",
//               overflow: "hidden",
//               boxShadow: "0 32px 80px rgba(108,63,197,0.22), 0 0 0 1px rgba(108,63,197,0.08)",
//               fontFamily: font,
//               maxHeight: "calc(100svh - 32px)",
//               overflowY: "auto",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div style={{
//               background: `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
//               padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(18px,4vw,24px)",
//               position: "relative",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
//                 <div style={{
//                   width: "28px", height: "28px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <ZapIcon />
//                 </div>
//                 <span style={{ fontSize: "15px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
//                   Blinkus<span style={{ opacity: 0.65 }}>.ai</span>
//                 </span>
//               </div>

//               <h2 style={{ fontSize: "clamp(18px,4vw,22px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 }}>
//                 {meta.title}
//               </h2>
//               <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "5px", fontWeight: 500, marginBottom: 0 }}>
//                 {meta.sub}
//               </p>

//               {showTabs && (
//                 <div style={{
//                   display: "flex", gap: "4px",
//                   background: "rgba(255,255,255,0.08)",
//                   borderRadius: "12px", padding: "4px", marginTop: "16px",
//                 }}>
//                   {["login", "register"].map((t) => (
//                     <button
//                       key={t}
//                       style={{
//                         flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
//                         cursor: "pointer", fontSize: "13px",
//                         fontWeight: tab === t ? 700 : 600,
//                         background: tab === t ? "#fff" : "transparent",
//                         color: tab === t ? P : "rgba(255,255,255,0.65)",
//                         fontFamily: font,
//                         boxShadow: tab === t ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
//                         transition: "all 0.15s",
//                       }}
//                       onClick={() => switchTab(t)}
//                     >
//                       {t === "login" ? "Sign In" : "Sign Up"}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               <button
//                 style={{
//                   position: "absolute",
//                   top: "clamp(14px,3vw,20px)",
//                   right: "clamp(14px,3vw,20px)",
//                   width: "30px", height: "30px", borderRadius: "8px",
//                   background: "rgba(255,255,255,0.12)", border: "none",
//                   cursor: "pointer",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   color: "rgba(255,255,255,0.8)",
//                 }}
//                 onClick={onClose}
//                 onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
//                 onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             <div style={{ padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(24px,4vw,32px)" }}>
//               {googleError && (
//                 <div style={{
//                   padding: "11px 14px", background: "#fff5f5",
//                   border: "1px solid #fecaca", borderRadius: "12px",
//                   fontSize: "13px", color: "#dc2626", fontWeight: 500,
//                   marginBottom: "16px", lineHeight: 1.5,
//                 }}>
//                   {googleError}
//                 </div>
//               )}

//               <AnimatePresence mode="wait">
//                 {step === STEPS.FORM && tab === "login" && (
//                   <LoginForm
//                     key="login-form"
//                     onSuccess={handleLoginSuccess}
//                     onForgot={() => { setGoogleError(""); setStep(STEPS.FORGOT) }}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.FORM && tab === "register" && (
//                   <RegisterForm
//                     key="register-form"
//                     onSuccess={handleRegisterSuccess}
//                     onGoogleClick={handleGoogleClick}
//                     googleLoading={googleLoading}
//                   />
//                 )}
//                 {step === STEPS.OTP && (
//                   <OtpVerify
//                     key="otp-verify"
//                     email={pendingEmail}
//                     onSuccess={afterAuth}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.FORGOT && (
//                   <ForgotPassword
//                     key="forgot-password"
//                     onSuccess={handleForgotSuccess}
//                     onBack={() => setStep(STEPS.FORM)}
//                   />
//                 )}
//                 {step === STEPS.RESET_OTP && (
//                   <ResetOtpStep
//                     key="reset-otp"
//                     email={pendingEmail}
//                     onSuccess={handleResetOtpSuccess}
//                   />
//                 )}
//                 {step === STEPS.RESET_PASS && (
//                   <ResetPasswordStep
//                     key="reset-pass"
//                     email={pendingEmail}
//                     otp={resetOtp}
//                     onSuccess={afterAuth}
//                   />
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }












import { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useGoogleLogin } from "@react-oauth/google"
import { clearError } from "../redux/slices/authSlice"
import { api } from "../utils/api"
import LoginForm from "./authentication/LoginForm"
import RegisterForm from "./authentication/RegisterForm"
import OtpVerify from "./authentication/OtpVerify"
import ForgotPassword from "./authentication/ForgotPassword"
import ResetOtpStep from "./authentication/ResetOtpStep"
import ResetPasswordStep from "./authentication/ResetPasswordStep"
import { N, P, font } from "./authentication/AuthShared"

const STEPS = {
  FORM: "form",
  OTP: "otp",
  FORGOT: "forgot",
  RESET_OTP: "reset_otp",
  RESET_PASS: "reset_pass",
}

function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

const stepMeta = (tab, pendingEmail) => ({
  [STEPS.FORM]: {
    title: tab === "login" ? "Welcome back" : "Create account",
    sub: tab === "login" ? "Sign in to your Blinkus.ai account" : "Start your trade intelligence journey",
  },
  [STEPS.OTP]: { title: "Verify your email", sub: `Enter the 6-digit OTP sent to ${pendingEmail}` },
  [STEPS.FORGOT]: { title: "Reset password", sub: "Enter your email to receive an OTP" },
  [STEPS.RESET_OTP]: { title: "Enter reset OTP", sub: `We sent a 6-digit OTP to ${pendingEmail}` },
  [STEPS.RESET_PASS]: { title: "New password", sub: "Set a strong password for your account" },
})

function AuthModalContent({ isOpen, onClose, defaultTab }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tab, setTab] = useState(defaultTab)
  const [step, setStep] = useState(STEPS.FORM)
  const [pendingEmail, setPendingEmail] = useState("")
  const [resetOtp, setResetOtp] = useState("")
  const [googleLoading, setGoogleLoading] = useState(false)
  const [googleError, setGoogleError] = useState("")

  useEffect(() => {
    if (isOpen) {
      setTab(defaultTab)
      setStep(STEPS.FORM)
      setPendingEmail("")
      setResetOtp("")
      setGoogleLoading(false)
      setGoogleError("")
      dispatch(clearError())
    }
  }, [isOpen, defaultTab, dispatch])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const afterAuth = useCallback(() => {
    onClose()
    navigate("/chat")
  }, [onClose, navigate])

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const data = await api.post("/auth/google", {
          access_token: tokenResponse.access_token,
        })
        localStorage.setItem("blinkus_token", data.token)
        localStorage.setItem("blinkus_refresh", data.refreshToken)
        localStorage.setItem("blinkus_user", JSON.stringify(data.user))
        dispatch({ type: "auth/login/fulfilled", payload: data })
        afterAuth()
      } catch (err) {
        setGoogleError(err.message || "Google sign-in failed. Please try again.")
      } finally {
        setGoogleLoading(false)
      }
    },
    onError: () => {
      setGoogleError("Google sign-in failed. Please try again.")
      setGoogleLoading(false)
    },
    onNonOAuthError: () => {
      setGoogleLoading(false)
    },
    flow: "implicit",
  })

  const handleGoogleClick = useCallback(() => {
    setGoogleError("")
    setGoogleLoading(true)
    googleLogin()
  }, [googleLogin])

  const handleLoginSuccess = (type, email) => {
    if (type === "unverified" && email) {
      setPendingEmail(email)
      setStep(STEPS.OTP)
    } else {
      afterAuth()
    }
  }

  const handleRegisterSuccess = (email) => {
    setPendingEmail(email)
    setStep(STEPS.OTP)
  }

  const handleForgotSuccess = (email) => {
    setPendingEmail(email)
    setStep(STEPS.RESET_OTP)
  }

  const handleResetOtpSuccess = (otp) => {
    setResetOtp(otp)
    setStep(STEPS.RESET_PASS)
  }

  const switchTab = (t) => {
    setTab(t)
    setStep(STEPS.FORM)
    setGoogleError("")
    dispatch(clearError())
  }

  const meta = stepMeta(tab, pendingEmail)[step]
  const showTabs = step === STEPS.FORM

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            background: "rgba(10,6,30,0.6)",
            backdropFilter: "blur(8px)",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
            style={{
              width: "100%", maxWidth: "460px",
              background: "#ffffff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(108,63,197,0.22), 0 0 0 1px rgba(108,63,197,0.08)",
              fontFamily: font,
              maxHeight: "calc(100svh - 32px)",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              background: `linear-gradient(135deg, ${N} 0%, ${P} 100%)`,
              padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(18px,4vw,24px)",
              position: "relative",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ZapIcon />
                </div>
                <span style={{ fontSize: "15px", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
                  Blinkus<span style={{ opacity: 0.65 }}>.ai</span>
                </span>
              </div>

              <h2 style={{ fontSize: "clamp(18px,4vw,22px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", margin: 0 }}>
                {meta.title}
              </h2>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "5px", fontWeight: 500, marginBottom: 0 }}>
                {meta.sub}
              </p>

              {showTabs && (
                <div style={{
                  display: "flex", gap: "4px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "12px", padding: "4px", marginTop: "16px",
                }}>
                  {["login", "register"].map((t) => (
                    <button
                      key={t}
                      style={{
                        flex: 1, padding: "9px 0", borderRadius: "9px", border: "none",
                        cursor: "pointer", fontSize: "13px",
                        fontWeight: tab === t ? 700 : 600,
                        background: tab === t ? "#fff" : "transparent",
                        color: tab === t ? P : "rgba(255,255,255,0.65)",
                        fontFamily: font,
                        boxShadow: tab === t ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
                        transition: "all 0.15s",
                      }}
                      onClick={() => switchTab(t)}
                    >
                      {t === "login" ? "Sign In" : "Sign Up"}
                    </button>
                  ))}
                </div>
              )}

              <button
                style={{
                  position: "absolute",
                  top: "clamp(14px,3vw,20px)",
                  right: "clamp(14px,3vw,20px)",
                  width: "30px", height: "30px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.12)", border: "none",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.8)",
                }}
                onClick={onClose}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)" }}
              >
                <CloseIcon />
              </button>
            </div>

            <div style={{ padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px) clamp(24px,4vw,32px)" }}>
              {googleError && (
                <div style={{
                  padding: "11px 14px", background: "#fff5f5",
                  border: "1px solid #fecaca", borderRadius: "12px",
                  fontSize: "13px", color: "#dc2626", fontWeight: 500,
                  marginBottom: "16px", lineHeight: 1.5,
                }}>
                  {googleError}
                </div>
              )}

              <AnimatePresence mode="wait">
                {step === STEPS.FORM && tab === "login" && (
                  <LoginForm
                    key="login-form"
                    onSuccess={handleLoginSuccess}
                    onForgot={() => { setGoogleError(""); setStep(STEPS.FORGOT) }}
                    onGoogleClick={handleGoogleClick}
                    googleLoading={googleLoading}
                  />
                )}
                {step === STEPS.FORM && tab === "register" && (
                  <RegisterForm
                    key="register-form"
                    onSuccess={handleRegisterSuccess}
                    onGoogleClick={handleGoogleClick}
                    googleLoading={googleLoading}
                  />
                )}
                {step === STEPS.OTP && (
                  <OtpVerify
                    key="otp-verify"
                    email={pendingEmail}
                    onSuccess={afterAuth}
                    onBack={() => setStep(STEPS.FORM)}
                  />
                )}
                {step === STEPS.FORGOT && (
                  <ForgotPassword
                    key="forgot-password"
                    onSuccess={handleForgotSuccess}
                    onBack={() => setStep(STEPS.FORM)}
                  />
                )}
                {step === STEPS.RESET_OTP && (
                  <ResetOtpStep
                    key="reset-otp"
                    email={pendingEmail}
                    onSuccess={handleResetOtpSuccess}
                  />
                )}
                {step === STEPS.RESET_PASS && (
                  <ResetPasswordStep
                    key="reset-pass"
                    email={pendingEmail}
                    otp={resetOtp}
                    onSuccess={afterAuth}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
  return (
    <AuthModalContent
      isOpen={isOpen}
      onClose={onClose}
      defaultTab={defaultTab}
    />
  )
}