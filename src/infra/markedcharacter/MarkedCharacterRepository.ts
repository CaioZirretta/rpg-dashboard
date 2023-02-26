import { MarkedCharacter } from "@prisma/client";

export interface MarkedCharacterRepository {
    findAll(): Promise<MarkedCharacter[]>;

    findByCharacter(name: string): Promise<MarkedCharacter>;

    create(markedCharacter: MarkedCharacter): Promise<MarkedCharacter>;

    updateCurrentPV(character: string, value: number): Promise<MarkedCharacter>;

    updateCurrentPE(character: string, value: number): Promise<MarkedCharacter>;

    updateCurrentSanity(character: string, value: number): Promise<MarkedCharacter>;

    update(markedCharacter: MarkedCharacter): Promise<MarkedCharacter>;

    delete(id: string): Promise<MarkedCharacter>;
}
