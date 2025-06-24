import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BookClass from './pages/BookClass';
import Community from './pages/Community';
import Comments from './pages/Comments';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/Adminlogin';
// import ProtectedRoute from './components/ProtectedRoute'; // Uncomment if using protection

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 text-white font-sans selection:bg-green-500/30">
        <Toaster position="top-right" />

        <nav className="bg-white/10 backdrop-blur-xl shadow-md px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-green-200/20">
          <h1 className="text-2xl font-extrabold text-green-200 tracking-wide">📖 Nasim Quran Academy</h1>
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/book">Book Class</Link>
            <Link to="/community">Community</Link>
            <Link to="/comments">Comments</Link>
            <Link to="/admin-login">🔐 Admin</Link>
          </div>
        </nav>

        <main className="px-4 sm:px-6 md:px-12 py-8 animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookClass />} />
            <Route path="/community" element={<Community />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Optional: Protect AdminPage */}
            <Route path="/admin" element={<AdminPage />} />
            {/* If you want to protect it:
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } />
            */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
