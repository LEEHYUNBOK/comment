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
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- CreateTable
CREATE TABLE `commentUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `commentUsers.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` LONGTEXT,
    `like` INTEGER NOT NULL DEFAULT 0,
    `authorId` INTEGER NOT NULL,
    `postId` VARCHAR(24) NOT NULL,

    INDEX `authorId`(`authorId`),
    INDEX `postId`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` VARCHAR(24) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `posts.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commentsInner` ADD FOREIGN KEY (`authorId`) REFERENCES `commentUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentsInner` ADD FOREIGN KEY (`commentsId`) REFERENCES `comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD FOREIGN KEY (`authorId`) REFERENCES `commentUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
