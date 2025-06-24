import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function BookClass() {
  const [form, setForm] = useState({ name: '', category: '', date: '', contact: '' });
  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loading = toast.loading("Submitting...");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/classes`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
})

      if (!res.ok) throw new Error("Server error");

      toast.success("✅ Class booked!", { id: loading });
      setForm({ name: '', category: '', date: '', contact: '' });
    } catch (err) {
      console.error("Booking error:", err);
      toast.error("❌ Failed to book.", { id: loading });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-700 animate-pulse drop-shadow-lg">
          📖 Book Your Quran Class
        </h2>
        <p className="text-lg text-emerald-600 mt-2 animate-fade-in">
          Learn the Book of Allah with us
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-white/20 animate-fade-in-up transition-all duration-500 text-white hover:border-emerald-400 hover:shadow-[0_0_20px_#34d399]/50"
      >
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Your Full Name"
          required
          className="input-style"
        />

        <div className="relative group">
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            required
            className="input-style appearance-none cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 text-white pr-10"
          >
            <option value="">📂 None</option>
            <option>📘 Noorani Qaaida</option>
            <option>📖 Nazra Quran</option>
            <option>🧠 Hifz-e-Surah</option>
            <option>📜 Hadees</option>
            <option>🤲 Dua wa Sunnat</option>
            <option>👤 Seerat</option>
            <option>📚 Masaail & Aquaeeda</option>
            <option>🗣 Arabic & Urdu</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white group-hover:text-emerald-300">
            ▼
          </div>
        </div>

        <input
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          required
          className="input-style"
        />
        <input
          value={form.contact}
          onChange={e => setForm({ ...form, contact: e.target.value })}
          placeholder="Contact Number"
          required
          className="input-style"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-transform transform hover:scale-105 shadow-md"
        >
          📅 Book Class
        </button>
      </form>
    </section>
  );
}
