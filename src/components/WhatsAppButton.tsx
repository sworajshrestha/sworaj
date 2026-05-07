"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-lg shadow-xl font-medium text-sm whitespace-nowrap border border-zinc-200 dark:border-zinc-700 hidden md:block"
          >
            Chat with us!
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/9779803420978"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
