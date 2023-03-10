-- CreateTable
CREATE TABLE "Sheet" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "player" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "presente" INTEGER NOT NULL,
    "intelect" INTEGER NOT NULL,
    "vigor" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "nex" INTEGER NOT NULL,
    "pe_round" INTEGER NOT NULL,
    "displacement" INTEGER NOT NULL,
    "pv" INTEGER NOT NULL,
    "pe" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "sanity" INTEGER NOT NULL,
    "protection" JSONB NOT NULL,
    "resistance" JSONB NOT NULL,
    "skill" JSONB NOT NULL,
    "ritual" JSONB NOT NULL,
    "ritualDT" INTEGER NOT NULL,
    "attacks" JSONB NOT NULL,
    "abilities" JSONB NOT NULL,
    "inventory" JSONB NOT NULL,
    "prestigePoints" INTEGER NOT NULL,
    "patent" TEXT NOT NULL,
    "itemLimit" JSONB NOT NULL,
    "creditLimit" TEXT NOT NULL,
    "maximumWeight" INTEGER NOT NULL,
    "description" JSONB NOT NULL,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("id")
);
