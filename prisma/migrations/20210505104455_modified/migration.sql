/*
  Warnings:

  - You are about to drop the column `autj0` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth0]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth0` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User.autj0_unique";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "autj0",
ADD COLUMN     "auth0" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.auth0_unique" ON "User"("auth0");
