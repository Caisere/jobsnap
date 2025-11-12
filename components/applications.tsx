import { auth } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

async function Application () {
    
    const sesssion = await auth()

    const applications = await prisma.application.findMany({
        where: {
            userId: sesssion?.user?.id
        },
        orderBy: {
            appliedAT: 'desc'
        },
        include: {
            job: true
        }
    })

    return (
        <>  
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                {applications.length === 0 ? (
                    <p className="p-6 text-gray-500 text-center">
                        You haven&apos;t applied to any jobs yet.
                    </p>
                ) : (
                    applications.map((application) => (
                        <div key={application.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        {application.job.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        {application.job.company}
                                    </p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>{application.job.location}</span>
                                        <span className="mx-2">•</span>
                                        <span>{application.job.type}</span>
                                        <span className="mx-2">•</span>
                                        <span>
                                            Applied{" "}
                                            {formatDistanceToNow(
                                                new Date(application.appliedAT),
                                                {
                                                    addSuffix: true,
                                                }
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        application.status === "PENDING"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : application.status === "ACCEPTED"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {application.status}
                                </span>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <Link
                                    href={`/browsejobs/${application.job.id}`}
                                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                                >
                                    View Job
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Application