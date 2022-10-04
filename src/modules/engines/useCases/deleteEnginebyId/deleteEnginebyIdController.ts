import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export class DeleteEnginebyIdController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const engine = await prisma.engine.findUnique({ where: { id: String(id) } });

            if (!engine)
                return response.json({ error: "Não foi possível encotrar esse equipamento" });

            await prisma.engine.delete({ where: { id: String(id) } });

            return response.json({ message: "Equipamento deletado" });
        } catch (error) {
            return response.json({ error });
        }
    }
}