/*
  Warnings:

  - You are about to drop the column `authorization` on the `Endpoint` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Endpoint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Endpoint_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Endpoint" ("createdAt", "id", "institutionId", "method", "name", "status", "updatedAt", "url") SELECT "createdAt", "id", "institutionId", "method", "name", "status", "updatedAt", "url" FROM "Endpoint";
DROP TABLE "Endpoint";
ALTER TABLE "new_Endpoint" RENAME TO "Endpoint";
CREATE UNIQUE INDEX "Endpoint_name_key" ON "Endpoint"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
