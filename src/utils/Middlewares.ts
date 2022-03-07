import { Request, Response, NextFunction } from "express";

export const isAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => (req.user ? next() : res.status(403).send({ message: 'Unauthorized' }))