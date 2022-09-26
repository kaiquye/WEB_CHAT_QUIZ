import { Response } from "express";

export class Result<TypeError> {
    public status = 500;
    private success = false;
    private message: string | object;
    private objectError?: TypeError;

    private constructor(status?, objectError?, success?, message?) {
        this.message = message;
        this.status = status;
        this.success = success;
        this.objectError = objectError;

        Object.freeze(this);
    }

    public static ok<TypeError>(status: number, value: TypeError) {
        return new Result<TypeError>(status, value, true);
    }

    public static fail<TypeError>(message: string | object, status: number) {
        return new Result<TypeError>(status, message, false);
    }

    public getHttpResult(responde: Response) {
        responde.status(this.status).json({
            sucess: this.success,
            message: this.message,
            value: this.objectError,
        });
    }
}