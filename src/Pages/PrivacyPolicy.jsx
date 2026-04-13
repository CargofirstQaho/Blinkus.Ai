import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const N = "#6c3dff"
const P = "#6c3fc5"

const sections = [
  {
    id: "data-collection",
    title: "1. Data Collection During Signup",
    content: "To access expert services, you may need to sign up or log in. At that stage, we collect personal data such as your name, email, address, mobile number, and company name. These are securely stored within the Blinkus.ai organization. We ask for your consent before collecting, using, or disclosing your data. You may withdraw consent anytime via the opt-out mechanism or by contacting us.",
  },
  {
    id: "general-usage",
    title: "2. General Website Usage",
    content: "You can browse our website without revealing personal information. We may collect non-identifiable data to improve our services unless you submit personal details via forms or email.",
  },
  {
    id: "usage-monitoring",
    title: "3. Usage Monitoring",
    content: "Information collected during normal use may be used to monitor site usage and improve our offerings, unless you request otherwise in writing.",
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    bullets: [
      "Operate and maintain our website",
      "Improve and personalize your experience",
      "Analyze usage patterns",
      "Develop new features and services",
      "Communicate updates and marketing",
      "Send you emails",
    ],
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing",
    content: "We do not share your personal data with third parties unless required to deliver a service you've requested and with your explicit consent. Exceptions include legal obligations or violations of our terms.",
  },
  {
    id: "third-party",
    title: "6. Third-Party Advertisers",
    content: "Advertisers may use cookies, JavaScript, or web beacons to personalize ads and measure effectiveness. Blinkus.ai has no control over these cookies. Google uses DART cookies to serve ads based on your visits. You can opt out via the Google Ads Privacy Policy.",
  },
  {
    id: "data-security",
    title: "7. Data Security",
    content: "We take all reasonable precautions to protect your data from unauthorized access, modification, or loss. Our service providers are contractually bound to do the same.",
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: "If you have questions or concerns about your privacy, please contact us at orbit@blinkus.ai.",
  },
]

const principles = [
  "Obtain and process your Personal Data fairly and lawfully",
  "Use your data only for specified, explicit, and legitimate purposes",
  "Ensure data is adequate, relevant, and not excessive",
  "Keep your data accurate and up-to-date",
  "Store data only as long as necessary and in accordance with legal requirements",
]

function SectionBlock({ section, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      id={section.id}
      style={{
        background: "#fff",
        border: "1px solid rgba(108,63,197,0.09)",
        borderRadius: 18,
        padding: "28px 32px",
        marginBottom: 16,
        scrollMarginTop: 100,
      }}
    >
      <h2 style={{
        fontSize: 17, fontWeight: 800, color: "#1a1040",
        marginBottom: 14, letterSpacing: "-0.01em",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      }}>
        {section.title}
      </h2>
      {section.content && (
        <p style={{
          fontSize: 15, color: "#4b5563", lineHeight: 1.8, margin: 0,
          fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        }}>
          {section.content}
        </p>
      )}
      {section.bullets && (
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {section.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: `linear-gradient(135deg, ${N}, ${P})`,
                marginTop: 8, flexShrink: 0,
              }} />
              <span style={{
                fontSize: 15, color: "#4b5563", lineHeight: 1.75,
                fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
              }}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      background: "#faf9ff",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
    }}>
      <div style={{
        background: `linear-gradient(135deg, ${N} 0%, #8b5cf6 50%, ${P} 100%)`,
        padding: "80px clamp(16px,5vw,48px) 72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80, width: 360, height: 360,
          borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: "30%", width: 200, height: 200,
          borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)", borderRadius: 30,
              padding: "6px 14px", marginBottom: 22,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Legal
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: "clamp(30px,5vw,48px)", fontWeight: 900,
              color: "#fff", marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.15,
            }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 520, lineHeight: 1.7, marginBottom: 0 }}
          >
            Personal Data Protection Policy of Blinkus.ai — your privacy, explained clearly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.55)" }}
          >
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px clamp(16px,4vw,32px) 80px", display: "flex", gap: 40, alignItems: "flex-start" }}>
        <aside style={{
          width: 220, flexShrink: 0, position: "sticky", top: 100,
          display: "none",
        }} className="policy-sidebar">
          <p style={{ fontSize: 11, fontWeight: 800, color: "#1a1040", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
            On this page
          </p>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
              }}
              style={{
                display: "block", padding: "8px 12px", borderRadius: 8,
                fontSize: 13, fontWeight: 500, textDecoration: "none",
                color: activeSection === s.id ? P : "#6b7280",
                background: activeSection === s.id ? "rgba(108,63,197,0.08)" : "transparent",
                borderLeft: `2px solid ${activeSection === s.id ? P : "transparent"}`,
                marginBottom: 2, transition: "all 0.15s",
              }}
            >
              {s.title}
            </a>
          ))}
        </aside>

        <div style={{ flex: 1, minWidth: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#fff", border: "1px solid rgba(108,63,197,0.09)",
              borderRadius: 18, padding: "28px 32px", marginBottom: 16,
            }}
          >
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 20 }}>
              Thank you for visiting <strong style={{ color: "#1a1040" }}>www.blinkus.ai</strong>. This Privacy Policy is an integral part of the Terms of Use of our Website. Your privacy is important to us, and this Policy explains how we collect and use information that personally identifies you as well as non-personal information about your interaction with the Blinkus.ai website.
            </p>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 20 }}>
              We process your Personal Data in compliance with all applicable laws and regulations, including the <strong style={{ color: "#1a1040" }}>Digital Personal Data Protection Act, 2023</strong>.
            </p>
            <div style={{
              background: "linear-gradient(135deg, #f5f2ff, #faf9ff)",
              border: "1px solid rgba(108,63,197,0.1)",
              borderRadius: 14, padding: "20px 24px",
            }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: N, marginBottom: 14 }}>
                Our Core Commitments
              </p>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {principles.map((p, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${N}, ${P})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                    }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.7 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {sections.map((s, i) => (
            <SectionBlock key={s.id} section={s} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: 8,
              background: `linear-gradient(135deg, ${N} 0%, #8b5cf6 100%)`,
              borderRadius: 20, padding: "32px 36px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 20,
            }}
          >
            <div>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                Questions about your privacy?
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 340 }}>
                We encourage you to review updates to this Policy regularly and reach out with any concerns.
              </p>
            </div>
            <a
              href="mailto:orbit@blinkus.ai"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 12,
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                textDecoration: "none", backdropFilter: "blur(8px)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              orbit@blinkus.ai
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .policy-sidebar { display: block !important; }
        }
      `}</style>
    </div>
  )
}