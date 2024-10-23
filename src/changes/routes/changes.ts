import { Router, Request, Response, NextFunction } from 'express';
import {
  getEmployeeChangeInRange,
  getEmployeeSensitiveChangeInRange
} from '../services/changesFetch';
import { AppError } from '@/global/middlewares/error/AppError';

const router = Router();

router.get(
  '/employee/:eecode/change/:changeId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { eecode, changeId } = req.params;

      const change = await getEmployeeChangeInRange(eecode, changeId);
      if (!change) {
        return next(
          new AppError(
            `Change data for EE code ${eecode} and change ID ${changeId} not found`,
            404
          )
        );
      }

      res.status(200).json(change);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/employee/:eecode/sensitivechange/:changeId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { eecode, changeId } = req.params;

      const sensitiveChange = await getEmployeeSensitiveChangeInRange(
        eecode,
        changeId
      );
      if (!sensitiveChange) {
        return next(
          new AppError(
            `Sensitive change data for EE code ${eecode} and change ID ${changeId} not found`,
            404
          )
        );
      }

      res.status(200).json(sensitiveChange);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
