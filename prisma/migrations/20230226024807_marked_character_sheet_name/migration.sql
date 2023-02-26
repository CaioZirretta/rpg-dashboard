/*
  Warnings:

  - A unique constraint covering the columns `[id,character]` on the table `Sheet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sheetCharacter` to the `MarkedCharacter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MarkedCharacter" DROP CONSTRAINT "MarkedCharacter_sheetId_fkey";

-- AlterTable
ALTER TABLE "MarkedCharacter" ADD COLUMN     "sheetCharacter" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sheet_id_character_key" ON "Sheet"("id", "character");

-- AddForeignKey
ALTER TABLE "MarkedCharacter" ADD CONSTRAINT "MarkedCharacter_sheetId_sheetCharacter_fkey" FOREIGN KEY ("sheetId", "sheetCharacter") REFERENCES "Sheet"("id", "character") ON DELETE RESTRICT ON UPDATE CASCADE;
