import { Sheet } from "@prisma/client";
import { CreateSheetType } from "../../domain/sheet/CreateSheetType";

export interface SheetRepository {
    list(): Promise<Sheet[]>
    add(sheet: CreateSheetType): Promise<Sheet>
}
