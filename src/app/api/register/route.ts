import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "./helpers";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { name, password, email, userName } = await req.json();
  const user = await prisma.user.create({
    data: {
      Name: name,
      Password: await hash(password),
      email,
      userName,
    },
  });
  return NextResponse.json(user);
}
