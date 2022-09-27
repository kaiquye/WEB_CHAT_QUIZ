import {IUseCase} from "../useCases.adpter";
import {RepositoryFactory} from "../../../../database/factory/repository.factory";
import {UserDomain} from "../../domain/user.domain";
import {UserEntity} from "../../domain/entity/user.entity";
import {Result} from "../../../../common/error/Http.response";

export interface ICreateUser {
    email: string;
    password: string;
}

export class CreateUserUseCase extends IUseCase<ICreateUser, Result<UserEntity>>{
    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

    async execute(data?: ICreateUser): Promise<Result<UserEntity>> {
        try{
            const domain = new UserDomain(this.repository, data.email, data.password)

            const user = await domain.save()

            user.password = undefined;

            return Result.ok<UserEntity>(201, user);
        }catch (e) {
            console.log(e)
            return Result.fail(this.internalError_msg, 500)
        }
    }
}