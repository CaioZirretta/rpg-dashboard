/*
  Warnings:

  - You are about to drop the `MarkedCharacterView` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarkedCharacterView" DROP CONSTRAINT "MarkedCharacterView_sheetId_fkey";

-- DropTable
DROP TABLE "MarkedCharacterView";

-- CreateTable
CREATE TABLE "MarkedCharacter" (
    "sheetId" TEXT NOT NULL,
    "currentPV" INTEGER NOT NULL,
    "currentPE" INTEGER NOT NULL,
    "currentSanity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MarkedCharacter_sheetId_key" ON "MarkedCharacter"("sheetId");

-- AddForeignKey
ALTER TABLE "MarkedCharacter" ADD CONSTRAINT "MarkedCharacter_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
