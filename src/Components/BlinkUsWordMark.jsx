export function BlinkusWordmark({ height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bw-grad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f1b3d" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="48"
        fontFamily="'DM Sans','Segoe UI',system-ui,sans-serif"
        fontWeight="800"
        fontSize="52"
        letterSpacing="-2"
        fill="url(#bw-grad)"
      >
        blinkus
      </text>
      <circle cx="62" cy="10" r="5" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
      <circle cx="62" cy="10" r="2" fill="#3b82f6" />
    </svg>
  )
}

export function BlinkusIcon({ size = 32, dark = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bi-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={dark ? "#0f1b3d" : "#3b82f6"} />
          <stop offset="100%" stopColor={dark ? "#3b82f6" : "#8b5cf6"} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#bi-grad)" />
      <circle cx="20" cy="14" r="4.5" fill="none" stroke="white" strokeWidth="2.2" />
      <circle cx="20" cy="14" r="1.8" fill="white" />
      <line x1="20" y1="20" x2="20" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function BlinkusNavLogo({ height = 30 }) {
  return (
    <svg height={height} viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bnl-grad" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f1b3d" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <text
        x="2"
        y="44"
        fontFamily="'DM Sans','Segoe UI',system-ui,sans-serif"
        fontWeight="900"
        fontSize="46"
        letterSpacing="-1.5"
        fill="url(#bnl-grad)"
      >
        blinkus
      </text>
      <circle cx="74" cy="9" r="5.5" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
      <circle cx="74" cy="9" r="2.2" fill="#3b82f6" />
    </svg>
  )
}

export function BlinkusNavLogoWhite({ height = 30 }) {
  return (
    <svg height={height} viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2"
        y="44"
        fontFamily="'DM Sans','Segoe UI',system-ui,sans-serif"
        fontWeight="900"
        fontSize="46"
        letterSpacing="-1.5"
        fill="white"
        fillOpacity="0.95"
      >
        blinkus
      </text>
      <circle cx="74" cy="9" r="5.5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
      <circle cx="74" cy="9" r="2.2" fill="rgba(255,255,255,0.7)" />
    </svg>
  )
}