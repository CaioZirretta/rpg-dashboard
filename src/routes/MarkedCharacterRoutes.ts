import { Router } from "express";
import { MarkedCharacterResource } from "../api/markedcharacter/MarkedCharacterResource";

export const markedCharacterRoutes = Router();

const baseUrl = "marked";

markedCharacterRoutes.get(baseUrl + ":character", MarkedCharacterResource.findByCharacter);
markedCharacterRoutes.patch(baseUrl + "/pv", MarkedCharacterResource.updateCurrentPV);
markedCharacterRoutes.patch(baseUrl + "/pe", MarkedCharacterResource.updateCurrentPE);
markedCharacterRoutes.patch(baseUrl + "/sanity", MarkedCharacterResource.updateCurrentSanity);
