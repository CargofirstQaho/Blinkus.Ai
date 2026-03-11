// export const VIEW = { LOGIN: "login", SIGNUP: "signup", FORGOT: "forgot", VERIFY_EMAIL: "verify_email" }

// const errorMap = {
//   "auth/email-already-in-use": "An account with this email already exists.",
//   "auth/invalid-email": "Please enter a valid email address.",
//   "auth/weak-password": "Password must be at least 6 characters.",
//   "auth/user-not-found": "No account found with this email.",
//   "auth/wrong-password": "Incorrect password. Please try again.",
//   "auth/invalid-credential": "Incorrect email or password. Please try again.",
//   "auth/too-many-requests": "Too many attempts. Please wait a few minutes.",
//   "auth/popup-closed-by-user": "Sign-in popup was closed. Please try again.",
//   "auth/popup-blocked": "Popup was blocked. Please allow popups for this site.",
//   "auth/network-request-failed": "Network error. Please check your connection.",
//   "auth/user-disabled": "This account has been disabled.",
//   "auth/missing-email": "Please enter your email address.",
// }

// export const getError = (code) => errorMap[code] || "Something went wrong. Please try again."

// export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)







export const VIEW = {
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT: "forgot",
  VERIFY_EMAIL: "verify_email",
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function getError(code) {
  const map = {
    "auth/email-already-in-use": "An account with this email already exists. Try signing in.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Incorrect email or password. Please try again.",
    "auth/too-many-requests": "Too many attempts. Please wait a few minutes and try again.",
    "auth/network-request-failed": "Network error. Please check your connection.",
    "auth/popup-closed-by-user": "Sign-in popup was closed. Please try again.",
    "auth/popup-blocked": "Popup was blocked by your browser. Please allow popups for this site.",
    "auth/cancelled-popup-request": "",
    "auth/user-disabled": "This account has been disabled. Please contact support.",
    "auth/requires-recent-login": "Please sign out and sign in again to continue.",
  }
  return map[code] || "Something went wrong. Please try again."
}