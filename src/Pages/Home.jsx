import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../utils/firebase"
import { setUser, clearUser } from "../redux/slices/authSlice"
import Chat from "../Components/Chat"
import AuthModal from "../Components/AuthModal"

export default function Home() {
  const dispatch = useDispatch()
  const [authOpen, setAuthOpen] = useState(false)
  const [pendingQuery, setPendingQuery] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        dispatch(clearUser())
        return
      }
      const isGoogle = firebaseUser.providerData?.some(
        (p) => p.providerId === GoogleAuthProvider.PROVIDER_ID
      )
      if (isGoogle || firebaseUser.emailVerified) {
        dispatch(setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || null,
          email: firebaseUser.email || null,
          photoURL: firebaseUser.photoURL || null,
          phoneNumber: firebaseUser.phoneNumber || null,
        }))
        setAuthOpen(false)
      } else {
        dispatch(clearUser())
      }
    })
    return () => unsubscribe()
  }, [dispatch])

  const handleOpenAuth = (query) => {
    setPendingQuery(query || null)
    setAuthOpen(true)
  }

  const handleAuthClose = () => {
    setAuthOpen(false)
    setPendingQuery(null)
  }

  const handleAuthSuccess = () => {
    setAuthOpen(false)
  }

  return (
    <>
      <Chat openAuth={handleOpenAuth} pendingQuery={pendingQuery} onPendingQueryUsed={() => setPendingQuery(null)} />
      {authOpen && <AuthModal onClose={handleAuthClose} onSuccess={handleAuthSuccess} />}
    </>
  )
}