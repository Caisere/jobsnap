import { currencyUSFormat } from "@/lib/helper";
import { formatDistanceToNow } from "date-fns";
import { LogIn } from "lucide-react";
import Link from 'next/link'
import { ApplyButton } from "./apply-button";
import { existingApplication, findJob } from "@/lib/data-services";
import { auth } from "@/lib/auth";


async function JobListing({params}: {params: Promise<{id: string}>}) {

    const jobId = (await params).id

    const session = await auth()
    const userId= session?.user?.id as string

    const [job, appliedJob] = await Promise.all([
        findJob({jobId}),
        existingApplication({jobId, userId})
    ])
    return (
        <>
            <div className="bg-white/10 rounded-lg shadow-sm p-8 max-w-4xl mx-auto w-full">
                <div className="mb-8">
                    <Link
                        href="/browsejobs"
                        className="text-primary/80 hover:text-primary/70 transition-color duration-300 ease-linear font-medium mb-4 inline-block"
                    >
                        ← Back to Jobs
                    </Link>
                    <h1 className="text-3xl font-bold text-primary mb-2">{job?.title}</h1>
                    <p className="text-xl text-white/70 mb-4">{job?.company}</p>
                    <div className="flex items-center gap-4 text-primary mb-6">
                        <span>{job?.location}</span>
                        <span>•</span>
                        <span>{job?.type.toUpperCase()}</span>
                        {job?.salary && (
                            <>
                                <span>•</span>
                                <span className="text-primary font-medium">{currencyUSFormat(Number(job?.salary))}</span>
                            </>
                        )}
                    </div>
                    <div className="flex items-center text-sm text-white/70">
                        <span>Posted by {job?.postedBy.name}</span>
                        <span className="mx-2">•</span>
                        <span>
                        {formatDistanceToNow(new Date(String(job?.postedAt)), { addSuffix: true })}
                        </span>
                    </div>
                </div>
        
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold text-primary mb-4">
                        Job Description
                    </h2>
                    <div className="text-white/60 whitespace-pre-wrap">
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
                            <Link className="bg-black text-stone-50 p-2 rounded flex gap-1 items-center" href='/signin'>
                                Continue to Login
                                <LogIn width={16}/>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default JobListing

