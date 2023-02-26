import { SheetRepository } from "../SheetRepository";
import { prisma } from "../../../prisma";
import { Sheet } from "@prisma/client";
import { CreateSheetType } from "../../../domain/sheet/CreateSheetType";

export class SheetRepositoryImpl implements SheetRepository {
    async list(): Promise<Sheet[]> {
        return await prisma.sheet.findMany();
    }

    async findByCharacter(character: string): Promise<Sheet> {
        const result = await prisma.sheet.findFirst({ where: { character } });

        if (!result) throw new Error('Sheet not found');

        return result;
    }

    async add(sheet: CreateSheetType): Promise<Sheet> {
        return await prisma.sheet.create({
            data: sheet
        });
    }

    async update(sheet: CreateSheetType): Promise<Sheet> {
        let result: Sheet;

        try {
            result = await this.findByCharacter(sheet.character);
        } catch (e) {
            throw e;
        }

        return await prisma.sheet.update({
            where: {
                id: result.id
            },
            data: sheet
        });
    }


}
