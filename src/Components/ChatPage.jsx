import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchMe } from "../redux/slices/authSlice"
import Chat from "./chat/Chat"

export default function ChatPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, token } = useSelector((s) => s.auth)

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchMe())
    }
  }, [token])

  if (!user) return null

  return <Chat />
}