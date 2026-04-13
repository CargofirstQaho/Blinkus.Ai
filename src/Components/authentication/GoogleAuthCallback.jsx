// export default function GoogleAuthCallback() {
//   const hash = window.location.hash.substring(1)
//   const params = new URLSearchParams(hash)
//   const access_token = params.get("access_token")
//   const error = params.get("error")

//   if (access_token && window.opener) {
//     window.opener.postMessage({ type: "google_oauth", access_token }, window.location.origin)
//     window.close()
//   } else if (error) {
//     if (window.opener) {
//       window.opener.postMessage({ type: "google_oauth", error }, window.location.origin)
//     }
//     window.close()
//   }

//   return (
//     <div style={{
//       display: "flex", alignItems: "center", justifyContent: "center",
//       minHeight: "100vh", background: "#f5f2ff",
//       fontFamily: "'DM Sans',system-ui,sans-serif",
//     }}>
//       <div style={{ textAlign: "center" }}>
//         <div style={{
//           width: 48, height: 48, borderRadius: "50%",
//           border: "3px solid rgba(108,63,197,0.2)",
//           borderTopColor: "#6c3dff",
//           animation: "spin 0.8s linear infinite",
//           margin: "0 auto 16px",
//         }} />
//         <p style={{ color: "#6c3fc5", fontWeight: 600, fontSize: 15 }}>
//           {error ? "Authentication failed. Closing..." : "Completing sign in..."}
//         </p>
//       </div>
//       <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
//     </div>
//   )
// }








import { useEffect } from "react"

export default function GoogleAuthCallback() {
  console.log("✅ CALLBACK PAGE LOADED")
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const access_token = params.get("access_token")
    const error = params.get("error")

    if (window.opener && !window.opener.closed) {
      if (access_token) {
        window.opener.postMessage(
          { source: "blinkus_google_oauth", access_token },
          window.location.origin
        )
      } else {
        window.opener.postMessage(
          { source: "blinkus_google_oauth", error: error || "cancelled" },
          window.location.origin
        )
      }
      setTimeout(() => window.close(), 800)
    } else {
      window.close()
    }
  }, [])

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f2ff, #fff)",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: 48, height: 48,
          border: "3px solid rgba(108,63,197,0.15)",
          borderTopColor: "#6c3dff",
          borderRadius: "50%",
          animation: "spin 0.75s linear infinite",
          margin: "0 auto 18px",
        }} />
        <p style={{ color: "#6c3dff", fontWeight: 700, fontSize: 15, margin: 0 }}>
          Completing sign-in…
        </p>
        <p style={{ color: "#9585c0", fontSize: 13, marginTop: 6 }}>
          This window will close automatically.
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}