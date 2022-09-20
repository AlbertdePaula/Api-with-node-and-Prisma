import { Router } from "express";
import { engineRoutes } from "./engine.routes";

const routes = Router();

routes.use("/engines", engineRoutes);

export { routes };