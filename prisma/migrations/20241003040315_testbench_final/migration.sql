/*
  Warnings:

  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verifyImage` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Verified', 'Rejected');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('Merch', 'Hackathon');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_verified",
DROP COLUMN "image",
DROP COLUMN "verifyImage",
ADD COLUMN     "branch" TEXT,
ADD COLUMN     "college" TEXT,
ADD COLUMN     "year" TEXT,
ALTER COLUMN "isVerified" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Transaction" (
    "purchaseId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "bankId" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "type" "TransactionType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("purchaseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_purchaseId_key" ON "Transaction"("purchaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transactionId_bankId_key" ON "Transaction"("transactionId", "bankId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
