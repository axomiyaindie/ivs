export default async function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        <h1 className="text-3xl font-extrabold tracking-tight border-b border-gray-100 pb-6 gradient-text">
          About IndieVibeStack
        </h1>
        
        <p className="text-xs text-gray-400 mt-3 italic">
          Last Updated: {currentYear}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600">
          
          {/* Who We Are */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">Who We Are</h2>
            <p>
              IndieVibeStack is your go-to resource hub for building real AI products — even if you can't code. 
              We curate the best AI tools, project stacks, prompts, and guides to help indie hackers and 
              non-technical founders turn their ideas into scalable SaaS products.
            </p>
            <p className="mt-2">
              The name reflects our mission: empowering independent creators ("Indie") with the right tools 
              and knowledge to build successful AI-powered products ("VibeStack").
            </p>
          </section>

          {/* Our Mission */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">Our Mission</h2>
            <p>
              We believe that anyone with a great idea should be able to build it, regardless of technical background. 
              Our mission is to democratize AI product development by providing:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Curated listings of 500+ AI tools across multiple categories</li>
              <li>Step-by-step project stacks to build real applications</li>
              <li>A growing library of battle-tested AI prompts</li>
              <li>In-depth guides and tutorials for beginners and pros alike</li>
            </ul>
          </section>

          {/* What We Offer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-700">🔧 AI Tools Directory</h3>
                <p className="text-sm mt-1">500+ curated tools for every use case</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-700">📚 Project Stacks</h3>
                <p className="text-sm mt-1">Step-by-step tutorials to build real products</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-pink-700">💬 AI Prompts</h3>
                <p className="text-sm mt-1">1000+ prompts to supercharge your workflow</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-700">📖 Guides</h3>
                <p className="text-sm mt-1">In-depth tutorials for all skill levels</p>
              </div>
            </div>
          </section>

          {/* Creator & Professional Work Section - Available for Hire */}
          <section className="space-y-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 p-5 border-l-4 border-purple-500">
            <h2 className="text-lg font-bold text-gray-900">
              Creator & Professional Work
            </h2>
            <p className="font-medium text-gray-800">
              IndieVibeStack is a passion project created by an independent developer. Alongside this, I work as a freelance developer.
            </p>
            <div className="mt-3 space-y-2">
              <p className="font-semibold text-gray-800">🚀 Available for New Projects:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Web & Mobile Apps</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Modern Websites</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">AI Workflows</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Automation & Bots</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">No-Code Solutions</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">API Integrations</span>
              </div>
            </div>
            <p className="text-sm mt-3">
              Looking to build your next AI product? Need help with web development, AI workflows, automation, 
              or custom integrations? Let's bring your ideas to life.
            </p>
            
            {/* Contact Button */}
            <div className="mt-4 pt-2">
              <a 
                href="https://t.me/rakibulia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
              >
                📱 Contact for Work
              </a>
              <p className="text-xs text-gray-500 mt-2">
                @rakibulia — Questions, collaborations, or project inquiries welcome!
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">Why Choose IndieVibeStack</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-medium text-gray-800">Curated Quality:</span> Every tool is manually reviewed</li>
              <li><span className="font-medium text-gray-800">No Bias:</span> No paid placements or affiliate promotions</li>
              <li><span className="font-medium text-gray-800">100% Free:</span> No ads, no paywalls, no signups required</li>
              <li><span className="font-medium text-gray-800">Actionable:</span> Focused on building, not just theory</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} IndieVibeStack — Build Real AI Products. Even If You Can't Code.
          </p>
        </div>
      </div>
    </div>
  );
}