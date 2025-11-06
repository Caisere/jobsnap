import Link from "next/link";


export default function Home() {

    const recentJobs = []

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-20 bg-stone-100 ">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Find Your Dream Job
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Discover thousands of job opportunities with top companies
                </p>
                <Link
                    href="/browsejobs"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                    Browse Jobs
                </Link>
            </section>
  
            {/* Recent Jobs Section */}
            <section className="max-w-7xl mx-auto w-full">
                <h2 className="text-2xl font-bold text-stone-700 mb-6">Recent Jobs</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {recentJobs?.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span className="mr-4">{job.location}</span>
                                <span>{job.type}</span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                            <Link
                                href={`/browsejobs/${job.id}`}
                                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Details →
                            </Link>
                        </div>
                    ))}
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
