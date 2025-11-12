import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="mb-8">
          <Link 
            href="/about" 
            className="text-neutral-700 hover:text-stone-900 font-medium inline-flex items-center gap-2"
          >
            ← Back to About
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-stone-200">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Privacy Policy</h1>
          <p className="text-stone-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to JobSnap. We respect your privacy and are committed to protecting your 
                personal data. This privacy policy will inform you about how we look after your 
                personal data when you visit our platform and tell you about your privacy rights 
                and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect, use, store, and transfer different kinds of personal data about 
                you, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address, telephone number, and mailing address</li>
                <li><strong>Profile Data:</strong> Resume, work experience, education, skills, and preferences</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To connect job seekers with employers and facilitate the recruitment process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Employers:</strong> When you apply for a job, we share your profile and application materials with the relevant employer</li>
                <li><strong>Service Providers:</strong> We may share your data with third-party service providers who help us operate our platform</li>
                <li><strong>Legal Requirements:</strong> We may disclose your data if required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized or unlawful processing, accidental loss, 
                destruction, or damage. However, no method of transmission over the internet 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our platform 
                and hold certain information. Cookies help us improve your experience and analyze 
                how our service is used. You can instruct your browser to refuse all cookies or 
                indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Data Retention</h2>
              <p className="leading-relaxed">
                We will retain your personal data only for as long as necessary to fulfill the 
                purposes for which we collected it, including for legal, accounting, or reporting 
                requirements. When your data is no longer needed, we will securely delete or 
                anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically 
                for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-medium">JobSnap Privacy Team</p>
                <p>Email: privacy@jobsnap.com</p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/terms" 
            className="text-neutral-700 hover:text-stone-900 font-medium"
          >
            View Terms & Conditions →
          </Link>
        </div>
      </div>
    </div>
  );
}
