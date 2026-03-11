import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    view: "home",
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    clearChat: (state) => {
      state.messages = []
      state.view = "home"
    },
    setView: (state, action) => {
      state.view = action.payload
    },
  },
})

export const { addMessage, clearChat, setView } = chatSlice.actions
export default chatSlice.reducer