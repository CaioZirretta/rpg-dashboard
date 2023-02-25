import { Express, Router } from "express";
import { SheetRoutes } from "./SheetRoutes";

export const router = (app: Express) => {
    app.use(SheetRoutes);
}
