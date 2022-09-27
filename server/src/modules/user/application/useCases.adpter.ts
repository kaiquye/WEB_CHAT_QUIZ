export abstract class IUseCase<Request, Response> {
    internalError_msg = 'internal error, contact an administrator';
    abstract execute(data?: Request, params?): Promise<Response>;
}