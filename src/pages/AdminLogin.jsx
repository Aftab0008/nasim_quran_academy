import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === 'admin' && form.password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin'); // ✅ Redirect to admin page
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-green-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white w-full max-w-sm shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">🔐 Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 p-3 rounded-lg font-semibold transition"
        >
          🔓 Login
        </button>
      </form>
    </div>
  );
}
