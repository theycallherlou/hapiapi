import { Router, Request, Response, NextFunction } from 'express';
import {
  getEmployeeNewHireById,
  getAllEmployeeNewHires
} from '../services/employeeNewHiresFetch';
import { AppError } from '@/middlewares/error/AppError';
import asyncHandler from '@/services/asyncHandler';
import logger from '@/services/logger';

const router = Router();

router.get(
  '/employeeNewHire/:new-hire-id',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { newHireId } = req.params;

      logger.info(`Fetching new hire data for employee ID ${newHireId}`);

      const newHire = await getEmployeeNewHireById(newHireId);
      if (!newHire) {
        return next(
          new AppError(
            `New hire data not found for employee ID ${newHireId}`,
            404
          )
        );
      }

      res.status(200).json(newHire);
    }
  )
);

router.get(
  '/employeeNewHire',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit =
        parseInt(req.query.limit as string, 10) ||
        parseInt(process.env.DEFAULT_PAGINATION_LIMIT || '10', 10);

      logger.info(
        `Fetching all new hire data with pagination (page: ${page}, limit: ${limit})`
      );

      const allNewHires = await getAllEmployeeNewHires(page, limit);
      if (!allNewHires) {
        return next(new AppError('No new hire data found', 404));
      }

      res.status(200).json(allNewHires);
    }
  )
);

export default router;
