-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Chat" (
    "chatId" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "SenderId" TEXT NOT NULL,
    "ReceiverId" TEXT NOT NULL,
    "sendTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("chatId")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_SenderId_fkey" FOREIGN KEY ("SenderId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_ReceiverId_fkey" FOREIGN KEY ("ReceiverId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
