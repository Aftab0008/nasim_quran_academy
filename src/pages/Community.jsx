import React, { useEffect, useState } from 'react';

export default function Community() {
  const fullText = "📿 Join Our Islamic Community";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = index < fullText.length
      ? setTimeout(() => {
          setText(text + fullText[index]);
          setIndex(index + 1);
        }, 100)
      : null;

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <div className="flex items-center justify-center mt-16 px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          {text}
          <span className="border-r-2 border-green-700 animate-pulse ml-1"></span>
        </h2>
        <p className="text-white text-lg mb-6 opacity-90">
          Stay connected with Quran & Deeniyat learners. Get updates, class links, and motivation.
        </p>
        <a
          href="https://chat.whatsapp.com/KMC1xSTjFchLw8EU3aReQ9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-600 via-emerald-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-green-400/60"
        >
          🟢 Join WhatsApp Group
        </a>
      </div>
    </div>
  );
}
