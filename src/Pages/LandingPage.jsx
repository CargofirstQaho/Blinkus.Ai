import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { clearUser } from "../redux/slices/authSlice"
import { clearChat } from "../redux/slices/chatSlice"
import logo from "../assets/logo2.png"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_LIGHT = "#8b5cf6"
const PURPLE_SOFT = "#ede9fe"
const LAUNCH_DATE = new Date("2026-03-31T00:00:00")

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = LAUNCH_DATE - Date.now()
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountdownBlock({ value, label }) {
  return (
    <div style={{ textAlign: "center", flex: "1 1 60px", minWidth: "56px", maxWidth: "100px" }}>
      <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "14px", padding: "14px 8px", marginBottom: "6px" }}>
        <span style={{ fontSize: "clamp(24px,6vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", display: "block", lineHeight: 1 }}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
    </div>
  )
}

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    title: "Market Overview",
    desc: "Analyze historical and current trends in your import-export activities. Track export volumes, import patterns, trade balance, and pricing trends with flexible time period filters.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Competitor Intelligence & Alerts",
    desc: "Stay ahead with real-time intelligence. Monitor competitor market share, pricing strategies, new market entries, and expansion activities across your export markets.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Trade Routes",
    desc: "Discover optimal shipping lanes, port pairs, freight costs and transit times tailored to your commodities across 40+ countries.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Buyers & New Buyer Signals",
    desc: "Manage buyer relationships and discover new opportunities. Track active buyers, new acquisitions, occasional buyers, and dormant accounts with behavioral analysis.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" /><path d="M7 7h10M7 11h6" />
      </svg>
    ),
    title: "Commodity / HS Code Analysis",
    desc: "Deep dive into your commodity portfolio with HS code analysis. Track active codes, analyze volume and value trends, identify high-performing product categories.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.5" />
      </svg>
    ),
    title: "Markets & Seasonality",
    desc: "Understand seasonal demand patterns and market dynamics across global regions. Analyze monthly demand fluctuations and capitalize on peak seasons for each product category.",
  },
]

const steps = [
  { step: "01", title: "Ask anything", desc: "Type your trade question in plain English — pricing, regulations, routes, duties, anything." },
  { step: "02", title: "AI analyses", desc: "Blinkus searches verified trade databases, regulations, and live market data in seconds." },
  { step: "03", title: "Get insights", desc: "Receive clear, sourced answers with actionable recommendations tailored to your needs." },
  { step: "04", title: "Trade smarter", desc: "Use insights to negotiate better, stay compliant and maximise your margins globally." },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.auth)
  const countdown = useCountdown()
  const [visible, setVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    dispatch(clearUser())
    dispatch(clearChat())
    navigate("/")
  }

  const userName = user?.displayName || user?.email?.split("@")[0] || "Trader"
  const userPhoto = user?.photoURL

  return (
    <div style={{ minHeight: "100dvh", background: "#fff", fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif", overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:.4} }
        @keyframes bgFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #ddd6fe; border-radius: 4px; }
        .feat-card { transition: all 0.2s; }
        .feat-card:hover { border-color: #ddd6fe !important; background: #faf9ff !important; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(108,63,197,0.1) !important; }
        @media (max-width: 640px) {
          .nav-actions { gap: 8px !important; }
          .nav-back-btn { padding: 6px 10px !important; font-size: 12px !important; }
          .nav-signout-btn { padding: 6px 10px !important; font-size: 12px !important; }
          .hero-badge { padding: 6px 12px !important; }
          .hero-badge span:last-child { font-size: 11px !important; }
          .welcome-banner { padding: 10px 14px !important; flex-wrap: wrap !important; }
          .welcome-banner p { white-space: normal !important; font-size: 13px !important; }
          .countdown-row { gap: 6px !important; }
          .countdown-sep { font-size: 24px !important; margin-top: 6px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .thankyou-badge { flex-direction: column !important; text-align: center !important; padding: 12px 16px !important; }
        }
        @media (max-width: 400px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #f0edf9", boxShadow: "0 1px 12px rgba(108,63,197,0.06)" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px", padding: "0 clamp(16px,4vw,48px)" }}>
          <img src={logo} alt="Blinkus" style={{ height: "28px", objectFit: "contain", flexShrink: 0 }} />
          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: PURPLE, background: PURPLE_SOFT, padding: "4px 10px", borderRadius: "100px", letterSpacing: "0.03em", whiteSpace: "nowrap" }}>
              LAUNCHING MAR 31
            </span>
            {userPhoto && (
              <img src={userPhoto} alt="avatar" referrerPolicy="no-referrer"
                style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover", border: `2px solid ${PURPLE_SOFT}`, flexShrink: 0 }}
                onError={(e) => { e.currentTarget.style.display = "none" }} />
            )}
            <button className="nav-back-btn" onClick={() => navigate("/")}
              style={{ padding: "7px 14px", borderRadius: "10px", border: `1.5px solid #e2d9f7`, background: "#fff", color: NAVY, fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = PURPLE_SOFT }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff" }}>
              ← Chat
            </button>
            {user && (
              <button className="nav-signout-btn" onClick={handleLogout}
                style={{ padding: "7px 14px", borderRadius: "10px", border: "none", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, color: "#fff", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </nav>

      <section style={{ minHeight: "100dvh", background: `linear-gradient(160deg,${NAVY} 0%,#1a0f4a 50%,${PURPLE} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px clamp(16px,5vw,60px) 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "8%", left: "0%", width: "min(500px,80vw)", height: "min(500px,80vw)", borderRadius: "50%", background: "rgba(139,92,246,0.1)", filter: "blur(80px)", animation: "bgFloat 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "0%", width: "min(400px,70vw)", height: "min(400px,70vw)", borderRadius: "50%", background: "rgba(108,63,197,0.13)", filter: "blur(70px)", animation: "bgFloat 11s ease-in-out infinite 2s", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

        <div style={{ maxWidth: "720px", width: "100%", textAlign: "center", position: "relative", zIndex: 1, opacity: visible ? 1 : 0, animation: visible ? "fadeUp 0.7s ease forwards" : "none", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "100px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", marginBottom: "18px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", animation: "blink 2s ease-in-out infinite", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em" }}>EARLY ACCESS — FREE TO JOIN</span>
          </div>

          {userName && (
            <div className="welcome-banner" style={{ marginBottom: "20px", padding: "12px 20px", background: "rgba(255,255,255,0.08)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-flex", alignItems: "center", gap: "10px", maxWidth: "100%" }}>
              {userPhoto && (
                <img src={userPhoto} alt="avatar" referrerPolicy="no-referrer"
                  style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}
                  onError={(e) => { e.currentTarget.style.display = "none" }} />
              )}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", fontWeight: 600, textAlign: "left" }}>
                🎉 Welcome, <strong style={{ color: "#fff" }}>{userName}</strong>! You're on the early access list.
              </p>
            </div>
          )}

          <h1 style={{ fontSize: "clamp(30px,6vw,66px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "16px", wordBreak: "break-word" }}>
            Trade smarter with<br />
            <span style={{ background: "linear-gradient(135deg,#c4b5f4,#818cf8,#fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI that speaks trade</span>
          </h1>

          <p style={{ fontSize: "clamp(14px,2.2vw,17px)", color: "rgba(255,255,255,0.62)", lineHeight: 1.72, marginBottom: "36px", maxWidth: "500px", padding: "0 4px" }}>
            Blinkus is the intelligent co-pilot for global importers and exporters — pricing, compliance, regulations, and market intelligence in one conversation.
          </p>

          <div style={{ width: "100%", marginBottom: "0" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.38)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Launching in</p>
            <div className="countdown-row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "clamp(4px,2vw,14px)", width: "100%", maxWidth: "480px", margin: "0 auto" }}>
              <CountdownBlock value={countdown.days} label="Days" />
              <span className="countdown-sep" style={{ color: "rgba(255,255,255,0.25)", fontSize: "clamp(20px,4vw,32px)", fontWeight: 300, marginTop: "clamp(8px,2vw,12px)", lineHeight: 1, flexShrink: 0 }}>:</span>
              <CountdownBlock value={countdown.hours} label="Hours" />
              <span className="countdown-sep" style={{ color: "rgba(255,255,255,0.25)", fontSize: "clamp(20px,4vw,32px)", fontWeight: 300, marginTop: "clamp(8px,2vw,12px)", lineHeight: 1, flexShrink: 0 }}>:</span>
              <CountdownBlock value={countdown.minutes} label="Min" />
              <span className="countdown-sep" style={{ color: "rgba(255,255,255,0.25)", fontSize: "clamp(20px,4vw,32px)", fontWeight: 300, marginTop: "clamp(8px,2vw,12px)", lineHeight: 1, flexShrink: 0 }}>:</span>
              <CountdownBlock value={countdown.seconds} label="Sec" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,96px) clamp(16px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,64px)" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: PURPLE, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>Capabilities</span>
            <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: NAVY, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "14px" }}>
              Everything you need to<br />trade with confidence
            </h2>
            <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#7c6fa0", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              Blinkus combines AI intelligence with verified trade data to give you an unfair advantage in global markets.
            </p>
          </div>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px" }}>
            {features.map((f, i) => (
              <div key={i} className="feat-card"
                style={{ padding: "24px", borderRadius: "18px", border: "1.5px solid #f0edf9", background: "#fff", cursor: "default" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "13px", background: PURPLE_SOFT, color: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", flexShrink: 0 }}>{f.icon}</div>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: NAVY, marginBottom: "8px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "13.5px", color: "#7c6fa0", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,96px) clamp(16px,5vw,64px)", background: "#faf9ff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,56px)" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: PURPLE, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>How It Works</span>
            <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: NAVY, letterSpacing: "-0.04em" }}>Simple as a conversation</h2>
          </div>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "clamp(20px,3vw,32px)" }}>
            {steps.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, color: "#f0edf9", letterSpacing: "-0.06em", lineHeight: 1, marginBottom: "10px" }}>{s.step}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 800, color: NAVY, marginBottom: "6px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: "13.5px", color: "#7c6fa0", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,96px) clamp(16px,5vw,64px)", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="Blinkus" style={{ height: "32px", objectFit: "contain" }} />
          </div>
          <h2 style={{ fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: NAVY, letterSpacing: "-0.05em", marginBottom: "14px", lineHeight: 1.12 }}>
            Thank you for being<br />
            <span style={{ background: `linear-gradient(135deg,${PURPLE},${PURPLE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>part of our journey</span>
          </h2>
          <p style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "#7c6fa0", lineHeight: 1.8, marginBottom: "28px" }}>
            You've registered early and secured your spot. On <strong style={{ color: NAVY }}>March 31st, 2026</strong>, Blinkus.ai officially launches and you'll receive a personal notification the moment we go live.
          </p>
          <div className="thankyou-badge" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 22px", background: PURPLE_SOFT, borderRadius: "14px", border: `1px solid #ddd6fe` }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span style={{ fontSize: "14px", fontWeight: 700, color: PURPLE }}>Official launch notification on March 31st</span>
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY, padding: "clamp(24px,4vw,40px) clamp(16px,5vw,64px)" }}>
        <div className="footer-inner" style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>© 2026 Blinkus.ai — Trade Intelligence Platform</p>
        </div>
      </footer>
    </div>
  )
}