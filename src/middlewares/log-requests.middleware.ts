import { NextFunction, Request, Response } from 'express';
import { Logger } from '../utils';

const logRequestsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`${req.method} ${req.url}`);
    next();
};

export { logRequestsMiddleware };
