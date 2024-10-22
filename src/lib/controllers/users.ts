import { Request, Response } from 'express';
import axios from 'axios';
import { AppError } from '../middlewares/error';
import { NextFunction } from 'connect';

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return next(new AppError('Failed to fetch users data', 500));
  }
}
