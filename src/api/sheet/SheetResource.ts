import { CreateSheetType } from "../../domain/sheet/CreateSheetType";
import { Request, Response } from "express";
import { SheetService } from "../../domain/sheet/SheetService";
import { SheetRepositoryImpl } from "../../infra/sheet/impl/SheetRepositoryImpl";
import { Sheet } from "@prisma/client";

const repository = new SheetRepositoryImpl()
const service: SheetService = new SheetService(repository);

export class SheetResource {
    static async list(req: Request, res: Response): Promise<Sheet[]> {
        return service.list();
    }

    static async add(req: Request, res: Response): Promise<Sheet> {
        return service.add(req, res);
    }
}
