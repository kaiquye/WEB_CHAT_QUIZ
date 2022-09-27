import {RepMessageAdapter} from "./interfaces/repository.interface";
import {PrismaClient} from "@prisma/client";
import {MessageEntity} from "../../domain/entity/message.entity";


export class RepositoryMessage extends RepMessageAdapter {
    repository: PrismaClient

    constructor(ORM: PrismaClient) {
        super('MESSAGE', ORM);
        this.repository = ORM;
    }

    update(id: string, data: Partial<MessageEntity>): Promise<any> {
        return this.repository.mESSAGE.update({
            where: {
                id: Number(id),
            },
            data: {
                output: data.output,
                input: data.input,
            },
        })
    }

    findByInput(input: string): Promise<any> {
        return this.repository.mESSAGE.findFirst({
            where: {
                 input: {
                     contains: input
                 }
            }
        })
    }
}