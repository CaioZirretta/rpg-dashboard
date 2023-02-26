import { Request, Response } from 'express';
import { MarkedCharacterRepository } from "../../infra/markedcharacter/MarkedCharacterRepository";
import { MarkedCharacter } from "@prisma/client";

export class MarkedCharacterService {
    constructor(private repository: MarkedCharacterRepository) {
    }

    async findAll(req:Request, res:Response): Promise<Response> {
        return res.status(200).send(await this.repository.findAll());
    }

    async findByCharacter(req: Request, res: Response): Promise<Response> {
        let result: MarkedCharacter;

        try {
            result = await this.repository.findByCharacter(req.params.character);
        } catch (err) {
            return res.status(400).send({ err });
        }

        return res.status(200).send(result);
    }

    async create(markedCharacter: MarkedCharacter): Promise<MarkedCharacter> {
        let result: MarkedCharacter;

        try {
            result = await this.repository.create(markedCharacter);
        } catch (err) {
            throw err;
        }

        return result;
    }

    async updateCurrentPV(req: Request, res: Response): Promise<Response> {
        const { character, value } = req.body;

        let result: MarkedCharacter;

        try {
            result = await this.repository.updateCurrentPV(character, value);
        } catch (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(result!);
    }

    async updateCurrentPE(req: Request, res: Response): Promise<Response> {
        const { character, value } = req.body;

        let result: MarkedCharacter;

        try {
            result = await this.repository.updateCurrentPE(character, value);
        } catch (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(result!);
    }

    async updateCurrentSanity(req: Request, res: Response): Promise<Response> {
        const { character, value } = req.body;

        let result: MarkedCharacter;

        try {
            result = await this.repository.updateCurrentSanity(character, value);
        } catch (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(result!);
    }

    async update(req: Request, res: Response): Promise<Response> {

    }

    async delete(req: Request, res: Response): Promise<Response> {

    }
}
