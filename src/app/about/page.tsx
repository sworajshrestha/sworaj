"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    "Data-driven strategies tailored for Nepal's market",
    "Global standard design & development",
    "Transparent reporting & analytics",
    "Dedicated local support team",
  ];

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
        </motion.div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[var(--muted)] text-lg leading-relaxed"
          >
            <p>
              <strong className="text-[var(--foreground)]">We&apos;re a full-service digital marketing agency</strong> based in the vibrant heart of Kathmandu. Born from a passion for bridging local businesses with global digital standards, GrowMandu has evolved into a powerhouse of creativity and technical excellence.
            </p>
            <p>
              Our data-driven approach combines international best practices with a deep understanding of the local Nepali market. We don&apos;t just build websites or run ads; we engineer comprehensive digital ecosystems designed to convert visibility into tangible growth.
            </p>
            <p>
              Whether you are a startup looking to make your mark or an established enterprise aiming to scale, our team of dedicated strategists, designers, and developers are here to turn your vision into reality.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-[var(--foreground)]">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Graphic/Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-3 scale-105" />

            <div className="relative card-gradient p-10 md:p-14 rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-tr-full pointer-events-none" />

              <Image
                src="/growmandulogo.png"
                alt="GrowMandu Emblem"
                width={120}
                height={120}
                className="mb-8 opacity-90 drop-shadow-lg filter dark:invert-0 invert"
              />

              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)]">
                Proudly serving businesses across Kathmandu & Nepal
              </h3>

              <p className="text-[var(--muted)] max-w-sm mt-2">
                Empowering the local economy through cutting-edge digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
