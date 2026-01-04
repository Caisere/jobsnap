// 'use cache'

import { User } from '@/app/types';
import {prisma} from '@/lib/prisma'
import { connection } from 'next/server';

async function getUsers() {
    await connection();
    return prisma.users.findMany();
}

async function UsersPage() {

  const users: User[] = await getUsers()

  return (
    <div>
        Users
      {users?.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersPage;
