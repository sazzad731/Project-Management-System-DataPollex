import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ success: false, message: "Unauthorized access"});

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token as string, config.jwt_secret!) as JwtPayload;
    req.user = payload;
    next();
  } catch(err) {
    res.sendStatus(403)
  }
};
