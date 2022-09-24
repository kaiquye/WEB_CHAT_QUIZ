import {IBaseRep} from "./interface/baseRep.interface";
import {PrismaClient} from "@prisma/client";


export abstract class BaseRep<T> implements IBaseRep<T> {
    private readonly TABLE: string;
    private readonly ORM: PrismaClient;

    constructor(TABLE: string, ORM: PrismaClient) {
        this.TABLE = TABLE
        this.ORM = ORM
    }

    delete(where: T): Promise<any> {
        return this.ORM[this.TABLE].delete({ where })
    }

    exists(where: T): Promise<boolean> {
        return this.ORM[this.TABLE].findFirst({ where })
    }

    save(data: T): Promise<any> {
        return this.ORM[this.TABLE].create({ data })
    }
}