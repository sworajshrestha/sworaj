"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, Laptop, TrendingUp, Lightbulb } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "SEO & Local Search Optimization",
      description: "Rank higher on Google and dominate local searches in Kathmandu. We optimize your website's architecture, content, and backlinks to ensure customers find you when they need you most.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-primary" />,
      title: "Facebook & Instagram Ads",
      description: "Highly targeted, data-driven social media campaigns. We craft compelling ad creatives and utilize advanced audience targeting to maximize your ROI and generate high-quality leads.",
    },
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: "Custom Web Design & Development",
      description: "Stunning, fast, and responsive websites built with modern technologies like Next.js and React. We focus on user experience and conversion rate optimization to turn visitors into clients.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Page Boosting & Management",
      description: "Organic growth and community management for your social profiles. We create engaging content calendars to build brand loyalty and increase your follower engagement organically.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "Digital Strategy & Consulting",
      description: "Not sure where to start? We provide comprehensive digital audits and customized roadmaps to align your marketing efforts with your core business objectives.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable growth in the competitive digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-gradient p-8 md:p-10 rounded-2xl group border border-[var(--border)] hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="bg-[var(--background)] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[var(--border)] group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
