import { unstable_cache } from "next/cache";
import prisma from "./prisma";
import { FindJobs } from "@/app/types";
import { auth } from "./auth";


export const getRecentJobs = unstable_cache(
    async () => {
        const recentJobs = await prisma.job.findMany({
            take: 6,
            orderBy: {
                postedAt: "desc",
            },
            include: {
                postedBy: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return recentJobs;
    },
    ["recent-jobs"],
    { revalidate: 60 }
);

export const getJobs = unstable_cache(
    async () => {
        const recentJobs = await prisma.job.findMany({
            orderBy: {
                postedAt: "desc",
            },
            include: {
                postedBy: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return recentJobs;
    },
    ["jobs"],
    { revalidate: 60 }
);

export const findJobs = unstable_cache(async ({query, searchType, searchLocation}:FindJobs) => {
    const jobs = await prisma.job.findMany({
        where: {
            AND: [
                query ?
                    {
                        OR: [
                            {title: {contains: query, mode: 'insensitive'}},
                            {company: {contains: query, mode: 'insensitive'}},
                            {description: {contains: query, mode: 'insensitive'}}
                        ]
                    } : 
                {},
                searchType ? {type: searchType } : {},
                searchLocation ? {location: {contains: searchLocation, mode: 'insensitive'}} : {}
            ]
        },
        orderBy: {
            postedAt: 'desc'
        },
        include: {
            postedBy: true
        }
    })

    return jobs
})

export const findJob = unstable_cache(async ({jobId}: {jobId: string}) => {
    const job = await prisma.job.findUnique({
        where: {
            id: jobId
        },
        include: {
            postedBy: true
        }
    })

    return job
})




// export const userApplications = unstable_cache(async () =>  {
//     const session = await auth()

//     const applications = await prisma.application.findMany({
//         where: {
//             userId: session?.user?.id
//         },
//         include: {
//             job: true
//         }
//     })

//     return applications
// })
