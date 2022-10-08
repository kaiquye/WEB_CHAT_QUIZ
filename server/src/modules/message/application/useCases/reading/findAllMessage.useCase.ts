import {IUseCase} from "../../useCases.adpter";
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";
import {MessageDomain} from "../../../domain/message.domain";
import {Result} from "../../../../../common/error/Http.response";
import {MessageEntity} from "../../../domain/entity/message.entity";


export class FindAllMessageUseCase extends IUseCase<void, any> {
    private readonly  errorFetching =  'error fetching all messages, contact an administrator';

    constructor(
        private repository: RepositoryFactory
    ) {
        super()
    }

    async execute() :Promise<any> {
        try {
            const domain = new MessageDomain(this.repository);

            const messages = await domain.getAll()

            return Result.ok<MessageEntity[]>(200, messages)
        }catch (error) {
            return Result.fail(this.errorFetching, 500)
        }
    }
}