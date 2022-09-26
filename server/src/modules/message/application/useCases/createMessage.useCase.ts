import {IUseCase} from "../useCases.adpter";
import {MessageEntity} from "../../domain/entity/message.entity";
import {RepositoryFactory} from "../../../../database/factory/repository.factory";
import {MessageDomain} from "../../domain/message.domain";
import {Result} from "../../../../shared/http/template/Http.response";

export interface ICreateMessage {
    user_id: string;
    input:string;
    output?:string
}

export class CreateMessageUseCase implements IUseCase<ICreateMessage, Result<MessageEntity>>{
    private readonly internalError_msg = 'internal error, contact an administrator';

    constructor(
        private repository: RepositoryFactory
    ) {}

   async execute(data?: ICreateMessage): Promise<Result<MessageEntity>> {
        try{
            const domain = new MessageDomain(this.repository, data.input, data.output, data.user_id)

            const message = await domain.save()

            return Result.ok<MessageEntity>(201, message)
        }catch (e) {
            console.log(e)
            return Result.fail(this.internalError_msg, 500)
        }
    }
}