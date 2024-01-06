import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    const userRecievedChat = await prisma.chat.findMany({
      where: { SenderId: id },
      select: { ReceiverId: true },
    });
    const userSentChat = await prisma.chat.findMany({
      where: { ReceiverId: id },
      select: { SenderId: true },
    });
    return NextResponse.json({ userSentChat, userRecievedChat });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
