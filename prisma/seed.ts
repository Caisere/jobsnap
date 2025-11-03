import { PrismaClient, Prisma } from "../app/generated/prisma-node/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Diana Ross",
    email: "diana.ross@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Eve Adams",
    email: "eve.adams@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Frank Castle",
    email: "frank.castle@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Grace Lee",
    email: "grace.lee@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Hank Miller",
    email: "hank.miller@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Isla Cooper",
    email: "isla.cooper@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    emailVerified: new Date(),
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
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
