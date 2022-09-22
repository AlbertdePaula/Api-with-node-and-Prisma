import { prisma } from '../../../../prisma/client';
import { Engine } from '@prisma/client';

export class GetEnginebyIdUseCase {
    async execute(): Promise<Engine[]> {
        const engines = await prisma.engine.findUnique({
            where: {
                
            },
        });

        return engines;
    
}
}