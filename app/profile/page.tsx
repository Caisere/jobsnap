import UsersPage from "@/components/users-pages"
import { Suspense } from "react"



function Profile() {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <UsersPage />
            </Suspense>
        </div>
    )
}

export default Profile