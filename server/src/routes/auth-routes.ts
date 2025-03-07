import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // If the user exists and the password is correct, return a JWT token
const user = await User.findOne({ where: { username: req.body.username } });
if (!user) {
  return res.status(400).json({ message: 'Invalid username or password' });
  }
const passwordMatch = await bcrypt.compare(req.body.password, user.password);
if (!passwordMatch) {
  return res.status(400).json({ message: 'Invalid username or password' });
}
if (!process.env.JWT_SECRET) {
  return res.status(500).json({ message: 'JWT_SECRET is not configured' });
}
const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return res.json({ token });

};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
