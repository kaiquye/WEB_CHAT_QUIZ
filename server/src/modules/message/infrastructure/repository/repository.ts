import {RepMessageAdapter} from "./interfaces/repository.interface";
import {PrismaClient} from "@prisma/client";


export class RepositoryMessage extends RepMessageAdapter {
    constructor(ORM: PrismaClient) {
        super('MESSAGE', ORM);
    }
}