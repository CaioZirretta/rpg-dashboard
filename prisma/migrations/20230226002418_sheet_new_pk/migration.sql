/*
  Warnings:

  - A unique constraint covering the columns `[character]` on the table `Sheet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sheet_character_key" ON "Sheet"("character");
