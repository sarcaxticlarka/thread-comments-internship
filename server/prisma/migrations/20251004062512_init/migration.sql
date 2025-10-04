-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL,
    "parentId" INTEGER,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
