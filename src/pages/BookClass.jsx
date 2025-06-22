import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function BookClass() {
  const [form, setForm] = useState({ name: '', category: '', date: '', contact: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loading = toast.loading("Submitting...");
    try {
      await fetch('http://localhost:5000/api/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      toast.success("✅ Class booked!", { id: loading });
      setForm({ name: '', category: '', date: '', contact: '' });
    } catch (err) {
      toast.error("❌ Failed to book.", { id: loading });
    }
  };

  return (
    <section className="min-h-screenbg-gradient-to-br  to-green-950 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-700 animate-pulse drop-shadow-lg">
          📖 Book Your Quran Class
        </h2>
        <p className="text-lg text-emerald-600 mt-2 animate-fade-in">Learn the Book of Allah with us</p>
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
        <input
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
          placeholder="Course Category (e.g., Hifz, Qaida)"
          required
          className="input-style"
        />
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
