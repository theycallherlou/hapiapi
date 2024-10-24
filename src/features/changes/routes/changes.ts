import { Router, Request, Response, NextFunction } from 'express';
import {
  getEmployeeChangeInRange,
  getEmployeeSensitiveChangeInRange
} from '../services/changesFetch';
import { AppError } from '@/middlewares/error/AppError';
import logger from '@/services/logger';
import asyncHandler from '@/services/asyncHandler';

const router = Router();

router.get(
  '/employee/:eecode/change/:changeId',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode, changeId } = req.params;
      const { startDate, endDate } = req.query;

      logger.info(
        `Fetching change data for employee ${eecode} with change ID ${changeId}`
      );

      if (!startDate || !endDate) {
        return next(
          new AppError(
            'startDate and endDate are required query parameters',
            400
          )
        );
      }

      try {
        const change = await getEmployeeChangeInRange(
          eecode,
          changeId,
          startDate as string,
          endDate as string
        );

        if (!change) {
          return next(
            new AppError(
              `Change data not found for EE code ${eecode} and change ID ${changeId}`,
              404
            )
          );
        }

        res.status(200).json(change);
      } catch (error) {
        next(error);
      }
    }
  )
);

router.get(
  '/employee/:eecode/sensitivechange/:changeId',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode, changeId } = req.params;
      const { startDate, endDate } = req.query;

      logger.info(
        `Fetching sensitive change data for employee ${eecode} with change ID ${changeId}`
      );

      if (!startDate || !endDate) {
        return next(
          new AppError(
            'startDate and endDate are required query parameters',
            400
          )
        );
      }

      try {
        const sensitiveChange =
          await getEmployeeSensitiveChangeInRange(
            eecode,
            changeId,
            startDate as string,
            endDate as string
          );

        if (!sensitiveChange) {
          return next(
            new AppError(
              `Sensitive change data not found for EE code ${eecode} and change ID ${changeId}`,
              404
            )
          );
        }

        res.status(200).json(sensitiveChange);
      } catch (error) {
        next(error);
      }
    }
  )
);

export default router;
