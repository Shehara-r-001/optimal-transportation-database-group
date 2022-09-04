/*
  Warnings:

  - The primary key for the `fuel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `daily_usage` on the `fuel` table. All the data in the column will be lost.
  - You are about to drop the column `daily_usage_pt` on the `fuel` table. All the data in the column will be lost.
  - You are about to drop the column `fuel_type` on the `fuel` table. All the data in the column will be lost.
  - You are about to drop the `vehicle` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[f_name]` on the table `fuel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `f_name` to the `fuel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `Vehicle_fuel_type_fkey`;

-- AlterTable
ALTER TABLE `fuel` DROP PRIMARY KEY,
    DROP COLUMN `daily_usage`,
    DROP COLUMN `daily_usage_pt`,
    DROP COLUMN `fuel_type`,
    ADD COLUMN `f_name` VARCHAR(20) NOT NULL,
    MODIFY `id` VARCHAR(5) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `vehicle`;

-- CreateTable
CREATE TABLE `personal` (
    `id` VARCHAR(5) NOT NULL,
    `v_name` VARCHAR(20) NOT NULL,
    `avg_consumption` INTEGER NULL,
    `fuel_type` VARCHAR(5) NULL,

    UNIQUE INDEX `v_name`(`v_name`),
    INDEX `fuel_type`(`fuel_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transport` (
    `id` VARCHAR(5) NOT NULL,
    `t_name` VARCHAR(20) NOT NULL,
    `fuel_usage` INTEGER NULL,
    `fuel_type` VARCHAR(5) NULL,

    UNIQUE INDEX `t_name`(`t_name`),
    INDEX `fuel_type`(`fuel_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `f_name` ON `fuel`(`f_name`);

-- AddForeignKey
ALTER TABLE `personal` ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`fuel_type`) REFERENCES `fuel`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transport` ADD CONSTRAINT `transport_ibfk_1` FOREIGN KEY (`fuel_type`) REFERENCES `fuel`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
