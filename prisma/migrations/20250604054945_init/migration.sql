-- CreateTable
CREATE TABLE "ResponseParam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "endpointId" INTEGER NOT NULL,
    CONSTRAINT "ResponseParam_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
