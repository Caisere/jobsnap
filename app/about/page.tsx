import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 mb-4">About JobSnap</h1>
          <p className="text-xl text-stone-600">
            Connecting talent with opportunity, one snap at a time
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-stone-200">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Our Vision</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              To revolutionize the job market by creating a seamless, intuitive platform 
              that empowers job seekers to find their dream careers and enables employers 
              to discover exceptional talent effortlessly. We envision a world where the 
              right opportunities meet the right people instantly, fostering growth, 
              innovation, and success for all.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-stone-200">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Our Mission</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              At JobSnap, our mission is to simplify and accelerate the job search and 
              recruitment process through cutting-edge technology and user-centric design. 
              We are committed to:
            </p>
            <ul className="space-y-4 text-lg text-stone-700">
              <li className="flex items-start">
                <span className="text-stone-900 font-semibold mr-3">•</span>
                <span>
                  <strong>Empowering Job Seekers:</strong> Providing tools and resources 
                  that help individuals showcase their skills, explore opportunities, and 
                  land positions that align with their aspirations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-stone-900 font-semibold mr-3">•</span>
                <span>
                  <strong>Supporting Employers:</strong> Offering a streamlined platform 
                  to post jobs, manage applications, and connect with qualified candidates 
                  quickly and efficiently.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-stone-900 font-semibold mr-3">•</span>
                <span>
                  <strong>Building Trust:</strong> Maintaining transparency, security, and 
                  integrity in every interaction on our platform.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-stone-900 font-semibold mr-3">•</span>
                <span>
                  <strong>Continuous Innovation:</strong> Constantly evolving our platform 
                  to meet the changing needs of the modern workforce and job market.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Company Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-stone-200">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Who We Are</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              JobSnap was founded with a simple yet powerful belief: finding the right job 
              or the right candidate shouldn&apos;t be complicated. We understand the challenges 
              both job seekers and employers face in today&apos;s fast-paced market, and we&apos;re 
              here to bridge that gap.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Our team is passionate about creating meaningful connections and making the 
              job search experience as smooth and efficient as possible. Whether you&apos;re 
              looking for your next career move or searching for the perfect addition to 
              your team, JobSnap is here to help you succeed.
            </p>
          </div>
        </section>

        {/* Legal Links */}
        <section className="mb-16">
          <div className="bg-stone-100 rounded-lg p-8 border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">
              Legal Information
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/privacy" 
                className="bg-white hover:bg-stone-50 text-stone-900 px-6 py-3 rounded-lg border border-stone-300 transition-colors text-center font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="bg-white hover:bg-stone-50 text-stone-900 px-6 py-3 rounded-lg border border-stone-300 transition-colors text-center font-medium"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-neutral-700 text-white rounded-lg p-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 text-stone-200">
              Join thousands of job seekers and employers who trust JobSnap
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/browsejobs" 
                className="bg-white text-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-stone-100 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link 
                href="/signup" 
                className="bg-stone-100 text-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
