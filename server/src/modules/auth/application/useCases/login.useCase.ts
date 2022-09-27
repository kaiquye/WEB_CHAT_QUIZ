import {IUseCase} from "../useCases.adpter";
import {RepositoryFactory} from "../../../../database/factory/repository.factory";
import {AuthDomain} from "../../domain/auth.domain";
import {UserEntity} from "../../../user/domain/entity/user.entity";
import {Result} from "../../../../common/error/Http.response";
import jwt from 'jsonwebtoken';

export interface ILoginUser {
    email:string
    password: string
}

export class LoginUseCase extends IUseCase<ILoginUser, Result<object>> {
    private readonly user_not_found_msg = 'unable to login invalid credentials';

    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

    async execute(data: ILoginUser): Promise<Result<object>> {
        try{
            const domain = new AuthDomain(this.repository)

            const logged = domain.login(data.email, data.password);

            if(!logged){
                return Result.fail(this.user_not_found_msg, 404)
            }

            const payload = {
                email: data.email
            }

            const token = jwt.sign(payload, 'SECRET');

            return Result.ok<object>(200, { Token: token })
        }catch (e) {
            return Result.fail(this.internalError_msg, 500)
        }
    }
}