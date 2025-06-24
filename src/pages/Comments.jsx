"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

export default function CommentBox() {
  const [comments, setComments] = useState([])
  const [form, setForm] = useState({ name: "", comment: "" })

  const API_BASE = import.meta.env.VITE_BACKEND_URL

  const loadComments = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/comments`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const contentType = res.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text()
        throw new Error(`Expected JSON, got: ${text}`)
      }

      const data = await res.json()
      setComments(data)
    } catch (err) {
      console.error("Failed to load comments", err)
      toast.error("Failed to load comments")
    }
  }

  useEffect(() => {
    loadComments()
    const interval = setInterval(() => {
      loadComments()
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loading = toast.loading("Submitting comment...")
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/comments`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
})

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      toast.success("✅ Comment added!", { id: loading })
      setForm({ name: "", comment: "" })
      loadComments()
    } catch (err) {
      console.error("Failed to submit comment", err)
      toast.error("❌ Failed to submit comment.", { id: loading })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto mt-12 bg-emerald-900/30 border border-emerald-400/30 backdrop-blur-md p-6 rounded-2xl shadow-xl"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-2xl font-bold text-emerald-100 mb-6 animate-pulse"
      >
        🌙 Share Your Thoughts
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />
        <textarea
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          placeholder="Your Comment"
          required
          className="w-full h-24 p-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-emerald-500 hover:to-green-400 transition duration-300"
        >
          📩 Post Comment
        </button>
      </form>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-emerald-100 mb-4 border-b border-emerald-400 pb-2">
          🌽 Community Comments
        </h3>
        {comments.length === 0 && <p className="text-white/60">No comments yet. Be the first!</p>}
        {comments.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 p-3 rounded-lg bg-white/10 border border-white/20"
          >
            <p className="text-white/90 mb-1">"{c.comment}"</p>
            <p className="text-xs text-white/60 text-right">– {c.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
