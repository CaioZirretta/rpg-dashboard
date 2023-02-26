/*
  Warnings:

  - You are about to drop the column `abilities` on the `Sheet` table. All the data in the column will be lost.
  - You are about to drop the column `attacks` on the `Sheet` table. All the data in the column will be lost.
  - Added the required column `ability` to the `Sheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attack` to the `Sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "abilities",
DROP COLUMN "attacks",
ADD COLUMN     "ability" JSONB NOT NULL,
ADD COLUMN     "attack" JSONB NOT NULL;
