import { Router, Request, Response, NextFunction } from 'express';
import {
  getNewHireById,
  getNewHireCustomFields
} from '../services/newhirefetch';
import { AppError } from '@/middlewares/error/AppError';
import asyncHandler from '@/services/asyncHandler';
import logger from '@/services/logger';
import notFoundError from '@/middlewares/notFound';

const router = Router();

router.get(
  '/newhire/:new-hire-id',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { newHireId } = req.params;

      logger.info(
        `Fetching new hire data for employee ID ${newHireId}`
      );

      const newHire = await getNewHireById(newHireId);
      if (!newHire) {
        return next(
          new AppError(`New hire with ID ${newHireId} not found`, 404)
        );
      }

      res.status(200).json(newHire);
    }
  )
);

router.get(
  '/newhire/:new-hire-id/customfield',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { newHireId } = req.params;
      const customField = await getNewHireCustomFields(newHireId);
      if (!customField) {
        return next(notFoundError('Custom fields', newHireId));
      }
      res.status(200).json(customField);
    }
  )
);

export default router;
