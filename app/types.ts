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

export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
  
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
  };
  


export type JobApplicationResponse = {
    message: string;
    status: number
};

export type JobApplication = {
    id: string;
    jobId: string;
    userId: string;
    status: "PENDING" | "REVIEWING" | "ACCEPTED" | "REJECTED";
    appliedAt: Date;
};

export type User = {
    id: string;
    password?: string | null;
    name: string;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
};

export type VerificationToken = {
    identifier: string; // email or user identifier
    token: string;
    expires: Date;
};

export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
};

export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    type: "PART_TIME" | "FULL_TIME";
    description: string;
    salary?: string | null;
    postedAt: Date;
    postedById: string;
};

export type ApplicationFull = JobApplication & {
    user: User;
    job: Job;
};

export type UserFull = User & {
    accounts: Account
    sessions: Session
    jobs: Job
    application: JobApplication
}

export type JobFull = Job & {
    postedBy: User;
    applications: JobApplication[];
};