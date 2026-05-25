"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Clock, Users, TrendingUp, CheckCircle, ArrowRight, 
  BookOpen, Code, Terminal, Database, Sparkles, Award,
  ChevronRight, Copy, Bookmark, Share2
} from "lucide-react";
import { stacks, getStackBySlug, getAlternativeStacks } from "@/data/stacks";

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
    "AI Application": Sparkles,
    "Automation": TrendingUp,
    "Development": Code,
    "No-Code": BookOpen,
    "RAG": Database,
  };
  const Icon = icons[category] || BookOpen;
  return <Icon className="w-5 h-5" />;
}

interface Props {
  params: { slug: string };
}

export default function StackDetailPage({ params }: Props) {
  const stack = stacks.find(s => s.slug === params.slug);
  const alternatives = stack ? getAlternativeStacks(stack, 3) : [];
  const [saved, setSaved] = useState(false);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!stack) {
    notFound();
  }

  const handleSave = () => {
    const savedStacks = JSON.parse(localStorage.getItem("savedStacks") || "[]");
    
    if (!saved) {
      savedStacks.push({ id: stack.id, title: stack.title, slug: stack.slug });
      localStorage.setItem("savedStacks", JSON.stringify(savedStacks));
      setSaved(true);
    } else {
      const filtered = savedStacks.filter((s: any) => s.id !== stack.id);
      localStorage.setItem("savedStacks", JSON.stringify(filtered));
      setSaved(false);
    }
  };

  const copyCode = async (code: string, stepIndex: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/stacks" className="text-gray-500 hover:text-purple-600">Stacks</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{stack.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
                <div className={`w-20 h-20 bg-gradient-to-r ${stack.imageColor} rounded-2xl flex items-center justify-center text-4xl shadow-lg shrink-0`}>
                  {stack.iconEmoji}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(stack.difficulty)}`}>
                      {stack.difficulty}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {stack.timeToBuild}
                    </span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-semibold text-gray-700">{stack.popularity}% popular</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">{stack.title}</h1>
                  <p className="text-gray-600 leading-relaxed">{stack.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                <button 
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    saved 
                      ? "bg-green-100 text-green-700 border border-green-300" 
                      : "border hover:bg-gray-50"
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  {saved ? "Saved" : "Save Tutorial"}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition ml-auto">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Full Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Overview
              </h2>
              <div className="prose max-w-none">
                {stack.fullDescription.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-gray-600 mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-600" />
                Tools & Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {stack.toolsUsed.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Prerequisites
              </h2>
              <ul className="space-y-2">
                {stack.prerequisites.map((pre, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600">•</span>
                    {pre}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                What You'll Learn
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {stack.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Tutorial */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                Step-by-Step Tutorial
              </h2>
              <div className="space-y-6">
                {stack.steps.map((step, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        {step.code && (
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono">
                              {step.code}
                            </pre>
                            <button
                              onClick={() => copyCode(step.code!, idx)}
                              className="absolute top-2 right-2 p-1 bg-gray-800 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition"
                            >
                              {copiedStep === idx ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Quick Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium">{stack.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Difficulty:</span>
                  <span className="font-medium">{stack.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time to Build:</span>
                  <span className="font-medium">{stack.timeToBuild}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tools Count:</span>
                  <span className="font-medium">{stack.toolsUsed.length}</span>
                </div>
              </div>
            </div>

            {/* Tools Used Sidebar */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.toolsUsed.map((tool) => (
                  <span key={tool} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Alternative Stacks */}
            {alternatives.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">You Might Also Like</h3>
                <div className="space-y-3">
                  {alternatives.map((alt) => (
                    <Link key={alt.id} href={`/stacks/${alt.slug}`}>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition group">
                        <div className={`w-10 h-10 bg-gradient-to-r ${alt.imageColor} rounded-lg flex items-center justify-center text-xl`}>
                          {alt.iconEmoji}
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-sm group-hover:text-purple-600 transition">
                            {alt.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">{alt.category}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
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