import {Request, NextFunction, Response} from "express";
import jwt from 'jsonwebtoken';
import {RepositoryFactory} from "../../../../../database/factory/repository.factory";

class Authorization {

    async isAuthorization(req: Request, res: Response, next: NextFunction){
        try{
            const {authorization} = req.headers

            if(authorization){
                return res.status(401).json('authorization is null')
            }

            const [, token] = authorization.split(' ');

            const payload = jwt.verify(authorization, 'SECRET');

            const repository =  new RepositoryFactory().RepUser

            console.log(payload)
            //
            // const isExists = await repository.findByEmail(payload)
            //
            // if(!isExists) {
            //     return res.send(401)
            // }

            next()
        }catch (e) {
            return res.status(401).json('ACCESS DENIED');
        }
    }
}

export default new Authorization()