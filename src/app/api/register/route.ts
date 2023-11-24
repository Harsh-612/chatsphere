import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "./helpers";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const { name, password, email, userName } = await req.json();
    const user = await prisma.user.create({
      data: {
        Name: name,
        Password: await hash(password),
        email,
        userName,
      },
    });
    return NextResponse.json({ user, success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
