import { findJob } from "@/lib/data-services";
import Link from "next/link";
import {formatDistanceToNow} from 'date-fns'
import { ApplyButton } from "@/components/apply-button";
import { auth } from "@/lib/auth";
import { LogIn } from "lucide-react";

async function Job ({params}: {params: Promise<{id: string}>}) {
    const jobId = (await params).id
    const job = await findJob({jobId})

    const session = await auth()

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                    <Link
                        href="/browsejobs"
                        className="text-indigo-600 hover:text-indigo-700 font-medium mb-4 inline-block"
                    >
                        ← Back to Jobs
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{job?.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">{job?.company}</p>
                    <div className="flex items-center gap-4 text-gray-500 mb-6">
                        <span>{job?.location}</span>
                        <span>•</span>
                        <span>{job?.type.toUpperCase()}</span>
                        {job?.salary && (
                            <>
                                <span>•</span>
                                <span className="text-gray-900 font-medium">${job?.salary}</span>
                            </>
                        )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <span>Posted by {job?.postedBy.name}</span>
                        <span className="mx-2">•</span>
                        <span>
                        {formatDistanceToNow(new Date(String(job?.postedAt)), { addSuffix: true })}
                        </span>
                    </div>
                </div>
        
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Job Description
                    </h2>
                    <div className="text-gray-600 whitespace-pre-wrap">
                        {job?.description}
                    </div>
                </div>

                {session?.user ? 
                    (
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <ApplyButton jobId={jobId} />
                        </div>
                    ) : (
                        <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                            <p>Login to apply for this Job</p>
                            <Link className="bg-black text-stone-50 p-2 rounded flex gap-1 items-center" href='/signin'><span>Continue to Login</span> <span><LogIn width={16}/></span></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Job