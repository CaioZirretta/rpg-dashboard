import { MarkedCharacterRepository } from "../MarkedCharacterRepository";
import { MarkedCharacter } from "@prisma/client";
import { prisma } from "../../../prisma";

export class MarkedCharacterRepositoryImpl implements MarkedCharacterRepository {
    async findAll(): Promise<MarkedCharacter[]> {
        return await prisma.markedCharacter.findMany();
    }

    async findByCharacter(character: string): Promise<MarkedCharacter> {
        const result = await prisma.markedCharacter.findFirst({ where: { sheetCharacter: character } });

        if (!result) throw new Error('Marked not found');

        return result;
    }

    async create(markedCharacter: MarkedCharacter): Promise<MarkedCharacter> {
        if (await this.checkIfCharacterExists(markedCharacter.sheetId)) {
            throw new Error("Marked character already exists");
        }

        return await prisma.markedCharacter.create({
            data: markedCharacter
        });
    }

    async updateCurrentPV(character: string, value: number): Promise<MarkedCharacter> {
        if (!this.findByCharacter(character)) throw new Error('Marked not found');

        return await prisma.markedCharacter.update({
            where: { sheetCharacter: character },
            data: { currentPV: value }
        });
    }

    async updateCurrentPE(character: string, value: number): Promise<MarkedCharacter> {
        if (!this.findByCharacter(character)) throw new Error('Marked not found');

        return await prisma.markedCharacter.update({
            where: { sheetCharacter: character },
            data: { currentPE: value }
        });
    }

    async updateCurrentSanity(character: string, value: number): Promise<MarkedCharacter> {
        if (!this.findByCharacter(character)) throw new Error('Marked not found');

        return await prisma.markedCharacter.update({
            where: { sheetCharacter: character },
            data: { currentSanity: value }
        });
    }

    async update(markedCharacter: MarkedCharacter): Promise<MarkedCharacter> {
        if(!this.checkIfCharacterExists(markedCharacter.sheetId))

        return await prisma.markedCharacter.update({
            where: { sheetId: markedCharacter.sheetId },
            data: markedCharacter
        });
    }

    async delete(id: string): Promise<MarkedCharacter> {
        return await prisma.markedCharacter.delete({ where: { sheetId: id } });
    }

    async checkIfCharacterExists(id: string): Promise<boolean> {
        return !!(await prisma.markedCharacter.findFirst({ where: { id } }));
    }

}
