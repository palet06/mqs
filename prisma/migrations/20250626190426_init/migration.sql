/*
  Warnings:

  - You are about to drop the column `valueLabel` on the `RequestParam` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RequestParam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "keyLabel" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "endpointId" INTEGER NOT NULL,
    CONSTRAINT "RequestParam_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RequestParam" ("endpointId", "id", "key", "keyLabel", "value") SELECT "endpointId", "id", "key", "keyLabel", "value" FROM "RequestParam";
DROP TABLE "RequestParam";
ALTER TABLE "new_RequestParam" RENAME TO "RequestParam";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
