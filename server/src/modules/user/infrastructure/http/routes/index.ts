import {Router} from "express";
import UserController from "../controller/user.controller";
import ValidateBody from "../../../../../shared/http/middleware/validate";
import * as Joi from 'joi';
import Authorization from "../../../../auth/infrastructure/http/middleware/authorization";

const userRoutes = Router()

userRoutes.post('/',
    ValidateBody(
    Joi.object().keys({
    email: Joi.string(),
    password: Joi.string()
    })),
    UserController.create
)

export default userRoutes