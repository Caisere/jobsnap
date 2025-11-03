import { auth } from "@/lib/auth";
import { SignOut } from "./sign-out";
import { SignIn } from "./sign-in";

async function NavBar() {
    const session = await auth()
    
    return (
        <nav className="flex items-center justify-end">
            {
                session ? (
                    <SignOut/>
                ) : (
                    <SignIn provider="Github"/>
                )
            }
        </nav>
    )
}

export default NavBar;