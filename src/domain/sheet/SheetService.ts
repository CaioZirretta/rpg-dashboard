import { Sheet } from "@prisma/client";
import { Request, Response } from "express";
import { SheetRepository } from "../../infra/sheet/SheetRepository";

export class SheetService {
    constructor(private repository: SheetRepository) {}

    async add(req: Request, res: Response): Promise<Sheet> {
        return this.repository.add(req.body);
    }

    async list(): Promise<Sheet[]> {
        return this.repository.list();
    }
}
