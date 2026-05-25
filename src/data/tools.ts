export interface Tool {
  id: string;
  slug: string;
  title: string;
  domain: string;
  description: string;
  fullDescription: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeToBuild: string;
  popularity: number;
  tags: string[];
  features: string[];
  steps: string[];
  proTips: string[];
  pricing: "Free" | "Freemium" | "Paid" | "Enterprise";
  website: string;
  affiliateLink?: string;
}

export const tools: Tool[] = [
  // ========== NO-CODE TOOLS (8 tools) ==========
  {
    id: "1",
    slug: "bubble-gpt",
    title: "Bubble + GPT Builder",
    domain: "bubble.io",
    description: "Build AI-powered web apps without writing code. Connect Bubble's visual editor with OpenAI's GPT API.",
    fullDescription: `Bubble.io combined with OpenAI's GPT-4 creates the ultimate no-code AI stack. You can build fully functional AI applications that handle thousands of users without writing any backend code.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "2-3 hours",
    popularity: 98,
    tags: ["bubble", "openai", "visual", "database", "nocode"],
    features: ["Drag-and-drop builder", "OpenAI integration", "Built-in database", "One-click deployment"],
    steps: ["Sign up for Bubble", "Get OpenAI API key", "Build UI", "Connect API workflows", "Deploy"],
    proTips: ["Start with templates", "Use recurring workflows", "Optimize API calls"],
    pricing: "Freemium",
    website: "https://bubble.io"
  },
  {
    id: "2",
    slug: "softr-ai",
    title: "Softr AI Blocks",
    domain: "softr.io",
    description: "Build AI-powered client portals and internal tools with Airtable data.",
    fullDescription: `Softr turns Airtable bases into professional websites and client portals. Add GPT-powered content generation to any Softr app.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "1-2 hours",
    popularity: 92,
    tags: ["airtable", "client portal", "database", "internal tools", "nocode"],
    features: ["Drag-and-drop builder", "Airtable integration", "AI content blocks", "User authentication"],
    steps: ["Sign up for Softr", "Connect Airtable", "Choose template", "Add AI blocks", "Publish"],
    proTips: ["Use dynamic filters", "Set up email notifications", "Custom domain"],
    pricing: "Freemium",
    website: "https://softr.io"
  },
  {
    id: "3",
    slug: "glide-ai",
    title: "Glide AI",
    domain: "glideapps.com",
    description: "Turn Google Sheets into AI-powered mobile apps without code.",
    fullDescription: `Glide transforms Google Sheets into beautiful mobile apps. Add AI features like image recognition and text generation to your apps.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "1-2 hours",
    popularity: 91,
    tags: ["glide", "googlesheets", "mobile", "database", "nocode"],
    features: ["Google Sheets as backend", "Mobile-first design", "AI image recognition", "Real-time sync"],
    steps: ["Create Glide account", "Connect Google Sheet", "Design your app", "Add AI components", "Publish to app store"],
    proTips: ["Use Glide Tables for more features", "Add actions for workflows", "Customize with CSS"],
    pricing: "Freemium",
    website: "https://glideapps.com"
  },
  {
    id: "4",
    slug: "adalo-ai",
    title: "Adalo AI Components",
    domain: "adalo.com",
    description: "Build AI-powered mobile apps with drag-and-drop simplicity.",
    fullDescription: `Adalo is a no-code platform for building native mobile apps. Add AI capabilities like ChatGPT integration and image recognition.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "2-3 hours",
    popularity: 89,
    tags: ["adalo", "mobile", "database", "api", "nocode"],
    features: ["Native mobile apps", "Drag-and-drop UI", "API integration", "Push notifications"],
    steps: ["Sign up for Adalo", "Choose template", "Design screens", "Add AI actions", "Publish to stores"],
    proTips: ["Use external collections for data", "Add custom actions", "Test on device"],
    pricing: "Freemium",
    website: "https://adalo.com"
  },
  {
    id: "5",
    slug: "weweb-ai",
    title: "WeWeb AI Actions",
    domain: "weweb.io",
    description: "Build AI-powered web applications with visual programming.",
    fullDescription: `WeWeb is a visual development platform for building enterprise web apps. Add AI workflows and API integrations easily.`,
    category: "No-Code",
    difficulty: "Intermediate",
    timeToBuild: "3-4 hours",
    popularity: 87,
    tags: ["weweb", "enterprise", "api", "workflow", "nocode"],
    features: ["Visual programming", "API connectors", "Workflow automation", "Enterprise security"],
    steps: ["Create WeWeb account", "Connect data sources", "Design interface", "Add AI workflows", "Deploy to cloud"],
    proTips: ["Use WeWeb's REST API explorer", "Create reusable workflows", "Set up user roles"],
    pricing: "Freemium",
    website: "https://weweb.io"
  },
  {
    id: "6",
    slug: "fliplet-ai",
    title: "Fliplet AI Studio",
    domain: "fliplet.com",
    description: "Build AI-powered internal tools and client portals.",
    fullDescription: `Fliplet is a no-code platform for building custom business apps. Add AI capabilities for data processing and content generation.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "2-3 hours",
    popularity: 85,
    tags: ["fliplet", "internal tools", "database", "business", "nocode"],
    features: ["Drag-and-drop builder", "Data integration", "AI content generation", "White-label options"],
    steps: ["Sign up for Fliplet", "Choose template", "Add data sources", "Configure AI features", "Publish"],
    proTips: ["Use Fliplet formulas", "Add custom JavaScript", "Integrate with Zapier"],
    pricing: "Paid",
    website: "https://fliplet.com"
  },
  {
    id: "7",
    slug: "draftbit-ai",
    title: "Draftbit AI Actions",
    domain: "draftbit.com",
    description: "Build AI-powered React Native apps visually.",
    fullDescription: `Draftbit is a visual development platform for React Native. Add AI capabilities to your mobile apps with pre-built integrations.`,
    category: "No-Code",
    difficulty: "Intermediate",
    timeToBuild: "3-4 hours",
    popularity: 86,
    tags: ["draftbit", "reactnative", "mobile", "api", "nocode"],
    features: ["Visual React Native builder", "Custom code export", "API integrations", "AI actions"],
    steps: ["Create Draftbit account", "Design your app", "Connect APIs", "Add AI features", "Export code"],
    proTips: ["Export to GitHub", "Use custom components", "Test with Expo"],
    pricing: "Freemium",
    website: "https://draftbit.com"
  },
  {
    id: "8",
    slug: "bravo-studio",
    title: "Bravo Studio AI",
    domain: "bravostudio.com",
    description: "Turn Figma designs into AI-powered mobile apps without code.",
    fullDescription: `Bravo Studio connects your Figma designs to data and AI services. Build professional mobile apps without writing code.`,
    category: "No-Code",
    difficulty: "Intermediate",
    timeToBuild: "3-4 hours",
    popularity: 84,
    tags: ["bravo", "figma", "mobile", "design", "nocode"],
    features: ["Figma integration", "API connections", "AI image generation", "Native apps"],
    steps: ["Design in Figma", "Import to Bravo", "Connect data sources", "Add AI features", "Publish to stores"],
    proTips: ["Use Bravo's API connector", "Add custom actions", "Test with Bravo Preview"],
    pricing: "Freemium",
    website: "https://bravostudio.com"
  },

  // ========== AUTOMATION TOOLS (7 tools) ==========
  {
    id: "9",
    slug: "zapier-ai",
    title: "Zapier AI Actions",
    domain: "zapier.com",
    description: "Add AI to your automations. Connect ChatGPT to 5000+ apps.",
    fullDescription: `Zapier's AI Actions bring AI capabilities to your workflows. Send prompts to ChatGPT and use responses in subsequent actions.`,
    category: "Automation",
    difficulty: "Beginner",
    timeToBuild: "30 mins",
    popularity: 96,
    tags: ["zapier", "automation", "chatgpt", "workflow", "api"],
    features: ["5000+ app connections", "AI actions", "Conditional logic", "Multi-step zaps"],
    steps: ["Sign up for Zapier", "Choose trigger app", "Add AI action", "Configure prompt", "Test and turn on"],
    proTips: ["Use Zapier Tables", "Create reusable templates", "Monitor task usage"],
    pricing: "Freemium",
    website: "https://zapier.com"
  },
  {
    id: "10",
    slug: "n8n-ai",
    title: "n8n AI Nodes",
    domain: "n8n.io",
    description: "Open-source automation with AI capabilities. Self-host or cloud.",
    fullDescription: `n8n is a fair-code automation tool with AI nodes. Connect OpenAI, LangChain, and more to your workflows.`,
    category: "Automation",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    popularity: 91,
    tags: ["n8n", "opensource", "automation", "self-hosted", "workflow"],
    features: ["Open-source", "Self-hosted option", "AI nodes", "400+ integrations"],
    steps: ["Install n8n", "Create workflow", "Add AI node", "Configure credentials", "Activate"],
    proTips: ["Use Docker for deployment", "Add webhook triggers", "Customize with JavaScript"],
    pricing: "Free",
    website: "https://n8n.io"
  },
  {
    id: "11",
    slug: "activepieces",
    title: "ActivePieces AI",
    domain: "activepieces.com",
    description: "Open-source automation platform with AI capabilities.",
    fullDescription: `ActivePieces is an open-source Zapier alternative. Add AI actions to your automation workflows.`,
    category: "Automation",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    popularity: 88,
    tags: ["activepieces", "opensource", "automation", "self-hosted", "workflow"],
    features: ["Open-source", "Self-hosted", "AI actions", "Piece marketplace"],
    steps: ["Install ActivePieces", "Create flow", "Add AI piece", "Configure triggers", "Run automation"],
    proTips: ["Use Docker compose", "Create custom pieces", "Webhook integration"],
    pricing: "Free",
    website: "https://activepieces.com"
  },
  {
    id: "12",
    slug: "pipedream-ai",
    title: "Pipedream AI",
    domain: "pipedream.com",
    description: "Developer automation platform with AI integrations.",
    fullDescription: `Pipedream combines automation with code. Connect AI APIs to any workflow with built-in code steps.`,
    category: "Automation",
    difficulty: "Advanced",
    timeToBuild: "2-3 hours",
    popularity: 90,
    tags: ["pipedream", "automation", "developer", "api", "code"],
    features: ["Code-first automation", "1000+ apps", "AI SDK integration", "Serverless"],
    steps: ["Sign up for Pipedream", "Create workflow", "Add trigger", "Write code for AI", "Deploy"],
    proTips: ["Use npm packages", "Add error handling", "Monitor with logs"],
    pricing: "Freemium",
    website: "https://pipedream.com"
  },
  {
    id: "13",
    slug: "relay-app",
    title: "Relay.app AI",
    domain: "relay.app",
    description: "Modern automation with built-in AI capabilities.",
    fullDescription: `Relay.app is a next-generation automation platform with native AI actions for text generation and analysis.`,
    category: "Automation",
    difficulty: "Beginner",
    timeToBuild: "1-2 hours",
    popularity: 87,
    tags: ["relay", "automation", "ai-native", "workflow", "modern"],
    features: ["AI-native workflows", "Visual builder", "Branching logic", "Real-time execution"],
    steps: ["Create Relay account", "Choose trigger", "Add AI step", "Configure prompt", "Test automation"],
    proTips: ["Use Relay's AI templates", "Add human-in-loop steps", "Monitor runs"],
    pricing: "Freemium",
    website: "https://relay.app"
  },
  {
    id: "14",
    slug: "automate-io",
    title: "Automate.io AI (Now HubSpot)",
    domain: "automate.io",
    description: "Simple automation with AI triggers and actions.",
    fullDescription: `Automate.io (acquired by HubSpot) offers easy automation with AI-powered triggers and actions.`,
    category: "Automation",
    difficulty: "Beginner",
    timeToBuild: "1-2 hours",
    popularity: 85,
    tags: ["automate", "hubspot", "automation", "simple", "workflow"],
    features: ["Simple interface", "AI triggers", "Multi-app connections", "Schedule options"],
    steps: ["Sign up", "Create bot", "Add trigger", "Configure AI action", "Activate"],
    proTips: ["Use filters", "Add delays", "Monitor history"],
    pricing: "Freemium",
    website: "https://automate.io"
  },
  {
    id: "15",
    slug: "workato-ai",
    title: "Workato AI",
    domain: "workato.com",
    description: "Enterprise automation with AI and ML capabilities.",
    fullDescription: `Workato is an enterprise iPaaS with AI/ML capabilities for intelligent automation.`,
    category: "Automation",
    difficulty: "Advanced",
    timeToBuild: "4-5 hours",
    popularity: 89,
    tags: ["workato", "enterprise", "automation", "ai", "ipaas"],
    features: ["Enterprise-grade", "AI/ML recipes", "500+ connectors", "Governance"],
    steps: ["Request demo", "Connect apps", "Build recipe", "Add AI logic", "Deploy"],
    proTips: ["Use AI predictions", "Add error handling", "Monitor dashboard"],
    pricing: "Enterprise",
    website: "https://workato.com"
  },

  // ========== DEVELOPMENT TOOLS (7 tools) ==========
  {
    id: "16",
    slug: "flowise",
    title: "Flowise AI",
    domain: "flowiseai.com",
    description: "Open-source drag-and-drop tool for building LLM flows.",
    fullDescription: `Flowise is a visual tool for building LangChain flows. Create custom AI workflows without code.`,
    category: "Development",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    popularity: 91,
    tags: ["flowise", "langchain", "rag", "llm", "opensource"],
    features: ["Drag-and-drop flows", "LangChain integration", "Vector stores", "API deployment"],
    steps: ["Install Flowise", "Create flow", "Add components", "Configure LLM", "Deploy API"],
    proTips: ["Use Docker", "Add custom nodes", "Monitor with logs"],
    pricing: "Free",
    website: "https://flowiseai.com"
  },
  {
    id: "17",
    slug: "dify-ai",
    title: "Dify AI",
    domain: "dify.ai",
    description: "LLM application development platform with visual orchestration.",
    fullDescription: `Dify is an open-source platform for building and managing LLM applications with visual workflows.`,
    category: "Development",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    popularity: 90,
    tags: ["dify", "llm", "rag", "workflow", "opensource"],
    features: ["Visual orchestration", "RAG pipelines", "Plugin system", "API access"],
    steps: ["Install Dify", "Create app", "Build workflow", "Add knowledge base", "Deploy"],
    proTips: ["Use Dify cloud", "Add custom tools", "Monitor analytics"],
    pricing: "Free",
    website: "https://dify.ai"
  },
  {
    id: "18",
    slug: "lunary-ai",
    title: "Lunary AI",
    domain: "lunary.ai",
    description: "LLM observability and prompt management platform.",
    fullDescription: `Lunary helps you manage, debug, and analyze your LLM applications in production.`,
    category: "Development",
    difficulty: "Intermediate",
    timeToBuild: "1-2 hours",
    popularity: 87,
    tags: ["lunary", "llm", "observability", "monitoring", "analytics"],
    features: ["Prompt management", "LLM observability", "Analytics dashboard", "Cost tracking"],
    steps: ["Sign up for Lunary", "Integrate SDK", "Track prompts", "Monitor performance", "Analyze costs"],
    proTips: ["Set up alerts", "Compare models", "Export analytics"],
    pricing: "Freemium",
    website: "https://lunary.ai"
  },
  {
    id: "19",
    slug: "langsmith",
    title: "LangSmith",
    domain: "smith.langchain.com",
    description: "Debug, test, and monitor your LangChain applications.",
    fullDescription: `LangSmith provides tools for debugging, testing, and monitoring LLM applications built with LangChain.`,
    category: "Development",
    difficulty: "Advanced",
    timeToBuild: "2-3 hours",
    popularity: 92,
    tags: ["langsmith", "langchain", "debugging", "monitoring", "testing"],
    features: ["Debugging tools", "Test suites", "Monitoring", "Evaluation"],
    steps: ["Create LangSmith account", "Integrate SDK", "Log runs", "Create tests", "Monitor production"],
    proTips: ["Use datasets", "Add evaluators", "Set up feedback"],
    pricing: "Freemium",
    website: "https://smith.langchain.com"
  },
  {
    id: "20",
    slug: "vectara",
    title: "Vectara RAG",
    domain: "vectara.com",
    description: "API-first RAG platform for building conversational AI.",
    fullDescription: `Vectara provides an API-first platform for building RAG applications with no infrastructure management.`,
    category: "Development",
    difficulty: "Intermediate",
    timeToBuild: "1-2 hours",
    popularity: 88,
    tags: ["vectara", "rag", "api", "search", "conversational"],
    features: ["API-first", "Hybrid search", "LLM integration", "Hallucination detection"],
    steps: ["Sign up for Vectara", "Create corpus", "Upload documents", "Query API", "Build interface"],
    proTips: ["Use metadata filtering", "Customize prompts", "Monitor usage"],
    pricing: "Freemium",
    website: "https://vectara.com"
  },
  {
    id: "21",
    slug: "haystack",
    title: "Haystack AI",
    domain: "haystack.deepset.ai",
    description: "Open-source framework for building RAG pipelines.",
    fullDescription: `Haystack is an open-source Python framework for building RAG applications with customizable components.`,
    category: "Development",
    difficulty: "Advanced",
    timeToBuild: "4-5 hours",
    popularity: 89,
    tags: ["haystack", "rag", "python", "opensource", "pipeline"],
    features: ["Python framework", "Custom pipelines", "Document stores", "Evaluation tools"],
    steps: ["Install Haystack", "Create pipeline", "Add document store", "Integrate LLM", "Deploy API"],
    proTips: ["Use Docker", "Customize components", "Add caching"],
    pricing: "Free",
    website: "https://haystack.deepset.ai"
  },
  {
    id: "22",
    slug: "ragflow",
    title: "RAGFlow",
    domain: "ragflow.io",
    description: "Open-source RAG engine with document intelligence.",
    fullDescription: `RAGFlow is an open-source RAG engine that combines document parsing with vector search and LLM generation.`,
    category: "Development",
    difficulty: "Advanced",
    timeToBuild: "3-4 hours",
    popularity: 86,
    tags: ["ragflow", "rag", "document", "opensource", "search"],
    features: ["Document intelligence", "Vector search", "LLM integration", "REST API"],
    steps: ["Install RAGFlow", "Parse documents", "Create index", "Configure LLM", "Query API"],
    proTips: ["Use Docker compose", "Customize parsing", "Monitor logs"],
    pricing: "Free",
    website: "https://ragflow.io"
  }
];

// ============= HELPER FUNCTIONS =============

// Get tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

// Get all unique categories
export function getCategories(): string[] {
  const categories = new Set(tools.map(tool => tool.category));
  return Array.from(categories);
}

// Get tools by category
export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(tool => tool.category === category);
}

// Get alternative tools (same category first, then similar tags)
export function getAlternativeTools(currentTool: Tool, limit: number = 3): Tool[] {
  // First: Same category (best alternatives)
  const sameCategory = tools.filter(tool => 
    tool.id !== currentTool.id && 
    tool.category === currentTool.category
  );
  
  // If we have enough same-category tools, return them
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  
  // If not enough, add tools with similar tags from other categories
  const otherWithSimilarTags = tools.filter(tool => 
    tool.id !== currentTool.id && 
    tool.category !== currentTool.category &&
    tool.tags.some(tag => currentTool.tags.includes(tag))
  );
  
  const alternatives = [...sameCategory, ...otherWithSimilarTags];
  return alternatives.slice(0, limit);
}