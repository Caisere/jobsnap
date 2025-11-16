import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import { Link } from "lucide-react";

async function PostedJobs () {

    const session = await auth()
    const postedJobs = await prisma.job.findMany({
        where: {
            postedById: session?.user?.id
        },
        include: {
            _count: {
                select: {
                    application: true
                }
            }
        },
        orderBy: {
            postedAt: 'desc'
        }
    })

    return (
        <>
            {postedJobs.length === 0 ? (
                    <p className="p-6 text-gray-500 text-center">
                        You haven&apos;t posted any jobs yet.
                    </p>
                ) : (
                    postedJobs.map((job) => (
                        <div key={job.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2">{job.company}</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>{job.location}</span>
                                        <span className="mx-2">•</span>
                                        <span>{job.type}</span>
                                        <span className="mx-2">•</span>
                                        <span>
                                            {formatDistanceToNow(new Date(job.postedAt), {
                                                addSuffix: true,
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        {job._count.application} applications
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-4">
                                <Link
                                    href={`/jobs/${job.id}`}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                >
                                    View Job
                                </Link>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default PostedJobs;