/*
  Warnings:

  - You are about to drop the column `commentId` on the `Comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Comments` DROP COLUMN `commentId`;

-- CreateTable
CREATE TABLE `InComments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `content` VARCHAR(191),
    `like` INTEGER NOT NULL DEFAULT 0,
    `authorId` INTEGER NOT NULL,
    `commentsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InComments` ADD FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InComments` ADD FOREIGN KEY (`commentsId`) REFERENCES `Comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
