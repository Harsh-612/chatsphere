import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function verify(
  password: string,
  hashedpassword: string
): Promise<Boolean> {
  return await bcrypt.compare(password, hashedpassword);
}

export function generateAccessToken({
  userId,
  name,
  email,
}: {
  userId: string;
  name: string;
  email: string;
}) {
  return jwt.sign({ userId, name, email }, "harsh", { expiresIn: "10d" });
}

export function generateUserToken(userId: string) {
  return jwt.sign({ userId }, "harsh", { expiresIn: "10d" });
}
