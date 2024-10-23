import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';
import isAxiosError from './axiosError';

/**
 * A centralized error handler for Express.js. This function will catch and handle
 * the following types of errors:
 *
 * - AxiosError: errors that occur when making requests to external services
 * - AppError: operational errors that we can recover from
 * - Error: non-operational errors that we cannot recover from
 *
 * If the error is not an instance of one of the above types, it will fall back
 * to a generic 500 error.
 *
 * @param err - The error to handle
 * @param req - The Express.js request object
 * @param res - The Express.js response object
 * @param next - The Express.js next function
 */
export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // TODO: "delete debug logs throughout"
  console.error('Error:', err);

  if (isAxiosError(err)) {
    const axiosError = err as AxiosError;
    const statusCode = axiosError.response?.status || 500;
    const message =
      (axiosError.response?.data as { message?: string })?.message ||
      axiosError.message ||
      'An error occurred that fell through to the error handler.';
    return res.status(statusCode).json({
      status: 'error',
      message
    });
  }
  if (err instanceof AppError) {
    return res.status(err.statusCode || 500).json({
      status: 'error',
      message: err.isOperational
        ? err.message
        : 'Internal Server Error'
    });
  }

  // Handle other types of errors (non-operational errors)
  if (err instanceof Error) {
    return res.status(500).json({
      status: 'error',
      message: err.message || 'Internal Server Error'
    });
  }

  // If the error doesn't match any known type, fall back to a generic 500 error
  return res.status(500).json({
    status: 'error',
    message: 'An unknown error occurred'
  });
}
