import Link from "next/link";
import { Layers, Clock, TrendingUp, ArrowRight, Zap, Rocket, BookOpen, Code, Database, Brain } from "lucide-react";
import { stacks, getCategories, getStacksByCategory } from "@/data/stacks";

function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    "Beginner": "bg-green-100 text-green-700",
    "Intermediate": "bg-yellow-100 text-yellow-700",
    "Advanced": "bg-red-100 text-red-700",
  };
  return colors[difficulty] || "bg-gray-100 text-gray-700";
}

function getCategoryIcon(category: string) {
  const icons: Record<string, any> = {
    "AI Application": Zap,
    "Automation": Rocket,
    "Development": Code,
    "No-Code": Layers,
    "RAG": Database,
  };
  const Icon = icons[category] || BookOpen;
  return <Icon className="w-5 h-5" />;
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "AI Application": "bg-purple-100 text-purple-700",
    "Automation": "bg-orange-100 text-orange-700",
    "Development": "bg-blue-100 text-blue-700",
    "No-Code": "bg-green-100 text-green-700",
    "RAG": "bg-indigo-100 text-indigo-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

export default function StacksPage() {
  const categories = getCategories();

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Layers className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium gradient-text">Complete Project Tutorials</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Stacks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step tutorials to build real AI products from scratch.
            Learn by building actual applications.
          </p>
        </div>

        {/* Stacks by Category */}
        {categories.map((category) => {
          const categoryStacks = getStacksByCategory(category);
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${getCategoryColor(category)}`}>
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category} <span className="text-sm font-normal text-gray-500">({categoryStacks.length} tutorials)</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryStacks.map((stack) => (
                  <Link key={stack.id} href={`/stacks/${stack.slug}`}>
                    <div className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden h-full flex flex-col cursor-pointer">
                      {/* Header with gradient */}
                      <div className={`h-2 bg-gradient-to-r ${stack.imageColor}`} />
                      
                      <div className="p-6 flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${stack.imageColor} rounded-xl flex items-center justify-center text-2xl`}>
                            {stack.iconEmoji}
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-xs font-semibold text-gray-700">{stack.popularity}%</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition line-clamp-1">
                          {stack.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {stack.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(stack.difficulty)}`}>
                            {stack.difficulty}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                            {stack.timeToBuild}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {stack.toolsUsed.slice(0, 3).map((tool) => (
                            <span key={tool} className="text-xs text-gray-400">
                              #{tool.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">View Tutorial</span>
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