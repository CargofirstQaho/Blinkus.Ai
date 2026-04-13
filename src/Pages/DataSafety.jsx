import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const N = "#6c3dff"
const P = "#6c3fc5"

const securitySections = [
  {
    id: "encryption",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Encryption in Transit and at Rest",
    content: "All network traffic to our services is protected using strong TLS (HTTPS) to prevent interception. Sensitive data stored by Blinkus.ai is encrypted at rest using industry-standard encryption algorithms. Keys are stored and rotated using a dedicated secrets management solution.",
  },
  {
    id: "access-control",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Access Control and Least Privilege",
    content: "We enforce role-based access controls and the principle of least privilege across all systems. Access to production systems and data is limited to authorized personnel and audited regularly. Administrative actions and data access are logged for forensic review.",
  },
  {
    id: "secure-dev",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Secure Development and Deployment",
    content: "Security is integrated into our software development lifecycle. We perform code reviews, static analysis, dependency vulnerability scanning, and automated testing in CI/CD pipelines. Secrets are never hard-coded; they are managed through secret stores and environment controls.",
  },
  {
    id: "payment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: "Payment Safety",
    content: "We partner with PCI-compliant payment processors for all card-based transactions. Blinkus.ai does not store raw card numbers. We store the minimum tokenized or reference data required to support refunds or order lookups.",
  },
  {
    id: "retention",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Data Minimization and Retention",
    content: "We collect the minimum personal data necessary to provide services. Retention periods are defined by operational needs and legal requirements. If you need the exact retention schedule for a specific data type, contact our privacy team for a precise timeframe.",
  },
  {
    id: "monitoring",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Monitoring, Detection, and Incident Response",
    content: "Our systems are monitored for suspicious activity and anomalous behavior. We maintain an incident response plan and will notify affected users and regulators in accordance with applicable laws if a data breach occurs.",
  },
  {
    id: "vendors",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Third-Party Vendors and Controls",
    content: "We carefully evaluate third-party vendors for security posture and contractual safeguards. Where vendors process personal data on our behalf, we execute Data Processing Agreements that define permitted uses, security controls, and breach notification obligations.",
  },
]

const rights = [
  { label: "Access", desc: "Request a copy of personal data we hold about you." },
  { label: "Correction", desc: "Request correction of inaccurate personal data." },
  { label: "Deletion", desc: "Where permitted by law, request deletion of your personal data." },
  { label: "Portability", desc: "For supported data types we can provide a machine-readable export." },
  { label: "Consent & Marketing", desc: "Manage your communication preferences in Account settings." },
]

const faqs = [
  {
    q: "What personal data do you collect?",
    a: "We collect account and transactional data required to deliver services (name, contact, order/payment history). We do not collect unnecessary sensitive personal data unless explicitly required and consented to.",
  },
  {
    q: "Do you share my data?",
    a: "We only share data with service providers necessary to operate the service (payments, hosting, analytics) and when required by law. All vendor access is contractually limited.",
  },
  {
    q: "How can I delete my data?",
    a: "Use Account settings to request deletion or email orbit@blinkus.ai for assisted deletion. We will respond in accordance with applicable law.",
  },
  {
    q: "Are you compliant with GDPR or other laws?",
    a: "We design our privacy program to support user rights under major privacy laws. For jurisdiction-specific requests, contact our privacy team for guidance.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{
        background: "#fff", border: `1px solid ${open ? "rgba(108,63,197,0.2)" : "rgba(108,63,197,0.09)"}`,
        borderRadius: 14, overflow: "hidden",
        transition: "border-color 0.2s",
        marginBottom: 10,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "18px 24px",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
          fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1040", textAlign: "left" }}>{item.q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%",
          background: open ? `linear-gradient(135deg, ${N}, ${P})` : "rgba(108,63,197,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "background 0.2s",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : P} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <p style={{
          margin: 0, padding: "0 24px 20px",
          fontSize: 14, color: "#4b5563", lineHeight: 1.8,
          fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        }}>
          {item.a}
        </p>
      </div>
    </motion.div>
  )
}

export default function DataSafety() {
  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  return (
    <div style={{
      minHeight: "100vh",
      background: "#faf9ff",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #0f0824 0%, #1a0e40 40%, #2d1566 100%)",
        padding: "80px clamp(16px,5vw,48px) 72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -60, right: -60, width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,63,255,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -80, left: "20%", width: 300, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(108,63,255,0.2)", borderRadius: 30,
              padding: "6px 14px", marginBottom: 22,
              border: "1px solid rgba(108,63,255,0.3)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={N} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Security
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
            How Safe Is Your Data?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 540, lineHeight: 1.7 }}
          >
            Our commitment is to keep your personal and transactional data secure, private, and available only to authorized parties.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ display: "flex", gap: 24, marginTop: 36, flexWrap: "wrap" }}
          >
            {[
              { val: "TLS/HTTPS", label: "All traffic encrypted" },
              { val: "PCI DSS", label: "Payment compliance" },
              { val: "DPDP 2023", label: "Indian data law" },
            ].map((stat) => (
              <div key={stat.val} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14, padding: "16px 22px", backdropFilter: "blur(8px)",
              }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em" }}>{stat.val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px clamp(16px,4vw,32px) 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: 16, marginBottom: 48,
        }} className="security-grid">
          {securitySections.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              style={{
                background: "#fff",
                border: "1px solid rgba(108,63,197,0.09)",
                borderRadius: 18, padding: "26px 28px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.2)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(108,63,197,0.08)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(108,63,197,0.09)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: "linear-gradient(135deg, rgba(108,63,255,0.1), rgba(108,63,197,0.06))",
                border: "1px solid rgba(108,63,197,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: N, marginBottom: 16,
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 800, color: "#1a1040",
                marginBottom: 10, letterSpacing: "-0.01em",
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "#fff",
            border: "1px solid rgba(108,63,197,0.09)",
            borderRadius: 20, padding: "32px 36px",
            marginBottom: 48,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: `linear-gradient(135deg, ${N}, ${P})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1a1040", letterSpacing: "-0.01em" }}>
              Your Privacy Rights and Controls
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {rights.map((r, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg, #f5f2ff, #faf9ff)",
                border: "1px solid rgba(108,63,197,0.1)",
                borderRadius: 12, padding: "16px 20px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${N}, ${P})`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: N }}>{r.label}</span>
                </div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#9ca3af", marginTop: 18, lineHeight: 1.7 }}>
            To exercise any rights, use the contact details below or the account settings controls.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1a1040", marginBottom: 6, letterSpacing: "-0.01em" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>
            Quick answers to common security and privacy questions.
          </p>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(135deg, #0f0824 0%, #1a0e40 100%)",
            borderRadius: 22, padding: "36px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: -40, right: -40, width: 240, height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108,63,255,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
              Have more security questions?
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, maxWidth: 360 }}>
              For privacy or security inquiries, data subject requests, or compliance questions — we're here to help.
            </p>
          </div>
          <a
            href="mailto:orbit@blinkus.ai"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 26px", borderRadius: 14,
              background: `linear-gradient(135deg, ${N}, ${P})`,
              color: "#fff", fontSize: 14, fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(108,63,255,0.4)",
              transition: "opacity 0.15s, transform 0.15s",
              position: "relative",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)" }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg> 
            orbit@blinkus.ai
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .security-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}