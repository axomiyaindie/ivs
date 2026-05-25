export default async function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
      <div className="p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        {/* Page Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight border-b border-gray-100 pb-6 gradient-text">
          Terms of Service
        </h1>
        
        <p className="text-xs text-gray-400 mt-3 italic">
          Last Updated: {currentYear}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600">
          
          {/* Acceptance of Terms */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using IndieVibeStack ("the Website"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the Website.
            </p>
          </section>

          {/* Use of Content */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Use of Content</h2>
            <p>
              All content on IndieVibeStack, including tool listings, descriptions, guides, and prompts, is provided 
              for informational purposes only. While we strive for accuracy, we do not guarantee the completeness, 
              reliability, or currency of any information.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You may use the content for personal, non-commercial purposes</li>
              <li>You may not reproduce, distribute, or modify content without prior written consent</li>
              <li>Third-party tools and resources are owned by their respective companies</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. Third-Party Links</h2>
            <p>
              Our Website contains links to third-party websites, tools, and services. We do not endorse, control, 
              or assume responsibility for the content, privacy policies, or practices of any third-party sites. 
              You access third-party resources at your own risk.
            </p>
          </section>

          {/* User Conduct */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. User Conduct</h2>
            <p>
              You agree to use the Website only for lawful purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Use automated systems to scrape or extract data from the Website</li>
              <li>Interfere with the proper functioning of the Website</li>
            </ul>
          </section>

          {/* Saved Items Feature */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">5. Saved Items Feature</h2>
            <p>
              The "Saved" feature uses your browser's localStorage to store your bookmarks. This data:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Remains entirely on your device</li>
              <li>Is not collected, stored, or accessible by us</li>
              <li>Can be cleared by you at any time via browser settings</li>
            </ul>
            <p className="mt-2">
              We are not responsible for any loss of saved items due to browser data clearing or technical issues.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">6. Disclaimer of Warranties</h2>
            <p>
              The Website is provided "as is" without any warranties, express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The Website will function uninterrupted or error-free</li>
              <li>Any errors will be corrected</li>
              <li>The servers hosting the Website are free of viruses or harmful components</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, IndieVibeStack shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of or inability to use the Website.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes become effective immediately 
              upon posting. Your continued use of the Website constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to 
              conflict of law principles.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h2 className="text-lg font-bold text-gray-900">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="mt-2">
              <a 
                href="https://t.me/rakibulia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
              >
                Contact on Telegram
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} IndieVibeStack — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}