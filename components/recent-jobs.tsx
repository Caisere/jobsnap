
import { Job } from "@/app/types"
import { getRecentJobs } from "@/lib/data-services"
import Link from "next/link"

async function RecentJobs () {
    const recentJobs = await getRecentJobs() as Job[]
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentJobs?.map((job) => (
                <div
                    key={job.id}
                    className="bg-mainBackground border border-primary p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        {job.title}
                    </h3>
                    <p className="text-white/80 mb-2">{job.company}</p>
                    <div className="flex items-center text-sm text-primary mb-4">
                        <span className="mr-4">{job.location}</span>
                        <span>{job.type}</span>
                    </div>
                    <p className="text-white/70 mb-4 line-clamp-2">{job.description}</p>
                    <Link
                        href={`/browsejobs/${job.id}`}
                        className="bg-neutral-700 text-white/70 p-2 px-6 py-3 rounded-md text-lg font-medium hover:bg-neutral-800 transition-colors duration-300"
                    >
                        View Details →
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default RecentJobs