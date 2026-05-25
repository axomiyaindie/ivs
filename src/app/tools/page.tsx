import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import { Clock, TrendingUp } from "lucide-react";
import { getToolsByCategory, getCategories } from "@/data/tools";

function getDifficultyColor(difficulty: string): string {
  switch(difficulty) {
    case "Beginner": return "bg-green-100 text-green-700";
    case "Intermediate": return "bg-yellow-100 text-yellow-700";
    case "Advanced": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

function getPricingBadge(pricing: string): string {
  switch(pricing) {
    case "Free": return "bg-emerald-100 text-emerald-700";
    case "Freemium": return "bg-blue-100 text-blue-700";
    case "Paid": return "bg-amber-100 text-amber-700";
    case "Enterprise": return "bg-purple-100 text-purple-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

export default function ToolsPage() {
  const categories = getCategories();
  
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Tools <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best AI tools to build your next product without coding.
            Curated and organized by category.
          </p>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category);
          
          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category} <span className="text-sm font-normal text-gray-500">({categoryTools.length} tools)</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <Link key={tool.id} href={`/tools/${tool.slug}`} className="block">
                    <div className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden h-full flex flex-col cursor-pointer">
                      <div className="p-6 flex-grow">
                        {/* Header with Logo */}
                        <div className="flex items-start justify-between mb-4">
                          <ToolLogo domain={tool.domain} title={tool.title} size={48} />
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-sm font-semibold text-gray-700">{tool.popularity}%</span>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {tool.description}
                        </p>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(tool.difficulty)}`}>
                            {tool.difficulty}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getPricingBadge(tool.pricing)}`}>
                            {tool.pricing}
                          </span>
                        </div>
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{tool.timeToBuild}</span>
                          </div>
                          <span className="text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition">
                            Click to view details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}