import { findJobs} from "@/lib/data-services";
import { currencyUSFormat } from "@/lib/helper";
import Link from "next/link";

async function BrowseJobsPage({searchParams}:{searchParams: Promise<{[key: string]: string | string[] | undefined}>}){

    const {q, type, location} = await searchParams;
    // console.log(q,type,location)

    const query = q as string | undefined;
    const searchType = type as string | undefined;
    const searchLocation = location as string | undefined

    const jobs = await findJobs({query, searchType, searchLocation})


    return (
        <div className="space-y-8">
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
                                className="text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                                View Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrowseJobsPage;