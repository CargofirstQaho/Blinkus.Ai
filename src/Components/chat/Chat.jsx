import { useState, useRef, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  PlusCircle,
  Send,
  Menu,
  LogOut,
  Home,
  TrendingUp,
  Globe,
  Hash,
  Users,
  Zap,
  Database,
  Cpu,
  ChevronDown,
} from "lucide-react"
import { addMessage, clearChat, setView } from "../../redux/slices/chatSlice"
import { logout } from "../../redux/slices/authSlice"
import { HomeView } from "./Features/HomeView"
import logoImg from "../../assets/logo2.png"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_LIGHT = "#8b5cf6"
const PURPLE_SOFT = "#ede9fe"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const MAX_INPUT_LENGTH = 4000
const MAX_HISTORY_MESSAGES = 4
const MAX_HISTORY_CONTENT = 600

const suggestions = [
  {
    icon: TrendingUp,
    bold: "Analyse",
    rest: " basmati rice export prices to UAE",
  },
  {
    icon: Users,
    bold: "Top",
    rest: " exporters of maize from India",
  },
  {
    icon: Hash,
    bold: "Find",
    rest: " HS code for non-basmati rice exports",
  },
  {
    icon: Globe,
    bold: "Volume",
    rest: " of pulses exported to Saudi Arabia",
  },
]

const sidebarLinks = [
  { icon: TrendingUp, label: "Commodity Pricing" },
  { icon: Globe, label: "Export Regulations" },
  { icon: Database, label: "Import Duties" },
  { icon: Zap, label: "Trade Routes" },
  { icon: Hash, label: "HS Codes" },
  { icon: Cpu, label: "Compliance" },
]

function Avatar({ user, size = 28 }) {
  if (user?.avatar) {
    return (
      <img
        src={user.avatar}
        alt={user.name || "User"}
        referrerPolicy="no-referrer"
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
          border: `2px solid ${PURPLE_SOFT}`,
          flexShrink: 0,
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none"
        }}
      />
    )
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${PURPLE_SOFT}, #ddd6fe)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: size * 0.4,
        fontWeight: 700,
        color: PURPLE,
      }}
    >
      {user?.name?.[0]?.toUpperCase() || "U"}
    </div>
  )
}

function BotAvatar() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 9,
        background: `linear-gradient(135deg,${NAVY},${PURPLE})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Zap size={12} color="white" fill="white" />
    </div>
  )
}

function ThinkingBubble() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <BotAvatar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 14px",
          borderRadius: "16px 16px 16px 4px",
          background: "#f8f7ff",
          border: `1px solid ${PURPLE_SOFT}`,
          fontSize: 13,
          color: "#7c6fa0",
        }}
      >
        <span style={{ fontStyle: "italic" }}>Thinking</span>
        <span style={{ display: "flex", gap: 3, alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: PURPLE_LIGHT,
                animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                display: "inline-block",
              }}
            />
          ))}
        </span>
        <style>{`@keyframes dotBounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-4px);opacity:1}}`}</style>
      </div>
    </div>
  )
}

function DataBadge({ source }) {
  const isDB = source === "database"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
    </div>
  )
}

function renderInline(text) {
  if (!text) return null
  const parts = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    const codeMatch = remaining.match(/`(.+?)`/)
    const fb = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity
    const fc = codeMatch ? remaining.indexOf(codeMatch[0]) : Infinity

    if (fb === Infinity && fc === Infinity) {
      parts.push(remaining)
      break
    }
    if (fb < fc) {
      if (fb > 0) parts.push(remaining.slice(0, fb))
      parts.push(
        <strong key={key++} style={{ fontWeight: 700, color: NAVY }}>
          {boldMatch[1]}
        </strong>
      )
      remaining = remaining.slice(fb + boldMatch[0].length)
    } else {
      if (fc > 0) parts.push(remaining.slice(0, fc))
      parts.push(
        <code
          key={key++}
          style={{
            background: PURPLE_SOFT,
            color: PURPLE,
            padding: "1px 5px",
            borderRadius: 4,
            fontSize: 11,
            fontFamily: "monospace",
          }}
        >
          {codeMatch[1]}
        </code>
      )
      remaining = remaining.slice(fc + codeMatch[0].length)
    }
  }
  return parts
}

function renderTable(lines, keyBase) {
  const rows = lines.map((l) =>
    l
      .split("|")
      .filter((_, i, a) => i > 0 && i < a.length - 1)
      .map((c) => c.trim())
  )
  const headers = rows[0] || []
  const dataRows = rows.filter((_, i) => i > 1)

  return (
    <div
      key={keyBase}
      style={{
        overflowX: "auto",
        margin: "8px 0",
        borderRadius: 8,
        border: `1px solid ${PURPLE_SOFT}`,
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ background: PURPLE_SOFT }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "7px 10px",
                  textAlign: "left",
                  fontWeight: 700,
                  color: NAVY,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                borderTop: "1px solid #f0edf9",
                background: ri % 2 === 0 ? "#fff" : "#faf9ff",
              }}
            >
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "6px 10px", color: "#3d3459" }}>
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MarkdownRenderer({ text }) {
  const lines = text.split("\n")
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          style={{ fontSize: 13, fontWeight: 800, color: NAVY, margin: "12px 0 4px" }}
        >
          {renderInline(line.slice(4))}
        </h3>
      )
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{ fontSize: 14, fontWeight: 800, color: NAVY, margin: "14px 0 6px" }}
        >
          {renderInline(line.slice(3))}
        </h2>
      )
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={i}
          style={{ fontSize: 15, fontWeight: 900, color: NAVY, margin: "14px 0 8px" }}
        >
          {renderInline(line.slice(2))}
        </h1>
      )
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items = []
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: 0, margin: "6px 0", listStyle: "none" }}>
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                gap: 6,
                fontSize: 13,
                color: "#3d3459",
                lineHeight: 1.65,
                marginBottom: 3,
              }}
            >
              <span style={{ color: PURPLE_LIGHT, flexShrink: 0, marginTop: 2 }}>▸</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\. /.test(line)) {
      const items = []
      let num = 1
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push({ num, content: lines[i].replace(/^\d+\. /, "") })
        i++
        num++
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ paddingLeft: 0, margin: "6px 0", listStyle: "none" }}>
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                gap: 8,
                fontSize: 13,
                color: "#3d3459",
                lineHeight: 1.65,
                marginBottom: 4,
              }}
            >
              <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0, minWidth: 16 }}>
                {item.num}.
              </span>
              <span>{renderInline(item.content)}</span>
            </li>
          ))}
        </ol>
      )
      continue
    } else if (line.startsWith("|")) {
      const tableLines = []
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      elements.push(renderTable(tableLines, i))
      continue
    } else if (line.startsWith("---") || line.startsWith("***")) {
      elements.push(
        <hr
          key={i}
          style={{ border: "none", borderTop: `1px solid ${PURPLE_SOFT}`, margin: "10px 0" }}
        />
      )
    } else if (line.trim() === "") {
      elements.push(<div key={i} style={{ height: 6 }} />)
    } else {
      elements.push(
        <p key={i} style={{ fontSize: 13, color: "#3d3459", lineHeight: 1.7, margin: "2px 0" }}>
          {renderInline(line)}
        </p>
      )
    }
    i++
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>{elements}</div>
  )
}

function AssistantMessage({ message }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <BotAvatar />
      <div style={{ minWidth: 0, flex: 1, maxWidth: "min(560px,100%)" }}>
        <div
          style={{
            padding: "12px 14px",
            borderRadius: "16px 16px 16px 4px",
            background: "#f8f7ff",
            border: `1px solid ${PURPLE_SOFT}`,
            wordBreak: "break-word",
          }}
        >
          <MarkdownRenderer text={message.content} />
        </div>
        {message.dataSource && message.dataSource !== "error" && (
          <DataBadge source={message.dataSource} />
        )}
      </div>
    </div>
  )
}

function Sidebar({ isOpen, onClose, user, onLogout, onNewChat }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15,27,61,0.35)",
              zIndex: 40,
              backdropFilter: "blur(2px)",
            }}
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              height: "100dvh",
              width: "clamp(240px,75vw,280px)",
              background: "#fff",
              borderRight: "1px solid #f0edf9",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
              boxShadow: "4px 0 24px rgba(108,63,197,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 16px 14px",
                borderBottom: "1px solid #f0edf9",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Zap size={12} color="white" fill="white" />
                </div>
                {/* <span style={{ fontWeight: 900, fontSize: 15, color: NAVY, letterSpacing: "-0.03em" }}>
                  Blinkus<span style={{ color: PURPLE }}>.ai</span>
                </span> */}
                <div>
                  <img src={logoImg} alt="logo" className="h-8 w-18"/>
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9585c0",
                }}
              >
                <Menu size={14} />
              </button>
            </div>

            <div style={{ padding: 10, borderBottom: "1px solid #f9f7ff" }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#b0a0d0",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0 8px 6px",
                }}
              >
                Navigation
              </p>
              <SideNavBtn icon={PlusCircle} onClick={onNewChat}>
                New Chat
              </SideNavBtn>
            </div>

            <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#b0a0d0",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 8px 6px",
                }}
              >
                Topics
              </p>
              {sidebarLinks.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={onClose}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 10px",
                    borderRadius: 9,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: 13,
                    color: "#7c6fa0",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = PURPLE_SOFT
                    e.currentTarget.style.color = PURPLE
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.color = "#7c6fa0"
                  }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>

            <div
              style={{
                padding: 14,
                borderTop: "1px solid #f0edf9",
                background: "#faf9ff",
              }}
            >
              {user && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "11px 12px",
                      borderRadius: 12,
                      background: "#fff",
                      border: "1px solid #f0edf9",
                      marginBottom: 10,
                    }}
                  >
                    <Avatar user={user} size={32} />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: NAVY,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {user.name || "User"}
                      </p>
                      {user.email && (
                        <p
                          style={{
                            fontSize: 11,
                            color: "#9585c0",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginTop: 1,
                          }}
                        >
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={onLogout}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      padding: "9px 16px",
                      borderRadius: 11,
                      border: "1px solid #fecaca",
                      background: "#fff5f5",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ef4444",
                      fontFamily: "inherit",
                    }}
                  >
                    <LogOut size={13} />
                    Sign Out
                  </button>
                </>
              )}
              <p
                style={{
                  fontSize: 10,
                  color: "#d4bffb",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                © 2026 Blinkus.ai
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function SideNavBtn({ onClick, icon: Icon, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "9px 10px",
        borderRadius: 10,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: 13,
        color: "#7c6fa0",
        textAlign: "left",
        fontFamily: "inherit",
        fontWeight: 600,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = PURPLE_SOFT
        e.currentTarget.style.color = PURPLE
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent"
        e.currentTarget.style.color = "#7c6fa0"
      }}
    >
      <Icon size={14} />
      {children}
    </button>
  )
}

function RailBtn({ onClick, title, children }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        width: 32,
        height: 32,
        borderRadius: 9,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9585c0",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = PURPLE_SOFT
        e.currentTarget.style.color = PURPLE
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent"
        e.currentTarget.style.color = "#9585c0"
      }}
    >
      {children}
    </button>
  )
}

export default function Chat() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((s) => s.auth)
  const { messages, view } = useSelector((s) => s.chat)

  const [input, setInput] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 160) + "px"
    }
  }, [input])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isThinking])

  const sendMessage = useCallback(
    async (msg) => {
      const trimmed = msg.trim()
      if (!trimmed || isThinking) return

      dispatch(addMessage({ role: "user", content: trimmed }))
      if (view === "home") dispatch(setView("chat"))
      setIsThinking(true)

      try {
        const conversationHistory = messages
          .slice(-MAX_HISTORY_MESSAGES)
          .map((m) => ({
            role: m.role,
            content: m.content.slice(0, MAX_HISTORY_CONTENT),
          }))

        const token = localStorage.getItem("blinkus_token")

        const res = await fetch(`${API_BASE_URL}/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ query: trimmed, conversationHistory }),
        })

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}))
          throw new Error(errData.error || `Server error ${res.status}`)
        }

        const data = await res.json()

        dispatch(
          addMessage({
            role: "assistant",
            content: data.answer,
            dataSource: data.dataSource,
            metadata: data.metadata,
          })
        )
      } catch (err) {
        dispatch(
          addMessage({
            role: "assistant",
            content: `Something went wrong while fetching your trade data. Please try again in a moment.`,
            dataSource: "error",
          })
        )
        console.error("[Chat]", err.message)
      } finally {
        setIsThinking(false)
      }
    },
    [dispatch, messages, view, isThinking]
  )

  const handleSend = useCallback(
    (text) => {
      const msg = text !== undefined ? text : input
      if (!msg.trim() || isThinking) return
      setInput("")
      sendMessage(msg)
    },
    [input, isThinking, sendMessage]
  )

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearChat())
    navigate("/")
  }

  const handleNewChat = () => {
    dispatch(clearChat())
    setIsSidebarOpen(false)
  }

  const inputDisabled = isThinking

  return (
    <div
      style={{
        display: "flex",
        height: "100dvh",
        width: "100%",
        background: "#fff",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        *,*::before,*::after{box-sizing:border-box;}
        ::placeholder{color:#b0a0d0;}
        textarea{font-family:inherit;resize:none;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:#e0d9f7;border-radius:4px;}
        .sugg-btn:hover{background:${PURPLE_SOFT}!important;border-color:#d4bffb!important;color:${PURPLE}!important;}
      `}</style>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        user={user}
        onLogout={handleLogout}
        onNewChat={handleNewChat}
      />

      <aside
        style={{
          width: "clamp(42px,5vw,52px)",
          flexShrink: 0,
          borderRight: "1px solid #f0edf9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 14,
          paddingBottom: 14,
          gap: 4,
          background: "#faf9ff",
          zIndex: 30,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: `linear-gradient(135deg,${NAVY},${PURPLE})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={12} color="white" fill="white" />
          </div>
        </div>
        <RailBtn onClick={() => setIsSidebarOpen(true)} title="Menu">
          <Menu size={14} />
        </RailBtn>
        <RailBtn onClick={handleNewChat} title="New chat">
          <PlusCircle size={14} />
        </RailBtn>
        <RailBtn onClick={() => navigate("/")} title="Home">
          <Home size={14} />
        </RailBtn>
        <div style={{ flex: 1 }} />
        <button
          onClick={handleLogout}
          title="Sign out"
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar user={user} size={26} />
        </button>
      </aside>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px clamp(12px,3vw,24px)",
            borderBottom: "1px solid #f0edf9",
            background: "#fff",
            flexShrink: 0,
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* <span
              style={{
                fontWeight: 900,
                fontSize: 16,
                color: NAVY,
                letterSpacing: "-0.03em",
              }}
            >
              Blinkus<span style={{ color: PURPLE }}>.ai</span>
            </span> */}
            <img src={logoImg} alt="logo" className="h-10 w-20"/>

          </div>
          {user && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Avatar user={user} size={26} />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: NAVY,
                  maxWidth: 120,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {user.name?.split(" ")[0] || user.email?.split("@")[0]}
              </span>
            </div>
          )}
        </header>

        {view === "home" ? (
          <HomeView
            input={input}
            setInput={setInput}
            handleKeyDown={handleKeyDown}
            handleSend={handleSend}
            textareaRef={textareaRef}
            inputDisabled={inputDisabled}
          />
        ) : (
          <ChatView
            messages={messages}
            isThinking={isThinking}
            input={input}
            setInput={setInput}
            handleKeyDown={handleKeyDown}
            handleSend={handleSend}
            textareaRef={textareaRef}
            messagesEndRef={messagesEndRef}
            inputDisabled={inputDisabled}
            user={user}
          />
        )}
      </div>
    </div>
  )
}

// function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled }) {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         overflowY: "auto",
//         padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px)",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: 600 }}>
//         <div style={{ textAlign: "center", marginBottom: "clamp(20px,4vw,36px)" }}>
//           <div
//             style={{
//               width: 42,
//               height: 42,
//               borderRadius: 14,
//               background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               margin: "0 auto 16px",
//               boxShadow: "0 8px 24px rgba(108,63,197,0.25)",
//             }}
//           >
//             <Zap size={18} color="white" fill="white" />
//           </div>
//           <h1
//             style={{
//               fontSize: "clamp(22px,4.5vw,30px)",
//               fontWeight: 900,
//               color: NAVY,
//               letterSpacing: "-0.04em",
//               marginBottom: 8,
//               lineHeight: 1.18,
//             }}
//           >
//             What can I help you{" "}
//             <span
//               style={{
//                 background: `linear-gradient(135deg,${PURPLE},${PURPLE_LIGHT})`,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               trade today?
//             </span>
//           </h1>
//           <p
//             style={{
//               fontSize: "clamp(12px,2vw,14px)",
//               color: "#9585c0",
//               lineHeight: 1.6,
//             }}
//           >
//             Ask about commodities, export data, HS codes, pricing, duties and regulations
//           </p>
//         </div>

//         <div style={{ position: "relative", marginBottom: 12 }}>
//           <div
//             style={{
//               position: "relative",
//               borderRadius: 16,
//               border: "1.5px solid #e2d9f7",
//               background: "#fff",
//               boxShadow: "0 4px 20px rgba(108,63,197,0.07)",
//             }}
//             onFocusCapture={(e) => {
//               e.currentTarget.style.borderColor = PURPLE_LIGHT
//               e.currentTarget.style.boxShadow = "0 0 0 4px rgba(108,63,197,0.09)"
//             }}
//             onBlurCapture={(e) => {
//               e.currentTarget.style.borderColor = "#e2d9f7"
//               e.currentTarget.style.boxShadow = "0 4px 20px rgba(108,63,197,0.07)"
//             }}
//           >
//             <textarea
//               ref={textareaRef}
//               value={input}
//               onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
//               onKeyDown={handleKeyDown}
//               rows={1}
//               placeholder="Ask about rice export prices, HS codes, top importers..."
//               disabled={inputDisabled}
//               style={{
//                 width: "100%",
//                 background: "transparent",
//                 color: NAVY,
//                 fontSize: "clamp(13px,2vw,15px)",
//                 lineHeight: 1.6,
//                 padding: "14px 50px 36px 16px",
//                 border: "none",
//                 outline: "none",
//                 borderRadius: 16,
//                 maxHeight: 160,
//                 caretColor: PURPLE,
//               }}
//             />
//             <button
//               onClick={() => handleSend()}
//               disabled={inputDisabled || !input.trim()}
//               style={{
//                 position: "absolute",
//                 bottom: 10,
//                 right: 10,
//                 width: 30,
//                 height: 30,
//                 borderRadius: 8,
//                 border: "none",
//                 cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background:
//                   input.trim() && !inputDisabled
//                     ? `linear-gradient(135deg,${NAVY},${PURPLE})`
//                     : "#f0edf9",
//                 transition: "all 0.15s",
//                 boxShadow:
//                   input.trim() && !inputDisabled
//                     ? "0 4px 12px rgba(108,63,197,0.3)"
//                     : "none",
//               }}
//             >
//               <Send
//                 size={12}
//                 color={input.trim() && !inputDisabled ? "white" : "#c4b5f4"}
//                 style={{ marginLeft: -1 }}
//               />
//             </button>
//           </div>
//           <div style={{ position: "absolute", bottom: 10, left: 13 }}>
//             <span
//               style={{
//                 fontSize: 9,
//                 color: "#c4b5f4",
//                 fontWeight: 700,
//                 letterSpacing: "0.07em",
//               }}
//             >
//               BLINKUS AI
//             </span>
//           </div>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
//           {suggestions.map((s, i) => {
//             const Icon = s.icon
//             return (
//               <button
//                 key={i}
//                 className="sugg-btn"
//                 onClick={() => handleSend(s.bold + s.rest)}
//                 disabled={inputDisabled}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: 8,
//                   padding: "9px 11px",
//                   borderRadius: 11,
//                   border: "1px solid #f0edf9",
//                   background: "#faf9ff",
//                   cursor: inputDisabled ? "not-allowed" : "pointer",
//                   fontSize: "clamp(11px,1.6vw,12.5px)",
//                   color: "#7c6fa0",
//                   textAlign: "left",
//                   fontFamily: "inherit",
//                   transition: "all 0.14s",
//                   lineHeight: 1.4,
//                 }}
//               >
//                 <span
//                   style={{
//                     color: PURPLE_LIGHT,
//                     flexShrink: 0,
//                     display: "flex",
//                     paddingTop: 1,
//                   }}
//                 >
//                   <Icon size={14} />
//                 </span>
//                 <span style={{ wordBreak: "break-word" }}>
//                   <strong style={{ fontWeight: 700, color: NAVY }}>{s.bold}</strong>
//                   {s.rest}
//                 </span>
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

function ChatView({
  messages,
  isThinking,
  input,
  setInput,
  handleKeyDown,
  handleSend,
  textareaRef,
  messagesEndRef,
  inputDisabled,
  user,
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding:
              "clamp(14px,3vw,28px) clamp(12px,3vw,20px) 10px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {messages.map((m, i) => (
            <div key={i}>
              {m.role === "user" ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(13px,1.8vw,14px)",
                      lineHeight: 1.65,
                      padding: "10px 14px",
                      borderRadius: "16px 16px 4px 16px",
                      maxWidth: "min(480px,80%)",
                      background: `linear-gradient(135deg,${NAVY},${PURPLE})`,
                      color: "#fff",
                      wordBreak: "break-word",
                    }}
                  >
                    {m.content}
                  </div>
                  <Avatar user={user} size={26} />
                </div>
              ) : (
                <AssistantMessage message={m} />
              )}
            </div>
          ))}
          {isThinking && <ThinkingBubble />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #f0edf9",
          background: "#fff",
          padding: "clamp(8px,2vw,14px) clamp(12px,3vw,20px) clamp(10px,2vw,16px)",
        }}
      >
        <div style={{ width: "100%", maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 14,
              background: "#fff",
              border: "1.5px solid #e2d9f7",
              boxShadow: "0 2px 10px rgba(108,63,197,0.06)",
              transition: "border-color 0.15s,box-shadow 0.15s",
            }}
            onFocusCapture={(e) => {
              e.currentTarget.style.borderColor = PURPLE_LIGHT
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,63,197,0.09)"
            }}
            onBlurCapture={(e) => {
              e.currentTarget.style.borderColor = "#e2d9f7"
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(108,63,197,0.06)"
            }}
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder={isThinking ? "Blinkus is analyzing..." : "Ask your trade question..."}
              disabled={inputDisabled}
              style={{
                width: "100%",
                background: "transparent",
                color: NAVY,
                fontSize: "clamp(13px,1.8vw,14px)",
                lineHeight: 1.6,
                padding: "12px 46px 32px 16px",
                border: "none",
                outline: "none",
                borderRadius: 14,
                maxHeight: 160,
                caretColor: PURPLE,
                opacity: inputDisabled ? 0.5 : 1,
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={inputDisabled || !input.trim()}
              style={{
                position: "absolute",
                bottom: 9,
                right: 9,
                width: 28,
                height: 28,
                borderRadius: 7,
                border: "none",
                cursor: input.trim() && !inputDisabled ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  input.trim() && !inputDisabled
                    ? `linear-gradient(135deg,${NAVY},${PURPLE})`
                    : "#f0edf9",
                transition: "all 0.15s",
              }}
            >
              <Send
                size={11}
                color={input.trim() && !inputDisabled ? "white" : "#c4b5f4"}
                style={{ marginLeft: -1 }}
              />
            </button>
            <div style={{ position: "absolute", bottom: 10, left: 14 }}>
              <span style={{ fontSize: 9, color: "#c4b5f4", fontWeight: 700, letterSpacing: "0.07em" }}>
                BLINKUS AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}