/*
  Warnings:

  - You are about to alter the column `avg_consumption` on the `vehicle` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,3)` to `Int`.
  - You are about to alter the column `passengers` on the `vehicle` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,3)` to `Int`.

*/
-- AlterTable
ALTER TABLE `vehicle` MODIFY `avg_consumption` INTEGER NULL,
    MODIFY `passengers` INTEGER NULL;
