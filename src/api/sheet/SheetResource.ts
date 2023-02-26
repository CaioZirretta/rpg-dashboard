import { Request, Response } from "express";
import { SheetService } from "../../domain/sheet/SheetService";
import { SheetRepositoryImpl } from "../../infra/sheet/impl/SheetRepositoryImpl";

const repository = new SheetRepositoryImpl();
const service: SheetService = new SheetService(repository);

export class SheetResource {
    static async list(req: Request, res: Response): Promise<Response> {
        return service.list(req, res);
    }

    static async add(req: Request, res: Response): Promise<Response> {
        return service.add(req, res);
    }

    static async update(req: Request, res: Response): Promise<Response> {
        return service.update(req, res);
    }

    static async findByCharacter(req: Request, res: Response): Promise<Response> {
        return service.findByCharacter(req, res);
    }
}
