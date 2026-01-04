'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import { SignOut } from "./sign-out";


function NavComponent() {
    const {data: session} = useSession()

    return (
        <>
            <nav className="flex items-center justify-end flex-1 gap-4 text-primary">
                {!session && <Link className="text-primary" href='/about'>About</Link>}
                <Link className="text-primary relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href='/browsejobs'>Browse Jobs</Link>
                { session?.user && 
                    <div className="flex items-center gap-4">
                        <Link className="text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href='/postjob'>Post a Job</Link>
                        <Link className="text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href='/dashboard'>Dashboard</Link>
                    </div>
                }
                <div>
                    {session && <SignOut />}
                </div>
                {!session && <Link className="bg-neutral-700 text-primary p-2 rounded-md" href='/signin'>Sign In</Link>}
            </nav>
        </>
    )
}

export default NavComponent;