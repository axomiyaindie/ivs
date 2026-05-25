import Link from "next/link";
import { BookOpen, Clock, User, Calendar, Tag, ArrowRight, Eye, Heart, MessageCircle, TrendingUp, Send } from "lucide-react";
import { guides, getCategories, getGuidesByCategory } from "@/data/guides";

// Your author name - Override the data from guides.ts
const AUTHOR_NAME = "Rakibul";

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Beginner": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-amber-100 text-amber-700",
    "Advanced": "bg-orange-100 text-orange-700",
    "Expert": "bg-rose-100 text-rose-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

function getCategoryBadge(category: string): string {
  const badges: Record<string, string> = {
    "Beginner": "🌱 Beginner Friendly",
    "Intermediate": "📈 Intermediate",
    "Advanced": "🚀 Advanced",
    "Expert": "🏆 Expert Level",
  };
  return badges[category] || category;
}

export default function GuidesPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Tutorials & Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Master AI Development
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              In-depth tutorials, best practices, and advanced techniques from industry experts.
              Learn by building real-world applications.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>15+ In-depth Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>150+ Minutes of Reading</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Guide - Hero Card */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(guides[0].category)}`}>
                    {getCategoryBadge(guides[0].category)}
                  </span>
                  <span className="text-xs text-gray-500">Featured</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-purple-600 transition">
                  <Link href={`/guides/${guides[0].slug}`}>
                    {guides[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {guides[0].description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {AUTHOR_NAME}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {guides[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {guides[0].readTime}
                  </span>
                </div>
                <Link href={`/guides/${guides[0].slug}`}>
                  <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition shadow-md hover:shadow-lg">
                    Read Guide →
                  </button>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{guides[0].iconEmoji}</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {guides[0].tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white rounded-full text-gray-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid by Category */}
        {categories.map((category) => {
          const categoryGuides = getGuidesByCategory(category);
          
          return (
            <div key={category} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category} Guides
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {categoryGuides.length} tutorials • Hand-picked by experts
                  </p>
                </div>
                <div className="text-sm text-purple-600 font-medium">
                  {categoryGuides.length} articles
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGuides.map((guide, idx) => (
                  <Link key={guide.id} href={`/guides/${guide.slug}`}>
                    <div className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                      <div className={`h-2 bg-gradient-to-r ${guide.imageColor}`} />
                      
                      <div className="p-6 flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${guide.imageColor} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                            {guide.iconEmoji}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(guide.category)}`}>
                            {guide.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition line-clamp-2">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {guide.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {guide.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" /> {AUTHOR_NAME.split(' ')[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-3 h-3" />
                            <span>123</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6 pb-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-purple-600 font-medium group-hover:underline">
                            Read Tutorial →
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Telegram Channel Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white mt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Join Our Telegram Channel
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Get the latest guides, tutorials, and AI updates delivered directly to your Telegram.
          </p>
          <a
            href="https://t.me/indievibestack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
          >
            <Send className="w-4 h-4" />
            Join on Telegram
          </a>
          <p className="text-xs text-white/60 mt-4">
            Get updates on new guides, AI tools, and exclusive content
          </p>
        </div>
      </div>
    </div>
  );
}