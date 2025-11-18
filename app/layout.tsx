import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Patent Writer",
  description: "Professional-grade AI assistant for patent research and drafting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between pb-6">
            <h1 className="text-xl font-semibold">AI Patent Writer</h1>
            <a href="https://agentic-aa61ceb3.vercel.app" className="text-sm text-blue-300 hover:text-blue-200">
              Production URL
            </a>
          </header>
          {children}
          <footer className="pt-10 text-xs text-white/60">? {new Date().getFullYear()} AI Patent Writer</footer>
        </div>
      </body>
    </html>
  );
}
