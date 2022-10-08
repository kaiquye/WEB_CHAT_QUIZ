import {BaseRep} from "../../../../../database/base/baseRep.abstract";
import {MessageEntity} from "../../../domain/entity/message.entity";
import {PrismaClient} from "@prisma/client";


export abstract class RepMessageAdapter extends BaseRep<MessageEntity> {
    abstract repository: PrismaClient
    abstract update(id: string, data: Partial<MessageEntity>): Promise<any>
    abstract findByInput(input: string): Promise<any>
    abstract findAll()
}