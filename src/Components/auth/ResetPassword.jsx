import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock, CheckCircle, Zap } from "lucide-react"
import { api } from "../../utils/api"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/authSlice"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const token = searchParams.get("token")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!token) {
      setError("Invalid reset link. Please request a new one.")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    if (password !== confirm) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)
    try {
      const data = await api.post(`/auth/reset-password/${token}`, { password })
      localStorage.setItem("blinkus_token", data.token)
      localStorage.setItem("blinkus_refresh", data.refreshToken)
      localStorage.setItem("blinkus_user", JSON.stringify(data.user))
      dispatch(setUser({ user: data.user, token: data.token }))
      setSuccess(true)
    } catch (err) {
      setError(err.message || "Failed to reset password. The link may have expired.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, #faf9ff 0%, #f5f2ff 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border p-8"
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

        <h1 className="text-xl font-black mb-1 text-center" style={{ color: NAVY, letterSpacing: "-0.03em" }}>
          Set new password
        </h1>
        <p className="text-sm text-center mb-6" style={{ color: "#9585c0" }}>
          Choose a strong password for your account.
        </p>

        {success ? (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(34,197,94,0.08)" }}
              >
                <CheckCircle size={32} className="text-green-500" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              Your password has been updated successfully. You are now signed in.
            </p>
            <button
              onClick={() => navigate("/chat")}
              className="w-full py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})` }}
            >
              Go to Chat
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium">
                {error}
              </div>
            )}

            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-300">
                <Lock size={16} />
              </div>
              <input
                type={showPass ? "text" : "password"}
                placeholder="New password (min. 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-purple-100 text-sm font-medium outline-none transition-all focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                style={{ color: NAVY }}
              />
              <button
                type="button"
                onClick={() => setShowPass((p) => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-300 hover:text-purple-500 transition-colors"
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-300">
                <Lock size={16} />
              </div>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-purple-100 text-sm font-medium outline-none transition-all focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                style={{ color: NAVY }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((p) => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-300 hover:text-purple-500 transition-colors"
              >
                {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full text-sm text-purple-400 hover:text-purple-600 font-medium py-1 transition-colors text-center"
            >
              Back to home
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}