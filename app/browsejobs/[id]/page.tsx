
import { Suspense } from "react";
import JobListing from "@/components/job-listing";

async function Job ({params}: {params: Promise<{id: string}>}) {
    const jobId = (await params).id

    return (
        <div className="w-full bg-stone-100 h-screen flex justify-center items-center">
            <Suspense fallback={<p>Loading...</p>}>
                <JobListing jobId={jobId}/>
            </Suspense>
        </div>
    );
}

export default Job