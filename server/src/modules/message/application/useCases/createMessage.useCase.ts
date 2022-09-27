import {IUseCase} from "../useCases.adpter";
import {MessageEntity} from "../../domain/entity/message.entity";
import {RepositoryFactory} from "../../../../database/factory/repository.factory";
import {MessageDomain} from "../../domain/message.domain";
import {Result} from "../../../../common/error/Http.response";

export interface ICreateMessage {
    user_id: string;
    input:string;
    output?:string
}

export class CreateMessageUseCase extends IUseCase<ICreateMessage, Result<MessageEntity>>{
    private readonly user_not_found_msg = 'unable to find user by id';

    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

   async execute(data?: ICreateMessage): Promise<Result<MessageEntity>> {
        try{
            const userExists = await this.repository.RepUser.exists({
                id: data.user_id
            })

            if(!userExists){
                return Result.fail(this.user_not_found_msg, 404)
            }

            const domain = new MessageDomain(this.repository, data.input, data.output, data.user_id)

            const message = await domain.save()

            return Result.ok<MessageEntity>(201, message)
        }catch (e) {
            console.log(e)
            return Result.fail(this.internalError_msg, 500)
        }
    }
}