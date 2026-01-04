import { JobFull } from "@/app/types";
import { JobType } from "@/generated/prisma/enums";
import { findJobs } from "@/lib/data-services"
import { currencyUSFormat } from "@/lib/helper";
import Link from "next/link";


type BrowseJobsListingProps = {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}

async function BrowseJobsListing ({searchParams}: BrowseJobsListingProps) {

    const {q, type, location} = await searchParams;

    const query = q as string | undefined;
    const searchType = type as JobType;
    const searchLocation = location as string | undefined

    const jobs: JobFull[] = await findJobs({query, searchType, searchLocation})

    return (
        <>
            {jobs?.map((job) => (
                <div
                    key={job.id}
                    className="bg-mainBackground p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-semibold text-primary mb-2">{job.title}</h2>
                            <p className="text-white/70 mb-2">{job.company}</p>
                            <div className="flex items-center text-sm text-primary mb-4">
                                <span className="mr-4">{job.location}</span>
                                <span>{job.type}</span>
                            </div>
                            <p className="text-white/70 mb-4 line-clamp-2">
                                {job.description}
                            </p>
                        </div>
                        {job?.salary && (
                            <span className="text-lg font-semibold text-primary">
                                {currencyUSFormat(Number(job.salary))}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-primary">
                            Posted by {job.postedBy.name}
                        </span>
                        <Link
                            href={`/browsejobs/${job.id}`}
                            className="text-primary hover:text-primary/70 transition-color duration-300 ease-linear font-medium border border-primary shadow-lg rounded p-2"
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