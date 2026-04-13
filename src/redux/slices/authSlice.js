// import { createSlice } from "@reduxjs/toolkit"

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     loading: true,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload
//       state.loading = false
//     },
//     clearUser: (state) => {
//       state.user = null
//       state.loading = false
//     },
//     setAuthLoading: (state, action) => {
//       state.loading = action.payload
//     },
//   },
// })

// export const { setUser, clearUser, setAuthLoading } = authSlice.actions
// export default authSlice.reducer










import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../utils/api"

const loadStored = (key, parse = false) => {
  try {
    const v = localStorage.getItem(key)
    return parse ? (v ? JSON.parse(v) : null) : v
  } catch {
    return null
  }
}

const persist = (token, refreshToken, user) => {
  localStorage.setItem("blinkus_token", token)
  localStorage.setItem("blinkus_refresh", refreshToken)
  localStorage.setItem("blinkus_user", JSON.stringify(user))
}

const clear = () => {
  localStorage.removeItem("blinkus_token")
  localStorage.removeItem("blinkus_refresh")
  localStorage.removeItem("blinkus_user")
}

export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const data = await api.post("/auth/login", credentials)
    persist(data.token, data.refreshToken, data.user)
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const registerUser = createAsyncThunk("auth/register", async (payload, { rejectWithValue }) => {
  try {
    const data = await api.post("/auth/register", payload)
    persist(data.token, data.refreshToken, data.user)
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const googleLogin = createAsyncThunk("auth/google", async (credential, { rejectWithValue }) => {
  try {
    const data = await api.post("/auth/google", { credential })
    persist(data.token, data.refreshToken, data.user)
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const fetchMe = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    return await api.get("/auth/me")
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: loadStored("blinkus_user", true),
    token: loadStored("blinkus_token"),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.error = null
      state.loading = false
      clear()
    },
    clearError: (state) => {
      state.error = null
    },
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  },
  extraReducers: (builder) => {
    const pending = (state) => { state.loading = true; state.error = null }
    const fulfilled = (state, { payload }) => {
      state.loading = false
      state.user = payload.user
      state.token = payload.token
    }
    const rejected = (state, { payload }) => {
      state.loading = false
      state.error = payload
    }

    builder
      .addCase(loginUser.pending, pending)
      .addCase(loginUser.fulfilled, fulfilled)
      .addCase(loginUser.rejected, rejected)
      .addCase(registerUser.pending, pending)
      .addCase(registerUser.fulfilled, fulfilled)
      .addCase(registerUser.rejected, rejected)
      .addCase(googleLogin.pending, pending)
      .addCase(googleLogin.fulfilled, fulfilled)
      .addCase(googleLogin.rejected, rejected)
      .addCase(fetchMe.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
  },
})

export const { logout, clearError, setUser } = authSlice.actions
export default authSlice.reducer