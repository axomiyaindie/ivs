"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { 
  Clock, User, Calendar, Tag, ArrowLeft, Bookmark, Share2, 
  ChevronRight, Heart, Twitter, Linkedin, Link2
} from "lucide-react";
import { guides, getGuideBySlug, getAlternativeGuides } from "@/data/guides";

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Beginner": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-amber-100 text-amber-700",
    "Advanced": "bg-orange-100 text-orange-700",
    "Expert": "bg-rose-100 text-rose-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

// Your author information
const AUTHOR_NAME = "Rakibul";
const AUTHOR_TWITTER = "https://x.com/rakibulio";
const AUTHOR_BIO = "Building AI products and sharing knowledge. Follow for more tutorials and insights.";

interface Props {
  params: { slug: string };
}

export default function GuideDetailPage({ params }: Props) {
  const guide = guides.find(g => g.slug === params.slug);
  const alternatives = guide ? getAlternativeGuides(guide, 3) : [];
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  if (!guide) {
    notFound();
  }

  const handleSave = () => {
    const savedGuides = JSON.parse(localStorage.getItem("savedGuides") || "[]");
    if (!saved) {
      savedGuides.push({ id: guide.id, title: guide.title, slug: guide.slug });
      localStorage.setItem("savedGuides", JSON.stringify(savedGuides));
      setSaved(true);
    } else {
      const filtered = savedGuides.filter((g: any) => g.id !== guide.id);
      localStorage.setItem("savedGuides", JSON.stringify(filtered));
      setSaved(false);
    }
  };

  const handleShare = async (platform?: string) => {
    const url = window.location.href;
    const title = guide.title;
    
    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=rakibuilds`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(guide.category)}`}>
              {guide.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {guide.readTime} read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {guide.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> 
              <a 
                href={AUTHOR_TWITTER} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition flex items-center gap-1"
              >
                {AUTHOR_NAME}
                <Twitter className="w-3 h-3" />
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {guide.date}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-purple-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{guide.title}</span>
          </nav>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Action Bar - Views and Comments removed */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 sticky top-20 z-10 shadow-sm">
                <div className="flex items-center flex-wrap gap-3">
                  <button 
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      saved 
                        ? "bg-emerald-100 text-emerald-700 border border-emerald-300" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
                    {saved ? "Saved" : "Save"}
                  </button>
                  <button 
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      liked 
                        ? "bg-rose-100 text-rose-600" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
                    {liked ? "Liked" : "Like"}
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setShowShare(!showShare)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    {showShare && (
                      <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg p-2 z-20 flex gap-2">
                        <button onClick={() => handleShare("twitter")} className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Twitter className="w-4 h-4 text-black" />
                        </button>
                        <button onClick={() => handleShare("linkedin")} className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Linkedin className="w-4 h-4 text-blue-600" />
                        </button>
                        <button onClick={() => handleShare()} className="p-2 hover:bg-gray-100 rounded-lg transition">
                          <Link2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 shadow-sm">
                <div className="prose prose-lg prose-purple max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 pb-2 border-b border-gray-200">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{children}</h3>,
                      p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                      code: ({ children, className }) => {
                        const isInline = !className;
                        if (isInline) {
                          return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-purple-600">{children}</code>;
                        }
                        return (
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-4">
                            <code className="text-sm font-mono">{children}</code>
                          </pre>
                        );
                      },
                      ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                      li: ({ children }) => <li className="text-gray-700">{children}</li>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 text-gray-600 bg-purple-50 py-2 rounded-r-lg">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <a href={href} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {guide.content}
                  </ReactMarkdown>
                </div>

                {/* Tags Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Topics Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-700 transition cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {AUTHOR_NAME.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        <a 
                          href={AUTHOR_TWITTER} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-purple-600 transition flex items-center gap-1"
                        >
                          {AUTHOR_NAME}
                          <Twitter className="w-4 h-4" />
                        </a>
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {AUTHOR_BIO}
                      </p>
                      <div className="flex gap-3 mt-3">
                        <a 
                          href={AUTHOR_TWITTER} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-purple-600 hover:underline"
                        >
                          Follow on X (Twitter)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">About this Tutorial</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{guide.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{guide.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Author:</span>
                    <a 
                      href={AUTHOR_TWITTER} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-purple-600 hover:underline flex items-center gap-1"
                    >
                      {AUTHOR_NAME}
                      <Twitter className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Published:</span>
                    <span className="font-medium">{guide.date}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Completion</span>
                    <span className="font-medium">0%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: "0%" }} />
                  </div>
                </div>
              </div>

              {/* Related Tutorials */}
              {alternatives.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Tutorials</h3>
                  <div className="space-y-3">
                    {alternatives.map((alt) => (
                      <Link key={alt.id} href={`/guides/${alt.slug}`}>
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition group">
                          <div className={`w-10 h-10 bg-gradient-to-r ${alt.imageColor} rounded-lg flex items-center justify-center text-xl shrink-0`}>
                            {alt.iconEmoji}
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium text-sm group-hover:text-purple-600 transition line-clamp-2">
                              {alt.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-1.5 py-0.5 rounded-full ${getCategoryColor(alt.category)}`}>
                                {alt.category}
                              </span>
                              <span className="text-xs text-gray-500">{alt.readTime}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition shrink-0" />
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
    </div>
  );
}