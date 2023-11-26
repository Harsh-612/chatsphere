import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const {
    message,
    id,
    recieverId,
  }: { message: string; id: string; recieverId: string } = await req.json();
  const chat = await prisma.chat.create({
    data: { Text: message, ReceiverId: recieverId, SenderId: id },
  });
  return NextResponse.json(chat);
}
