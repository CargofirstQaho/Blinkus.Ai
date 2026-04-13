import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((s) => s.auth)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/" state={{ openAuth: true, from: location.pathname }} replace />
  }

  return children
}