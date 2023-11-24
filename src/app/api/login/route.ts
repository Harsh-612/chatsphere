import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verify, generateAccessToken, generateUserToken } from "./helpers";
const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const { password, userName } = await req.json();
    const user = await prisma.user.findFirst({
      where: {
        userName,
      },
    });
    if (user) {
      if (await verify(password, user.Password)) {
        const name = user.Name;
        const userId = user.userName;
        const email = user.email;
        const response = NextResponse.json({ user, success: true });
        response.cookies.set(
          "accessToken",
          generateAccessToken({ userId, name, email }),
          { httpOnly: true }
        );
        response.cookies.set("userToken", generateUserToken(userId), {
          httpOnly: true,
        });
        return response;
      } else {
        return NextResponse.json({ message: "wrong password", success: false });
      }
    } else {
      return NextResponse.json({
        message: "Username not found",
        success: false,
      });
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
