import { NextFunction, Request, Response } from "express";
import { authMiddleware } from "../../../authMiddleware";
import { createResponse } from "../../response";

export const GET = (req: Request, res: Response, next: NextFunction) => {
  createResponse({message: "Protected Route Accessed!", cookie: req.headers['cookie'] ?? null}, req, res, next)
}

/* Any amount of middlewares */
export default [
  authMiddleware
]