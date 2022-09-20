import { prisma } from './../../../../prisma/client';
import { CreateEngineDTO } from "../../dtos/CreateEngineDTO";
import { Engine } from "@prisma/client"

export class CreateUserUseCase {
    async execute(
        {   tag,
            description,
            current,
            power,
            rpm
        }: CreateEngineDTO): Promise<Engine> {
        //Verificar se o código já existe;
        const engineAlreadyExist = await prisma.tag.findUnique({
            where: {
                tag
            },
        });

        if (engineAlreadyExist) {
            //erro
        }

        //Criar usuário
        const engine = await prisma.engine.create({
            data: {
                tag,
                description,
                current,
                power,
                rpm
            }
        });

    }
}