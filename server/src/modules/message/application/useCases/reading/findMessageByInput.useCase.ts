import {IUseCase} from "../../useCases.adpter";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {Result} from "../../../../../common/error/Http.response";
import {MessageDomain} from "../../../domain/message.domain";
import {MessageEntity} from "../../../domain/entity/message.entity";

export interface IFindMessage {
    input: string
}
export class FindMessageByInputUseCase extends IUseCase<IFindMessage, any>{
    private readonly message_not_found_msg = 'message was not found with the given message';

    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

    async execute(data: IFindMessage): Promise<any> {
        try{
            const domain = new MessageDomain(this.repository)

            const output = await domain.consultOutputByInput(data.input)

            return Result.ok<MessageEntity>(200, output)
        }catch (e) {
            console.log(e)
            return Result.fail(this.message_not_found_msg, 500)
        }
    }
}