import RecentJobs from "@/components/recent-jobs";
import Link from "next/link";
import { Suspense } from "react";


export default function Home() {

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-20 bg-stone-100 h-screen flex justify-center items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Find Your Dream Job
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Discover thousands of job opportunities with top companies
                    </p>
                    <Link
                        href="/browsejobs"
                        className="bg-neutral-700 text-white p-2 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300"
                    >
                        Browse Jobs
                    </Link>
                </div>
            </section>
            {/* Recent Jobs Section */}
            <section className="max-w-7xl mx-auto w-full pb-4">
                <h2 className="text-2xl font-bold text-stone-700 mb-6">Recent Jobs</h2>
                <div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <RecentJobs />
                    </Suspense>
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/browsejobs"
                        className="text-blue-600 hover:text-blue-700 font-medium underline hover:no-underline"
                    >
                        View All Jobs →
                    </Link>
                </div>
            </section>
        </div>
    );
}
