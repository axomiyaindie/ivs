"use client";
import { Inter } from "next/font/google";
import "./global.css";
import Link from "next/link";
import { Github, Twitter, Youtube, Send, Bookmark, Search, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import GlobalSearch from "@/components/search/GlobalSearch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="A8wskx8nC830MPRqphjcUgeBznTKVkFUWtD_EwGqEo8" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* GLOBAL HEADER - Futurepedia Style */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <nav className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
                  {!logoError ? (
                    <img 
                      src="/images/logo.svg" 
                      alt="IndieVibeStack" 
                      className="h-8 w-auto"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span className="text-xl font-bold gradient-text">IndieVibeStack</span>
                    </div>
                  )}
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  <Link href="/tools" className="text-gray-600 hover:text-purple-600 transition font-medium">Tools</Link>
                  <Link href="/stacks" className="text-gray-600 hover:text-purple-600 transition font-medium">Stacks</Link>
                  <Link href="/prompts" className="text-gray-600 hover:text-purple-600 transition font-medium">Prompts</Link>
                  <Link href="/guides" className="text-gray-600 hover:text-purple-600 transition font-medium">Guides</Link>
                  <Link href="/saved" className="text-gray-600 hover:text-purple-600 transition font-medium">Saved</Link>
                </div>
                
                {/* Search Box + CTA */}
                <div className="flex items-center gap-3">
                  {/* Search Box */}
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition border border-gray-200"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Search tools, stacks, prompts...</span>
                    <kbd className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded border">⌘K</kbd>
                  </button>
                  
                  {/* Get Started Button */}
                  <Link href="/tools" className="hidden md:inline-flex px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition shadow-sm hover:shadow">
                    Get Started
                  </Link>
                  
                  {/* Mobile Menu Button */}
                  <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t">
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => { setSearchOpen(true); setMobileMenuOpen(false); }} 
                      className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg"
                    >
                      <Search className="w-4 h-4" /> Search
                    </button>
                    <Link href="/tools" className="text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
                    <Link href="/stacks" className="text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Stacks</Link>
                    <Link href="/prompts" className="text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Prompts</Link>
                    <Link href="/guides" className="text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Guides</Link>
                    <Link href="/saved" className="text-gray-700 hover:text-purple-600 transition py-2 px-3 hover:bg-purple-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Saved</Link>
                    <div className="pt-2">
                      <Link href="/tools" className="block text-center px-4 py-2 gradient-bg text-white rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-grow">{children}</main>

          {/* GLOBAL FOOTER */}
          <footer className="bg-white border-t mt-auto">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Column */}
                <div>
                  {!logoError ? (
                    <img 
                      src="/images/logo.svg" 
                      alt="IndieVibeStack" 
                      className="h-8 w-auto mb-4"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <div className="flex items-center gap-1 mb-4">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span className="text-lg font-bold gradient-text">IndieVibeStack</span>
                    </div>
                  )}
                  <p className="text-gray-600 text-sm">Build real AI products without code. Curated tools, stacks, and prompts for indie hackers.</p>
                </div>
                
                {/* Explore Column */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
                  <ul className="space-y-2">
                    <li><Link href="/tools" className="text-gray-600 hover:text-purple-600 transition text-sm">Tools</Link></li>
                    <li><Link href="/stacks" className="text-gray-600 hover:text-purple-600 transition text-sm">Stacks</Link></li>
                    <li><Link href="/prompts" className="text-gray-600 hover:text-purple-600 transition text-sm">Prompts</Link></li>
                    <li><Link href="/guides" className="text-gray-600 hover:text-purple-600 transition text-sm">Guides</Link></li>
                  </ul>
                </div>
                
                {/* Resources Column */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/saved" className="text-gray-600 hover:text-purple-600 transition text-sm">Saved Items</Link></li>
                    <li><a href="/sitemap.xml" className="text-gray-600 hover:text-purple-600 transition text-sm">Sitemap</a></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-purple-600 transition text-sm">About Us</Link></li>
                  </ul>
                </div>
                
                {/* Legal & Social Column */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition text-sm">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-600 hover:text-purple-600 transition text-sm">Terms of Service</Link></li>
                  </ul>
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href="https://t.me/indievibestack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group">
                        <Send className="w-4 h-4 text-gray-600 group-hover:text-white transition" />
                      </a>
                      <a href="https://github.com/rakibulio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group">
                        <Github className="w-4 h-4 text-gray-600 group-hover:text-white transition" />
                      </a>
                      <a href="https://youtube.com/@indievibestack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group">
                        <Youtube className="w-4 h-4 text-gray-600 group-hover:text-white transition" />
                      </a>
                      <a href="https://twitter.com/rakibulio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all group">
                        <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white transition" />
                      </a>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Follow us for updates, tips, and new resources</p>
                  </div>
                </div>
              </div>
              
              {/* Copyright Section with Blue Hyperlink */}
              <div className="border-t mt-8 pt-6 text-center">
                <p className="text-sm text-gray-500">© {currentYear} IndieVibeStack. All rights reserved.</p>
                <p className="text-xs text-gray-400 mt-1">Build real AI products — even if you can't code</p>
                <p className="text-xs text-gray-400 mt-2">
                  Built with 🤖 AI assistance • 
                  <a 
                    href="https://github.com/rakibulio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-600 hover:underline transition ml-1"
                  >
                    Rakibul
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
        
        {/* Global Search Modal */}
        <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </body>
    </html>
  );
}