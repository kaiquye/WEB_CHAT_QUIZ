export abstract class IUseCase<Request, Response> {
    internalError_msg = 'application error contact an administrator';
    abstract execute(data?: Request, params?): Promise<Response>;
}