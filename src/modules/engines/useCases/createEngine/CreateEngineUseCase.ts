import { AppError } from './../../../../errors/AppError';
import { CreateEngineDTO } from "../../dtos/CreateEngineDTO";
import { Engine } from "@prisma/client"
import { prisma } from "../../../../prisma/client";


export class CreateEngineUseCase {
    async execute(
        {   
            tag,
            description,
            current,
            power,
            rpm,
            area,
            created_for
        }: CreateEngineDTO): Promise<Engine> {
        //Verificar se o código já existe;
        const engineAlreadyExist = await prisma.engine.findUnique({
            where: {
                tag
            },
        });

        if (engineAlreadyExist) {
            throw new AppError("Equipament already exists!", 400);
        }

        //Criar usuário
        const engine = await prisma.engine.create({
            data: {
                tag,
                description,
                current,
                power,
                rpm,
                area,
                created_for
            }
        });
        return engine;
    }
}