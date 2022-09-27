import {IUseCase} from "../useCases.adpter";
import {RepositoryFactory} from "../../../../database/factory/repository.factory";
import {MessageDomain} from "../../domain/message.domain";
import {MessageEntity} from "../../domain/entity/message.entity";
import {Result} from "../../../../common/error/Http.response";

export interface ICreateResponseBYMessage{
    id: string
    output?: string
    input?: string
    status?: string | boolean
}

export class CreateResponseByMessageUseCase extends IUseCase<ICreateResponseBYMessage, Result<MessageEntity>> {
    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

    async execute(data: ICreateResponseBYMessage): Promise<any> {
        try{
            const messageExists = await this.repository.RepMessage.exists({
                id: Number(data.id)
            })

            if(!messageExists){
                return Result.fail(this.internalError_msg, 404)
            }

            const domain = new MessageDomain(this.repository);

            const output = await domain.uploadOutput(data.id, {
                output: data.output,
                input: data.input,
            })

            return Result.ok<MessageEntity>(201, output)
        }catch (errorUpdatingOutput) {
            console.log(errorUpdatingOutput)
            return Result.fail(this.internalError_msg, 500)
        }
    }
}