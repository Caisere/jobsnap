import { Suspense } from "react";
import JobListing from "@/components/job-listing";
import BrowsejobLoadingSkeleton  from "./loading";

async function Job({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="w-full bg-mainBackground h-screen flex justify-center items-center">
      <Suspense fallback={<BrowsejobLoadingSkeleton />}>
        <JobListing params={params} />
      </Suspense>
    </div>
  );
}

export default Job;
