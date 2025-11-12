'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import {useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";
import { JobApplicationResponse } from "@/app/types";

export function ApplyButton({jobId}:{jobId:string}) {
    const [isApplying, setIsApplying] = useState<boolean>(false)

    const {data: session} = useSession()
    const router = useRouter()
    


    async function handleJobApplication() {

        // check for active user before applying for a job
        if (!session) {
            toast('Please, Sign-in into your account to apply for this Job.')
            router.push('/signin');
            return;
        }
        
        setIsApplying(true)

        try{
            const response = await fetch(`/api/jobs/${jobId}/apply`, {
                method: 'POST'
            })
            // get the JSON response returned from the route
            const data:JobApplicationResponse = await response.json();

            if (!response.ok) {
                // if the server responded with an error (either status 400 or 500)
                toast(data.message || "Something went wrong!");
                return;
            }

            // Success
            toast(data.message || "Job Application Successful!");
            
        } catch(error) {
            if (error instanceof Error) {
                toast(error.message);
            } else {
                toast("Failed to apply for the job");
            }
        }finally{
            setIsApplying(false)
        }
    }



    return (
        <div>
            <Button disabled={isApplying} onClick={handleJobApplication}>
                {isApplying ? <Spinner /> : "Apply for this position"}
            </Button>
        </div>
    )
}

