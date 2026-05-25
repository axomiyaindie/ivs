const fs = require('fs');
const path = require('path');

// Define all your content for search
const allContent = [
  // Tools
  { id: "bubble-gpt", title: "Bubble + GPT Builder", description: "Build AI-powered web apps without writing code", type: "tool", category: "No-Code", tags: ["bubble", "openai", "no-code"] },
  { id: "make-ai", title: "Make.com AI Automation", description: "Connect AI to thousands of apps with visual automation", type: "tool", category: "Automation", tags: ["make", "automation", "zapier"] },
  { id: "langflow", title: "LangFlow", description: "Visual framework for building RAG pipelines without code", type: "tool", category: "Development", tags: ["rag", "langchain", "pipeline"] },
  
  // Stacks
  { id: "no-code-ai", title: "Complete No-Code AI Stack", description: "Build full-stack AI applications without writing code", type: "stack", difficulty: "Beginner", tags: ["no-code", "bubble", "openai"] },
  { id: "rag-pipeline", title: "RAG Pipeline Tutorial", description: "Build ChatGPT for your documents using vector databases", type: "stack", difficulty: "Intermediate", tags: ["rag", "vectors", "chatgpt"] },
  { id: "ai-saas", title: "AI SaaS Boilerplate", description: "Ready-to-launch SaaS template with AI features", type: "stack", difficulty: "Intermediate", tags: ["saas", "boilerplate", "nextjs"] },
  
  // Prompts
  { id: "email-writer", title: "Professional Email Writer", description: "Generate professional emails for any business situation", type: "prompt", category: "Writing", tags: ["email", "business", "writing"] },
  { id: "code-generator", title: "Code Generation Prompts", description: "Generate production-ready code in any language", type: "prompt", category: "Development", tags: ["code", "programming", "development"] },
  { id: "seo-optimizer", title: "SEO Content Optimizer", description: "Optimize your content for search engines", type: "prompt", category: "Marketing", tags: ["seo", "marketing", "content"] },
  
  // Guides
  { id: "getting-started", title: "Getting Started with No-Code AI", description: "Complete beginner's guide to building AI products", type: "guide", level: "Beginner", tags: ["beginner", "tutorial", "guide"] },
  { id: "advanced-rag", title: "Advanced RAG Techniques", description: "Take your RAG pipeline to the next level", type: "guide", level: "Advanced", tags: ["advanced", "rag", "optimization"] },
];

// Create public folder if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Save search index to public folder
const outputPath = path.join(publicDir, 'search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));

console.log(`✅ Search index generated with ${allContent.length} items`);
console.log(`📁 Saved to: ${outputPath}`);
console.log('');
console.log('📋 Search index includes:');
console.log(`   - ${allContent.filter(i => i.type === 'tool').length} tools`);
console.log(`   - ${allContent.filter(i => i.type === 'stack').length} stacks`);
console.log(`   - ${allContent.filter(i => i.type === 'prompt').length} prompts`);
console.log(`   - ${allContent.filter(i => i.type === 'guide').length} guides`);