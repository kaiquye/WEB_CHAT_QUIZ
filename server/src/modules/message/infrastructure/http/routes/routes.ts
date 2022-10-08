import {Router} from 'express'
import * as  joi from 'joi'
import MessageController  from "../controller/message.controller";
import ValidateBody from "../../../../../shared/http/middleware/validate";
import Authorization from "../../../../auth/infrastructure/http/middleware/authorization";

const routesMessage = Router()

// routesMessage.use(Authorization.isAuthorization)

routesMessage.post('/', ValidateBody(
    joi.object().keys({
        input: joi.string().required(),
        output: joi.string(),
        user_id: joi.string().required()
    })
),MessageController.create)

routesMessage.put('/:id',MessageController.update)

routesMessage.get('/:message', MessageController.consultMessage)

routesMessage.get('/', MessageController.gelAll)
export default routesMessage