export interface RecentJobs {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
    salary: string | null;
    postedAt: Date;
    postedById: string;
}

export type FindJobs = {
    query: string | undefined, 
    searchType: string | undefined, 
    searchLocation: string | undefined 
}


export type JobApplicationResponse = {
    message: string;
    status: number
};