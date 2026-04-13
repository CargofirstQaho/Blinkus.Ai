// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

// const getHeaders = () => ({
//   "Content-Type": "application/json",
//   ...(localStorage.getItem("blinkus_token") && {
//     Authorization: `Bearer ${localStorage.getItem("blinkus_token")}`,
//   }),
// })

// const handleResponse = async (res) => {
//   if (!res.ok) {
//     const err = await res.json().catch(() => ({}))
//     throw new Error(err.error || `Request failed with status ${res.status}`)
//   }
//   return res.json()
// }

// export const api = {
//   get: (path) =>
//     fetch(`${BASE_URL}${path}`, { method: "GET", headers: getHeaders() }).then(handleResponse),

//   post: (path, body) =>
//     fetch(`${BASE_URL}${path}`, {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify(body),
//     }).then(handleResponse),

//   patch: (path, body) =>
//     fetch(`${BASE_URL}${path}`, {
//       method: "PATCH",
//       headers: getHeaders(),
//       body: JSON.stringify(body),
//     }).then(handleResponse),

//   delete: (path) =>
//     fetch(`${BASE_URL}${path}`, { method: "DELETE", headers: getHeaders() }).then(handleResponse),
// }








const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const getHeaders = () => ({
  "Content-Type": "application/json",
  ...(localStorage.getItem("blinkus_token") && {
    Authorization: `Bearer ${localStorage.getItem("blinkus_token")}`,
  }),
})

const handleResponse = async (res) => {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    const error = new Error(body.error || `Request failed with status ${res.status}`)
    error.status = res.status
    error.data = body
    throw error
  }
  return res.json()
}

export const api = {
  get: (path) =>
    fetch(`${BASE_URL}${path}`, { method: "GET", headers: getHeaders() }).then(handleResponse),

  post: (path, body) =>
    fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    }).then(handleResponse),

  patch: (path, body) =>
    fetch(`${BASE_URL}${path}`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(body),
    }).then(handleResponse),

  delete: (path) =>
    fetch(`${BASE_URL}${path}`, { method: "DELETE", headers: getHeaders() }).then(handleResponse),
}