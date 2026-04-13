// import { createSlice } from "@reduxjs/toolkit"

// const chatSlice = createSlice({
//   name: "chat",
//   initialState: {
//     messages: [],
//     view: "home",
//   },
//   reducers: {
//     addMessage: (state, action) => {
//       state.messages.push(action.payload)
//     },
//     clearChat: (state) => {
//       state.messages = []
//       state.view = "home"
//     },
//     setView: (state, action) => {
//       state.view = action.payload
//     },
//   },
// })

// export const { addMessage, clearChat, setView } = chatSlice.actions
// export default chatSlice.reducer







import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    view: "home",
  },
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push({
        role: payload.role,
        content: payload.content,
        dataSource: payload.dataSource || null,
        metadata: payload.metadata || null,
        timestamp: new Date().toISOString(),
      })
    },
    clearChat: (state) => {
      state.messages = []
      state.view = "home"
    },
    setView: (state, { payload }) => {
      state.view = payload
    },
    removeLastMessage: (state) => {
      state.messages.pop()
    },
  },
})

export const { addMessage, clearChat, setView, removeLastMessage } = chatSlice.actions
export default chatSlice.reducer