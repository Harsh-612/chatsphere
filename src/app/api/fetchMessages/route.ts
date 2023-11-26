import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  const chatArray = [];
  const { id, recieverId } = await req.json();
  const Texts = await prisma.chat.findMany({
    where: {
      OR: [
        { ReceiverId: recieverId, SenderId: id },
        { ReceiverId: id, SenderId: recieverId },
      ],
    },
  });

  return NextResponse.json({ Texts });
}
