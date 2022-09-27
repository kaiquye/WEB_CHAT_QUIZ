import {Router} from "express";
import routesMessage from "../../../modules/message/infrastructure/http/routes/routes";
import userRoutes from "../../../modules/user/infrastructure/http/routes";
import authRoutes from "../../../modules/auth/infrastructure/http/routes/routes";

const ApplicationRoutes = Router()
const BASE_URL = '/v1/develop'

ApplicationRoutes.use(BASE_URL + '/user', userRoutes)
ApplicationRoutes.use(BASE_URL + '/message', routesMessage)
ApplicationRoutes.use(BASE_URL + '/auth', authRoutes)

export default ApplicationRoutes