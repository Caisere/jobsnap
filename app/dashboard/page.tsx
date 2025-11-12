import Application from "@/components/applications";
import PostedJobs from "@/components/posted-job";
import Link from "next/link";
import { Suspense } from "react";

function Dashboard() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
    
            <div className="grid gap-8 md:grid-cols-2">
                {/* Posted Jobs Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Posted Jobs</h2>
                        <Link
                            href="/postjob"
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                            Post New Job
                        </Link>
                    </div>
        
                    <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                        <Suspense fallback={<p>Loading Posted-Jobs...</p>}>
                            <PostedJobs />
                        </Suspense>
                    </div>
                </div>
        
                {/* Applications Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Your Applications
                    </h2>
                    <Suspense fallback={<p>Loading Application...</p>}>
                        <Application />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}


export default Dashboard