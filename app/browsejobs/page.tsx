import BrowseJobsListing from "@/components/browse-jobs-listing";
import { Suspense } from "react";



async function BrowseJobsPage({searchParams}:{searchParams: Promise<{[key: string]: string | string[] | undefined}>}){

    const {q, type, location} = await searchParams;

    const query = q as string | undefined;
    const searchType = type as string | undefined;
    const searchLocation = location as string | undefined


    return (
        <div className="space-y-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="max-w-7xl mx-auto w-full pb-4">

                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Jobs</h1>
                    <form className="grid gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            name="q"
                            placeholder="Search jobs..."
                            className="text-lg font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                        />
                        <select
                            name="type"
                            className="text-lg font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                        >
                            <option value="">All Types</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="text-lg font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-neutral-700 text-white p-2 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        
            <div className="grid gap-6 max-w-7xl mx-auto w-full pb-4">
                <Suspense fallback={<p>Loading Jobs...</p>}>
                    <BrowseJobsListing query={query} searchType={searchType} searchLocation={searchLocation} />
                </Suspense>
            </div>
        </div>
    );
}

export default BrowseJobsPage;