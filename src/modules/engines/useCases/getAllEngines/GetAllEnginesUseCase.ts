import { prisma } from '../../../../prisma/client';
import { Engine } from '@prisma/client';

export class GetAllEnginesUseCase {
    async execute(): Promise<Engine[]> {
        const engines = await prisma.engine.findMany({
        });
        return engines;
    }
}