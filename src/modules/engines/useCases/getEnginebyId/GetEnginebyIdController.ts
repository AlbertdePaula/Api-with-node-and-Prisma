import { GetEnginebyIdUseCase } from "./GetEnginebyIdUseCase";
import { Request, Response } from "express";

export class GetEnginebyIdController {
    async handle(req: Request, res: Response) {

        const getEnginebyIdUseCase = new GetEnginebyIdUseCase();

        const result = await getEnginebyIdUseCase.execute();

        return res.status(200).json(result);
    }
}