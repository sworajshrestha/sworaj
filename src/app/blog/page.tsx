"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      category: "SEO",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      title: "Why Local SEO is Crucial for Kathmandu Businesses",
      excerpt: "Discover how optimizing for local search can drive foot traffic and high-intent leads to your storefront in Nepal's bustling capital.",
    },
    {
      id: 2,
      category: "Social Media",
      date: "Nov 04, 2023",
      readTime: "4 min read",
      title: "Mastering Facebook Ads for the Nepali Market",
      excerpt: "A comprehensive guide to targeting, budgeting, and creating winning ad creatives specifically tailored for Nepali audiences.",
    },
    {
      id: 3,
      category: "Web Development",
      date: "Nov 28, 2023",
      readTime: "7 min read",
      title: "The Importance of Mobile-First Design in 2024",
      excerpt: "With mobile internet usage dominating in Nepal, ensuring your website is optimized for smaller screens is no longer optional—it's mandatory.",
    },
    {
      id: 4,
      category: "Strategy",
      date: "Dec 15, 2023",
      readTime: "6 min read",
      title: "Building a Brand Identity that Resonates",
      excerpt: "How to blend modern design principles with local cultural elements to create a brand that truly connects with your target audience.",
    },
    {
      id: 5,
      category: "Content Marketing",
      date: "Jan 05, 2024",
      readTime: "5 min read",
      title: "Content is King: Strategies for Engagement",
      excerpt: "Stop yelling at your customers and start talking to them. Learn how to create value-driven content that builds trust and loyalty.",
    },
    {
      id: 6,
      category: "Analytics",
      date: "Jan 22, 2024",
      readTime: "8 min read",
      title: "Tracking ROI: Demystifying Digital Metrics",
      excerpt: "A beginner-friendly breakdown of which metrics actually matter and how to measure the true return on your digital marketing investment.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl">
            Latest thoughts, strategies, and digital marketing trends from the GrowMandu team.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="card-gradient rounded-2xl overflow-hidden border border-[var(--border)] group flex flex-col h-full hover:border-primary/40 transition-colors duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-[var(--surface)] border-b border-[var(--border)] relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:scale-105 transition-transform duration-500" />
                 <span className="text-[var(--muted)] opacity-50 font-medium tracking-widest uppercase text-sm">Image Placeholder</span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {article.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-[var(--muted)] text-sm mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-[var(--border)] mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${article.id}`}
                    className="text-primary hover:text-primary-hover transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white"
                    aria-label="Read Article"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
