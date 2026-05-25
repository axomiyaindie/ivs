export interface Prompt {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "Writing" | "Development" | "Marketing" | "Design" | "Business" | "Productivity";
  promptText: string;
  example: string;
  tags: string[];
  popularity: number;
  usageCount: string;
}

export const prompts: Prompt[] = [
  // ========== WRITING PROMPTS (8) ==========
  {
    id: "1",
    slug: "blog-post-writer",
    title: "Blog Post Writer",
    description: "Generate complete blog posts on any topic with SEO optimization",
    category: "Writing",
    promptText: `You are an expert blog writer. Write a comprehensive blog post on the topic: [TOPIC]

Requirements:
- Title: Catchy and SEO-friendly
- Introduction: Hook the reader (50-75 words)
- 5-7 subheadings with detailed paragraphs (each 100-150 words)
- Actionable tips and examples
- Conclusion with call-to-action (50 words)
- Meta description (150 characters)
- 5 SEO keywords as a bullet list

Tone: [Professional/Casual/Educational]
Target audience: [Beginners/Intermediates/Experts]
Word count: [1500-2000 words]

Format the response with proper markdown headings.`,
    example: "Topic: How to use ChatGPT for content marketing",
    tags: ["blogging", "content", "seo", "writing"],
    popularity: 98,
    usageCount: "15.2k+"
  },
  {
    id: "2",
    slug: "email-marketing-campaign",
    title: "Email Marketing Campaign",
    description: "Create complete email sequences for product launches and newsletters",
    category: "Marketing",
    promptText: `Create a [NUMBER]-email sequence for [PURPOSE] targeting [AUDIENCE].

Email 1: Welcome/Introduction
- Subject line (50 chars)
- Body (100-150 words)
- Call-to-action

Email 2: Value/Benefits
- Subject line (50 chars)
- Body (150-200 words)
- Key benefits as bullet points

Email 3: Social Proof
- Subject line (50 chars)
- Body (150-200 words)
- Testimonials or case studies

Email 4: Urgency/CTA
- Subject line (50 chars)
- Body (100-150 words)
- Strong call-to-action

Make each email engaging, personalized, and conversion-focused.`,
    example: "5-email sequence for SaaS product launch targeting startup founders",
    tags: ["email", "marketing", "campaign", "newsletter"],
    popularity: 95,
    usageCount: "12.8k+"
  },
  {
    id: "3",
    slug: "social-media-caption",
    title: "Social Media Caption Generator",
    description: "Generate engaging captions for all social media platforms",
    category: "Marketing",
    promptText: `Write [NUMBER] social media captions for [PLATFORM] about [TOPIC].

Each caption should:
- Hook in first sentence
- Include [NUMBER] relevant hashtags
- Have [NUMBER] emojis
- End with a question or call-to-action

Platform-specific requirements:
- Twitter/X: Max 280 characters, 1-2 hashtags
- Instagram: 150-200 characters, 5-10 hashtags
- LinkedIn: Professional tone, 200-250 characters
- Facebook: Conversational, 100-150 characters

Variation types:
1. Educational/Informative
2. Entertaining/Humorous
3. Inspirational/Motivational
4. Question/Engagement
5. Product/Service focused

Make each caption unique and platform-optimized.`,
    example: "5 Instagram captions about AI tools for content creators",
    tags: ["social media", "marketing", "captions", "engagement"],
    popularity: 96,
    usageCount: "18.5k+"
  },
  {
    id: "4",
    slug: "cold-email-outreach",
    title: "Cold Email Outreach",
    description: "Write persuasive cold emails that get responses",
    category: "Business",
    promptText: `Write a cold email to [RECIPIENT TYPE] about [OFFER/VALUE].

Email structure:
1. Subject line: Catchy and curiosity-driven (under 60 chars)
2. Opening: Personalized compliment or observation
3. Value proposition: Clear benefit in 1-2 sentences
4. Social proof: Mention similar clients/success
5. Call-to-action: Specific, low-commitment request (15-min call, reply yes/no)
6. PS: Add urgency or additional value

Tone: [Professional/Friendly/Direct]
Length: Under 200 words total

Make it:
- Personalized (use [NAME] placeholder)
- Value-first (focus on them, not you)
- Easy to reply to (yes/no question)
- Mobile-friendly (short paragraphs)`,
    example: "Cold email to SaaS founders about AI automation services",
    tags: ["email", "sales", "outreach", "business"],
    popularity: 94,
    usageCount: "11.3k+"
  },
  {
    id: "5",
    slug: "product-description",
    title: "Product Description Writer",
    description: "Write compelling product descriptions that convert",
    category: "Marketing",
    promptText: `Write a product description for [PRODUCT NAME].

Product category: [CATEGORY]
Target audience: [AUDIENCE]
Key features: [LIST 3-5 FEATURES]
Unique selling point: [WHAT MAKES IT SPECIAL]

Description sections:
1. Headline: Attention-grabbing (under 10 words)
2. Subheadline: Value proposition (under 15 words)
3. Problem statement: What it solves (50 words)
4. Solution: How it works (100 words)
5. Features benefit table: Feature → Benefit
6. Social proof snippet: "Loved by [NUMBER] customers"
7. Call-to-action: "Get [PRODUCT] today"

Tone: [Professional/Playful/Urgent/Luxury]
Length: 300-400 words total

Format with bullet points and short paragraphs.`,
    example: "Description for AI-powered project management tool for remote teams",
    tags: ["ecommerce", "product", "copywriting", "sales"],
    popularity: 92,
    usageCount: "9.7k+"
  },
  {
    id: "6",
    slug: "seo-meta-tags",
    title: "SEO Meta Tags Generator",
    description: "Generate optimized meta titles and descriptions for SEO",
    category: "Marketing",
    promptText: `Generate SEO meta tags for [PAGE TOPIC].

Target keyword: [KEYWORD]
Secondary keywords: [LIST 3-5]

Generate:
1. Meta Title (50-60 characters)
   - Include primary keyword at the beginning
   - Make it click-worthy
   - Provide 3 variations

2. Meta Description (150-160 characters)
   - Include primary and secondary keywords
   - Clear value proposition
   - Call-to-action
   - Provide 3 variations

3. SEO Keywords (10-15)
   - Primary, secondary, long-tail, LSI
   - Group by search intent

4. H1 Tag (under 60 characters)
   - Include primary keyword

5. URL Slug (SEO-friendly)
   - Short, keyword-rich

Target audience: [AUDIENCE]
Search intent: [Informational/Commercial/Transactional/Navigational]`,
    example: "Meta tags for blog post about 'best AI tools for small business'",
    tags: ["seo", "marketing", "meta tags", "keywords"],
    popularity: 93,
    usageCount: "14.2k+"
  },
  {
    id: "7",
    slug: "video-script",
    title: "YouTube Video Script",
    description: "Write engaging video scripts for YouTube, TikTok, and Reels",
    category: "Writing",
    promptText: `Write a video script for [TOPIC] on [PLATFORM].

Video length: [MINUTES] minutes
Target audience: [AUDIENCE]
Goal: [Educate/Entertain/Persuade/Sell]

Script structure:

Hook (0:00-0:10):
- Attention-grabbing opening line
- Promise of value

Introduction (0:10-0:30):
- What they'll learn
- Why it matters

Main content (0:30-[END-30s]):
- [NUMBER] key points
- Each point: Explanation + Example + Visual cue
- Transitions between sections

Conclusion (last 30s):
- Summary of key takeaways
- Call-to-action (like, subscribe, comment, click link)

Engagement elements:
- Ask questions every [NUMBER] minutes
- Add pattern interrupts
- Use "you" and "I"

Format with timestamps and visual descriptions in [brackets].`,
    example: "5-minute YouTube script about 'How to start a faceless YouTube channel'",
    tags: ["video", "youtube", "script", "content creation"],
    popularity: 91,
    usageCount: "8.4k+"
  },
  {
    id: "8",
    slug: "press-release",
    title: "Press Release Writer",
    description: "Write professional press releases for product launches",
    category: "Business",
    promptText: `Write a press release for [COMPANY NAME] announcing [NEWS].

Press release structure:

FOR IMMEDIATE RELEASE

[HEADLINE]: Compelling, under 15 words
[SUBHEADLINE]: Supporting detail, under 20 words

[CITY, State] — [DATE] — [COMPANY NAME], a [COMPANY DESCRIPTION], today announced [ANNOUNCEMENT].

[Quote from CEO/Founder]: "..."

Key details:
- [Feature/Benefit 1]
- [Feature/Benefit 2]
- [Feature/Benefit 3]

[Quote from customer/partner]: "..."

[Availability details]: Pricing, where to buy

[Call-to-action]: Visit [URL] for more information

### About [COMPANY NAME]
[Company boilerplate - 50 words]

### Media Contact
[Name], [Title]
[Email]
[Phone]

Include ### at the end for "###"`,
    example: "Press release for AI startup launching new chatbot platform",
    tags: ["pr", "business", "announcement", "media"],
    popularity: 88,
    usageCount: "5.2k+"
  },

  // ========== DEVELOPMENT PROMPTS (6) ==========
  {
    id: "9",
    slug: "code-explainer",
    title: "Code Explainer",
    description: "Explain any code snippet in simple terms",
    category: "Development",
    promptText: `Explain this code in simple terms:

[PASTE CODE]

Explain:
1. What this code does (1-2 sentences for non-technical)
2. How it works step-by-step (for beginners)
3. Key functions/terms explained (glossary)
4. Common use cases (3 examples)
5. Potential issues or edge cases
6. Best practices for using this pattern

Format the explanation with:
- Emojis for visual breaks
- Code blocks for examples
- Bullet points for lists
- Bold for important terms

Target level: [Absolute Beginner/Beginner/Intermediate]`,
    example: "Explain a React useEffect hook with cleanup function",
    tags: ["code", "learning", "education", "tutorial"],
    popularity: 94,
    usageCount: "22.5k+"
  },
  {
    id: "10",
    slug: "bug-fixer",
    title: "Bug Fixer",
    description: "Debug and fix code issues with explanations",
    category: "Development",
    promptText: `Debug this code:

[PASTE CODE]

Error message (if any): [ERROR]

The issue is: [DESCRIBE WHAT'S WRONG]

Please provide:
1. Root cause analysis (why it's happening)
2. The fix (show corrected code)
3. Explanation of the fix (why it works)
4. Prevention tips (how to avoid this)
5. Alternative solutions (2-3 other ways)

Return format:
- Problem: [summary]
- Solution: [fixed code block]
- Explanation: [detailed]
- Prevention: [tips]`,
    example: "Fix infinite loop in React useEffect dependency array",
    tags: ["debugging", "code", "fix", "troubleshooting"],
    popularity: 96,
    usageCount: "19.8k+"
  },
  {
    id: "11",
    slug: "api-documentation",
    title: "API Documentation Writer",
    description: "Generate clean API documentation from code",
    category: "Development",
    promptText: `Generate API documentation for:

Endpoint: [METHOD] [URL]
Description: [WHAT IT DOES]

Request parameters:
[PARAMETERS]

Response example:
[EXAMPLE]

Generate documentation with:
1. Overview (1 paragraph)
2. Authentication required: [Yes/No]
3. Request headers (if any)
4. Request body schema
5. Request example (curl and JavaScript fetch)
6. Response schema
7. Response example
8. Error codes (with meanings)
9. Rate limiting info
10. Version notes

Format with markdown tables for parameters and error codes.`,
    example: "Documentation for POST /api/users endpoint creating new users",
    tags: ["api", "documentation", "technical", "writing"],
    popularity: 90,
    usageCount: "7.3k+"
  },
  {
    id: "12",
    slug: "sql-query-builder",
    title: "SQL Query Builder",
    description: "Generate complex SQL queries from plain English",
    category: "Development",
    promptText: `Generate SQL query for:

Database type: [MySQL/PostgreSQL/SQLite/SQL Server]
Tables: [LIST TABLES AND COLUMNS]
What I want: [DESCRIBE IN PLAIN ENGLISH]

Requirements:
- [SPECIFIC CONDITION 1]
- [SPECIFIC CONDITION 2]

Provide:
1. The SQL query (with proper formatting)
2. Explanation of what each part does
3. Expected output columns
4. Performance considerations (indexes needed)
5. Alternative queries (if applicable)
6. Edge cases to watch for

If complex, break into CTE or subquery format.
Add comments in the SQL explaining each section.`,
    example: "Get top 10 customers by total purchase amount in last 30 days",
    tags: ["sql", "database", "queries", "data"],
    popularity: 92,
    usageCount: "11.4k+"
  },
  {
    id: "13",
    slug: "unit-test-generator",
    title: "Unit Test Generator",
    description: "Generate unit tests for your code",
    category: "Development",
    promptText: `Generate unit tests for this function:

[PASTE FUNCTION CODE]

Testing framework: [Jest/Vitest/Pytest/JUnit]
Language: [JavaScript/TypeScript/Python/Java]

Requirements:
- Test happy path (normal input)
- Test edge cases (boundary values)
- Test error handling (invalid inputs)
- Mock external dependencies
- Test async behavior (if applicable)

Provide:
1. Describe what's being tested
2. Setup/teardown code
3. Individual test cases with descriptions
4. Assertion explanations
5. Code coverage expectations

Format with AAA pattern: Arrange, Act, Assert
Add comments explaining each test.`,
    example: "Jest tests for user authentication function",
    tags: ["testing", "unit tests", "quality", "code"],
    popularity: 89,
    usageCount: "9.1k+"
  },
  {
    id: "14",
    slug: "readme-generator",
    title: "README Generator",
    description: "Create professional README files for your projects",
    category: "Development",
    promptText: `Generate a README.md for [PROJECT NAME].

Project type: [Web app/CLI tool/Library/API]
Tech stack: [TECHNOLOGIES USED]

Include these sections:
1. Title with badge bar (version, license, build status)
2. Description (what, why, who for)
3. Features (bullet points with emojis)
4. Demo/Screenshots (placeholder links)
5. Quick start (installation + basic usage)
6. Detailed usage (code examples)
7. API reference (if applicable)
8. Configuration options (with defaults)
9. Contributing guidelines
10. License info
11. Acknowledgments

Add emojis for visual appeal:
- 🚀 for features
- 📦 for installation
- 💡 for examples
- 🔧 for configuration
- 🤝 for contributing

Keep it professional but approachable.`,
    example: "README for Next.js SaaS boilerplate with authentication",
    tags: ["documentation", "github", "project", "readme"],
    popularity: 93,
    usageCount: "16.7k+"
  },

  // ========== BUSINESS PROMPTS (6) ==========
  {
    id: "15",
    slug: "business-plan",
    title: "Business Plan Writer",
    description: "Create comprehensive business plans",
    category: "Business",
    promptText: `Create a business plan for [BUSINESS NAME].

Industry: [INDUSTRY]
Business model: [SaaS/Ecommerce/Service/Marketplace]
Target customers: [DESCRIBE]

Include:

1. Executive Summary (1 page)
   - Mission statement
   - Problem and solution
   - Business model
   - Financial highlights

2. Company Overview
   - History (if any)
   - Legal structure
   - Location
   - Milestones

3. Market Analysis
   - Industry size and growth
   - Target market segments
   - Customer needs/pain points
   - Competitor analysis (SWOT)

4. Product/Service
   - Detailed description
   - Pricing strategy
   - Unique value proposition
   - Roadmap (6-12 months)

5. Marketing Plan
   - Acquisition channels (primary/secondary)
   - Customer retention strategy
   - Brand positioning
   - Launch plan

6. Financial Plan
   - Startup costs (itemized)
   - Revenue projections (3 years table)
   - Profit and loss (first year monthly)
   - Break-even analysis

7. Funding Requirements
   - Amount needed
   - Use of funds
   - ROI projections

Use tables for financial data and bold key metrics.`,
    example: "Business plan for AI-powered content creation SaaS",
    tags: ["business", "plan", "startup", "strategy"],
    popularity: 91,
    usageCount: "6.8k+"
  },
  {
    id: "16",
    slug: "pitch-deck",
    title: "Pitch Deck Outline",
    description: "Create investor-ready pitch decks",
    category: "Business",
    promptText: `Create a pitch deck outline for [STARTUP NAME].

Industry: [INDUSTRY]
Stage: [Idea/Pre-seed/Seed/Series A]
Ask: [$AMOUNT]

Slides (10-12):

1. Title Slide
   - Company name + logo
   - Tagline (one sentence)
   - Presenter name + contact

2. Problem (1 slide)
   - Current pain points
   - Quantify the problem ($ lost, time wasted)
   - Who experiences it

3. Solution (1 slide)
   - Product demo screenshot/mockup
   - How it solves the problem
   - Key features

4. Why Now? (1 slide)
   - Market trends
   - Technology enablers
   - Timing advantage

5. Market Size (1 slide)
   - TAM, SAM, SOM calculation
   - Growth rate
   - Sources for numbers

6. Product (1-2 slides)
   - Screenshots/wireframes
   - User flow
   - Technical architecture (brief)

7. Traction (1 slide)
   - Key metrics: users, revenue, growth
   - Testimonials
   - Partnerships

8. Business Model (1 slide)
   - How you make money
   - Pricing tiers
   - Unit economics

9. Competition (1 slide)
   - Competitive matrix (2x2)
   - Your moats

10. Team (1 slide)
    - Founders (relevant experience)
    - Key hires
    - Advisors

11. Financials (1 slide)
    - 3-5 year projections
    - Key assumptions
    - Use of funds

12. Ask & Closing (1 slide)
    - Amount raising
    - Use of funds pie chart
    - Contact info

Each slide: minimal text, strong visuals, one key message.`,
    example: "Pitch deck for AI productivity tool raising $500k seed round",
    tags: ["pitch deck", "fundraising", "investors", "startup"],
    popularity: 89,
    usageCount: "5.5k+"
  },
  {
    id: "17",
    slug: "competitive-analysis",
    title: "Competitive Analysis",
    description: "Analyze competitors and identify opportunities",
    category: "Business",
    promptText: `Perform competitive analysis for [YOUR PRODUCT] against [COMPETITOR NAMES].

Your product: [DESCRIPTION]
Target market: [MARKET]

Analyze each competitor on:

1. Company Overview
   - Founded year
   - Funding raised
   - Team size
   - Key customers

2. Product Features Matrix
   - Feature 1: Has/Doesn't have
   - Feature 2: Has/Doesn't have
   - Feature 3: Has/Doesn't have
   (Create table)

3. Pricing Comparison
   - Free tier available?
   - Starting price
   - Enterprise pricing
   - Hidden costs

4. GTM Strategy
   - Primary channels
   - Pricing model
   - Sales motion

5. Strengths (3-5)
6. Weaknesses (3-5)
7. Opportunities for us (3-5)
8. Threats to watch (3-5)

9. Positioning Statement
   - How we differentiate
   - Our unfair advantage

10. Battle Card (one-page summary)
    - Their pitch
    - How to counter
    - Key differentiators

Format with tables for feature comparison.`,
    example: "Competitive analysis of Zapier vs Make.com vs n8n",
    tags: ["competitive", "analysis", "strategy", "market"],
    popularity: 87,
    usageCount: "4.9k+"
  },
  {
    id: "18",
    slug: "customer-interview",
    title: "Customer Interview Script",
    description: "Conduct effective customer discovery interviews",
    category: "Business",
    promptText: `Create a customer interview script for [PRODUCT IDEA].

Target user persona: [DESCRIBE]
Interview length: [15/30/45] minutes

Script structure:

1. Introduction (2 min)
   - Thank them for their time
   - Explain purpose (improving product, not selling)
   - Get permission to record
   - Confidentiality promise

2. Warm-up questions (3 min)
   - "Tell me about your role and daily responsibilities"
   - "What tools do you use most often?"
   - "What's the hardest part of your job?"

3. Problem exploration (10 min)
   - "Walk me through how you currently handle [TASK]"
   - "What frustrates you about this process?"
   - "How much time/money does this cost you?"
   - "Have you tried solving this before?"
   - "What didn't work about those solutions?"

4. Solution feedback (10 min)
   - Show prototype/screenshots/wireframe
   - "What's your first impression?"
   - "What would you change?"
   - "How would this fit into your workflow?"
   - "What's missing?"

5. Willingness to pay (5 min)
   - "If this solved your problem, what would you pay?"
   - "Would you switch from current solution?"
   - "What would make this a 'must-have'?"

6. Closing (2 min)
   - "Is there anyone else you'd recommend we talk to?"
   - "Can we follow up if we have more questions?"
   - Thank them again

Probing techniques:
- "Tell me more about that..."
- "Why is that important to you?"
- "Show me how you do that..."

Avoid leading questions. Focus on past behavior, not future intent.`,
    example: "Customer interview for project management tool for remote teams",
    tags: ["customer", "interview", "research", "validation"],
    popularity: 88,
    usageCount: "6.1k+"
  },
  {
    id: "19",
    slug: "landing-page-copy",
    title: "Landing Page Copywriter",
    description: "Write high-converting landing page copy",
    category: "Marketing",
    promptText: `Write landing page copy for [PRODUCT NAME].

Product: [DESCRIPTION]
Target audience: [AUDIENCE]
Unique selling point: [MAIN BENEFIT]

Sections:

1. Hero Section
   - Headline (under 10 words, benefit-driven)
   - Subheadline (under 20 words, supporting benefit)
   - Primary CTA button text (action-oriented)
   - Secondary CTA (optional)

2. Social Proof Bar
   - "Trusted by [NUMBER] customers"
   - Logos of 3-5 recognizable brands (placeholders)
   - Rating stars + review count

3. Problem Section
   - Headline: "You're struggling with [PAIN POINT]"
   - 3 pain points as bullet points
   - Empathy statement

4. Solution Section
   - Headline: "Meet [PRODUCT NAME]"
   - 3 key benefits with icons
   - Screenshot placeholder

5. How It Works (3 steps)
   - Step 1: [ACTION] (benefit)
   - Step 2: [ACTION] (benefit)
   - Step 3: [ACTION] (benefit)

6. Features Grid (6 features)
   - Feature 1: Headline + 1 sentence
   - Feature 2: Headline + 1 sentence
   - (repeat to 6)

7. Testimonials (3)
   - Quote + Name + Title + Company + Photo placeholder

8. Pricing Section
   - 3 tiers (Basic, Pro, Enterprise)
   - Price + features list + CTA
   - Annual discount note

9. FAQ (4-6 questions)
   - Question + short answer

10. Final CTA Section
    - Headline: "Start [BENEFIT] today"
    - Subheadline: No credit card required, free trial
    - CTA button

Add psychological triggers:
- Scarcity ("Limited spots")
- Urgency ("Offer ends [DATE]")
- Social proof ("Join 10,000+ customers")
- Risk reversal ("30-day money-back guarantee")`,
    example: "Landing page for AI writing assistant targeting content creators",
    tags: ["landing page", "copywriting", "conversion", "marketing"],
    popularity: 94,
    usageCount: "13.5k+"
  },
  {
    id: "20",
    slug: "sales-email-sequence",
    title: "Sales Email Sequence",
    description: "Create automated email sequences for lead nurturing",
    category: "Marketing",
    promptText: `Create a [NUMBER]-email sales sequence for [PRODUCT/SERVICE].

Target: [LEAD TYPE - e.g., cold leads, warm leads, trial users]
Goal: [CONVERSION GOAL - e.g., book demo, purchase, upgrade]

Email 1: Introduction/Value
- Subject line: [CREATE 3 OPTIONS]
- Preview text: [CREATE 2 OPTIONS]
- Hook (personalized opener)
- Value proposition (1-2 sentences)
- Social proof (1 sentence)
- CTA: Low commitment (click link, reply yes/no)

Email 2: Problem/Solution
- Subject line: Problem-focused
- Pain point acknowledgment
- How we solve it
- Case study snippet (result)
- CTA: Medium commitment (watch video, read case study)

Email 3: Social Proof
- Subject line: Success story
- Customer quote + result ($, time saved, etc.)
- Before/after comparison
- Risk reversal (guarantee, free trial)
- CTA: High commitment (book call, start trial)

Email 4: Scarcity/Urgency
- Subject line: FOMO-driven
- Limited offer (discount, bonus)
- Timer or deadline
- What they'll miss
- CTA: Final action

Email 5: Breakup (if no response)
- Subject line: "Should I close your file?"
- No hard sell
- Open door for future
- Ask for feedback

Each email: under 150 words, 1 main idea, 1 CTA, mobile-friendly. Add personalization tokens: [First Name], [Company], [Industry].`,
    example: "5-email sequence for SaaS free trial users to convert to paid",
    tags: ["sales", "email", "sequence", "automation"],
    popularity: 92,
    usageCount: "10.2k+"
  }
];

// Helper functions
export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find(prompt => prompt.slug === slug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter(prompt => prompt.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(prompts.map(prompt => prompt.category));
  return Array.from(categories);
}

export function getAlternativePrompts(currentPrompt: Prompt, limit: number = 3): Prompt[] {
  const sameCategory = prompts.filter(p => 
    p.id !== currentPrompt.id && p.category === currentPrompt.category
  );
  
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  
  const similarTags = prompts.filter(p => 
    p.id !== currentPrompt.id &&
    p.tags.some(tag => currentPrompt.tags.includes(tag))
  );
  
  return [...sameCategory, ...similarTags].slice(0, limit);
}