import { PrismaClient } from "../app/generated/prisma-node/client";
import { hashPassword } from "../lib/helper";

const prisma = new PrismaClient();

const userData = [
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        password: "alice.johnson@example.com",
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        password: "bob.smith@example.com",
    },
    {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        password: "charlie.brown@example.com",
    },
    {
        name: "Diana Ross",
        email: "diana.ross@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        password: "diana.ross@example.com",
    },
    {
        name: "Eve Adams",
        email: "eve.adams@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        password: "eve.adams@example.com",
    },
    {
        name: "Frank Castle",
        email: "frank.castle@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        password: "frank.castle@example.com",
    },
    {
        name: "Grace Lee",
        email: "grace.lee@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        password: "grace.lee@example.com",
    },
    {
        name: "Hank Miller",
        email: "hank.miller@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        password: "hank.miller@example.com",
    },
    {
        name: "Isla Cooper",
        email: "isla.cooper@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/women/9.jpg",
        password: "isla.cooper@example.com",
    },
    {
        name: "James Taylor",
        email: "james.taylor@example.com",
        emailVerified: new Date(),
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        password: "james.taylor@example.com",
    },
];

export async function main() {
    for (const u of userData) {
        const hashedPassword = await hashPassword(u.password);
        await prisma.user.create({
            data: {
                name: u.name,
                email: u.email,
                emailVerified: u.emailVerified,
                image: u.image,
                password: hashedPassword,
            },
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
