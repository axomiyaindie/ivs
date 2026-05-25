"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Copy, Bookmark, Share2, TrendingUp, ArrowRight, Sparkles, Zap, Award, Check } from "lucide-react";
import { prompts } from "@/data/prompts";

// Helper function for category colors
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Writing": "bg-purple-100 text-purple-700",
    "Development": "bg-blue-100 text-blue-700",
    "Marketing": "bg-pink-100 text-pink-700",
    "Design": "bg-green-100 text-green-700",
    "Business": "bg-orange-100 text-orange-700",
    "Productivity": "bg-cyan-100 text-cyan-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

// Helper function to get alternative prompts
function getAlternativePrompts(currentPrompt: any, limit: number = 3) {
  return prompts
    .filter(p => p.id !== currentPrompt.id && p.category === currentPrompt.category)
    .slice(0, limit);
}

interface Props {
  params: { slug: string };
}

export default function PromptDetailPage({ params }: Props) {
  const prompt = prompts.find(p => p.slug === params.slug);
  const alternatives = prompt ? getAlternativePrompts(prompt, 3) : [];
  
  // State for interactive features
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!prompt) {
    notFound();
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    const savedPrompts = JSON.parse(localStorage.getItem("savedPrompts") || "[]");
    
    if (!saved) {
      savedPrompts.push({ id: prompt.id, title: prompt.title, slug: prompt.slug });
      localStorage.setItem("savedPrompts", JSON.stringify(savedPrompts));
      setSaved(true);
    } else {
      const filtered = savedPrompts.filter((p: any) => p.id !== prompt.id);
      localStorage.setItem("savedPrompts", JSON.stringify(filtered));
      setSaved(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: prompt.title,
        text: prompt.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/prompts" className="text-gray-500 hover:text-purple-600">Prompts</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{prompt.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(prompt.category)}`}>
                      {prompt.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-semibold text-gray-700">{prompt.popularity}% popular</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">{prompt.title}</h1>
                  <p className="text-gray-600">{prompt.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Prompt"}
                </button>
                <button 
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    saved 
                      ? "bg-green-100 text-green-700 border border-green-300" 
                      : "border hover:bg-gray-50"
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  {saved ? "Saved" : "Save"}
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition ml-auto"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Prompt Template */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Prompt Template
              </h2>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                {prompt.promptText}
              </pre>
            </div>

            {/* Example Usage */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Example Usage
              </h2>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-800 font-mono text-sm">
                  <span className="text-purple-600 font-bold">Example:</span> {prompt.example}
                </p>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-amber-50 rounded-2xl p-8 border-l-4 border-amber-500">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Pro Tips
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Customize the [BRACKETED] sections with your specific details</li>
                <li>✓ Adjust the tone and length based on your audience</li>
                <li>✓ Save successful variations as templates</li>
                <li>✓ Test with different AI models for best results</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium">{prompt.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Usage Count:</span>
                  <span className="font-medium">{prompt.usageCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Popularity:</span>
                  <span className="font-medium">{prompt.popularity}%</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Similar Prompts */}
            {alternatives.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Similar Prompts</h3>
                <div className="space-y-3">
                  {alternatives.map((alt) => (
                    <Link key={alt.id} href={`/prompts/${alt.slug}`}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group">
                        <div className="flex-grow">
                          <p className="font-medium text-sm group-hover:text-purple-600 transition">
                            {alt.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">{alt.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}