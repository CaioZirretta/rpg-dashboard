import { SheetResource } from "../api/sheet/SheetResource";
import { Router } from "express";

export const sheetRoutes = Router();

const baseUrl = "/sheet";

sheetRoutes.get(baseUrl, SheetResource.list);
sheetRoutes.get(baseUrl + ":character", SheetResource.findByCharacter);
sheetRoutes.post(baseUrl, SheetResource.add);
sheetRoutes.put(baseUrl, SheetResource.update);
