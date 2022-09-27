import {UserEntity} from "./entity/user.entity";
import {RepositoryFactory} from "../../../database/factory/repository.factory";
import * as  bcrypt from 'bcrypt';

export class UserDomain implements UserEntity {
    id: string;
    email: string;
    password: string;
    createAt:  Date | null;
    updateAt:  Date | null;

    private readonly database: RepositoryFactory

    constructor(db: RepositoryFactory, email?, password?){
        this.email = email;
        this.password = password;

        this.database = db;
    }

    async save(){
        if(!(this.email && this.password)){
            throw new Error('invalid params, email ou password is null');
        }

        const hashPassword = await bcrypt.hash(this.password, 10)

        return this.database.RepUser.save({
            email: this.email,
            password: hashPassword,
        })
    }
}