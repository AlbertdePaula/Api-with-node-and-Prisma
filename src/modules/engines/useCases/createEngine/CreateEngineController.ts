import { CreateEngineUseCase } from './CreateEngineUseCase';
import { Request, Response } from "express";

export class CreateEngineController {
    async handle(req: Request, res: Response) {
        const { tag, description, current, power, rpm, area, created_for } = req.body;

        const createEngineUseCase = new CreateEngineUseCase();

        const result = await createEngineUseCase.execute({tag, description, current, power, rpm, area, created_for});

        return res.status(201).json(result)
    }
}