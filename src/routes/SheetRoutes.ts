import { Router } from "express";
import { SheetResource } from "../api/sheet/SheetResource";

export const SheetRoutes = Router();

const baseUrl = "/sheet";

SheetRoutes.get(baseUrl, SheetResource.list);
SheetRoutes.post(baseUrl, SheetResource.add);
