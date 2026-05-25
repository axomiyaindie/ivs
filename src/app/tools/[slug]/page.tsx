import { notFound } from "next/navigation";
import Link from "next/link";
import SaveButton from "@/components/SaveButton";
import ToolLogo from "@/components/ToolLogo";
import { ExternalLink, Clock, Users, TrendingUp, CheckCircle, Zap, Sparkles, Award, Rocket, ArrowRight, GitBranch } from "lucide-react";
import { getToolBySlug, getAlternativeTools } from "@/data/tools";

interface Props {
  params: Promise<{ slug: string }>;
}

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

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  const alternativeTools = tool ? getAlternativeTools(tool, 3) : [];
  
  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/tools" className="text-gray-500 hover:text-purple-600">Tools</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{tool.title}</span>
        </nav>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
                <ToolLogo domain={tool.domain} title={tool.title} size={80} />
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(tool.difficulty)}`}>
                      {tool.difficulty}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full ${getPricingBadge(tool.pricing)}`}>
                      {tool.pricing}
                    </span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-sm font-semibold text-gray-700">{tool.popularity}% popular</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">{tool.title}</h1>
                  <p className="text-lg text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>

              {/* Action Buttons - Only Save and Visit Website */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                <SaveButton itemId={tool.slug} itemTitle={tool.title} itemType="tool" />
                <a 
                  href={tool.affiliateLink || tool.website}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-2 px-6 py-2 gradient-bg text-white rounded-lg font-semibold hover:shadow-lg transition ml-auto"
                >
                  Visit {tool.title} Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <Clock className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Build Time</p>
                <p className="font-semibold text-sm">{tool.timeToBuild}</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <Users className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Active Users</p>
                <p className="font-semibold text-sm">5,000+</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <Zap className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Difficulty</p>
                <p className="font-semibold text-sm">{tool.difficulty}</p>
              </div>
            </div>

            {/* Full Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{tool.fullDescription}</p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Key Features
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Guide */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-600" />
                How to Get Started
              </h2>
              <ol className="space-y-4">
                {tool.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pro Tips */}
            <div className="bg-amber-50 rounded-2xl p-8 border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Pro Tips
              </h2>
              <ul className="space-y-3">
                {tool.proTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">→</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Alternative Tools Section */}
            {alternativeTools.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Alternatives to {tool.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Other tools you might want to consider
                </p>
                <div className="space-y-3">
                  {alternativeTools.map((alt) => (
                    <Link key={alt.id} href={`/tools/${alt.slug}`}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group border border-transparent hover:border-gray-200">
                        <ToolLogo domain={alt.domain} title={alt.title} size={40} />
                        <div className="flex-grow">
                          <p className="font-medium text-sm group-hover:text-purple-600 transition">
                            {alt.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${getDifficultyColor(alt.difficulty)}`}>
                              {alt.difficulty}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${getPricingBadge(alt.pricing)}`}>
                              {alt.pricing}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Key Info Box */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium">{tool.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pricing:</span>
                  <span className="font-medium">{tool.pricing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time to Build:</span>
                  <span className="font-medium">{tool.timeToBuild}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Popularity:</span>
                  <span className="font-medium">{tool.popularity}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}