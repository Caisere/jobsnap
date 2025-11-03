'use client'

import { HandleSignOut } from "@/lib/actions"

export function SignOut() {

    return (
        <form
            action={
                HandleSignOut}
            className="w-full"
        >
            <button className="bg-neutral-700 text-white p-2 rounded-md">
                Sign Out
            </button>
        </form>
    )
}