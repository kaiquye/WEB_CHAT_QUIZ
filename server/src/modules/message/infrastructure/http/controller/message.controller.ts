import {CreateMessageUseCase} from "../../../application/useCases/createMessage.useCase";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {Request, Response} from "express";

class MessageController {

    async create(req: Request, res: Response) {
         const body =  req.body

         const application = new  CreateMessageUseCase(new RepositoryFactory());

         const result = await application.execute(body)

         return result.getHttpResult(res)
    }
}


export default new MessageController()