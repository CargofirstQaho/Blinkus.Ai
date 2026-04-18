// import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom"
// import { Provider } from "react-redux"
// import { store } from "./redux/store/store"
// import Home from "./Pages/Home"
// import LandingPage from "./Pages/LandingPage"

// export default function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<LandingPage />} />
//            <Route path="*" element={<Navigate to="/home" replace />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   )
// }





// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import { Provider } from "react-redux"
// import { GoogleOAuthProvider } from "@react-oauth/google"
// import { store } from "./redux/store/store"
// import LandingPage from "./Pages/LandingPage"
// import VerifyEmailView from "./Components/auth/VerifyEmailView"
// import ResetPassword from "./Components/auth/ResetPassword"
// import ProtectedRoute from "./Components/ProtectedRoute"
// import Chat from "./Components/chat/Chat"
// import GoogleAuthCallback from "./Components/authentication/GoogleAuthCallback"

// export default function App() {
//   return (
//     <Provider store={store}>
//       <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route
//               path="/chat"
//               element={
//                 <ProtectedRoute>
//                   <Chat />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/verify-email" element={<VerifyEmailView />} />
//             <Route path="/reset-password" element={<ResetPassword />} />
//             <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </BrowserRouter>
//       </GoogleOAuthProvider>
//     </Provider>
//   )
// }



// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import { Provider } from "react-redux"
// import { GoogleOAuthProvider } from "@react-oauth/google"
// import { store } from "./redux/store/store"
// import LandingPage from "./Pages/LandingPage"
// import ProtectedRoute from "./Components/ProtectedRoute"
// import Chat from "./Components/chat/Chat"
// import PrivacyPolicy from "./Pages/PrivacyPolicy"
// import DataSafety from "./Pages/DataSafety"

// export default function App() {
//   const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

//   return (
//     <Provider store={store}>
//       <GoogleOAuthProvider clientId={googleClientId || ""}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/data-safety" element={<DataSafety />} />
//             <Route
//               path="/chat"
//               element={
//                 <ProtectedRoute>
//                   <Chat />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </BrowserRouter>
//       </GoogleOAuthProvider>
//     </Provider>
//   )
// }








import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Provider } from "react-redux"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { store } from "./redux/store/store"
import LandingPage from "./Pages/LandingPage"
import ProtectedRoute from "./Components/ProtectedRoute"
import Chat from "./Components/chat/Chat"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import DataSafety from "./Pages/DataSafety"
import CompetitorIntelligence from "./Components/chat/Features/CompetitorIntelligence"
import HSCodeAnalysis from "./Components/chat/Features/HSCodeAnalysis"
import MarketsSeasonality from "./Components/chat/Features/MarketsSeasonality"
import BuyerSignals from "./Components/chat/Features/BuyerSignals"
import ImportExportTrends from "./Components/chat/Features/ImportExportTrends"

export default function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={googleClientId || ""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/data-safety" element={<DataSafety />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/market-overview"
              element={
                <ProtectedRoute>
                  <ImportExportTrends />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/import-export-trends"
              element={
                <ProtectedRoute>
                  <ImportExportTrends />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/competitor-intelligence"
              element={
                <ProtectedRoute>
                  <CompetitorIntelligence />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/hs-code-analysis"
              element={
                <ProtectedRoute>
                  <HSCodeAnalysis />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/markets-seasonality"
              element={
                <ProtectedRoute>
                  <MarketsSeasonality />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/buyer-signals"
              element={
                <ProtectedRoute>
                  <BuyerSignals />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  )
}