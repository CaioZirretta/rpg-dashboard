/*
  Warnings:

  - You are about to drop the column `intellsheeect` on the `Sheet` table. All the data in the column will be lost.
  - Added the required column `intellect` to the `Sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "intellsheeect",
ADD COLUMN     "intellect" INTEGER NOT NULL;
