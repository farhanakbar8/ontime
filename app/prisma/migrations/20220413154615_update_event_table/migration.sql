-- AlterTable
ALTER TABLE `event` ADD COLUMN `eventType` VARCHAR(191) NULL,
    MODIFY `dateTime` VARCHAR(191) NOT NULL;
