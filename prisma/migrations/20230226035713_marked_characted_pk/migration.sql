/*
  Warnings:

  - A unique constraint covering the columns `[sheetCharacter]` on the table `MarkedCharacter` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MarkedCharacter_sheetId_key";

-- AlterTable
ALTER TABLE "MarkedCharacter" ADD CONSTRAINT "MarkedCharacter_pkey" PRIMARY KEY ("sheetId");

-- CreateIndex
CREATE UNIQUE INDEX "MarkedCharacter_sheetCharacter_key" ON "MarkedCharacter"("sheetCharacter");
