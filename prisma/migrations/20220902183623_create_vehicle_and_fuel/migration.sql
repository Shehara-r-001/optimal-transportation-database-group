/*
  Warnings:

  - The primary key for the `vehicle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `vehicle` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `vehicle` DROP PRIMARY KEY,
    ADD COLUMN `avg_consumption` DECIMAL(9, 3) NULL,
    ADD COLUMN `fuel_type` INTEGER NULL,
    ADD COLUMN `passengers` DECIMAL(9, 3) NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(100) NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Fuel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fuel_type` VARCHAR(10) NULL,
    `daily_usage` INTEGER NULL,
    `daily_usage_pt` INTEGER NULL,
    `import_cost` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_fuel_type_fkey` FOREIGN KEY (`fuel_type`) REFERENCES `Fuel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `vehicle` RENAME INDEX `Vehicle_name_key` TO `name`;
