import { Express } from "express";
import { sheetRoutes } from "./SheetRoutes";
import { markedCharacterRoutes } from "./MarkedCharacterRoutes";

export const router = (app: Express) => {
    app.use(sheetRoutes);
    app.use(markedCharacterRoutes)
}
