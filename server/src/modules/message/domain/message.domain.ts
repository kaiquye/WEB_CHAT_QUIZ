import {MessageEntity} from "./entity/message.entity";
import {RepositoryFactory} from "../../../database/factory/repository.factory";


export class MessageDomain implements MessageEntity {
     id: number;
     input: string;
     output: string;
     updateAt: Date | null;
     createdAt: Date | null;
     user_id: string;

     private database: RepositoryFactory

    constructor(db: RepositoryFactory, input?, output?, user_id?) {
        this.database = db
        this.input = input;
        this.output = output;
        this.user_id = user_id;
    }

    public async save() {
        if(this.user_id === null) {
            throw new Error('invalid user_id, is null');
        }

        return this.database.RepMessage.save({
            input: this.input,
            output: this.output,
            user_id: this.user_id
        })
    }

    public uploadOutput(id: string, data: Partial<MessageEntity>){
         return this.database.RepMessage.update(id, data)
    }

    public consultOutputByInput(input: string){
         return this.database.RepMessage.findByInput(input)
    }
}