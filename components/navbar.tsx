import Link from "next/link";

type NavObj = {
    name: string,
    link: string
}

const navObj:NavObj[] = [
    {
        name: 'Browse Jobs',
        link: '/browsejobs'
    },
    {
        name: 'Post a Job',
        link: '/postjob'
    },
    {
        name: 'Dashboard',
        link: '/dashboard'
    },
    {
        name: 'Sign In',
        link: '/signin'
    }
]

async function NavBar() {
    // const session = await auth()
    
    return (
        <div className="flex items-center justify-between">
            <div>
                <Link href='/'>JobSnap</Link>
            </div>
            <nav className="flex items-center justify-end flex-1 gap-3">
                {navObj.map(nav => (
                    <Link href={nav.link} key={nav.link}>
                        {nav.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default NavBar;