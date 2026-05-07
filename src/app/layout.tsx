import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowMandu | Digital Marketing Agency in Kathmandu",
  description: "We shape brands & digital experiences. A premier digital marketing agency based in Kathmandu, Nepal blending local heritage with global digital innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Subtle Glowing Orbs Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="glow-orb bg-primary/20 w-[500px] h-[500px] top-[-10%] left-[-10%] animate-[float_10s_ease-in-out_infinite]" />
            <div className="glow-orb bg-blue-500/20 w-[400px] h-[400px] bottom-[10%] right-[-5%] animate-[float_12s_ease-in-out_infinite_reverse]" />
          </div>

          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
