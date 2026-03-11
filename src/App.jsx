import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}