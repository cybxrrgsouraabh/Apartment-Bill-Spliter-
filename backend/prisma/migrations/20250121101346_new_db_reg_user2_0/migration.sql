/*
  Warnings:

  - Added the required column `password` to the `registeredUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registeredUser" ADD COLUMN     "password" TEXT NOT NULL;
