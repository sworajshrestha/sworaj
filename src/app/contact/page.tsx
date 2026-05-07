"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Ready to elevate your digital presence? Drop us a line and let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="card-gradient p-8 rounded-2xl border border-[var(--border)] h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-[var(--muted)] mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted)]">Email Us</p>
                    <a href="mailto:sworaj.ctha@gmail.com" className="font-medium hover:text-primary transition-colors">
                      sworaj.ctha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted)]">Call Us</p>
                    <a href="tel:+9779803420978" className="font-medium hover:text-primary transition-colors">
                      +977 9803420978
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--muted)]">Visit Us</p>
                    <span className="font-medium">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="card-gradient p-8 md:p-10 rounded-2xl border border-[var(--border)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <form
                action="https://formsubmit.co/sworaj.ctha@gmail.com"
                method="POST"
                onSubmit={() => setIsSubmitting(true)}
                className="space-y-6 relative z-10"
              >
                {/* Honeypot & Config */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New lead from GrowMandu Website!" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--muted)]">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[var(--foreground)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--muted)]">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[var(--foreground)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-[var(--muted)]">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-[var(--foreground)]"
                    placeholder="Your Business Ltd."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--muted)]">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-[var(--foreground)]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
