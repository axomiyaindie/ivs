export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  readTime: string;
  author: string;
  date: string;
  tags: string[];
  imageColor: string;
  iconEmoji: string;
}

export const guides: Guide[] = [
  // ========== BEGINNER GUIDES ==========
  {
    id: "1",
    slug: "what-is-rag",
    title: "What is RAG? A Complete Beginner's Guide",
    description: "Understand Retrieval-Augmented Generation (RAG) and how it makes LLMs 10x more useful for real-world applications",
    content: `# What is RAG? A Complete Beginner's Guide

## Introduction

Retrieval-Augmented Generation (RAG) is one of the most important techniques in modern AI development. It combines the power of Large Language Models (LLMs) with your own private data, allowing AI to answer questions based on your documents, not just what it learned during training.

## The Problem with Traditional LLMs

Standard LLMs like GPT-4 have three major limitations:

### 1. Outdated Knowledge
LLMs are frozen at their training cutoff date. GPT-4 doesn't know about events after April 2023.

### 2. Hallucinations
When an LLM doesn't know something, it makes up plausible-sounding but incorrect information.

### 3. No Access to Private Data
Your company's internal documents, customer emails, or proprietary research aren't in the training data.

## How RAG Works in 3 Steps

### Step 1: Indexing (Preparation)
First, you process all your documents by breaking them into chunks and converting them to vector embeddings.

### Step 2: Retrieval (When a User Asks)
When a user asks a question, it's converted to a vector and used to find the most similar document chunks.

### Step 3: Generation (LLM Answers)
The relevant chunks are sent to the LLM along with the question, and the AI generates an answer based on that specific information.

## Code Example

Here's a simple RAG implementation using LangChain:

\`\`\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

# Load your documents
loader = TextLoader("your-document.txt")
documents = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# Create the RAG chain
llm = ChatOpenAI(model="gpt-4", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever()
)

# Ask a question
answer = qa_chain.run("What is the main topic of this document?")
print(answer)
\`\`\`

## Real-World Applications

1. Customer Support - AI that answers questions from your knowledge base
2. Legal Research - Find relevant cases and statutes
3. Medical Diagnosis - Access latest research papers
4. Code Documentation - Search internal codebases
5. Personal Assistant - Remember your preferences and history

## Popular RAG Tools

- LangChain - Most popular framework
- LlamaIndex - Specialized for RAG
- Pinecone - Managed vector database
- Chroma - Open-source vector database

## Next Steps

1. Start with a simple RAG prototype
2. Add evaluation metrics
3. Experiment with chunk sizes
4. Implement caching to reduce costs
5. Deploy to production with monitoring

RAG is the foundation of most production LLM applications. Master it, and you'll be able to build AI systems that actually work with your real-world data!`,
    category: "Beginner",
    readTime: "10 min",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    tags: ["RAG", "LLM", "Vector Databases", "LangChain"],
    imageColor: "from-purple-500 to-blue-500",
    iconEmoji: "🔍"
  },
  {
    id: "2",
    slug: "prompt-engineering-guide",
    title: "The Ultimate Prompt Engineering Guide",
    description: "Master the art of crafting prompts that consistently get amazing results from any LLM",
    content: `# The Ultimate Prompt Engineering Guide

## What is Prompt Engineering?

Prompt engineering is the practice of designing and optimizing inputs to guide AI models toward desired outputs. It's the single most important skill for anyone working with LLMs.

## Why Prompt Engineering Matters

A well-crafted prompt can mean the difference between:
- Accurate, useful response vs Hallucinated nonsense
- Structured output vs Random text
- Cost-efficient vs Wasting tokens

## Core Principles

### 1. Be Specific and Detailed

Bad example: "Write about dogs"

Good example: "Write a 500-word article about Labrador Retrievers, including their temperament, exercise needs, and common health issues"

### 2. Set the Role

Example: "You are an expert financial advisor with 20 years of experience. Explain compound interest to a 15-year-old."

### 3. Specify Output Format

Example: "Return the response as JSON with fields: summary, key_points, and action_items"

### 4. Use Constraints

Example: "Explain quantum computing in under 200 words, using only words a 5th grader would understand"

### 5. Provide Examples (Few-Shot Learning)

Example:
\`\`\`
Convert these sentiments:
Input: "I love this product!" -> Output: Positive
Input: "It's okay I guess" -> Output: Neutral
Input: "Terrible experience" -> Output: Negative
Input: "Best purchase ever!" -> Output:
\`\`\`

## Advanced Techniques

### Chain-of-Thought (CoT) Prompting

Force the model to show its reasoning:

Question: "Roger has 5 tennis balls. He buys 2 cans of tennis balls. Each can has 3 tennis balls. How many does he have now?"

Let's think step by step:
1. Roger starts with 5 balls
2. He buys 2 cans x 3 balls per can = 6 balls
3. Total = 5 + 6 = 11 balls

Answer: 11 balls

### Tree of Thoughts (ToT)

Explore multiple reasoning paths: "Consider 3 different approaches to solve this problem, evaluate the pros and cons of each, then choose the best approach"

## Prompt Templates Library

### Content Creation Template
\`\`\`
Write a [blog post / social caption / email] about [TOPIC] for [AUDIENCE] in a [TONE] tone.
Include:
- A hook in the first sentence
- 3-5 bullet points
- A call-to-action at the end
Length: 500 words
\`\`\`

### Code Generation Template
\`\`\`
Write a [LANGUAGE] function that [DESCRIPTION].
Requirements:
- Type hints for all parameters
- Docstring explaining usage
- Error handling
- 2 example usages
\`\`\`

## Common Mistakes to Avoid

1. Being too vague - The AI can't read your mind
2. Over-constraining - Too many rules confuse the model
3. Ignoring context length - Stay within token limits
4. Not iterating - Prompt engineering is an iterative process

## Testing Your Prompts

Always test prompts with:
- Edge cases (empty inputs, extreme values)
- Different phrasings of the same request
- Various temperatures (0 = deterministic, 1 = creative)

## The Future

Prompt engineering is evolving into:
- Automatic prompt optimization
- Multi-modal prompting (text + images)
- Prompt composition and chaining

Start practicing today - prompt engineering is becoming as essential as search engine skills were in the early 2000s!`,
    category: "Beginner",
    readTime: "12 min",
    author: "James Wilson",
    date: "2024-01-20",
    tags: ["Prompt Engineering", "LLM", "Best Practices"],
    imageColor: "from-green-500 to-emerald-500",
    iconEmoji: "✏️"
  },
  {
    id: "3",
    slug: "no-code-ai-intro",
    title: "No-Code AI: Build Without Programming",
    description: "Complete introduction to building AI applications without writing a single line of code",
    content: `# No-Code AI: Build Without Programming

## The No-Code Revolution

You no longer need to be a programmer to build AI applications. No-code platforms have democratized AI development, allowing entrepreneurs, marketers, and domain experts to create powerful tools.

## Why No-Code AI?

### For Business Owners
- Launch products in days, not months
- Test ideas without technical investment
- Iterate quickly based on feedback

### For Non-Technical Founders
- Build your MVP without hiring developers
- Understand the product development process
- Retain full ownership of your IP

### For Agencies
- Deliver faster to clients
- Lower development costs
- Handle more projects simultaneously

## Best No-Code AI Platforms

### 1. Bubble.io + OpenAI
Build complete web apps with AI features
- Drag-and-drop interface builder
- Native API connector for OpenAI
- Built-in database and user auth
- Best for: Full-stack AI applications

### 2. Softr + Airtable
Create AI-powered client portals
- Turn Airtable into websites
- AI content blocks built-in
- User permissions system
- Best for: Internal tools, client portals

### 3. Make.com / Zapier
Automate workflows with AI
- Visual workflow builder
- Connect 1000+ apps
- Add AI to any step
- Best for: Automations, integrations

### 4. Glide
Turn spreadsheets into AI apps
- Google Sheets as backend
- AI image recognition
- Native mobile apps
- Best for: Mobile-first applications

## Building Your First No-Code AI App

### Step 1: Choose Your Use Case

Popular options:
- Content generator (blog posts, social captions)
- Customer support chatbot
- Lead qualification bot
- Document summarizer
- Image generator

### Step 2: Select Your Tools

Example stack for a content generator:
- Frontend: Bubble.io
- Database: Bubble's built-in DB
- AI: OpenAI API
- Automation: Zapier (optional)

### Step 3: Design Your Workflow

1. User inputs topic and preferences
2. Bubble sends request to OpenAI
3. AI generates content
4. Result displayed to user
5. Option to save or export

### Step 4: Build and Test

- Start with a prototype
- Test with real users
- Iterate based on feedback
- Add features gradually

## Real-World Success Stories

### Case Study 1: AI Resume Builder
A non-technical founder built a resume optimization tool using Bubble + OpenAI. Generated $10k MRR in 3 months.

### Case Study 2: Legal Document Analyzer
A lawyer created a tool that summarizes contracts using Make.com workflows. Saves 20 hours per week.

### Case Study 3: Social Media Scheduler
A marketing agency built an AI content calendar using Softr and Airtable. Manages 50+ client accounts.

## Limitations to Know

No-code isn't magic. It has limits:
- Scalability - May not handle millions of users
- Customization - Can't do everything code can
- Vendor lock-in - Harder to migrate
- Costs - Can get expensive at scale

## Getting Started Today

1. Start with a free trial of Bubble.io
2. Follow a tutorial
3. Build something small (not your dream product)
4. Learn by doing - break things, fix them
5. Join communities for support

The no-code movement is just getting started. Your idea is possible without coding - you just need to learn the tools!`,
    category: "Beginner",
    readTime: "10 min",
    author: "Maria Rodriguez",
    date: "2024-01-25",
    tags: ["No-Code", "Bubble", "Softr", "Make.com"],
    imageColor: "from-blue-500 to-cyan-500",
    iconEmoji: "🚀"
  },

  // ========== INTERMEDIATE GUIDES ==========
  {
    id: "4",
    slug: "langchain-tutorial",
    title: "LangChain Tutorial: Build Production LLM Apps",
    description: "Complete guide to using LangChain for building robust, production-ready LLM applications",
    content: `# LangChain Tutorial: Build Production LLM Apps

## Why LangChain?

LangChain is the most popular framework for building LLM applications. It provides abstractions that save thousands of lines of boilerplate code.

## Core Concepts

### 1. Models

LangChain supports 50+ LLM providers with a unified interface.

\`\`\`python
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

# OpenAI
openai_llm = ChatOpenAI(
    model="gpt-4-turbo-preview",
    temperature=0.7
)

# Anthropic Claude
claude_llm = ChatAnthropic(
    model="claude-3-opus-20240229",
    temperature=0.7
)

response = openai_llm.invoke("Hello, world!")
print(response.content)
\`\`\`

### 2. Prompts and Templates

Manage prompts with variables and versioning.

\`\`\`python
from langchain.prompts import ChatPromptTemplate

# Simple prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant specialized in {domain}."),
    ("user", "{input}")
])

chain = prompt | llm
result = chain.invoke({"domain": "AI", "input": "What is RAG?"})
\`\`\`

### 3. Chains

Chains combine prompts, models, and output parsers.

\`\`\`python
from langchain.chains import LLMChain

chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run(input="Explain quantum computing")
\`\`\`

### 4. Output Parsers

Parse LLM responses into structured data.

\`\`\`python
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class Article(BaseModel):
    title: str = Field(description="Article title")
    summary: str = Field(description="Brief summary")
    key_points: list[str] = Field(description="3-5 key points")

parser = PydanticOutputParser(pydantic_object=Article)
\`\`\`

### 5. Memory

Maintain conversation state across interactions.

\`\`\`python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()
memory.save_context({"input": "Hi"}, {"output": "Hello!"})

chain = ConversationChain(llm=llm, memory=memory)
\`\`\`

### 6. Retrieval (RAG)

Connect LLMs to your documents.

\`\`\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA

# Load documents
loader = TextLoader("document.txt")
documents = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# Create vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# Create RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    return_source_documents=True
)

result = qa_chain.invoke({"query": "What is the main topic?"})
print(result["result"])
\`\`\`

## Production Best Practices

### 1. Caching

\`\`\`python
from langchain.cache import InMemoryCache
from langchain.globals import set_llm_cache

set_llm_cache(InMemoryCache())
\`\`\`

### 2. Error Handling

\`\`\`python
import time
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=10)
)
def invoke_with_retry(chain, input_data):
    try:
        return chain.invoke(input_data)
    except Exception as e:
        print(f"Error: {e}")
        raise
\`\`\`

### 3. Streaming

\`\`\`python
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

llm = ChatOpenAI(
    model="gpt-4",
    streaming=True,
    callbacks=[StreamingStdOutCallbackHandler()]
)
\`\`\`

## Next Steps

1. Start with simple chains
2. Add memory for conversations
3. Implement RAG for custom data
4. Build agents for complex tasks
5. Deploy to production with monitoring

LangChain makes complex LLM applications accessible. Start building today!`,
    category: "Intermediate",
    readTime: "15 min",
    author: "Dr. Alex Johnson",
    date: "2024-02-10",
    tags: ["LangChain", "LLM", "Framework", "Development"],
    imageColor: "from-cyan-500 to-blue-500",
    iconEmoji: "🔗"
  },
  {
    id: "5",
    slug: "rag-optimization",
    title: "RAG Optimization: Advanced Techniques",
    description: "Take your RAG pipeline from good to great with advanced optimization strategies",
    content: `# RAG Optimization: Advanced Techniques

## The RAG Optimization Journey

Building a RAG pipeline is easy. Building a GREAT RAG pipeline takes work. This guide covers advanced techniques to improve retrieval quality, response accuracy, and user experience.

## Evaluation Metrics

Before optimizing, you must measure.

### Retrieval Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Hit Rate | Does relevant doc appear in top-k? | Greater than 85 percent |
| MRR | How high is the first relevant result? | Greater than 0.7 |
| NDCG | Quality of ranked results | Greater than 0.8 |

### Generation Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Answer Relevance | Does answer address the question? | Greater than 0.85 |
| Faithfulness | Is info grounded in context? | Greater than 0.9 |
| Answer Correctness | Is the factual answer right? | Greater than 0.85 |

## Chunking Strategies

### Fixed-Size Chunking

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\\n\\n", "\\n", " ", ""]
)
chunks = splitter.split_documents(documents)
\`\`\`

### Semantic Chunking

Use embeddings to find natural breakpoints.

\`\`\`python
from langchain.experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
splitter = SemanticChunker(
    embeddings=embeddings,
    breakpoint_threshold_type="percentile"
)
chunks = splitter.split_documents(documents)
\`\`\`

### Optimal Chunk Sizes by Content Type

| Content Type | Chunk Size | Overlap |
|--------------|-----------|---------|
| Social media posts | 200-300 | 50 |
| News articles | 500-800 | 100 |
| Research papers | 1000-1500 | 200 |
| Books | 1500-2000 | 250 |

## Embedding Models

### Model Comparison

| Model | Dimension | Speed | Accuracy |
|-------|-----------|-------|----------|
| text-embedding-3-small | 1536 | Fast | Good |
| text-embedding-3-large | 3072 | Medium | Excellent |
| bge-large-en | 1024 | Medium | Good |

## Retrieval Strategies

### Hybrid Search

Combine keyword and vector search.

\`\`\`python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

bm25_retriever = BM25Retriever.from_documents(documents)
bm25_retriever.k = 5

vector_retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.3, 0.7]
)

results = ensemble_retriever.get_relevant_documents(query)
\`\`\`

### Re-ranking with Cross-Encoders

\`\`\`python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

model = HuggingFaceCrossEncoder(
    model_name="cross-encoder/ms-marco-MiniLM-L-6-v2"
)
compressor = CrossEncoderReranker(model=model, top_n=3)

compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=vector_retriever
)

results = compression_retriever.get_relevant_documents(query)
\`\`\`

### Multi-Query Retrieval

\`\`\`python
from langchain.retrievers.multi_query import MultiQueryRetriever

retriever = MultiQueryRetriever.from_llm(
    retriever=vector_retriever,
    llm=llm
)

results = retriever.get_relevant_documents(query)
\`\`\`

## Prompt Engineering for RAG

### Standard RAG Prompt

\`\`\`
You are a helpful AI assistant. Use ONLY the following context to answer the question.

Context: {context}

Question: {question}

Instructions:
- If the answer is in the context, provide it clearly
- If not in context, say "I cannot answer based on the provided documents"
- Include citations when possible
- Be concise but complete
\`\`\`

## Production Considerations

### Caching Embeddings

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=1000)
def get_embeddings(text: str):
    return embeddings.embed_query(text)

query_embedding = get_embeddings(query)
\`\`\`

### Metadata Filtering

\`\`\`python
for doc in documents:
    doc.metadata = {
        "source": doc_source,
        "date": doc_date,
        "category": doc_category
    }

retriever = vectorstore.as_retriever(
    search_kwargs={
        "filter": {"category": "research_papers"},
        "k": 10
    }
)
\`\`\`

## Common Pitfalls and Solutions

| Problem | Solution |
|---------|----------|
| Low retrieval accuracy | Try hybrid search + re-ranking |
| Hallucinations | Improve prompts + add citations |
| Slow response | Cache + optimize chunk size |
| High costs | Smaller models + selective retrieval |

## Next Steps

1. Implement evaluation before optimization
2. Test different retrieval strategies
3. Monitor production performance
4. Continuously update your document index
5. Collect user feedback on answer quality

RAG optimization is an ongoing process. Start with simple metrics, then iterate!`,
    category: "Advanced",
    readTime: "18 min",
    author: "Dr. Emily Zhang",
    date: "2024-02-01",
    tags: ["RAG", "Optimization", "Vector Databases", "Production"],
    imageColor: "from-orange-500 to-red-500",
    iconEmoji: "⚡"
  }
];

// Helper functions
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(guide => guide.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(guides.map(guide => guide.category));
  return Array.from(categories);
}

export function getAlternativeGuides(currentGuide: Guide, limit: number = 3): Guide[] {
  return guides
    .filter(g => g.id !== currentGuide.id && g.category === currentGuide.category)
    .slice(0, limit);
}