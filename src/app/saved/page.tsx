"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Bookmark, BookOpen, Wrench as Tool, Layers, MessageSquare, 
  Trash2, ExternalLink, Clock, Calendar, Search, 
  Filter, Grid3X3, List, X, ChevronRight, Heart
} from "lucide-react";
import { tools } from "@/data/tools";
import { stacks } from "@/data/stacks";
import { prompts } from "@/data/prompts";
import { guides } from "@/data/guides";

interface SavedItem {
  id: string;
  title: string;
  type: "tool" | "stack" | "prompt" | "guide";
  slug: string;
  savedAt: string;
  category?: string;
  readTime?: string;
  author?: string;
}

type FilterType = "all" | "tool" | "stack" | "prompt" | "guide";
type ViewMode = "grid" | "list";

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  useEffect(() => {
    const loadSavedItems = () => {
      const allSaved: SavedItem[] = [];
      
      const savedTools = JSON.parse(localStorage.getItem("savedItems") || "[]");
      allSaved.push(...savedTools.map((item: any) => ({ ...item, type: "tool" as const, savedAt: new Date().toISOString() })));
      
      const savedStacks = JSON.parse(localStorage.getItem("savedStacks") || "[]");
      allSaved.push(...savedStacks.map((item: any) => ({ ...item, type: "stack" as const, savedAt: new Date().toISOString() })));
      
      const savedPrompts = JSON.parse(localStorage.getItem("savedPrompts") || "[]");
      allSaved.push(...savedPrompts.map((item: any) => ({ ...item, type: "prompt" as const, savedAt: new Date().toISOString() })));
      
      const savedGuides = JSON.parse(localStorage.getItem("savedGuides") || "[]");
      allSaved.push(...savedGuides.map((item: any) => ({ ...item, type: "guide" as const, savedAt: new Date().toISOString() })));
      
      const enrichedItems = allSaved.map(item => {
        if (item.type === "tool") {
          const tool = tools.find(t => t.slug === item.slug);
          return { ...item, category: tool?.category, readTime: tool?.timeToBuild };
        }
        if (item.type === "stack") {
          const stack = stacks.find(s => s.slug === item.slug);
          return { ...item, category: stack?.category, readTime: stack?.timeToBuild };
        }
        if (item.type === "prompt") {
          const prompt = prompts.find(p => p.slug === item.slug);
          return { ...item, category: prompt?.category };
        }
        if (item.type === "guide") {
          const guide = guides.find(g => g.slug === item.slug);
          return { ...item, category: guide?.category, readTime: guide?.readTime, author: guide?.author };
        }
        return item;
      });
      
      setSavedItems(enrichedItems);
    };
    
    loadSavedItems();
  }, []);

  const handleRemoveItem = (id: string, type: string) => {
    const storageKey = `saved${type.charAt(0).toUpperCase() + type.slice(1)}s`;
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const filtered = saved.filter((item: any) => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(filtered));
    setSavedItems(prev => prev.filter(item => !(item.id === id && item.type === type)));
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all saved items?")) {
      localStorage.removeItem("savedItems");
      localStorage.removeItem("savedStacks");
      localStorage.removeItem("savedPrompts");
      localStorage.removeItem("savedGuides");
      setSavedItems([]);
      setSelectedItems([]);
      setIsSelectionMode(false);
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = () => {
    if (confirm(`Delete ${selectedItems.length} saved items?`)) {
      const remainingTools = JSON.parse(localStorage.getItem("savedItems") || "[]")
        .filter((item: any) => !selectedItems.includes(item.id));
      localStorage.setItem("savedItems", JSON.stringify(remainingTools));
      
      const remainingStacks = JSON.parse(localStorage.getItem("savedStacks") || "[]")
        .filter((item: any) => !selectedItems.includes(item.id));
      localStorage.setItem("savedStacks", JSON.stringify(remainingStacks));
      
      const remainingPrompts = JSON.parse(localStorage.getItem("savedPrompts") || "[]")
        .filter((item: any) => !selectedItems.includes(item.id));
      localStorage.setItem("savedPrompts", JSON.stringify(remainingPrompts));
      
      const remainingGuides = JSON.parse(localStorage.getItem("savedGuides") || "[]")
        .filter((item: any) => !selectedItems.includes(item.id));
      localStorage.setItem("savedGuides", JSON.stringify(remainingGuides));
      
      setSavedItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
      setIsSelectionMode(false);
    }
  };

  const filteredItems = savedItems
    .filter(item => filterType === "all" || item.type === filterType)
    .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const stats = {
    total: savedItems.length,
    tools: savedItems.filter(i => i.type === "tool").length,
    stacks: savedItems.filter(i => i.type === "stack").length,
    prompts: savedItems.filter(i => i.type === "prompt").length,
    guides: savedItems.filter(i => i.type === "guide").length,
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "tool": return <Tool className="w-4 h-4" />;
      case "stack": return <Layers className="w-4 h-4" />;
      case "prompt": return <MessageSquare className="w-4 h-4" />;
      case "guide": return <BookOpen className="w-4 h-4" />;
      default: return <Bookmark className="w-4 h-4" />;
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

  if (savedItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your library is empty</h1>
            <p className="text-gray-500 mb-6">Save tools, stacks, prompts, and guides you want to revisit later.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/tools" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Browse Tools</Link>
              <Link href="/stacks" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">Browse Stacks</Link>
              <Link href="/prompts" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">Browse Prompts</Link>
              <Link href="/guides" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">Browse Guides</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">My Library</h1>
              <p className="text-gray-500 mt-1">{stats.total} saved {stats.total === 1 ? "item" : "items"}</p>
            </div>
            <div className="flex gap-3">
              {isSelectionMode ? (
                <>
                  <button onClick={() => setIsSelectionMode(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">Cancel</button>
                  {selectedItems.length > 0 && (
                    <button onClick={handleBulkDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Delete ({selectedItems.length})</button>
                  )}
                </>
              ) : (
                <>
                  <button onClick={() => setIsSelectionMode(true)} className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">Select</button>
                  <button onClick={handleClearAll} className="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition">Clear All</button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <button onClick={() => setFilterType("all")} className={`p-4 rounded-xl border transition ${filterType === "all" ? "bg-purple-50 border-purple-300" : "bg-white border-gray-200 hover:shadow"}`}>
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-sm text-gray-500">All Items</div>
          </button>
          <button onClick={() => setFilterType("tool")} className={`p-4 rounded-xl border transition ${filterType === "tool" ? "bg-purple-50 border-purple-300" : "bg-white border-gray-200 hover:shadow"}`}>
            <div className="text-2xl font-bold">{stats.tools}</div>
            <div className="text-sm text-gray-500">Tools</div>
          </button>
          <button onClick={() => setFilterType("stack")} className={`p-4 rounded-xl border transition ${filterType === "stack" ? "bg-purple-50 border-purple-300" : "bg-white border-gray-200 hover:shadow"}`}>
            <div className="text-2xl font-bold">{stats.stacks}</div>
            <div className="text-sm text-gray-500">Stacks</div>
          </button>
          <button onClick={() => setFilterType("prompt")} className={`p-4 rounded-xl border transition ${filterType === "prompt" ? "bg-purple-50 border-purple-300" : "bg-white border-gray-200 hover:shadow"}`}>
            <div className="text-2xl font-bold">{stats.prompts}</div>
            <div className="text-sm text-gray-500">Prompts</div>
          </button>
          <button onClick={() => setFilterType("guide")} className={`p-4 rounded-xl border transition ${filterType === "guide" ? "bg-purple-50 border-purple-300" : "bg-white border-gray-200 hover:shadow"}`}>
            <div className="text-2xl font-bold">{stats.guides}</div>
            <div className="text-sm text-gray-500">Guides</div>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search saved items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500" />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-purple-100 text-purple-600" : "hover:bg-gray-100"}`}>
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-purple-100 text-purple-600" : "hover:bg-gray-100"}`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12"><p className="text-gray-500">No saved items found</p></div>
        ) : viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={`${item.type}-${item.id}`} className="group bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 relative">
                {isSelectionMode && (
                  <div className="absolute top-3 left-3 z-10">
                    <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => handleSelectItem(item.id)} className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  </div>
                )}
                <Link href={`/${item.type}s/${item.slug}`} className="block">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>{getTypeIcon(item.type)}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>{getTypeLabel(item.type)}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition line-clamp-1">{item.title}</h3>
                    {item.category && <p className="text-xs text-gray-500 mb-2">{item.category}</p>}
                    {item.readTime && (
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-3">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                        {item.author && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.author.split(' ')[0]}</span>}
                      </div>
                    )}
                    <button onClick={(e) => { e.preventDefault(); handleRemoveItem(item.id, item.type); }} className="mt-3 text-xs text-red-500 hover:text-red-600 transition flex items-center gap-1">
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div key={`${item.type}-${item.id}`} className="group bg-white rounded-xl border border-gray-200 hover:shadow-md transition relative">
                {isSelectionMode && (
                  <div className="absolute top-3 left-3 z-10">
                    <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => handleSelectItem(item.id)} className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  </div>
                )}
                <Link href={`/${item.type}s/${item.slug}`} className="block">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>{getTypeIcon(item.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-purple-600 transition">{item.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                          <span className={`px-1.5 py-0.5 rounded-full ${getTypeColor(item.type)}`}>{getTypeLabel(item.type)}</span>
                          {item.category && <span>{item.category}</span>}
                          {item.readTime && <span>{item.readTime}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.preventDefault(); handleRemoveItem(item.id, item.type); }} className="p-2 text-gray-400 hover:text-red-500 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}