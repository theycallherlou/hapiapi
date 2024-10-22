import { Request, Response } from 'express';
import axios from 'axios';
import { AppError } from '../middlewares/error';
import { NextFunction } from 'connect';

export async function getAllEmployees(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const employees = response.data;

    if (!employees) {
      throw new AppError('No employee data found', 404);
    }
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res
      .status(500)
      .json({ message: 'Failed to fetch employee data' });
    next(new AppError('Failed to fetch employees data', 500));
  }
}

export async function getEmployeeById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${req.params.id}`
    );
    const employee = response.data;

    if (!employee) {
      throw new AppError('No employee found', 404);
    }
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res
      .status(500)
      .json({ message: 'Failed to fetch employee data' });
    next(new AppError('Failed to fetch employee data', 500));
  }
}
