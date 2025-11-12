'use client'

import { handlePostJob } from "@/lib/actions";
import { useActionState } from "react";

function PostJobForm() {
    const [state, formAction, isPending] = useActionState(handlePostJob, null)

    return (
        <form className="flex flex-col gap-2" action={formAction}>
            <div>
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Job Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
                
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
                    name="company"
                    id="company"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
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
                    name="location"
                    id="location"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
            </div>
    
            <div>
                <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                >
                    Job Type
                </label>
                <select
                    name="type"
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
            </div>
    
            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows={6}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
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
                    name="salary"
                    id="salary"
                    placeholder="e.g., $80,000 - $100,000"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-neutral-500 text-gray-900"
                />
            </div>
    
            <button
            disabled={isPending}
                type="submit"
                className="w-full bg-neutral-600 mt-4 text-white px-4 py-2 rounded-md hover:bg-neutral-700 disabled:opacity-50 transition-colors duration-300 disabled:cursor-not-allowed"
            >
                Post Job
            </button>
        </form>
    )
}

export default PostJobForm