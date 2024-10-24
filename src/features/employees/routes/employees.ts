import { Router, Request, Response, NextFunction } from 'express';
import {
  getEmployeeByEecode,
  getPaginatedEmployeeDirectory,
  getEmployeeCustomFields,
  getEmployeeSensitiveData
} from '../services/employeeFetch';
import { AppError } from '@/middlewares/error/AppError';
import notFoundError from '@/middlewares/notFound';
import { UrlParameters } from '@/utils/pathParameters';
import asyncHandler from '@/services/asyncHandler';

const router = Router();

router.get(
  `/${UrlParameters.EmployeeDirectory}`,
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const page = req.query.page
        ? parseInt(req.query.page as string, 10)
        : 1;
      const limit = req.query.limit
        ? parseInt(req.query.limit as string, 10)
        : parseInt(process.env.DEFAULT_PAGINATION_LIMIT || '10', 10);
      const employeeDirectory = await getPaginatedEmployeeDirectory(
        page,
        limit
      );
      if (!employeeDirectory) {
        return next(
          new AppError('Employee directory not found', 404)
        );
      }
      res.status(200).json(employeeDirectory);
    }
  )
);

router.get(
  `/${UrlParameters.EmployeeDirectory}/:eecode`,
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode } = req.params;
      const employee = await getEmployeeByEecode(eecode);
      if (!employee) {
        return next(notFoundError('Employee', eecode));
      }
      res.status(200).json(employee);
    }
  )
);

router.get(
  `/${UrlParameters.Employee}/:eecode`,
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode } = req.params;
      const employee = await getEmployeeByEecode(eecode);
      if (!employee) {
        return next(notFoundError('Employee', eecode));
      }
      res.status(200).json(employee);
    }
  )
);

router.get(
  `/${UrlParameters.Employee}/:eecode/sensitive`,
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode } = req.params;
      const sensitiveData = await getEmployeeSensitiveData(eecode);
      if (!sensitiveData) {
        return next(notFoundError('Sensitive data', eecode));
      }
      res.status(200).json(sensitiveData);
    }
  )
);

router.get(
  `/${UrlParameters.Employee}/:eecode/customfield`,
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { eecode } = req.params;
      const customFields = await getEmployeeCustomFields(eecode);
      if (!customFields) {
        return next(notFoundError('Custom fields', eecode));
      }
      res.status(200).json(customFields);
    }
  )
);

export default router;
