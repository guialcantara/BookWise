/*
  Warnings:

  - The primary key for the `categories_books` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `categories_books` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `categories_books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories_books" DROP CONSTRAINT "categories_books_categoryId_fkey";

-- AlterTable
ALTER TABLE "categories_books" DROP CONSTRAINT "categories_books_pkey",
DROP COLUMN "categoryId",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD CONSTRAINT "categories_books_pkey" PRIMARY KEY ("book_id", "category_id");

-- AddForeignKey
ALTER TABLE "categories_books" ADD CONSTRAINT "categories_books_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
