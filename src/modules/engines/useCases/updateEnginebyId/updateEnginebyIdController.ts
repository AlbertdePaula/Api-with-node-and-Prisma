import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export class UpdateEnginebyIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {tag, description, current, power, rpm } = request.body;

        let engine = await prisma.engine.findUnique({where: {id: String(id)}});

        if (!engine)
            return response.json({error: "Equipamento não encontrado!"})

        engine = await prisma.engine.update({
            where: {id:String(id)},
            data: {tag, description, current, power, rpm},
        });

        return response.json(engine);
    }
}