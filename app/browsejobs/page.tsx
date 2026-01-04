import BrowseJobsListing from "@/components/browse-jobs-listing";
import { Suspense } from "react";
import JobListingSkeleton from "./loading";



async function BrowseJobsPage({searchParams}:{searchParams: Promise<{[key: string]: string | string[] | undefined}>}){

    return (
        <div className="space-y-8 mt-20">
            <div className="p-6 rounded-lg shadow-sm">
                <div className="max-w-7xl mx-auto w-full pb-4">

                    <h1 className="text-2xl font-bold text-primary mb-6">Find Jobs</h1>
                    <form className="grid gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            name="q"
                            placeholder="Search jobs..."
                            className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary"
                        />
                        <select
                            name="type"
                            className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary"
                        >
                            <option value="">All Types</option>
                            <option value="FULL_TIME">Full-time</option>
                            <option value="PART_TIME">Part-time</option>
                            {/* <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option> */}
                        </select>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary"
                        />
                        <button
                            type="submit"
                            className="bg-neutral-700 text-primary p-2 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        
            <div className="grid gap-6 max-w-7xl mx-auto w-full pb-4">
                <Suspense fallback={<JobListingSkeleton />}>
                    <BrowseJobsListing searchParams={searchParams}/>
                </Suspense>
            </div>
        </div>
    );
}

export default BrowseJobsPage;