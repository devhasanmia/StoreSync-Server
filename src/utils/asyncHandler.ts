import { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};