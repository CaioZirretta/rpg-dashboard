/*
  Warnings:

  - You are about to drop the column `pe_round` on the `Sheet` table. All the data in the column will be lost.
  - Added the required column `peRound` to the `Sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "pe_round",
ADD COLUMN     "peRound" INTEGER NOT NULL;
