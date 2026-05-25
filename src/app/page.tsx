"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Sparkles, ArrowRight, Zap, Rocket, Star, Users, Send } from "lucide-react";
import { useState } from "react";
import GlobalSearch from "@/components/search/GlobalSearch";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  const handleExploreTools = () => {
    router.push("/tools");
  };

  const handleViewStacks = () => {
    router.push("/stacks");
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
  };

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IndieVibeStack",
    "url": "https://indievibestack.vercel.app",
    "description": "Discover 500+ curated AI tools, project stacks, prompts, and guides. Build real AI products without coding.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://indievibestack.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IndieVibeStack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indievibestack.vercel.app/images/logo.svg"
      }
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IndieVibeStack",
    "url": "https://indievibestack.vercel.app",
    "logo": "https://indievibestack.vercel.app/images/logo.svg",
    "sameAs": [
      "https://twitter.com/indievibestack",
      "https://github.com/rakibulio",
      "https://t.me/indievibestack",
      "https://youtube.com/@indievibestack"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://t.me/indievibestack"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            <div className="container mx-auto px-4 py-20 text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6 animate-float">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium gradient-text">No Code Needed — Pure Results</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Build Real <span className="gradient-text">AI Products</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Even if you can't code — turn ideas into{" "}
                <span className="font-semibold text-purple-600">scalable SaaS products</span>
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto mb-12">
                <button 
                  onClick={handleSearchClick}
                  className="w-full group"
                  onKeyDown={handleKeyDown}
                >
                  <div className="relative flex items-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-purple-300 cursor-pointer">
                    <Search className="absolute left-5 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition" />
                    <div className="w-full px-14 py-4 text-left text-gray-500 group-hover:text-gray-700 transition">
                      Search 500+ tools, stacks, prompts...
                    </div>
                    <kbd className="absolute right-5 hidden sm:inline-flex px-2 py-1 text-xs bg-gray-100 rounded border text-gray-500">
                      ⌘K
                    </kbd>
                  </div>
                </button>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs text-gray-400">Popular:</span>
                  {["Bubble", "Make.com", "Zapier", "LangFlow", "RAG"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchOpen(true)}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-purple-700 transition"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={handleExploreTools}
                  className="group px-6 py-3 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  Explore Tools
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={handleViewStacks}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition cursor-pointer"
                >
                  View Stacks
                </button>
                <Link href="/prompts" className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition">
                  Explore Prompts
                </Link>
                <Link href="/guides" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
                  Read Guides
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 mt-16">
                <Link href="/tools" className="text-center hover:opacity-80 transition group">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-500">Tools & Resources</div>
                </Link>
                
                <a 
                  href="https://t.me/indievibestack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center hover:opacity-80 transition group cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold gradient-text">
                    <Users className="w-5 h-5" />
                    <span>Active</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    Community
                    <Send className="w-3 h-3" />
                  </div>
                </a>
                
                <Link href="/stacks" className="text-center hover:opacity-80 transition">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-500">Project Stacks</div>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything You Need to <span className="gradient-text">Succeed</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Curated resources that top indie hackers use to build profitable SaaS products
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href="/tools" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Tools Directory</h3>
                  <p className="text-gray-600">Discover 500+ curated AI tools for every use case</p>
                </Link>
                
                <Link href="/stacks" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Stacks</h3>
                  <p className="text-gray-600">Step-by-step tutorials to build real products</p>
                </Link>
                
                <Link href="/prompts" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Prompts</h3>
                  <p className="text-gray-600">1000+ prompts to supercharge your AI workflow</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        {/* Global Search Modal */}
        <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </>
  );
}