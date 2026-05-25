"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, X, BookOpen, Wrench as Tool, Layers, MessageSquare, Sparkles } from "lucide-react";
import { tools } from "@/data/tools";

// Only import what exists and works
let stacks: any[] = [];
let prompts: any[] = [];
let guides: any[] = [];

try {
  const stacksModule = require("@/data/stacks");
  stacks = stacksModule.stacks || [];
} catch (e) {}

try {
  const promptsModule = require("@/data/prompts");
  prompts = promptsModule.prompts || [];
} catch (e) {}

try {
  const guidesModule = require("@/data/guides");
  guides = guidesModule.guides || [];
} catch (e) {}

interface SearchItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: "tool" | "stack" | "prompt" | "guide";
  category?: string;
  tags: string[];
  readTime?: string;
  author?: string;
  popularity?: number;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Build search index from existing data
  const searchIndex: SearchItem[] = [
    ...(tools || []).map((tool: any) => ({
      id: tool.id,
      slug: tool.slug,
      title: tool.title,
      description: tool.description,
      type: "tool" as const,
      category: tool.category,
      tags: tool.tags || [],
      readTime: tool.timeToBuild,
      popularity: tool.popularity
    })),
    ...(stacks || []).map((stack: any) => ({
      id: stack.id,
      slug: stack.slug,
      title: stack.title,
      description: stack.description,
      type: "stack" as const,
      category: stack.category,
      tags: stack.tags || [],
      readTime: stack.timeToBuild,
      popularity: stack.popularity
    })),
    ...(prompts || []).map((prompt: any) => ({
      id: prompt.id,
      slug: prompt.slug,
      title: prompt.title,
      description: prompt.description,
      type: "prompt" as const,
      category: prompt.category,
      tags: prompt.tags || [],
      popularity: prompt.popularity
    })),
    ...(guides || []).map((guide: any) => ({
      id: guide.id,
      slug: guide.slug,
      title: guide.title,
      description: guide.description,
      type: "guide" as const,
      category: guide.category,
      tags: guide.tags || [],
      readTime: guide.readTime,
      author: guide.author,
      popularity: 0
    }))
  ];

  useEffect(() => {
    try {
      const history = localStorage.getItem("searchHistory");
      if (history) setSearchHistory(JSON.parse(history).slice(0, 5));
    } catch (e) {}
  }, []);

  const saveToHistory = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    try {
      const newHistory = [searchQuery, ...searchHistory.filter(h => h !== searchQuery)].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    } catch (e) {}
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) onClose();
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
        }
        if (e.key === "Enter" && selectedIndex >= 0 && results[selectedIndex]) {
          e.preventDefault();
          window.location.href = `/${results[selectedIndex].type}s/${results[selectedIndex].slug}`;
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, results, selectedIndex]);

  const handleSearch = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    setSelectedIndex(-1);
    
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    
    let filtered = searchIndex
      .map(item => {
        let score = 0;
        if (item.title?.toLowerCase().includes(lowerQuery)) {
          score += 100;
          if (item.title.toLowerCase() === lowerQuery) score += 50;
        }
        if (item.description?.toLowerCase().includes(lowerQuery)) score += 30;
        const tagMatches = (item.tags || []).filter(tag => tag?.toLowerCase().includes(lowerQuery));
        score += tagMatches.length * 20;
        if (item.category?.toLowerCase().includes(lowerQuery)) score += 25;
        if (item.author?.toLowerCase().includes(lowerQuery)) score += 40;
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 15);

    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }

    setResults(filtered);
  }, [filterType, searchIndex]);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "tool": return <Tool className="w-4 h-4" />;
      case "stack": return <Layers className="w-4 h-4" />;
      case "prompt": return <MessageSquare className="w-4 h-4" />;
      case "guide": return <BookOpen className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case "tool": return "bg-purple-100 text-purple-700";
      case "stack": return "bg-blue-100 text-blue-700";
      case "prompt": return "bg-pink-100 text-pink-700";
      case "guide": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "tool": return "Tool";
      case "stack": return "Stack";
      case "prompt": return "Prompt";
      case "guide": return "Guide";
      default: return "Item";
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  if (!isOpen) return null;

  const resultCounts = {
    tool: results.filter(r => r.type === "tool").length,
    stack: results.filter(r => r.type === "stack").length,
    prompt: results.filter(r => r.type === "prompt").length,
    guide: results.filter(r => r.type === "guide").length,
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
      
      <div className="fixed top-[15%] left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50 animate-slide-down">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-purple-500" />
              <input
                autoFocus
                type="text"
                placeholder="Search tools, stacks, prompts, guides..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex-1 outline-none text-lg placeholder-gray-400"
              />
              <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="flex gap-2 mt-4">
              {["all", "tool", "stack", "prompt", "guide"].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as any)}
                  className={`px-3 py-1.5 rounded-full text-sm capitalize transition flex items-center gap-1.5 ${
                    filterType === type 
                      ? "bg-purple-600 text-white shadow-md" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {type === "all" ? `All (${searchIndex.length})` : `${getTypeLabel(type)}s (${searchIndex.filter(i => i.type === type).length})`}
                </button>
              ))}
            </div>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length < 2 ? (
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-500">Recent Searches</h3>
                  {searchHistory.length > 0 && (
                    <button onClick={clearHistory} className="text-xs text-gray-400 hover:text-red-500 transition">
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((term, idx) => (
                    <button key={idx} onClick={() => handleSearch(term)} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition flex items-center gap-1">
                      <Search className="w-3 h-3" />
                      {term}
                    </button>
                  ))}
                  {searchHistory.length === 0 && (
                    <p className="text-sm text-gray-400">No recent searches. Try searching for "RAG", "LangChain", or "Prompt Engineering"</p>
                  )}
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {["RAG", "LangChain", "Prompt Engineering", "Bubble", "Zapier", "OpenAI", "ChatGPT"].map((term) => (
                      <button key={term} onClick={() => handleSearch(term)} className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 rounded-full text-sm text-purple-700 transition">
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No results found for "{query}"</p>
                <p className="text-sm text-gray-400 mt-2">Try different keywords or browse categories</p>
                <div className="mt-6">
                  <Link href="/tools" onClick={onClose} className="text-sm text-purple-600 hover:underline">
                    Browse all tools →
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 text-xs text-gray-500 flex justify-between">
                  <span>Found {results.length} results</span>
                  <div className="flex gap-3">
                    {resultCounts.tool > 0 && <span>🔧 {resultCounts.tool} tools</span>}
                    {resultCounts.stack > 0 && <span>📚 {resultCounts.stack} stacks</span>}
                    {resultCounts.prompt > 0 && <span>💬 {resultCounts.prompt} prompts</span>}
                    {resultCounts.guide > 0 && <span>📖 {resultCounts.guide} guides</span>}
                  </div>
                </div>
                
                {results.map((result, idx) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={`/${result.type}s/${result.slug}`}
                    onClick={() => { saveToHistory(query); onClose(); }}
                  >
                    <div className={`p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition border-b border-gray-100 last:border-0 group cursor-pointer ${selectedIndex === idx ? "bg-gradient-to-r from-purple-50 to-blue-50" : ""}`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getTypeColor(result.type)}`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition">
                              {result.title}
                            </h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                              {getTypeLabel(result.type)}
                            </span>
                            {result.category && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                {result.category}
                              </span>
                            )}
                            {result.popularity && result.popularity > 90 && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                🔥 {result.popularity}%
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">{result.description}</p>
                          <div className="flex gap-3 mt-2 text-xs text-gray-400">
                            {result.readTime && <span>⏱ {result.readTime}</span>}
                            {result.author && <span>👤 {result.author}</span>}
                          </div>
                        </div>
                        <div className="text-purple-600 opacity-0 group-hover:opacity-100 transition">→</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="px-5 py-3 bg-gray-50 border-t text-xs text-gray-400 flex justify-between items-center">
            <div className="flex gap-4">
              <span>↑↓ Navigate</span>
              <span>⏎ Select</span>
              <span>⎋ Close</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span>Search across {searchIndex.length} resources</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </>
  );
}