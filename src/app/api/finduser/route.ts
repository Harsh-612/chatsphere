import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  const userArray = [];
  const { search } = await req.json();
  const users = await prisma.user.findMany();
  for (const user of users) {
    if (user.Name.toLowerCase().includes(String(search).toLowerCase())) {
      const { Name, userName, userId } = user;
      userArray.push([Name, userName, userId]);
    }
  }
  console.log(userArray);
  return NextResponse.json(userArray);
}
