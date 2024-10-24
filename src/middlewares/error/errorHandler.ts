import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';
import isAxiosError from './AxiosError';
import logger from '@/services/logger';

/**
 * Centralized error handler for Express.
 *
 * Logs the error to the console in development,
 * and logs the error to the logger in production.
 *
 * @param {unknown} err The error object
 * @param {Request} req The request object
 * @param {Response} res The response object
 * @param {NextFunction} next The next function
 */
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isProduction = process.env.NODE_ENV === 'production';

  logger.error(`Error occurred on ${req.method} ${req.url}`, {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    body: req.body,
    error: err instanceof Error ? err.message : err
  });

  if (err instanceof Error && err.stack) {
    logger.error(err.stack);
  }

  if (isAxiosError(err)) {
    const axiosError = err as AxiosError;
    const statusCode = axiosError.response?.status || 500;
    const message = isProduction
      ? 'Service unavailable'
      : axiosError.response?.data || 'External service error';

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
        : isProduction
          ? 'Internal Server Error'
          : err.message
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      status: 'error',
      message: isProduction ? 'Internal Server Error' : err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'An unknown error occurred'
  });
}
