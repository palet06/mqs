/*
  Warnings:

  - Added the required column `keyLabel` to the `RequestParam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueLabel` to the `RequestParam` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RequestParam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "keyLabel" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "valueLabel" TEXT NOT NULL,
    "endpointId" INTEGER NOT NULL,
    CONSTRAINT "RequestParam_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RequestParam" ("endpointId", "id", "key", "value") SELECT "endpointId", "id", "key", "value" FROM "RequestParam";
DROP TABLE "RequestParam";
ALTER TABLE "new_RequestParam" RENAME TO "RequestParam";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
