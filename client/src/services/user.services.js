import {BaseAPI} from "./base/baseApi";


export class UserServices extends BaseAPI {
    constructor() {
        super('http://localhost:3031/v1/develop/message');
    }

   async getOutPut (message) {
        return this.get(message.toString())
    }
}