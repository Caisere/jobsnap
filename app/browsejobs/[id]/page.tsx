import { existingApplication, findJob } from "@/lib/data-services";
import Link from "next/link";
import {formatDistanceToNow} from 'date-fns'
import { ApplyButton } from "@/components/apply-button";
import { auth } from "@/lib/auth";
import { LogIn } from "lucide-react";
import { currencyUSFormat } from "@/lib/helper";

async function Job ({params}: {params: Promise<{id: string}>}) {
    const session = await auth()
    const jobId = (await params).id

    const userId= session?.user?.id as string

    const [job, appliedJob] = await Promise.all([
        findJob({jobId}),
        existingApplication({jobId, userId})
    ])


    return (
        <div className="w-full bg-stone-100 h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto w-full">
                <div className="mb-8">
                    <Link
                        href="/browsejobs"
                        className="text-[#7DA7BA] hover:text-[#7DA7BA]/70 transition-color duration-300 ease-linear font-medium mb-4 inline-block"
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
                                <span className="text-gray-900 font-medium">{currencyUSFormat(Number(job?.salary))}</span>
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
                            {!appliedJob ? <ApplyButton jobId={jobId} /> : <p className="font-semibold text-stone-600 text-lg">You have applied to this job.</p>}
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