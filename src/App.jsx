import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BookClass from './pages/BookClass';
import Community from './pages/Community';
import Comments from './pages/Comments';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 text-white font-sans selection:bg-green-500/30">
        <Toaster position="top-right" />

        {/* Navbar */}
        <nav className="bg-white/10 backdrop-blur-xl shadow-md px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 border-b border-green-200/20">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-200 animate-pulse tracking-wide text-center sm:text-left">
            📖 Nasim Quran Academy
          </h1>

          <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 text-sm sm:text-base font-medium text-green-100">
            <Link
              to="/"
              className="px-3 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:text-green-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/book"
              className="px-3 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:text-green-300 transition duration-300"
            >
              Book Class
            </Link>
            <Link
              to="/community"
              className="px-3 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:text-green-300 transition duration-300"
            >
              Community
            </Link>
            <Link
              to="/comments"
              className="px-3 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:text-green-300 transition duration-300"
            >
              Comments
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="px-4 sm:px-6 md:px-12 py-8 animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookClass />} />
            <Route path="/community" element={<Community />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
