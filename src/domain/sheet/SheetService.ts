import { Sheet } from "@prisma/client";
import { Request, Response } from "express";
import { SheetRepository } from "../../infra/sheet/SheetRepository";

export class SheetService {
    constructor(private repository: SheetRepository) {
    }

    async list(req: Request, res: Response): Promise<Response> {
        const result: Sheet[] = await this.repository.list();

        return res.status(200).send(result);
    }

    async findByCharacter(req: Request, res: Response): Promise<Response> {
        let result: Sheet

        try {
            result = await this.repository.findByCharacter(req.params.character);
        } catch(error) {
            return res.status(401).send(error);
        }

        return res.status(200).send(result);
    }

    async add(req: Request, res: Response): Promise<Response> {
        let result: Sheet  = await this.repository.add(req.body);

        return res.status(200).send(result);
    }

    async update(req: Request, res: Response): Promise<Response> {
        let result: Sheet

        try {
            result = await this.repository.add(req.body);
        } catch(error) {
            return res.status(401).send(error);
        }

        return res.status(200).send(result);
    }

}
