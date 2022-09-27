import {Request, Response} from "express";
import {CreateUserUseCase} from "../../../application/useCases/createUser.useCase";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";


class UserController {
    async create(req: Request, res: Response){
          const body = req.body;

          const application = new CreateUserUseCase(new RepositoryFactory());

          const result  = await application.execute(body);

          return result.getHttpResult(res);
    }
}

export default new UserController()