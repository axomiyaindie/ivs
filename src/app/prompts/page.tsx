import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { prompts, getCategories, getPromptsByCategory } from "@/data/prompts";

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

export default function PromptsPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium gradient-text">500+ Ready-to-Use Prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Prompts <span className="gradient-text">Library</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated prompts for ChatGPT, Claude, and other AI models.
            Copy, paste, and get better results instantly.
          </p>
        </div>

        {/* Prompts by Category */}
        {categories.map((category) => {
          const categoryPrompts = getPromptsByCategory(category);
          
          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category} <span className="text-sm font-normal text-gray-500">({categoryPrompts.length} prompts)</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPrompts.map((prompt) => (
                  <Link key={prompt.id} href={`/prompts/${prompt.slug}`}>
                    <div className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden h-full flex flex-col cursor-pointer">
                      <div className="p-6 flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-purple-600" />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition line-clamp-1">
                          {prompt.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {prompt.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(prompt.category)}`}>
                            {prompt.category}
                          </span>
                          {/* Usage count removed - cleaner! */}
                        </div>
                      </div>
                      
                      <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">View Prompt</span>
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
      </div>
    </div>
  );
}