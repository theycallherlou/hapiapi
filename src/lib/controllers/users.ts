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

    if (!users) {
      throw new AppError('No user data found', 404);
    }
    res.json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data' });
    next(new AppError('Failed to fetch users data', 500));
  }
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${req.params.id}`
    );
    const user = response.data;

    if (!user) {
      throw new AppError('No user found', 404);
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data' });
    next(new AppError('Failed to fetch user data', 500));
  }
}
