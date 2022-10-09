import {BaseAPI} from "./base/baseApi";


export class UserServices extends BaseAPI {
    messageBotFound = 'there is no response to this message in our database'

    constructor() {
        super('http://localhost:3031/v1/develop/message');
    }

   async getOutPut (message) {
        const {data} = await this.get(message.toString())

        if(!data.sucess) {
            return alert('invalid message')
        }

        return data.value ? data.value.output : this.messageBotFound
    }


    async getAllMessages (){
        const {data} = await this.get('');

        if(!data.sucess) {
            return alert('invalid message')
        }

        return data.value ? data.value : this.messageBotFound
    }

    async updateMessage(id, input, output) {
        console.log('-------------->',input)
        return this.put('/'+id.toString(), {input: input, output: output})
    }

    async saveNewMessage(userId, input, output) {
        return this.post('/', {userId, input, output})
    }
}