import {RepositoryFactory} from "../../../database/factory/repository.factory";
import {NextFunction, Response} from "express";
import bcrypt from 'bcrypt';

export class AuthDomain {
    id?: string;
    email: string;
    token: string;

    private database: RepositoryFactory;

    constructor(db: RepositoryFactory) {
        this.database = db;
    }

    public async login(email: string, password: string){
        const user = await this.database.RepUser.findByEmail(email)

        if(!user){
            return false
        }

        const match = bcrypt.compare(password, user.password)

        return !!match;
    }
}