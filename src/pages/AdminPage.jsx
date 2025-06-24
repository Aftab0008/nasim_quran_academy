import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (!isAdmin) {
      navigate('/adminlogin'); // 👈 Redirect if not logged in
    } else {
      fetchClasses();
    }
  }, [navigate]);

  const fetchClasses = () => {
    fetch('http://localhost:5000/api/classes')
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading classes:', err);
        alert('Error loading class bookings');
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/'); // 👈 Redirect to home after logout
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this booking?');
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/classes/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setClasses((prev) => prev.filter((cls) => cls.id !== id));
        alert('✅ Booking deleted');
      } else {
        alert('❌ Failed to delete');
      }
    } catch (err) {
      console.error('Delete error:', err);
      alert('❌ Error deleting booking');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-black text-white">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">📋 Class Bookings</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          🚪 Logout
        </button>
      </div>

      {classes.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-md shadow-md"
            >
              <p><strong>👤 Name:</strong> {cls.name}</p>
              <p><strong>📘 Course:</strong> {cls.category}</p>
              <p><strong>📅 Date:</strong> {cls.date}</p>
              <p><strong>📞 Contact:</strong> {cls.contact}</p>
              <button
                onClick={() => handleDelete(cls.id)}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow-sm transition"
              >
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
