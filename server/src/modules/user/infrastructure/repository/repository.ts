import {RepUserAdapter} from "./interface/userRepository.interface";
import {PrismaClient} from "@prisma/client";


export class RepositoryUser extends RepUserAdapter{
    constructor(ORM: PrismaClient) {
        super('USER', ORM);
    }
}