'use client'

import { handlePostJob } from "@/lib/actions"
import z from "zod"
import FormButton from "./form-button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const PostJobSchema = z.object({
    title: z.string('Title is required'),
    company: z.string('Company is required'),
    location: z.string('Location is required'),
    type: z.string('Job Type is required'),
    description: z.string('Job description is required'),
    salary: z.string(),
})

export type PostJobData = z.infer<typeof PostJobSchema>


function PostJobForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<PostJobData>({
        resolver: zodResolver(PostJobSchema),
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
                    className="block text-sm font-medium text-gray-700"
                >
                    Job Title
                </label>
                <input
                    type="text"
                    {...register('title')}
                    autoComplete="true"
                    id="title"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                {errors?.title && <p className="text-red-400 text-sm">{errors?.title?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                >
                    Company
                </label>
                <input
                    type="text"
                    {...register('company')}
                    required
                    id="company"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                {errors?.company && <p className="text-red-400 text-sm">{errors?.company?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                >
                    Location
                </label>
                <input
                    type="text"
                    required
                    {...register('location')}
                    id="location"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                {errors?.location && <p className="text-red-400 text-sm">{errors?.location?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                >
                    Job Type
                </label>
                <select
                    {...register('type')}
                    id="type"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                >
                    <option value="">Select a type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
                {errors?.type && <p className="text-red-400 text-sm">{errors?.type?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    {...register('description')}
                    id="description"
                    required
                    rows={6}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                {errors?.description && <p className="text-red-400 text-sm">{errors?.description?.message}</p>}
            </div>
    
            <div>
                <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-gray-700"
                >
                    Salary (optional)
                </label>
                <input
                    type="text"
                    {...register('salary')}
                    id="salary"
                    placeholder="e.g., $80,000 - $100,000"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                {errors?.salary && <p className="text-red-400 text-sm">{errors?.salary?.message}</p>}
            </div>

            <FormButton label="Post Job" />
        </form>
    )
}

export default PostJobForm