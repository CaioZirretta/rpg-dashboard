import { MarkedCharacterRepositoryImpl } from "../../infra/markedcharacter/impl/MarkedCharacterRepositoryImpl";
import { MarkedCharacterService } from "../../domain/markedcharacter/MarkedCharacterService";
import { Request, Response } from "express";

const repository = new MarkedCharacterRepositoryImpl();
const service = new MarkedCharacterService(repository)

export class MarkedCharacterResource {
    static async findByCharacter(req: Request, res: Response): Promise<Response>{
        return service.findByCharacter(req, res);
    }
    static async updateCurrentPV(req: Request, res: Response): Promise<Response>{
        return service.updateCurrentPV(req, res);
    }
    static async updateCurrentPE(req: Request, res: Response): Promise<Response>{
        return service.updateCurrentPE(req, res);
    }
    static async updateCurrentSanity(req: Request, res: Response): Promise<Response>{
        return service.updateCurrentSanity(req, res);
    }
}
