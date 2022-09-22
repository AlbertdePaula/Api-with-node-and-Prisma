import { GetAllEnginesController } from '../modules/engines/useCases/getAllEngines/GetAllEnginesController';
import { CreateEngineController } from './../modules/engines/useCases/createEngine/CreateEngineController';
import { GetEnginebyIdController } from '../modules/engines/useCases/getEnginebyId/GetEnginebyIdController';
import { Router } from "express";

const createEngineController = new CreateEngineController();
const getAllEnginesController = new GetAllEnginesController();
const getEnginebyIdController = new GetEnginebyIdController();

const engineRoutes = Router();

engineRoutes.post("/", createEngineController.handle);
engineRoutes.get("/", getAllEnginesController.handle);
engineRoutes.get("/:id", getEnginebyIdController.handle);

export { engineRoutes };
