/*
  Warnings:

  - You are about to drop the column `amount` on the `Split` table. All the data in the column will be lost.
  - Added the required column `percentage` to the `Split` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Split" DROP COLUMN "amount",
ADD COLUMN     "percentage" DOUBLE PRECISION NOT NULL;
