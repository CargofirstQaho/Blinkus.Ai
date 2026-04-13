// import { configureStore } from "@reduxjs/toolkit"
// import authReducer from "../slices/authSlice"
// import chatReducer from "../slices/chatSlice"

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     chat: chatReducer
//   }
// })






import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import chatReducer from "../slices/chatSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["auth/login/fulfilled", "auth/register/fulfilled", "auth/google/fulfilled"],
      },
    }),
})