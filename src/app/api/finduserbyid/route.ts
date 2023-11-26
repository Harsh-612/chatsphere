import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  const { recieverId } = await req.json();
  const user = await prisma.user.findUnique({ where: { userId: recieverId } });
  return NextResponse.json({ name: user?.Name });
}
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("userToken")?.value;
    const id = jwt.verify(String(token), "harsh");
    return NextResponse.json(id);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
