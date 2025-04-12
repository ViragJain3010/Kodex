/*
  Warnings:

  - You are about to drop the column `content` on the `Snippet` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Snippet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Snippet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Snippet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Snippet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Snippet" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "input" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_slug_key" ON "Snippet"("slug");
