/*
  Warnings:

  - You are about to drop the column `intelect` on the `Sheet` table. All the data in the column will be lost.
  - You are about to drop the column `presente` on the `Sheet` table. All the data in the column will be lost.
  - Added the required column `intellsheeect` to the `Sheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presence` to the `Sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "intelect",
DROP COLUMN "presente",
ADD COLUMN     "intellsheeect" INTEGER NOT NULL,
ADD COLUMN     "presence" INTEGER NOT NULL;
