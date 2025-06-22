import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br  to-green-950 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl">
        {/* Header */}
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-300 text-center mb-6 drop-shadow-lg"
        >
          Nasim Quran Academy
        </motion.h1>

       <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10"
>
  <img
    src="/images/boy-quran-3d.png"
    alt="Quran Student 3D"
    className="w-48 md:w-52 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1"
  />
  <img
    src="/images/boy-quran-cartoon.png"
    alt="Quran Student Cartoon"
    className="w-40 md:w-44 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1"
  />
  <img
    src="/images/boy-quran-real.jpg"
    alt="Quran Reading"
    className="w-48 md:w-52 rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:rotate-1"
  />
</motion.div>


        {/* Course List */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-left text-white space-y-3 text-lg sm:text-xl px-4"
        >
          {[
            '📘 Noorani Qaaida',
            '📖 Nazra Quran',
            '🧠 Hifz-e-Surah',
            '📜 Hadees',
            '🤲 Dua wa Sunnat',
            '👤 Seerat',
            '📚 Masaail & Aquaeeda',
            '🗣 Arabic & Urdu',
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-green-700/30 px-5 py-2 rounded-lg hover:bg-green-600/40 transition duration-300 shadow-md"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
