import {RepUserAdapter} from "./interface/userRepository.interface";
import {PrismaClient} from "@prisma/client";


export class RepositoryUser extends RepUserAdapter{
    repository: PrismaClient

    constructor(ORM: PrismaClient) {
        super('USER', ORM);
        this.repository = ORM;
    }

    findByEmail(email: string): Promise<any> {
        return this.repository.uSER.findFirst({
            where: {
                email
            }
        })
    }
}