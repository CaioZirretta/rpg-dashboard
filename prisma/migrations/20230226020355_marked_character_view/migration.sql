-- CreateTable
CREATE TABLE "MarkedCharacterView" (
    "sheetId" TEXT NOT NULL,
    "currentPV" INTEGER NOT NULL,
    "currentPE" INTEGER NOT NULL,
    "currentSanity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MarkedCharacterView_sheetId_key" ON "MarkedCharacterView"("sheetId");

-- AddForeignKey
ALTER TABLE "MarkedCharacterView" ADD CONSTRAINT "MarkedCharacterView_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
