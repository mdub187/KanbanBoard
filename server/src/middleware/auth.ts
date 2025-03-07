import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';

interface JwtPayload {
  username: string;
  password: string;
}

interface authenticateToken {
  authHeader: string;
}


export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  // verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];

  // const logout = () => localStorage.clear();
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not defined');
    return res.sendStatus(500);
  }

  return jwt.verify(token, secret as Secret, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.body.user = user;
    return next();
  });
}

export default JwtPayload;
