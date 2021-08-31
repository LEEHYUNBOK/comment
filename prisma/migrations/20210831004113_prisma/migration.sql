/*
  Warnings:

  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `InComments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `InComments` DROP FOREIGN KEY `InComments_ibfk_1`;

-- DropForeignKey
ALTER TABLE `InComments` DROP FOREIGN KEY `InComments_ibfk_2`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_ibfk_2`;

-- AlterTable
ALTER TABLE `comments` MODIFY `postId` VARCHAR(24) NOT NULL;

-- AlterTable
ALTER TABLE `posts` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(24) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `InComments`;

-- CreateTable
CREATE TABLE `commentsInner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` VARCHAR(191),
    `like` INTEGER NOT NULL DEFAULT 0,
    `authorId` INTEGER NOT NULL,
    `commentsId` INTEGER NOT NULL,

    INDEX `authorId`(`authorId`),
    INDEX `commentsId`(`commentsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commentsInner` ADD FOREIGN KEY (`authorId`) REFERENCES `commentUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentsInner` ADD FOREIGN KEY (`commentsId`) REFERENCES `comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
