import { prisma } from '../../../../prisma/client';
import { Engine } from '@prisma/client';

export class GetEnginesByUpdatedUseCase {
    async execute(): Promise<Engine[]> {
        const engines = await prisma.engine.findMany({
        });
        return engines;
    }
}