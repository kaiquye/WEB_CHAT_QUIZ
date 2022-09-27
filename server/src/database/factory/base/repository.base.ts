import {RepositoryMessage} from "../../../modules/message/infrastructure/repository/repository";
import {RepositoryUser} from "../../../modules/user/infrastructure/repository/repository";


export abstract class BaseFactory {
   RepMessage: RepositoryMessage
   RepUser: RepositoryUser
}