import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const interactedUsers = [];
  const { userId }: { userId: string } = await req.json();

  const sentChats = await prisma.chat.findMany({
    where: {
      SenderId: userId,
    },
    select: {
      ReceiverId: true,
    },
  });

  const receivedChats = await prisma.chat.findMany({
    where: {
      ReceiverId: userId,
    },
    select: {
      SenderId: true,
    },
  });

  const interactedUserIds = Array.from(
    new Set([
      ...sentChats.map((chat) => chat.ReceiverId),
      ...receivedChats.map((chat) => chat.SenderId),
    ])
  );

  for (const interactedUserId of interactedUserIds) {
    const user = await prisma.user.findUnique({
      where: {
        userId: interactedUserId,
      },
    });

    if (user) {
      const { Name, userName, userId } = user;
      interactedUsers.push([Name, userName, userId]);
    }
  }

  console.log(interactedUsers);
  return NextResponse.json(interactedUsers);
}
