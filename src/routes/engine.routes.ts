import { CreateEngineController } from './../modules/engines/useCases/createEngine/CreateEngineController';
import { Router } from "express";

const createEngineController = new CreateEngineController();

const engineRoutes = Router();

engineRoutes.post("/", createEngineController.handle);

export { engineRoutes };
