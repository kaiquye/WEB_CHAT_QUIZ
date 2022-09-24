import {RepositoryMessage} from "../../modules/message/infrastructure/repository/repository";
import {connection} from "../connection";
import {BaseFactory} from "./base/repository.base";
import {RepMessageAdapter} from "../../modules/message/infrastructure/repository/interfaces/repository.interface";


export class RepositoryFactory extends BaseFactory {
    public RepMessage: RepMessageAdapter;
    public RepUser: any;

    constructor() {
        super()
        this.RepMessage = new RepositoryMessage(connection)
    }
}