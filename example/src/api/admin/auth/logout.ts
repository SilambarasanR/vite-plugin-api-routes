import { NextFunction, Request, Response } from "express";
import { authMiddleware } from "../../../authMiddleware.js";
import { createResponseAsync } from "../../response.js";

export const POST = async (req: Request, res: Response, next: NextFunction) => {
  res.clearCookie("auth");
  return createResponseAsync("Logged out!", req, res, next);
};

/* Any amount of middlewares */
/* Like this the user cannot logout if he is not logged in */
export default [
  authMiddleware
]