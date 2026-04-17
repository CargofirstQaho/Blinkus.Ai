import { useState } from "react"
import { HomeView } from "./HomeViewUpdated"
import ImportExportTrends from "./ImportExportTrends"
import CompetitorIntelligence from "./CompetitorIntelligence"
import HSCodeAnalysis from "./HSCodeAnalysis"
import MarketsSeasonality from "./MarketsSeasonality"
import BuyerSignals from "./BuyerSignals"

export default function FeatureRouter() {
  const [currentPage, setCurrentPage] = useState("home")
  const [input, setInput] = useState("")
  const [inputDisabled, setInputDisabled] = useState(false)

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId)
  }

  const handleBack = () => {
    setCurrentPage("home")
  }

  const handleSend = (message) => {
    const textToSend = message || input
    if (!textToSend.trim() || inputDisabled) return
    console.log("Sending:", textToSend)
    setInput("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case "market-overview":
      case "import-export-trends":
        return <ImportExportTrends onBack={handleBack} />
      case "competitor-intelligence":
        return <CompetitorIntelligence onBack={handleBack} />
      case "hs-code-analysis":
        return <HSCodeAnalysis onBack={handleBack} />
      case "markets-seasonality":
        return <MarketsSeasonality onBack={handleBack} />
      case "buyer-signals":
        return <BuyerSignals onBack={handleBack} />
      default:
        return (
          <HomeView
            input={input}
            setInput={setInput}
            handleKeyDown={handleKeyDown}
            handleSend={handleSend}
            inputDisabled={inputDisabled}
            onNavigate={handleNavigate}
          />
        )
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#fff",
        fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      }}
    >
      {renderPage()}
    </div>
  )
}