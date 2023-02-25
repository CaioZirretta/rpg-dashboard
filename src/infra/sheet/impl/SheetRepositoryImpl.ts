import { SheetRepository } from "../SheetRepository";
import { prisma } from "../../../prisma";
import { Sheet } from "@prisma/client";
import { CreateSheetType } from "../../../domain/sheet/CreateSheetType";

export class SheetRepositoryImpl implements SheetRepository {
    async add(sheet: CreateSheetType): Promise<Sheet> {
        return prisma.sheet.create({
            data: sheet
        });
    }

    async list(): Promise<Sheet[]> {
        return await prisma.sheet.findMany();
    }

}
