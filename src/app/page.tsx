"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Share2, Code } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO & Local Search",
      description: "Dominate Kathmandu's local search results and drive high-intent traffic to your business.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-primary" />,
      title: "Social Media Ads",
      description: "Data-driven campaigns across Facebook & Instagram tailored for maximum conversion.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Lightning-fast, high-converting websites optimized for performance and user experience.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center min-h-[90vh] px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide"
          >
            Digital Marketing Agency in Kathmandu
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)]"
          >
            We shape brands &<br className="hidden md:block" /> digital experiences
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Where Kathmandu&apos;s vibrant heritage meets global digital innovation.
            We build, scale, and optimize your digital presence for maximum impact.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Let&apos;s Make a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--surface)] text-[var(--foreground)] rounded-full font-medium border border-[var(--border)] hover:bg-[var(--border)] transition-colors flex items-center justify-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-[var(--surface)] border-y border-[var(--border)] px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 group"
              >
                <div className="bg-[var(--background)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-[var(--border)] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 z-0" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to scale your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-[var(--muted)] mb-10"
          >
            Let&apos;s discuss how we can help you achieve your digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-hover transition-colors shadow-xl shadow-primary/20"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
