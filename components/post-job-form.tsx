'use client'

import { handlePostJob } from "@/lib/actions"
import z from "zod"
import FormButton from "./form-button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const PostJobSchema = z.object({
    title: z.string().min(4, 'Title is required'),
    company: z.string('Company is required'),
    location: z.string('Location is required'),
    type: z.enum(["PART_TIME", "FULL_TIME"]),
    description: z.string('Job description is required'),
    salary: z.string(),
})

export type PostJobData = z.infer<typeof PostJobSchema>


function PostJobForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<PostJobData>({
        resolver: zodResolver(PostJobSchema),
        defaultValues: {
            title: '',
            company: '',
            location: '',
            type: 'FULL_TIME',
            description: '',
            salary: '',
        }
    })

    async function postjobs(data:PostJobData) {



        const result = await handlePostJob(data)
        toast(result?.message)
        reset()
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(postjobs)} >
            <div>
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-primary"
                >
                    Job Title
                </label>
                <input
                    type="text"
                    {...register('title')}
                    autoComplete="true"
                    id="title"
                    required
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                />
                {errors?.title && <p className="text-red-400 text-sm">{errors?.title?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="company"
                    className="block text-sm font-medium text-primary"
                >
                    Company
                </label>
                <input
                    type="text"
                    {...register('company')}
                    required
                    id="company"
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                />
                {errors?.company && <p className="text-red-400 text-sm">{errors?.company?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="location"
                    className="block text-sm font-medium text-primary"
                >
                    Location
                </label>
                <input
                    type="text"
                    required
                    {...register('location')}
                    id="location"
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                />
                {errors?.location && <p className="text-red-400 text-sm">{errors?.location?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="type"
                    className="block text-sm font-medium text-primary"
                >
                    Job Type
                </label>
                <select
                    {...register('type')}
                    id="type"
                    required
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                >
                    <option value="">Select a type</option>
                    <option value="FULL-TIME">Full-time</option>
                    <option value="PART-TIME">Part-time</option>
                    {/* <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option> */}
                </select>
                {errors?.type && <p className="text-red-400 text-sm">{errors?.type?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-primary"
                >
                    Description
                </label>
                <textarea
                    {...register('description')}
                    id="description"
                    required
                    rows={6}
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                />
                {errors?.description && <p className="text-red-400 text-sm">{errors?.description?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-primary"
                >
                    Salary (optional)
                </label>
                <input
                    type="text"
                    {...register('salary')}
                    id="salary"
                    placeholder="e.g., $80,000 - $100,000"
                    className="text-lg bg-transparent font-medium transition-colors duration-300 border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-primary mt-1 block w-full "
                />
                {errors?.salary && <p className="text-red-400 text-sm">{errors?.salary?.message}</p>}
            </div>

            <FormButton label="Post Job" />
        </form>
    )
}

export default PostJobForm