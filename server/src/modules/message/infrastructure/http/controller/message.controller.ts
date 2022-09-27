import {CreateMessageUseCase} from "../../../application/useCases/createMessage.useCase";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {Request, Response} from "express";
import {
    CreateResponseByMessageUseCase,
    ICreateResponseBYMessage
} from "../../../application/useCases/createResponseByMessage.useCase";

class MessageController {

    async create(req: Request, res: Response) {
         const body =  req.body

         const application = new  CreateMessageUseCase(new RepositoryFactory());

         const result = await application.execute(body)

         return result.getHttpResult(res)
    }

    async update(req: Request, res: Response) {
        let body: ICreateResponseBYMessage;

        body = Object.assign(req.body, req.params)

        const application = new CreateResponseByMessageUseCase(new RepositoryFactory())

        const result = await application.execute(body);

        return result.getHttpResult(res);
    }
}


export default new MessageController()