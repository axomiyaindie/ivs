export default async function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
      <div className="p-8 sm:p-12 bg-white border border-gray-100 shadow-sm rounded-2xl">
        
        {/* Page Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight border-b border-gray-100 pb-6 gradient-text">
          Privacy Policy
        </h1>
        
        <p className="text-xs text-gray-400 mt-3 italic">
          Last Updated: {currentYear}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600">
          
          {/* Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. Introduction</h2>
            <p>
              Welcome to IndieVibeStack ("we," "our," or "us"). We respect your privacy and are committed to protecting 
              your personal data. This Privacy Policy explains how we handle information when you use our Website.
            </p>
            <p className="mt-2">
              <span className="font-semibold text-gray-800">Important:</span> IndieVibeStack does NOT require user accounts, 
              collect personal information, or store any user data on our servers. You can use all features of our 
              Website without providing any personal information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Information We Collect</h2>
            <p>
              <span className="font-semibold text-gray-800">We collect NO personal information.</span> Unlike most websites, 
              IndieVibeStack is designed to be privacy-first. You can browse, search, and save items without ever 
              creating an account or providing any personal data.
            </p>
            <div className="mt-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 text-sm font-medium">✓ No user accounts or registration</p>
              <p className="text-green-800 text-sm font-medium mt-1">✓ No email addresses collected</p>
              <p className="text-green-800 text-sm font-medium mt-1">✓ No names or personal identifiers</p>
              <p className="text-green-800 text-sm font-medium mt-1">✓ No payment or billing information</p>
              <p className="text-green-800 text-sm font-medium mt-1">✓ No IP address tracking</p>
              <p className="text-green-800 text-sm font-medium mt-1">✓ No cookies for tracking purposes</p>
            </div>
          </section>

          {/* Saved Items Feature (Local Storage) */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. Saved Items Feature (Local Storage)</h2>
            <p>
              The "Saved" feature allows you to bookmark tools, stacks, prompts, and guides for later reference. 
              This feature uses your browser's built-in localStorage. Here's what you need to know:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">Data Location:</span> All saved items are stored <span className="font-semibold">ONLY on your device</span> — never transmitted to or stored on our servers</li>
              <li><span className="font-semibold">No Access:</span> We have absolutely no ability to see, access, or retrieve your saved items</li>
              <li><span className="font-semibold">Persistence:</span> Your saved items remain until you manually clear them or clear your browser data</li>
              <li><span className="font-semibold">Control:</span> You can delete individual items or clear all saved items at any time from the Saved page</li>
              <li><span className="font-semibold">Browser Specific:</span> Saved items are specific to each browser — saved in Chrome won't appear in Firefox</li>
              <li><span className="font-semibold">Device Specific:</span> Items saved on one device won't sync to other devices automatically</li>
            </ul>
            <div className="mt-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm font-medium">💡 How to clear saved items:</p>
              <p className="text-blue-700 text-sm mt-1">
                Browser Settings → Privacy & Security → Clear Browsing Data → 
                Select "Cookies and other site data" or "Local Storage" → Clear Data
              </p>
              <p className="text-blue-700 text-sm mt-2">
                Alternatively, click "Clear All" on the Saved Items page within IndieVibeStack.
              </p>
            </div>
          </section>

          {/* Analytics */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. Analytics & Tracking</h2>
            <p>
              We believe in privacy-first analytics. Any analytics we collect is:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">Aggregated & Anonymous:</span> We only see general patterns (e.g., "50 people visited the Tools page today")</li>
              <li><span className="font-semibold">No Individual Tracking:</span> We cannot identify individual users or their behavior</li>
              <li><span className="font-semibold">No Third-Party Analytics:</span> We do not use Google Analytics, Facebook Pixel, or similar tracking tools</li>
              <li><span className="font-semibold">Purpose:</span> Used solely to understand which content is most helpful and improve the Website</li>
            </ul>
            <p className="mt-2">
              We do not track users across different websites or build profiles of browsing behavior.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">5. Cookies</h2>
            <p>
              Cookies are small text files stored on your device. We use them minimally:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">Essential Cookies Only:</span> We use only strictly necessary cookies for basic Website functionality</li>
              <li><span className="font-semibold">No Tracking Cookies:</span> We do not use advertising cookies, social media cookies, or cross-site tracking cookies</li>
              <li><span className="font-semibold">No Third-Party Cookies:</span> We do not allow third-party cookies on our Website</li>
              <li><span className="font-semibold">LocalStorage vs Cookies:</span> The Saved Items feature uses localStorage, which is different from cookies and is not used for tracking</li>
            </ul>
            <p className="mt-2">
              You can disable cookies in your browser settings at any time. However, please note that disabling 
              cookies may affect the Saved Items feature (which relies on localStorage, a similar technology).
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">6. Third-Party Links & Resources</h2>
            <p>
              Our Website contains links to external tools, services, documentation, and resources. Important information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">No Control:</span> We do not control or operate third-party websites</li>
              <li><span className="font-semibold">Different Policies:</span> Third-party sites have their own privacy policies and practices</li>
              <li><span className="font-semibold">No Responsibility:</span> We are not responsible for the privacy practices or content of external sites</li>
              <li><span className="font-semibold">Recommendation:</span> We encourage you to read the privacy policies of any third-party sites you visit</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">7. Children's Privacy</h2>
            <p>
              IndieVibeStack is not directed at children under the age of 13. We do not knowingly collect any 
              personal information from children. If you believe a child has provided us with personal information 
              or created any form of data on our Website, please contact us immediately so we can address the issue.
            </p>
            <p className="mt-2">
              Given that we collect no personal information from any users, there is no specific data related to 
              children stored on our systems.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">8. Data Security</h2>
            <p>
              Security is important to us. Here's how we protect you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">No Server-Side Data:</span> Since we collect no personal information, there is no data to breach on our servers</li>
              <li><span className="font-semibold">HTTPS Encryption:</span> Our Website uses HTTPS to encrypt all communications between your browser and our servers</li>
              <li><span className="font-semibold">Your Responsibility:</span> Your saved items (localStorage) depend on your browser and device security — keep your device secure</li>
              <li><span className="font-semibold">Regular Updates:</span> We keep our software dependencies updated to minimize security vulnerabilities</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">9. Your Privacy Rights</h2>
            <p>
              Because we collect no personal information, most traditional privacy rights (access, correction, deletion) 
              are automatically satisfied. However, you still have control:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><span className="font-semibold">Right to Clear Data:</span> You can clear your saved items at any time via browser settings or the Saved page</li>
              <li><span className="font-semibold">Right to Opt-Out:</span> You can disable cookies/localStorage in your browser settings</li>
              <li><span className="font-semibold">Right to Information:</span> This Privacy Policy provides complete transparency about our data practices</li>
              <li><span className="font-semibold">Right to Contact:</span> You can reach out with any privacy concerns or questions</li>
            </ul>
            <p className="mt-2">
              If you are located in the EU (GDPR), California (CCPA), or other regions with specific privacy laws, 
              this policy complies with those regulations because we simply do not collect personal data.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">10. International Data Transfers</h2>
            <p>
              Our Website is hosted on servers that may be located in various countries. However, since we do not 
              collect or store any personal information, there are no international transfers of personal data to worry about.
            </p>
            <p className="mt-2">
              Your saved items never leave your device, so they are not transferred anywhere internationally.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. 
              When we make changes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The "Last Updated" date at the top of this page will be revised</li>
              <li>Changes become effective immediately upon posting</li>
              <li>We encourage you to review this page periodically</li>
              <li>Significant changes may be announced via a notice on our Website</li>
            </ul>
            <p className="mt-2">
              Your continued use of the Website after any changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Do Not Track Signals */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">12. Do Not Track (DNT) Signals</h2>
            <p>
              Some browsers send "Do Not Track" signals to websites. Because we do not track individual users 
              across websites or build user profiles, we honor DNT signals by default. Our analytics are 
              aggregated and anonymous, with no individual tracking.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 p-5 border-l-4 border-purple-500">
            <h2 className="text-lg font-bold text-gray-900">13. Contact Us</h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, your privacy while using IndieVibeStack, 
              or if you'd like to report a privacy concern, please reach out:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <a 
                href="https://t.me/rakibulia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
              >
                📱 Contact on Telegram
              </a>
              <div className="text-sm text-gray-600 flex items-center">
                <span className="font-semibold">@rakibulia</span> — Questions, suggestions, or privacy concerns welcome
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We aim to respond to all privacy-related inquiries within 5-7 business days.
            </p>
          </section>
        </div>

        {/* Inner Footer - Simple copyright inside the card */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} IndieVibeStack — Your privacy matters. No data collection. No tracking. Just helpful resources.
          </p>
        </div>
      </div>
    </div>
  );
}