import {CreateMessageUseCase} from "../../../application/useCases/writing/createMessage.useCase";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {Request, Response} from "express";
import {
    CreateResponseByMessageUseCase,
    ICreateResponseBYMessage
} from "../../../application/useCases/writing/createResponseByMessage.useCase";
import {
    FindMessageByInputUseCase,
    IFindMessage
} from "../../../application/useCases/reading/findMessageByInput.useCase";
import {Result} from "../../../../../common/error/Http.response";
import {MessageEntity} from "../../../domain/entity/message.entity";
import {FindAllMessageUseCase} from "../../../application/useCases/reading/findAllMessage.useCase";

class MessageController {

    async create(req: Request, res: Response) {
         const body =  req.body

         const application = new  CreateMessageUseCase(new RepositoryFactory());

         const result: Result<MessageEntity> = await application.execute(body)

         return result.getHttpResult(res)
    }

    async update(req: Request, res: Response) {
        let body: ICreateResponseBYMessage;

        body = Object.assign(req.body, req.params)

        console.log(body)

        const application = new CreateResponseByMessageUseCase(new RepositoryFactory())

        const result: Result<MessageEntity> = await application.execute(body);

        return result.getHttpResult(res);
    }

    async consultMessage(req: Request, res: Response){
        let body: IFindMessage = {
            input: req.params.message,
        }

        const application = new FindMessageByInputUseCase(new RepositoryFactory())

        const result: Result<MessageEntity> = await application.execute(body)

        return result.getHttpResult(res)
    }

    async gelAll(req: Request, res: Response) {
        const application = new FindAllMessageUseCase(new RepositoryFactory())

        const result: Result<MessageEntity[]> = await application.execute();

        return result.getHttpResult(res)
    }
}


export default new MessageController()