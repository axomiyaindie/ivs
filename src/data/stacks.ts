export interface Stack {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: "AI Application" | "Automation" | "Development" | "No-Code" | "RAG";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeToBuild: string;
  toolsUsed: string[];
  steps: {
    title: string;
    description: string;
    code?: string;
  }[];
  learningOutcomes: string[];
  prerequisites: string[];
  popularity: number;
  imageColor: string;
  iconEmoji: string;
}

export const stacks: Stack[] = [
  // ========== AI APPLICATION STACKS (6) ==========
  {
    id: "1",
    slug: "ai-chatbot-with-rag",
    title: "AI Chatbot with RAG",
    description: "Build a ChatGPT-like chatbot that answers questions from your own documents",
    fullDescription: `This comprehensive tutorial teaches you how to build a production-ready AI chatbot that can answer questions based on your own documents. You'll learn about Retrieval-Augmented Generation (RAG), vector databases, and prompt engineering.

By the end, you'll have a fully functional chatbot that can:
- Upload and process PDF, TXT, and DOCX files
- Chunk documents intelligently
- Generate embeddings using OpenAI
- Store vectors in Pinecone/Chroma
- Answer questions with citations
- Deploy to production on Vercel

Perfect for building customer support bots, internal knowledge bases, or research assistants.`,
    category: "AI Application",
    difficulty: "Intermediate",
    timeToBuild: "4-5 hours",
    toolsUsed: ["Next.js", "OpenAI API", "Pinecone", "LangChain", "Tailwind CSS", "Vercel"],
    steps: [
      {
        title: "Set up your Next.js project",
        description: "Create a new Next.js app with TypeScript and Tailwind CSS. Install required dependencies including LangChain, OpenAI SDK, and Pinecone client.",
        code: "npx create-next-app@latest ai-chatbot --typescript --tailwind\ncd ai-chatbot\nnpm install langchain @langchain/openai @pinecone-database/pinecone pdf-parse"
      },
      {
        title: "Create document upload endpoint",
        description: "Build an API route that handles file uploads, extracts text, and splits documents into chunks for embedding.",
        code: "// app/api/upload/route.ts\nexport async function POST(req: Request) {\n  const formData = await req.formData();\n  const file = formData.get('file');\n  // Process file and create embeddings\n}"
      },
      {
        title: "Generate embeddings and store in vector database",
        description: "Use OpenAI's embedding model to convert text chunks into vectors and store them in Pinecone for similarity search.",
        code: "import { OpenAIEmbeddings } from '@langchain/openai';\nimport { PineconeStore } from '@langchain/pinecone';\n\nconst embeddings = new OpenAIEmbeddings();\nawait PineconeStore.fromDocuments(documents, embeddings, { pineconeIndex });"
      },
      {
        title: "Build the chat interface",
        description: "Create a chat UI with message history, loading states, and markdown support for formatted responses.",
        code: "<div className=\"chat-container\">\n  {messages.map(msg => (\n    <ChatMessage key={msg.id} role={msg.role} content={msg.content} />\n  ))}\n</div>"
      },
      {
        title: "Implement the RAG query flow",
        description: "When a user asks a question, retrieve relevant chunks from the vector database and pass them to GPT with context.",
        code: "const relevantDocs = await vectorStore.similaritySearch(question, 4);\nconst context = relevantDocs.map(d => d.pageContent).join('\\n');\nconst answer = await llm.invoke(`Context: ${context}\\nQuestion: ${question}`);"
      },
      {
        title: "Add citations and sources",
        description: "Show users which documents were used to generate the answer, building trust and allowing verification.",
        code: "return {\n  answer: response,\n  sources: relevantDocs.map(d => ({\n    content: d.pageContent.slice(0, 200),\n    metadata: d.metadata\n  }))\n}"
      }
    ],
    learningOutcomes: [
      "Understand RAG architecture and when to use it",
      "Implement document processing pipelines",
      "Work with vector databases and embeddings",
      "Build production-ready chat interfaces",
      "Deploy AI applications to production"
    ],
    prerequisites: [
      "Basic knowledge of Next.js",
      "Familiarity with TypeScript",
      "OpenAI API key (approx $5-10 for tutorial)"
    ],
    popularity: 98,
    imageColor: "from-purple-500 to-blue-500",
    iconEmoji: "🤖"
  },
  {
    id: "2",
    slug: "ai-saas-boilerplate",
    title: "AI SaaS Boilerplate",
    description: "Build a complete AI-powered SaaS with user authentication, payments, and API credits",
    fullDescription: `This complete boilerplate teaches you how to build a production-ready AI SaaS product from scratch. You'll implement user authentication, subscription payments, API key management, credit systems, and usage tracking.

Perfect for launching your own AI tool or service with a sustainable business model.`,
    category: "AI Application",
    difficulty: "Advanced",
    timeToBuild: "6-8 hours",
    toolsUsed: ["Next.js 14", "Supabase", "Stripe", "OpenAI API", "Tailwind CSS", "Vercel"],
    steps: [
      {
        title: "Set up authentication with Supabase",
        description: "Implement user sign-up, login, and session management using Supabase Auth.",
        code: "import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';\n\nconst supabase = createClientComponentClient();\nawait supabase.auth.signUp({ email, password });"
      },
      {
        title: "Create database schema for users and credits",
        description: "Design tables for user profiles, API credits, usage logs, and subscription status.",
        code: "CREATE TABLE user_credits (\n  user_id UUID REFERENCES users(id),\n  credits_remaining INT DEFAULT 10,\n  updated_at TIMESTAMP\n);"
      },
      {
        title: "Integrate Stripe for subscriptions",
        description: "Set up Stripe Checkout for one-time payments and recurring subscriptions. Handle webhooks for payment events.",
        code: "const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);\nconst session = await stripe.checkout.sessions.create({\n  mode: 'subscription',\n  line_items: [{ price: 'price_123', quantity: 1 }]\n});"
      },
      {
        title: "Build the AI API endpoint with credit checking",
        description: "Create an API route that checks user credits before processing AI requests and deducts credits after.",
        code: "export async function POST(req: Request) {\n  const user = await getUser();\n  if (user.credits < 1) return error('Insufficient credits');\n  const result = await processAI(request);\n  await deductCredit(user.id);\n  return Response.json(result);\n}"
      },
      {
        title: "Create dashboard for usage tracking",
        description: "Build a user dashboard showing credit balance, usage history, and subscription management.",
        code: "export default function Dashboard() {\n  const { user, credits, usage } = useUser();\n  return (\n    <div>\n      <CreditsCard balance={credits} />\n      <UsageHistory logs={usage} />\n    </div>\n  );\n}"
      },
      {
        title: "Deploy to production and monitor",
        description: "Deploy to Vercel, set up environment variables, and add monitoring with Sentry or Logtail.",
        code: "vercel --prod\n# Add env vars: OPENAI_API_KEY, SUPABASE_URL, STRIPE_SECRET_KEY\n# Set up webhook endpoints in Stripe dashboard"
      }
    ],
    learningOutcomes: [
      "Implement authentication and user management",
      "Build subscription payment systems",
      "Create credit-based API usage systems",
      "Handle webhooks and payment events",
      "Deploy and monitor production SaaS apps"
    ],
    prerequisites: [
      "Intermediate Next.js knowledge",
      "Understanding of authentication concepts",
      "Stripe account (test mode free)"
    ],
    popularity: 96,
    imageColor: "from-blue-500 to-cyan-500",
    iconEmoji: "🚀"
  },
  {
    id: "3",
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "Build a multi-purpose content generation tool for blog posts, social media, and emails",
    fullDescription: `Create a powerful content generation platform that can produce blog posts, social media captions, email newsletters, and SEO metadata. Users can select content type, tone, length, and target audience.

This is perfect for content creators, marketers, and agencies looking to scale their content production.`,
    category: "AI Application",
    difficulty: "Intermediate",
    timeToBuild: "3-4 hours",
    toolsUsed: ["Next.js", "OpenAI API", "React Hook Form", "Zod", "Tailwind CSS", "Vercel"],
    steps: [
      {
        title: "Set up form with validation",
        description: "Create a multi-step form for content generation with Zod validation and React Hook Form.",
        code: "const schema = z.object({\n  contentType: z.enum(['blog', 'social', 'email']),\n  topic: z.string().min(5),\n  tone: z.enum(['professional', 'casual', 'humorous'])\n});"
      },
      {
        title: "Create prompt templates",
        description: "Build a system of prompt templates that generate different types of content based on user input.",
        code: "const prompts = {\n  blog: `Write a blog post about ${topic} in a ${tone} tone...`,\n  social: `Create ${count} social media posts about ${topic}...`\n};"
      },
      {
        title: "Implement streaming responses",
        description: "Stream AI responses character by character for a better user experience with typing animation.",
        code: "const response = await fetch('/api/generate', { body: JSON.stringify(data) });\nconst reader = response.body.getReader();\nwhile(true) {\n  const { done, value } = await reader.read();\n  // Append characters to UI\n}"
      },
      {
        title: "Add export functionality",
        description: "Allow users to export generated content as markdown, PDF, or copy to clipboard.",
        code: "const handleExport = (format: 'md' | 'pdf' | 'txt') => {\n  if (format === 'md') downloadFile(content, 'generated.md');\n  if (format === 'pdf') generatePDF(content);\n};"
      },
      {
        title: "Save generation history",
        description: "Store user's generation history in localStorage or database for later reference.",
        code: "const history = JSON.parse(localStorage.getItem('history') || '[]');\nhistory.unshift({ content, type, createdAt: new Date() });\nlocalStorage.setItem('history', JSON.stringify(history.slice(0, 50)));"
      },
      {
        title: "Add templates library",
        description: "Create a library of pre-made prompt templates users can customize and reuse.",
        code: "const templates = [\n  { name: 'Product Launch', prompt: 'Write a product launch announcement for...' },\n  { name: 'FAQ Generator', prompt: 'Create FAQs about...' }\n];"
      }
    ],
    learningOutcomes: [
      "Build complex forms with validation",
      "Implement streaming API responses",
      "Create reusable prompt systems",
      "Handle various export formats",
      "Build user history features"
    ],
    prerequisites: [
      "Basic React/Next.js knowledge",
      "Understanding of forms and validation",
      "OpenAI API key"
    ],
    popularity: 95,
    imageColor: "from-green-500 to-emerald-500",
    iconEmoji: "✍️"
  },
  {
    id: "4",
    slug: "ai-image-generator",
    title: "AI Image Generator",
    description: "Build a DALL-E image generation app with style presets and gallery",
    fullDescription: `Create a full-featured image generation platform using DALL-E 3. Users can generate images with custom prompts, style presets, size options, and save their creations to a personal gallery.

Perfect for artists, designers, and creative professionals looking to leverage AI for visual content.`,
    category: "AI Application",
    difficulty: "Beginner",
    timeToBuild: "2-3 hours",
    toolsUsed: ["Next.js", "OpenAI API (DALL-E)", "Cloudinary", "Tailwind CSS", "Vercel"],
    steps: [
      {
        title: "Set up DALL-E API integration",
        description: "Create an API route that accepts prompts and calls OpenAI's image generation endpoint.",
        code: "const response = await openai.images.generate({\n  model: 'dall-e-3',\n  prompt: userPrompt,\n  n: 1,\n  size: '1024x1024'\n});"
      },
      {
        title: "Build image gallery with upload",
        description: "Create a gallery component that displays generated images and allows uploading to Cloudinary.",
        code: "const uploadToCloudinary = async (imageUrl: string) => {\n  const formData = new FormData();\n  formData.append('file', imageUrl);\n  await fetch('/api/upload', { method: 'POST', body: formData });\n};"
      },
      {
        title: "Add style presets",
        description: "Implement style presets that modify prompts for different artistic styles.",
        code: "const presets = {\n  'cyberpunk': 'cyberpunk style, neon lights, futuristic city',\n  'watercolor': 'watercolor painting style, soft edges, artistic',\n  '3d render': '3D render, octane render, unreal engine 5'\n};"
      },
      {
        title: "Implement image variations",
        description: "Allow users to generate variations of existing images using DALL-E's variation endpoint.",
        code: "const variation = await openai.images.createVariation({\n  image: fs.createReadStream(imagePath),\n  n: 3,\n  size: '1024x1024'\n});"
      },
      {
        title: "Create download and share features",
        description: "Add download functionality and social sharing for generated images.",
        code: "const downloadImage = async (url: string) => {\n  const response = await fetch(url);\n  const blob = await response.blob();\n  const link = document.createElement('a');\n  link.href = URL.createObjectURL(blob);\n  link.download = 'generated-image.png';\n  link.click();\n};"
      }
    ],
    learningOutcomes: [
      "Integrate DALL-E API for image generation",
      "Handle image uploads and storage",
      "Implement style presets and prompt engineering",
      "Create image galleries and downloads",
      "Build responsive image layouts"
    ],
    prerequisites: [
      "Basic Next.js knowledge",
      "OpenAI API key with DALL-E access"
    ],
    popularity: 94,
    imageColor: "from-pink-500 to-rose-500",
    iconEmoji: "🎨"
  },
  {
    id: "5",
    slug: "ai-code-assistant",
    title: "AI Code Assistant",
    description: "Build a GitHub Copilot-style code assistant with explanation, debugging, and refactoring",
    fullDescription: `Create a powerful AI coding assistant that helps developers write, debug, and refactor code. Features include code completion suggestions, bug fixing with explanations, code review comments, and test generation.

This is perfect for developers looking to boost productivity or build their own coding assistant tool.`,
    category: "AI Application",
    difficulty: "Advanced",
    timeToBuild: "5-6 hours",
    toolsUsed: ["Next.js", "OpenAI API", "Monaco Editor", "Prism.js", "Tailwind CSS"],
    steps: [
      {
        title: "Integrate Monaco code editor",
        description: "Add the Monaco editor (VS Code's editor) with syntax highlighting for multiple languages.",
        code: "import Editor from '@monaco-editor/react';\n\n<Editor\n  height=\"400px\"\n  defaultLanguage=\"javascript\"\n  theme=\"vs-dark\"\n  onChange={setCode}\n/>"
      },
      {
        title: "Build code explanation feature",
        description: "Create an API endpoint that explains selected code in simple terms.",
        code: "const explainCode = async (code: string) => {\n  const response = await fetch('/api/explain', {\n    method: 'POST',\n    body: JSON.stringify({ code })\n  });\n  return response.json();\n};"
      },
      {
        title: "Implement bug fixing",
        description: "Create a debug feature that identifies bugs and suggests fixes with explanations.",
        code: "const debugCode = async (code: string, error: string) => {\n  const prompt = `Fix this bug: ${error}\\nCode:\\n${code}`;\n  return await callAI(prompt);\n};"
      },
      {
        title: "Add code completion",
        description: "Implement inline code completion suggestions as the user types.",
        code: "const getCompletion = async (prefix: string) => {\n  const response = await fetch('/api/complete', {\n    body: JSON.stringify({ prefix, language })\n  });\n  return response.suggestion;\n};"
      },
      {
        title: "Create test generation",
        description: "Generate unit tests for user code using the selected testing framework.",
        code: "const generateTests = async (code: string) => {\n  const prompt = `Generate Jest tests for:\\n${code}`;\n  return await callAI(prompt);\n};"
      }
    ],
    learningOutcomes: [
      "Integrate code editors in web apps",
      "Build AI-powered coding features",
      "Implement code analysis and debugging",
      "Create intelligent completions",
      "Generate tests automatically"
    ],
    prerequisites: [
      "Intermediate React knowledge",
      "Understanding of code editors",
      "OpenAI API key"
    ],
    popularity: 97,
    imageColor: "from-yellow-500 to-orange-500",
    iconEmoji: "💻"
  },
  {
    id: "6",
    slug: "ai-voice-assistant",
    title: "AI Voice Assistant",
    description: "Build a voice-enabled assistant with speech recognition and text-to-speech",
    fullDescription: `Create a complete voice assistant that listens to user commands, processes them with GPT, and responds with voice. Features include wake word detection, conversation memory, and custom actions.

Perfect for building smart speakers, accessibility tools, or hands-free applications.`,
    category: "AI Application",
    difficulty: "Advanced",
    timeToBuild: "4-5 hours",
    toolsUsed: ["Next.js", "OpenAI API", "Web Speech API", "ElevenLabs API", "Tailwind CSS"],
    steps: [
      {
        title: "Set up speech recognition",
        description: "Implement browser speech recognition using Web Speech API for capturing user voice input.",
        code: "const recognition = new webkitSpeechRecognition();\nrecognition.onresult = (event) => {\n  const transcript = event.results[0][0].transcript;\n  processCommand(transcript);\n};"
      },
      {
        title: "Integrate GPT for command processing",
        description: "Send transcribed text to GPT for processing and generate appropriate responses.",
        code: "const processCommand = async (text: string) => {\n  const response = await fetch('/api/chat', {\n    body: JSON.stringify({ message: text, history })\n  });\n  speakResponse(response.text);\n};"
      },
      {
        title: "Add text-to-speech",
        description: "Implement speech synthesis using Web Speech API or ElevenLabs for natural voices.",
        code: "const speakResponse = (text: string) => {\n  const utterance = new SpeechSynthesisUtterance(text);\n  utterance.voice = speechSynthesis.getVoices()[0];\n  speechSynthesis.speak(utterance);\n};"
      },
      {
        title: "Implement conversation memory",
        description: "Store conversation history to maintain context across multiple interactions.",
        code: "const conversationHistory = [];\nconst addToHistory = (role: string, content: string) => {\n  conversationHistory.push({ role, content });\n  if (conversationHistory.length > 10) conversationHistory.shift();\n};"
      },
      {
        title: "Add custom commands",
        description: "Create a system for custom commands like opening websites, setting timers, or controlling smart home.",
        code: "const customCommands = {\n  'open google': () => window.open('https://google.com'),\n  'what time is it': () => new Date().toLocaleTimeString()\n};"
      }
    ],
    learningOutcomes: [
      "Integrate speech recognition APIs",
      "Build conversational AI systems",
      "Implement text-to-speech synthesis",
      "Handle conversation context and memory",
      "Create voice-controlled applications"
    ],
    prerequisites: [
      "Understanding of browser APIs",
      "OpenAI API key",
      "HTTPS or localhost (required for speech recognition)"
    ],
    popularity: 93,
    imageColor: "from-indigo-500 to-purple-500",
    iconEmoji: "🎤"
  },

  // ========== NO-CODE STACKS (4) ==========
  {
    id: "7",
    slug: "bubble-ai-app",
    title: "Bubble + AI: Complete No-Code App",
    description: "Build a fully functional AI app using Bubble.io and OpenAI without writing code",
    fullDescription: `Learn how to build AI-powered web applications using Bubble.io's visual editor and OpenAI's API. Perfect for non-technical founders who want to launch AI products quickly.

This tutorial covers everything from setting up Bubble to deploying a production-ready AI application.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "3-4 hours",
    toolsUsed: ["Bubble.io", "OpenAI API", "Airtable", "Zapier"],
    steps: [
      {
        title: "Set up Bubble.io account",
        description: "Create a free Bubble account and set up your first application with responsive design."
      },
      {
        title: "Design the user interface",
        description: "Drag and drop UI elements including input fields, buttons, and result displays."
      },
      {
        title: "Connect OpenAI API",
        description: "Use Bubble's API connector to integrate with OpenAI's GPT API."
      },
      {
        title: "Create workflows",
        description: "Build Bubble workflows that trigger API calls and handle responses."
      },
      {
        title: "Add data persistence",
        description: "Store user inputs and AI responses in Bubble's built-in database."
      },
      {
        title: "Deploy to custom domain",
        description: "Deploy your application to a custom domain and enable SSL."
      }
    ],
    learningOutcomes: [
      "Build web apps without coding",
      "Integrate AI APIs visually",
      "Design responsive interfaces",
      "Manage data in no-code databases",
      "Deploy production applications"
    ],
    prerequisites: [
      "No coding experience needed",
      "Bubble.io account (free tier available)",
      "OpenAI API key"
    ],
    popularity: 96,
    imageColor: "from-blue-500 to-purple-500",
    iconEmoji: "🫧"
  },
  {
    id: "8",
    slug: "airtable-ai-portal",
    title: "Airtable + AI Client Portal",
    description: "Build an AI-powered client portal using Softr and Airtable",
    fullDescription: `Create a professional client portal with AI features using Softr and Airtable. Perfect for agencies, consultants, and service providers who want to offer AI-powered services to clients.

No coding required - just drag, drop, and configure.`,
    category: "No-Code",
    difficulty: "Beginner",
    timeToBuild: "2-3 hours",
    toolsUsed: ["Airtable", "Softr", "OpenAI API", "Zapier"],
    steps: [
      {
        title: "Design your Airtable database",
        description: "Create Airtable bases for client data, projects, and AI-generated content."
      },
      {
        title: "Build portal with Softr",
        description: "Use Softr's templates to create a professional client portal connected to Airtable."
      },
      {
        title: "Add AI blocks",
        description: "Integrate Softr's AI blocks for content generation and summarization."
      },
      {
        title: "Set up user permissions",
        description: "Configure user roles and permissions for client access."
      }
    ],
    learningOutcomes: [
      "Build client portals without code",
      "Integrate AI into no-code platforms",
      "Manage user permissions and access",
      "Connect Airtable as a backend"
    ],
    prerequisites: [
      "Airtable account",
      "Softr account (free tier available)"
    ],
    popularity: 92,
    imageColor: "from-teal-500 to-green-500",
    iconEmoji: "📊"
  },
  {
    id: "9",
    slug: "zapier-ai-automation",
    title: "Zapier AI Automation Workflows",
    description: "Build powerful AI automations connecting 5000+ apps with Zapier",
    fullDescription: `Learn how to create AI-powered automations that connect your favorite apps. Automate content creation, customer support, data processing, and more - all without code.

Perfect for business owners and marketers looking to save time with AI automation.`,
    category: "Automation",
    difficulty: "Beginner",
    timeToBuild: "1-2 hours",
    toolsUsed: ["Zapier", "OpenAI API", "Google Sheets", "Gmail"],
    steps: [
      {
        title: "Set up Zapier account",
        description: "Create a Zapier account and understand the basics of Zaps (automations)."
      },
      {
        title: "Create your first AI Zap",
        description: "Build an automation that generates content and sends it to Google Sheets."
      },
      {
        title: "Add conditional logic",
        description: "Use filters and paths to create intelligent branching automations."
      },
      {
        title: "Set up webhook triggers",
        description: "Create custom webhooks to trigger AI automations from any app."
      }
    ],
    learningOutcomes: [
      "Build no-code automations",
      "Integrate AI into workflows",
      "Use conditional logic in automations",
      "Connect 5000+ apps seamlessly"
    ],
    prerequisites: [
      "Zapier account (free tier: 100 tasks/month)"
    ],
    popularity: 94,
    imageColor: "from-orange-500 to-red-500",
    iconEmoji: "⚡"
  },
  {
    id: "10",
    slug: "make-visual-ai",
    title: "Make.com Visual AI Workflows",
    description: "Create advanced visual AI workflows with Make.com's powerful automation platform",
    fullDescription: `Learn how to build complex AI workflows using Make.com's visual builder. Create multi-step automations with branching, aggregators, and real-time processing.

Perfect for advanced automations that require complex logic and data transformation.`,
    category: "Automation",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    toolsUsed: ["Make.com", "OpenAI API", "Google Drive", "Slack"],
    steps: [
      {
        title: "Set up Make.com scenario",
        description: "Create your first scenario and understand the visual workflow builder."
      },
      {
        title: "Add AI modules",
        description: "Integrate OpenAI modules for text generation, summarization, and analysis."
      },
      {
        title: "Use routers and aggregators",
        description: "Implement parallel processing and data aggregation for complex workflows."
      },
      {
        title: "Add error handling",
        description: "Set up error handlers and retry logic for production-ready automations."
      }
    ],
    learningOutcomes: [
      "Build visual automation workflows",
      "Use routers for parallel processing",
      "Implement error handling",
      "Create multi-step AI pipelines"
    ],
    prerequisites: [
      "Make.com account (free tier: 1000 operations/month)"
    ],
    popularity: 91,
    imageColor: "from-cyan-500 to-blue-500",
    iconEmoji: "🔧"
  },

  // ========== RAG & DEVELOPMENT STACKS (2) ==========
  {
    id: "11",
    slug: "langchain-rag-pipeline",
    title: "LangChain RAG Pipeline",
    description: "Build a production RAG pipeline using LangChain and vector databases",
    fullDescription: `Learn how to build a complete RAG (Retrieval-Augmented Generation) pipeline using LangChain. This tutorial covers document loading, splitting, embeddings, vector stores, and chain composition.

Perfect for developers building custom AI applications with document intelligence.`,
    category: "RAG",
    difficulty: "Advanced",
    timeToBuild: "4-5 hours",
    toolsUsed: ["LangChain", "OpenAI API", "Pinecone/Chroma", "Python", "FastAPI"],
    steps: [
      {
        title: "Set up LangChain environment",
        description: "Install LangChain and configure your development environment.",
        code: "pip install langchain langchain-openai langchain-pinecone"
      },
      {
        title: "Implement document loading",
        description: "Create document loaders for PDFs, websites, and text files.",
        code: "from langchain.document_loaders import PyPDFLoader\nloader = PyPDFLoader('document.pdf')\ndocuments = loader.load()"
      },
      {
        title: "Create text splitters",
        description: "Implement recursive text splitting for optimal chunking.",
        code: "from langchain.text_splitter import RecursiveCharacterTextSplitter\nsplitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)"
      },
      {
        title: "Generate embeddings",
        description: "Create embeddings using OpenAI's embedding model.",
        code: "from langchain_openai import OpenAIEmbeddings\nembeddings = OpenAIEmbeddings()"
      },
      {
        title: "Set up vector store",
        description: "Store embeddings in Pinecone or Chroma for similarity search.",
        code: "from langchain_pinecone import PineconeVectorStore\nvectorstore = PineconeVectorStore.from_documents(documents, embeddings, index_name='rag')"
      },
      {
        title: "Build the RAG chain",
        description: "Create a chain that retrieves relevant documents and generates answers.",
        code: "from langchain.chains import RetrievalQA\nqa_chain = RetrievalQA.from_chain_type(llm, retriever=vectorstore.as_retriever())"
      }
    ],
    learningOutcomes: [
      "Build production RAG pipelines",
      "Implement document processing",
      "Use vector databases effectively",
      "Create custom LangChain chains",
      "Deploy RAG applications"
    ],
    prerequisites: [
      "Python experience",
      "Understanding of LLMs and embeddings",
      "OpenAI API key"
    ],
    popularity: 97,
    imageColor: "from-green-500 to-teal-500",
    iconEmoji: "🔗"
  },
  {
    id: "12",
    slug: "local-llm-with-ollama",
    title: "Local LLM with Ollama",
    description: "Run open-source LLMs locally with Ollama and build applications",
    fullDescription: `Learn how to run LLMs like Llama, Mistral, and Gemma locally using Ollama. No API costs, complete privacy, and full control over your models.

Perfect for developers building privacy-focused AI applications or experimenting with open-source models.`,
    category: "Development",
    difficulty: "Intermediate",
    timeToBuild: "2-3 hours",
    toolsUsed: ["Ollama", "Python", "FastAPI", "Streamlit", "LangChain"],
    steps: [
      {
        title: "Install Ollama",
        description: "Download and install Ollama for your operating system.",
        code: "curl -fsSL https://ollama.com/install.sh | sh"
      },
      {
        title: "Pull an LLM model",
        description: "Download an open-source model like Llama 3 or Mistral.",
        code: "ollama pull llama3\nollama pull mistral\nollama pull gemma:2b"
      },
      {
        title: "Create API with FastAPI",
        description: "Build a FastAPI server to interact with Ollama models.",
        code: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.post('/generate')\nasync def generate(prompt: str):\n    result = subprocess.run(['ollama', 'run', 'llama3', prompt], capture_output=True)\n    return {'response': result.stdout}"
      },
      {
        title: "Build a chat interface",
        description: "Create a Streamlit chat UI for your local LLM.",
        code: "import streamlit as st\nprompt = st.text_input('Ask me anything:')\nif prompt:\n    response = requests.post('http://localhost:8000/generate', json={'prompt': prompt})\n    st.write(response.json()['response'])"
      }
    ],
    learningOutcomes: [
      "Run LLMs completely offline",
      "Build applications with open-source models",
      "Create API servers for LLMs",
      "Deploy local AI applications"
    ],
    prerequisites: [
      "Basic Python knowledge",
      "8GB+ RAM recommended",
      "Docker (optional)"
    ],
    popularity: 95,
    imageColor: "from-purple-500 to-pink-500",
    iconEmoji: "🦙"
  }
];

// Helper functions
export function getStackBySlug(slug: string): Stack | undefined {
  return stacks.find(stack => stack.slug === slug);
}

export function getStacksByCategory(category: string): Stack[] {
  return stacks.filter(stack => stack.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(stacks.map(stack => stack.category));
  return Array.from(categories);
}

export function getAlternativeStacks(currentStack: Stack, limit: number = 3): Stack[] {
  return stacks
    .filter(s => s.id !== currentStack.id && s.category === currentStack.category)
    .slice(0, limit);
}