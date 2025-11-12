import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Terms & Conditions</h1>
          <p className="text-stone-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using JobSnap (&quot;the Platform&quot;), you accept and agree to be 
                bound by these Terms and Conditions. If you do not agree to these terms, please 
                do not use our Platform. We reserve the right to modify these terms at any time, 
                and your continued use of the Platform constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Eligibility</h2>
              <p className="leading-relaxed mb-4">
                To use JobSnap, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be at least 18 years of age or the age of legal majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Not be prohibited from using the Platform under applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. User Accounts</h2>
              <p className="leading-relaxed mb-4">
                When you create an account with us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must immediately notify us of any unauthorized use of your account</li>
                <li>You may not transfer or share your account with others</li>
                <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. User Content and Conduct</h2>
              <p className="leading-relaxed mb-4">
                When posting content on JobSnap, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide truthful and accurate information in all profiles, resumes, and job postings</li>
                <li>Not post content that is false, misleading, defamatory, or fraudulent</li>
                <li>Not post content that infringes on intellectual property rights of others</li>
                <li>Not post content that is offensive, discriminatory, or harmful</li>
                <li>Not engage in spam, harassment, or abusive behavior toward other users</li>
                <li>Not attempt to manipulate or circumvent the Platform&apos;s functionality</li>
                <li>Not use automated systems or bots to access the Platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Job Seekers</h2>
              <p className="leading-relaxed mb-4">
                As a job seeker on JobSnap:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You grant employers permission to view your profile and application materials</li>
                <li>You are responsible for the accuracy of your resume and profile information</li>
                <li>You understand that applying for jobs does not guarantee employment</li>
                <li>You agree to communicate professionally with employers</li>
                <li>You will not misrepresent your qualifications, experience, or credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Employers</h2>
              <p className="leading-relaxed mb-4">
                As an employer on JobSnap:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must post legitimate job opportunities only</li>
                <li>You must comply with all applicable employment and anti-discrimination laws</li>
                <li>You are responsible for the accuracy of job postings and company information</li>
                <li>You agree to treat applicant data confidentially and in accordance with privacy laws</li>
                <li>You will not use the Platform to collect personal data for purposes other than recruitment</li>
                <li>You are solely responsible for all hiring decisions and employment relationships</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content, trademarks, and intellectual property on JobSnap are owned by us or 
                our licensors. You are granted a limited license to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and use the Platform for personal or internal business purposes</li>
                <li>Not reproduce, distribute, or create derivative works from our content</li>
                <li>Not remove or modify any copyright or proprietary notices</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You retain ownership of content you upload but grant us a worldwide, non-exclusive, 
                royalty-free license to use, display, and distribute your content on the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Payment Terms</h2>
              <p className="leading-relaxed">
                If you purchase any paid services on JobSnap, you agree to provide accurate 
                payment information and authorize us to charge the applicable fees. All fees 
                are non-refundable unless otherwise specified. We reserve the right to change 
                our pricing at any time with notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">9. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                JobSnap is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, 
                either express or implied. We do not warrant that the Platform will be uninterrupted, 
                secure, or error-free. We are not responsible for the conduct of users or the 
                accuracy of content posted by users. We do not guarantee employment outcomes or 
                the quality of candidates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">10. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, JobSnap and its officers, directors, 
                employees, and agents shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of the Platform. Our 
                total liability shall not exceed the amount you paid to us in the past 12 months, 
                or $100, whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless JobSnap from any claims, 
                damages, losses, liabilities, and expenses (including legal fees) arising from 
                your use of the Platform, your violation of these terms, or your violation of 
                any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">12. Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for any 
                reason, including violation of these terms. Upon termination, your right to use 
                the Platform will immediately cease. You may also terminate your account at any 
                time by contacting us or using the account deletion feature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">13. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with 
                the laws of the jurisdiction in which JobSnap operates, without regard to its 
                conflict of law provisions. Any disputes arising from these terms shall be 
                resolved in the appropriate courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">14. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. When we 
                make changes, we will update the &quot;Last updated&quot; date at the top of this page. 
                Your continued use of the Platform after changes are posted constitutes your 
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">15. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
                <p className="font-medium">JobSnap Legal Team</p>
                <p>Email: legal@jobsnap.com</p>
              </div>
            </section>

            <section className="pt-6 border-t border-stone-200">
              <p className="text-sm text-stone-600 italic">
                By using JobSnap, you acknowledge that you have read, understood, and agree to 
                be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/privacy" 
            className="text-neutral-700 hover:text-stone-900 font-medium"
          >
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
