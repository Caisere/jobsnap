'use client'

import Link from "next/link";
import NavComponent from "./nav-component";
import { useEffect, useState } from "react";

function NavBar() {
    
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        function handleScroll () {
            if(window.scrollY > 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className={`flex items-center justify-between py-4 mx-auto fixed top-0 w-full px-20 transition-all duration-300 ease-linear ${
            isScrolling 
                ? 'bg-white left-1/2 top-8 max-w-4xl rounded-full mx-auto -translate-x-1/2 -translate-y-1/2 mt-2 border py-2 px-10' 
                : 'bg-transparent'
            }`}
        >
            <div>
                <Link className="font-bold text-xl text-stone-950" href='/'>JobSnap</Link>
            </div>
            <NavComponent/>
        </div>
    )
}

export default NavBar;