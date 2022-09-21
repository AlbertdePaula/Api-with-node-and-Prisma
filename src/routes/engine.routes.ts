import { GetEnginesByUpdatedController } from './../modules/engines/useCases/getEngines.byUpdateted/GetEngineController';
import { CreateEngineController } from './../modules/engines/useCases/createEngine/CreateEngineController';
import { Router } from "express";

const createEngineController = new CreateEngineController();
const getEnginesbyUpdateController = new GetEnginesByUpdatedController();

const engineRoutes = Router();

engineRoutes.post("/", createEngineController.handle);
engineRoutes.get("/", getEnginesbyUpdateController.handle);

export { engineRoutes };
