import UsersPage from "@/components/users-pages"
import { Suspense } from "react"

async function UserProfile() {

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <UsersPage />
            </Suspense>
        </div>
    )
}

export default UserProfile