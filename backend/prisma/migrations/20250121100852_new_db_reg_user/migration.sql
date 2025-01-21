-- CreateTable
CREATE TABLE "registeredUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNo" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registeredUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registeredUser_email_key" ON "registeredUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registeredUser_phoneNo_key" ON "registeredUser"("phoneNo");
