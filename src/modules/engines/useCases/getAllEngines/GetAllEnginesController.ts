import { GetAllEnginesUseCase } from "./GetAllEnginesUseCase";
import { Request, Response } from "express";

export class GetAllEnginesController {
    async handle(req: Request, res: Response) {

        const getAllEnginesUseCase = new GetAllEnginesUseCase();

        const result = await getAllEnginesUseCase.execute();

        return res.status(200).json(result);
    }
}