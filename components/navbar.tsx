import Link from "next/link";
import NavComponent from "./nav-component";

async function NavBar() {
    
    return (
        <div className="flex items-center justify-between py-4 max-w-7xl m-automax-w-7xl m-auto">
            <div>
                <Link className="font-bold text-xl text-stone-950" href='/'>JobSnap</Link>
            </div>
            <NavComponent/>
        </div>
    )
}

export default NavBar;