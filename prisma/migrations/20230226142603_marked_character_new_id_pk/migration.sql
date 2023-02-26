/*
  Warnings:

  - The primary key for the `MarkedCharacter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[sheetId]` on the table `MarkedCharacter` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `MarkedCharacter` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "MarkedCharacter" DROP CONSTRAINT "MarkedCharacter_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "MarkedCharacter_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "MarkedCharacter_sheetId_key" ON "MarkedCharacter"("sheetId");
