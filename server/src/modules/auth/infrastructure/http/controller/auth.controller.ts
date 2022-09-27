import {Request, Response} from "express";
import {ILoginUser, LoginUseCase} from "../../../application/useCases/login.useCase";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {Result} from "../../../../../common/error/Http.response";


class AuthController {
    async login(req: Request, res: Response){
        const body: ILoginUser = {
            email: req.body.email,
            password: req.body.password
        }

        console.log(body)

        const application = new LoginUseCase(new RepositoryFactory())

        const result: Result<object> = await application.execute(body);

        return result.getHttpResult(res);
    }
}


export default new AuthController()