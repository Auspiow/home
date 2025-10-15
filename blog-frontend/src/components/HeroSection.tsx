"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[900px] flex items-center justify-center bg-cover bg-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero-background.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]"
        >
          We live in a twilight world
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-2xl mb-10 text-gray-300"
        >
          我们生活在一个虚幻的世界
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-transparent border border-gray-300 hover:bg-white/10 rounded-lg text-lg font-semibold transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
