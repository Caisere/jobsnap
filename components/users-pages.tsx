import prisma from "@/lib/prisma"

async function UsersPage () {

    const users = await prisma.user.findMany()
    // console.log(users)
    
    
    return (
        <div>
            {users?.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UsersPage