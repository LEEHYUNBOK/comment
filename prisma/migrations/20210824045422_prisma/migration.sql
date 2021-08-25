/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `InComments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Comments` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `InComments` DROP COLUMN `updatedAt`;
