import {Router} from 'express'
import MessageController  from "../controller/message.controller";

const routesMessage = Router()

routesMessage.post('/', MessageController.create)

export default routesMessage