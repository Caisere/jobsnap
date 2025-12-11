import { findJobs } from "@/lib/data-services"
import { currencyUSFormat } from "@/lib/helper";
import Link from "next/link";


type BrowseJobsListingProps = {
    query: string | undefined,
    searchType: string | undefined,
    searchLocation: string | undefined,
}

async function BrowseJobsListing ({query, searchType, searchLocation}: BrowseJobsListingProps) {

    const jobs = await findJobs({query, searchType, searchLocation})

    return (
        <>
            {jobs.map((job) => (
                <div
                    key={job.id}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
                            <p className="text-gray-600 mb-2">{job.company}</p>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span className="mr-4">{job.location}</span>
                                <span>{job.type}</span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {job.description}
                            </p>
                        </div>
                        {job?.salary && (
                            <span className="text-lg font-semibold text-gray-900">
                                {currencyUSFormat(Number(job.salary))}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            Posted by {job.postedBy.name}
                        </span>
                        <Link
                            href={`/browsejobs/${job.id}`}
                            className="text-[#7DA7BA] hover:text-[#7DA7BA]/70 transition-color duration-300 ease-linear font-medium"
                        >
                            View Details →
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
} 

export default BrowseJobsListing;