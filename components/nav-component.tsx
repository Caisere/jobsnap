'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import { SignOut } from "./sign-out";


function NavComponent() {
    const {data: session} = useSession()

    return (
        <>
            <nav className="flex items-center justify-end flex-1 gap-4">
                <Link className="text-stone-900" href='/browsejobs'>Browse Jobs</Link>
                { session?.user && 
                    <div className="flex items-center gap-4">
                        <Link className="text-stone-900" href='/postjob'>Post a Job</Link>
                        <Link className="text-stone-900" href='/dashboard'>Dashboard</Link>
                    </div>
                }
                <div>
                    {session && <SignOut />}
                </div>
                {!session && <Link className="bg-neutral-700 text-white p-2 rounded-md" href='/signin'>Sign In</Link>}
            </nav>
        </>
    )
}

export default NavComponent;