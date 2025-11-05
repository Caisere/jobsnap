import { PrismaClient } from "../app/generated/prisma-node/client";

const prisma = new PrismaClient();

export async function cleanup() {
  // Delete all users with @example.com emails (seeded data)
    const result = await prisma.user.deleteMany({
        where: {
            email: {
                endsWith: "@example.com",
            },
        },
    });

    console.log(`Deleted ${result.count} seeded users`);
}

cleanup()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
