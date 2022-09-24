import {Router} from "express";


const ApplicationRoutes = Router()
const BASE_URL = '/v1/develop'


ApplicationRoutes.use(BASE_URL + '/message', message.controller)


export default ApplicationRoutes