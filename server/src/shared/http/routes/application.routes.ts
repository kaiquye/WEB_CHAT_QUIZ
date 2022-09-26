import {Router} from "express";
import routesMessage from "../../../modules/message/infrastructure/http/routes/routes";

const ApplicationRoutes = Router()
const BASE_URL = '/v1/develop'

ApplicationRoutes.use(BASE_URL + '/message', routesMessage)

export default ApplicationRoutes