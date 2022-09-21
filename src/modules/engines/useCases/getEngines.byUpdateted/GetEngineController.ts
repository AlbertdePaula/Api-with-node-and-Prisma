import { GetEnginesByUpdatedUseCase } from "./GetEnginesbyUpdadatedUseCase";
import { Request, Response } from "express";

export class GetEnginesByUpdatedController {
    async handle(req: Request, res: Response) {

        const getEnginesbyUpdadatedUseCase = new GetEnginesByUpdatedUseCase();

        const result = await getEnginesbyUpdadatedUseCase.execute();

        return res.status(200).json(result);
    }
}