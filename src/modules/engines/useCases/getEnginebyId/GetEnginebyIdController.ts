import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export class GetEnginebyIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const engine = await prisma.engine.findUnique({
            where: {
                id,
            },
        });

        return response.json(engine);

    }
}