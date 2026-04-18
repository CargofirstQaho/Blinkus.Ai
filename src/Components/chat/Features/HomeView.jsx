// import {  Zap,Send,TrendingUp,Users,Hash,Globe } from "lucide-react"
// import FeatureSections from "./FeatureSection"
// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_LIGHT = "#8b5cf6"
// const PURPLE_SOFT = "#ede9fe"
// const suggestions = [
//   {
//     icon: TrendingUp,
//     bold: "Analyse",
//     rest: " basmati rice export prices to UAE",
//   },
//   {
//     icon: Users,
//     bold: "Top",
//     rest: " exporters of maize from India",
//   },
//   {
//     icon: Hash,
//     bold: "Find",
//     rest: " HS code for non-basmati rice exports",
//   },
//   {
//     icon: Globe,
//     bold: "Volume",
//     rest: " of pulses exported to Saudi Arabia",
//   },
// ]

// const MAX_INPUT_LENGTH = 4000

// export function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled }) {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         overflowY: "auto",
//         padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px) clamp(20px,4vw,40px)",
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

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 28 }}>
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

//         <FeatureSections />
//       </div>
//     </div>
//   )
// }




// import { Zap, Send, TrendingUp, Users, Hash, Globe } from "lucide-react"
// import FeatureSection from "./FeatureSection"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_LIGHT = "#8b5cf6"
// const PURPLE_SOFT = "#ede9fe"

// const suggestions = [
//   {
//     icon: TrendingUp,
//     bold: "Analyse",
//     rest: " basmati rice export prices to UAE",
//   },
//   {
//     icon: Users,
//     bold: "Top",
//     rest: " exporters of maize from India",
//   },
//   {
//     icon: Hash,
//     bold: "Find",
//     rest: " HS code for non-basmati rice exports",
//   },
//   {
//     icon: Globe,
//     bold: "Volume",
//     rest: " of pulses exported to Saudi Arabia",
//   },
// ]

// const MAX_INPUT_LENGTH = 4000

// export function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, onNavigate }) {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         overflowY: "auto",
//         padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px) clamp(20px,4vw,40px)",
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

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 28 }}>
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

//         <FeatureSection onNavigate={onNavigate} />
//       </div>
//     </div>
//   )
// }













// import { Zap, Send, TrendingUp, Users, Hash, Globe } from "lucide-react"
// import FeatureSection from "./FeatureSection"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_LIGHT = "#8b5cf6"

// const suggestions = [
//   {
//     icon: TrendingUp,
//     bold: "Analyse",
//     rest: " basmati rice export prices to UAE",
//   },
//   {
//     icon: Users,
//     bold: "Top",
//     rest: " exporters of maize from India",
//   },
//   {
//     icon: Hash,
//     bold: "Find",
//     rest: " HS code for non-basmati rice exports",
//   },
//   {
//     icon: Globe,
//     bold: "Volume",
//     rest: " of pulses exported to Saudi Arabia",
//   },
// ]

// const MAX_INPUT_LENGTH = 4000

// export function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, onNavigate }) {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         overflowY: "auto",
//         padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px) clamp(20px,4vw,40px)",
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

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 28 }}>
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

//         <FeatureSection onNavigate={onNavigate} />
//       </div>
//     </div>
//   )
// }












// import { Zap, Send, TrendingUp, Users, Hash, Globe } from "lucide-react"
// import FeatureSection from "./FeatureSection"

// const NAVY = "#0f1b3d"
// const PURPLE = "#6c3fc5"
// const PURPLE_LIGHT = "#8b5cf6"

// const suggestions = [
//   {
//     icon: TrendingUp,
//     bold: "Analyse",
//     rest: " basmati rice export prices to UAE",
//   },
//   {
//     icon: Users,
//     bold: "Top",
//     rest: " exporters of maize from India",
//   },
//   {
//     icon: Hash,
//     bold: "Find",
//     rest: " HS code for non-basmati rice exports",
//   },
//   {
//     icon: Globe,
//     bold: "Volume",
//     rest: " of pulses exported to Saudi Arabia",
//   },
// ]

// const MAX_INPUT_LENGTH = 4000

// export function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, onNavigate }) {
//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         overflowY: "auto",
//         padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px) clamp(20px,4vw,40px)",
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

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 28 }}>
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

//         <FeatureSection onNavigate={onNavigate} />
//       </div>
//     </div>
//   )
// }










import { Zap, Send, TrendingUp, Users, Hash, Globe } from "lucide-react"
import FeatureSection from "./FeatureSection"

const NAVY = "#0f1b3d"
const PURPLE = "#6c3fc5"
const PURPLE_LIGHT = "#8b5cf6"

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

const MAX_INPUT_LENGTH = 4000

export function HomeView({ input, setInput, handleKeyDown, handleSend, textareaRef, inputDisabled, onNavigate }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        padding: "clamp(16px,4vw,40px) clamp(12px,4vw,24px) clamp(20px,4vw,40px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(20px,4vw,36px)" }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 8px 24px rgba(108,63,197,0.25)",
            }}
          >
            <Zap size={18} color="white" fill="white" />
          </div>
          <h1
            style={{
              fontSize: "clamp(22px,4.5vw,30px)",
              fontWeight: 900,
              color: NAVY,
              letterSpacing: "-0.04em",
              marginBottom: 8,
              lineHeight: 1.18,
            }}
          >
            What can I help you{" "}
            <span
              style={{
                background: `linear-gradient(135deg,${PURPLE},${PURPLE_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              trade today?
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(12px,2vw,14px)",
              color: "#9585c0",
              lineHeight: 1.6,
            }}
          >
            Ask about commodities, export data, HS codes, pricing, duties and regulations
          </p>
        </div>

        <div style={{ position: "relative", marginBottom: 12 }}>
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              border: "1.5px solid #e2d9f7",
              background: "#fff",
              boxShadow: "0 4px 20px rgba(108,63,197,0.07)",
            }}
            onFocusCapture={(e) => {
              e.currentTarget.style.borderColor = PURPLE_LIGHT
              e.currentTarget.style.boxShadow = "0 0 0 4px rgba(108,63,197,0.09)"
            }}
            onBlurCapture={(e) => {
              e.currentTarget.style.borderColor = "#e2d9f7"
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(108,63,197,0.07)"
            }}
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask about rice export prices, HS codes, top importers..."
              disabled={inputDisabled}
              style={{
                width: "100%",
                background: "transparent",
                color: NAVY,
                fontSize: "clamp(13px,2vw,15px)",
                lineHeight: 1.6,
                padding: "14px 50px 36px 16px",
                border: "none",
                outline: "none",
                borderRadius: 16,
                maxHeight: 160,
                caretColor: PURPLE,
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={inputDisabled || !input.trim()}
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                width: 30,
                height: 30,
                borderRadius: 8,
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
                boxShadow:
                  input.trim() && !inputDisabled
                    ? "0 4px 12px rgba(108,63,197,0.3)"
                    : "none",
              }}
            >
              <Send
                size={12}
                color={input.trim() && !inputDisabled ? "white" : "#c4b5f4"}
                style={{ marginLeft: -1 }}
              />
            </button>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 13 }}>
            <span
              style={{
                fontSize: 9,
                color: "#c4b5f4",
                fontWeight: 700,
                letterSpacing: "0.07em",
              }}
            >
              BLINKUS AI
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 28 }}>
          {suggestions.map((s, i) => {
            const Icon = s.icon
            return (
              <button
                key={i}
                className="sugg-btn"
                onClick={() => handleSend(s.bold + s.rest)}
                disabled={inputDisabled}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "9px 11px",
                  borderRadius: 11,
                  border: "1px solid #f0edf9",
                  background: "#faf9ff",
                  cursor: inputDisabled ? "not-allowed" : "pointer",
                  fontSize: "clamp(11px,1.6vw,12.5px)",
                  color: "#7c6fa0",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "all 0.14s",
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    color: PURPLE_LIGHT,
                    flexShrink: 0,
                    display: "flex",
                    paddingTop: 1,
                  }}
                >
                  <Icon size={14} />
                </span>
                <span style={{ wordBreak: "break-word" }}>
                  <strong style={{ fontWeight: 700, color: NAVY }}>{s.bold}</strong>
                  {s.rest}
                </span>
              </button>
            )
          })}
        </div>

        <FeatureSection onNavigate={onNavigate} />
      </div>
    </div>
  )
}










// import { Sparkles } from "lucide-react"
// import FeatureSection from "./FeatureSection"

// const PURPLE = "#6c3fc5"

// export function HomeView({ input, setInput, handleKeyDown, handleSend, inputDisabled }) {
//   const suggestions = [
//     "What is India's biggest exporter of electronic goods?",
//     "Calculate the total trade volume for HS Code 8471 last quarter",
//     "Who are the top 5 importers of textile machinery from Germany?",
//     "Show me seasonal trends for agricultural exports to the Middle East",
//   ]

//   return (
//     <div
//       style={{
//         flex: 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px 20px 40px",
//         overflowY: "auto",
//         background: "#fff",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: 700,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 30,
//         }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <div
//             style={{
//               width: 80,
//               height: 80,
//               margin: "0 auto 20px",
//               borderRadius: 20,
//               background: `linear-gradient(135deg, ${PURPLE} 0%, #8b5cf6 100%)`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               boxShadow: "0 8px 32px rgba(108,63,197,0.25)",
//             }}
//           >
//             <Sparkles size={38} color="#fff" strokeWidth={2} />
//           </div>
//           <h1
//             style={{
//               fontSize: 32,
//               fontWeight: 800,
//               color: "#0f1b3d",
//               marginBottom: 12,
//               letterSpacing: "-0.02em",
//             }}
//           >
//             What can I help with?
//           </h1>
//           <p
//             style={{
//               fontSize: 15,
//               color: "#6b7280",
//               lineHeight: 1.6,
//               maxWidth: 480,
//               margin: "0 auto",
//             }}
//           >
//             Ask me anything about global trade, market intelligence, or explore
//             our powerful analytics modules below.
//           </p>
//         </div>

//         <FeatureSection />

//         <div style={{ width: "100%", maxWidth: 600 }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 10,
//               marginBottom: 12,
//             }}
//           >
//             <div
//               style={{
//                 flex: 1,
//                 height: 1,
//                 background: "linear-gradient(to right, #f0edf9, transparent)",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: 10,
//                 fontWeight: 800,
//                 color: "#c4b5f4",
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Try asking
//             </span>
//             <div
//               style={{
//                 flex: 1,
//                 height: 1,
//                 background: "linear-gradient(to left, #f0edf9, transparent)",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: 10,
//               marginBottom: 20,
//             }}
//           >
//             {suggestions.map((suggestion, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleSend(suggestion)}
//                 disabled={inputDisabled}
//                 style={{
//                   padding: "12px 16px",
//                   borderRadius: 12,
//                   border: "1px solid #e5e7eb",
//                   background: "#fff",
//                   textAlign: "left",
//                   fontSize: 13,
//                   color: "#374151",
//                   lineHeight: 1.4,
//                   cursor: inputDisabled ? "not-allowed" : "pointer",
//                   transition: "all 0.2s",
//                   opacity: inputDisabled ? 0.6 : 1,
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!inputDisabled) {
//                     e.currentTarget.style.borderColor = PURPLE
//                     e.currentTarget.style.background = "#fafafa"
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "#e5e7eb"
//                   e.currentTarget.style.background = "#fff"
//                 }}
//               >
//                 {suggestion}
//               </button>
//             ))}
//           </div>

//           <div
//             style={{
//               position: "relative",
//               borderRadius: 16,
//               border: "1.5px solid #e5e7eb",
//               background: "#fff",
//               transition: "border-color 0.2s",
//             }}
//             onFocus={(e) => (e.currentTarget.style.borderColor = PURPLE)}
//             onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
//           >
//             <textarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               disabled={inputDisabled}
//               placeholder="Message Blinkus..."
//               style={{
//                 width: "100%",
//                 minHeight: 56,
//                 maxHeight: 200,
//                 padding: "16px 60px 16px 18px",
//                 border: "none",
//                 borderRadius: 16,
//                 fontSize: 14,
//                 lineHeight: 1.5,
//                 resize: "none",
//                 outline: "none",
//                 background: "transparent",
//                 color: "#0f1b3d",
//                 fontFamily: "inherit",
//               }}
//             />
//             <button
//               onClick={() => handleSend()}
//               disabled={!input.trim() || inputDisabled}
//               style={{
//                 position: "absolute",
//                 right: 12,
//                 bottom: 12,
//                 width: 36,
//                 height: 36,
//                 borderRadius: 10,
//                 border: "none",
//                 background:
//                   input.trim() && !inputDisabled
//                     ? `linear-gradient(135deg, ${PURPLE} 0%, #8b5cf6 100%)`
//                     : "#f3f4f6",
//                 color: "#fff",
//                 cursor:
//                   input.trim() && !inputDisabled ? "pointer" : "not-allowed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.2s",
//                 opacity: input.trim() && !inputDisabled ? 1 : 0.5,
//               }}
//             >
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="22" y1="2" x2="11" y2="13" />
//                 <polygon points="22 2 15 22 11 13 2 9 22 2" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }