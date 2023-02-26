/*
  Warnings:

  - Changed the type of `itemLimit` on the `Sheet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Sheet" DROP COLUMN "itemLimit",
ADD COLUMN     "itemLimit" INTEGER NOT NULL;
